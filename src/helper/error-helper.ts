type ErrorResponse = {
  data: {
    errors: FieldError[];
    message: string;
  };
};

export type ApiResponse = {
  error: ErrorResponse;
  data?: {
    status: string;
    message: string;
  };
};

type FieldError = {
  path: string;
  msg: string;
};

type SetErrorCallback = (errors: Record<string, string>) => void;

const handleErrors = (
  response: { error?: unknown; data?: unknown },
  setErrorCallback: SetErrorCallback,
): void => {
  if (response.error && typeof response.error === "object") {
    const error = response.error as Record<string, unknown>;
    let errorData = null;

    // Handle RTK Query error structure (response.error.data)
    if (error.data && typeof error.data === "object") {
      errorData = error.data as Record<string, unknown>;
    }

    if (errorData) {
      if (Array.isArray(errorData.errors)) {
        const errorObject: Record<string, string> = {};
        errorData.errors.forEach((error: unknown) => {
          if (typeof error === "object" && error !== null) {
            const fieldError = error as FieldError;
            if (fieldError.path && fieldError.msg) {
              errorObject[fieldError.path] = fieldError.msg;
            }
          }
        });
        setErrorCallback(errorObject);
      } else if (typeof errorData.message === "string") {
        setErrorCallback({ general: errorData.message });
      }
    }
  }
};

export default handleErrors;
