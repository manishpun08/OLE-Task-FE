"use client";

import { signIn } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";

interface GoogleCredentialResponse {
  credential: string;
  select_by?: string;
  clientId?: string;
}

interface GoogleAccountsId {
  initialize: (options: {
    client_id: string;
    callback: (res: GoogleCredentialResponse) => void;
  }) => void;
  renderButton: (
    element: HTMLElement | null,
    options: {
      theme: string;
      size: string;
      text: string;
      shape: string;
      width?: string;
    },
  ) => void;
}

interface GoogleWindow extends Window {
  google?: {
    accounts: {
      id: GoogleAccountsId;
    };
  };
}

const GoogleLoginButton = ({
  isOpen,
  onSuccess,
}: {
  isOpen: boolean;
  onSuccess?: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [googleReady, setGoogleReady] = useState(false);
  const [googleInitialized, setGoogleInitialized] = useState(false);

  const handleGoogleLogin = useCallback(
    async (res: GoogleCredentialResponse) => {
      setIsLoading(true);

      try {
        const result = await signIn("google-jwt", {
          redirect: false,
          token: res.credential,
        });

        if (result?.ok) {
          onSuccess?.();
        } else {
          console.error("Google login failed", result?.error);
        }
      } catch (error) {
        console.error("Error during Google sign-in", error);
      } finally {
        setIsLoading(false);
      }
    },
    [onSuccess],
  );

  useEffect(() => {
    const win = window as GoogleWindow;
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

    if (!googleInitialized && isOpen && win.google) {
      win.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleLogin,
      });
      setGoogleInitialized(true);
    }
  }, [isOpen, googleInitialized, handleGoogleLogin]);

  useEffect(() => {
    const win = window as GoogleWindow;

    if (googleInitialized && isOpen && win.google && !googleReady) {
      setTimeout(() => {
        win.google?.accounts.id.renderButton(
          document.getElementById("googleSignInButton"),
          {
            theme: "outline",
            size: "large",
            text: "Sign in with Google",
            shape: "rectangular",
            width: "100%",
          },
        );
        setGoogleReady(true);

        // Ensure full width
        const googleBtn = document.querySelector("#googleSignInButton > div");
        if (googleBtn) {
          (googleBtn as HTMLElement).style.width = "100%";
          const iframe = googleBtn.querySelector("iframe");
          if (iframe) {
            iframe.style.width = "100%";
          }
        }
      }, 150);
    }
  }, [googleInitialized, isOpen, googleReady]);

  useEffect(() => {
    const win = window as GoogleWindow;

    if (!win.google && isOpen) {
      const checkGoogleLoaded = setInterval(() => {
        if (win.google) {
          clearInterval(checkGoogleLoaded);
        }
      }, 100);

      setTimeout(() => clearInterval(checkGoogleLoaded), 10000);

      return () => clearInterval(checkGoogleLoaded);
    }
  }, [isOpen]);

  return (
    <div className="relative min-h-[2.5rem] w-full">
      <div
        id="googleSignInButton"
        className="flex w-full items-center justify-center"
        style={{ width: "100%" }}
      ></div>

      {!googleReady && !googleInitialized && (
        <div className="border-primary-500 text-primary-500 flex w-full items-center justify-center rounded-md border bg-white px-4 py-2 shadow-sm hover:bg-gray-50">
          Continue with Google
        </div>
      )}

      {isLoading && (
        <div className="absolute top-1/2 right-4 -translate-y-1/2 transform">
          <div className="h-5 w-5 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
        </div>
      )}
    </div>
  );
};

export default GoogleLoginButton;
