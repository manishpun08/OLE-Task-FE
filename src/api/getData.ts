import { BASE_API_URL } from "./endpoints";

export const getData = async <T = unknown>(
  url: string,
  params?: Record<string, unknown>,
  options?: {
    timeout?: number;
    tags?: string[];
  },
): Promise<T> => {
  const controller = new AbortController();
  const timeout = options?.timeout ?? 30000;
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    let queryString = "";
    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => {
            searchParams.append(key, String(v));
          });
        } else if (value !== undefined && value !== null) {
          searchParams.append(key, String(value));
        }
      });
      queryString = `?${searchParams.toString()}`;
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    const response = await fetch(`${BASE_API_URL}${url}${queryString}`, {
      method: "GET",
      headers,
      signal: controller.signal,
      next: {
        tags: options?.tags ?? [],
        revalidate: 10,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error: unknown) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error(`Request to ${url} timed out after ${timeout}ms`);
    } else {
      console.error(`Request failed to ${url}:`, error);
    }
    throw error;
  }
};
