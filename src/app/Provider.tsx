"use client";
import { ProgressProvider } from "@bprogress/next/app";
import type React from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { ModalProvider } from "@/core/context/ModalContext";
import { store } from "../store/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider
      height="4px"
      color="#007cf0"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <Provider store={store}>
        <ModalProvider>
          <Toaster
            position="bottom-right"
            richColors
            toastOptions={{
              duration: 4000,
              classNames: {
                toast: "toast",
                title: "title",
                description: "description",
                actionButton: "action-button",
                cancelButton: "cancel-button",
                closeButton: "close-button",
              },
            }}
          />

          {children}
        </ModalProvider>
      </Provider>
    </ProgressProvider>
  );
};

export default Providers;
