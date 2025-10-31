import { createContext, type ReactNode, useContext, useState } from "react";
import LoginModal from "@/app/(auth)/(components)/LoginModal";
import OtpRegisterVerifyModal from "@/app/(auth)/(components)/OtpRegisterVerifyModal";
import RegisterAgentModal from "@/app/(auth)/(components)/RegisterAgentModal";
import RegisterCandidateModal from "@/app/(auth)/(components)/RegisterCandidateModal";
import RegisterModal from "@/app/(auth)/(components)/RegisterModal";
import RegisterPasswordModal from "@/app/(auth)/(components)/RegisterPasswordModal";

export type ModalType =
  | "login"
  | "register"
  | "register-agent"
  | "otp-register-verify"
  | "register-password"
  | "register-candidate"
  | null;

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
      <RegisterModal
        isOpen={modalType === "register"}
        onClose={() => setModalType(null)}
      />

      <RegisterAgentModal
        isOpen={modalType === "register-agent"}
        onClose={() => setModalType(null)}
        onSuccess={() => setModalType(null)}
      />

      <OtpRegisterVerifyModal
        isOpen={modalType === "otp-register-verify"}
        onClose={() => setModalType(null)}
        onSuccess={() => setModalType(null)}
      />

      <RegisterPasswordModal
        isOpen={modalType === "register-password"}
        onClose={() => setModalType(null)}
        onSuccess={() => setModalType(null)}
      />

      <RegisterCandidateModal
        isOpen={modalType === "register-candidate"}
        onClose={() => setModalType(null)}
        onSuccess={() => setModalType(null)}
      />

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
