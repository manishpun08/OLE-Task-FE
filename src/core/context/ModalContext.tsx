import { createContext, type ReactNode, useContext, useState } from "react";
import LoginModal from "@/app/(auth)/(components)/LoginModal";

export type ModalType = "login" | null;

interface ModalContextType {
  modalType: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (type: ModalType) => setModalType(type);
  const closeModal = () => setModalType(null);

  return (
    <ModalContext.Provider value={{ modalType, openModal, closeModal }}>
      <LoginModal
        isOpen={modalType === "login"}
        onClose={() => setModalType(null)}
        onSuccess={() => setModalType(null)}
      />

      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
