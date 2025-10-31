"use client";
import { FiBriefcase } from "react-icons/fi";
import { GrUserWorker } from "react-icons/gr";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useModal } from "@/core/context/ModalContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { openModal } = useModal();

  const handleAgentModal = () => {
    onClose();
    setTimeout(() => openModal("register-agent"), 100);
  };

  const handleCandidateModal = () => {
    onClose();
    setTimeout(() => openModal("register-candidate"), 100);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="w-full !max-w-[44rem] overflow-hidden rounded-3xl bg-white shadow-[0px_0px_12px_0px_#00000026]">
        <div className="flex justify-center gap-4 py-10">
          <button
            type="button"
            onClick={handleAgentModal}
            className="hover:bg-secondary-50 transform cursor-pointer rounded-3xl bg-white p-8 shadow-[0px_2px_12px_2px_#0000000F] transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0px_4px_16px_4px_#0000001A]"
          >
            <div className="mb-6 flex items-center justify-between">
              <FiBriefcase className="size-6" />
              <Checkbox className="data-[state=checked]:text-primary-500 data-[state=checked]:border-primary-500 size-5 cursor-pointer data-[state=checked]:bg-transparent" />
            </div>

            <div className="text-left">
              <p className="typography-paragraph-extra-large text-grey-500 pb-2 font-medium">
                I’m a <span className="text-secondary-500">Agent</span>
              </p>
              <p className="text-grey-400 typography-paragraph-medium font-normal">
                Find expert to get your work done
              </p>
            </div>
          </button>
          <button
            type="button"
            onClick={handleCandidateModal}
            className="hover:bg-primary-50 transform cursor-pointer rounded-3xl bg-white p-8 shadow-[0px_2px_12px_2px_#0000000F] transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0px_4px_16px_4px_#0000001A]"
          >
            <div className="mb-6 flex items-center justify-between">
              <GrUserWorker className="size-6" />
              <Checkbox className="data-[state=checked]:text-primary-500 data-[state=checked]:border-primary-500 size-5 cursor-pointer data-[state=checked]:bg-transparent" />
            </div>

            <div className="text-left">
              <p className="typography-paragraph-extra-large text-grey-500 pb-2 font-medium">
                I’m a <span className="text-primary-500"> Candidate </span>
              </p>
              <p className="text-grey-400 typography-paragraph-medium font-normal">
                Find jobs abroad that match your skills.
              </p>
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
