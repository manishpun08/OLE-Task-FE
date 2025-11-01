type ShareOptions = {
  title?: string;
  text?: string;
  url?: string;
  fallback?: () => void;
};

export const handleShareLink = async ({
  title = "Check this out!",
  text = "",
  url = window.location.href,
  fallback,
}: ShareOptions): Promise<void> => {
  try {
    if (navigator.share) {
      await navigator.share({ title, text, url });
    } else {
      // Fallback logic
      await navigator.clipboard.writeText(url);
      if (fallback) fallback();
    }
  } catch (err) {
    console.error("Error sharing:", err);
    if (fallback) fallback();
  }
};
