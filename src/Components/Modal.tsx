import { ComponentProps, useState } from "react";
import ReactModal from "react-modal";
import { twMerge } from "tailwind-merge";

ReactModal.setAppElement("#root");

interface ModalProps extends ComponentProps<"div"> {
  btnName: string,
  btnNameClass?:string,
  modelClassStyle?:string
}

export function Modal({ btnName,btnNameClass,modelClassStyle,...props }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.documentElement.classList.add("overflow-hidden");
  };
  const closeModal = () => {
    setIsOpen(false);
    document.documentElement.classList.remove("overflow-hidden");
  };

  return (
    <div>
      <button onClick={openModal} className={twMerge("text-zinc-500 ",btnNameClass)} >
        {btnName}
      </button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50"
        portalClassName="modal"
        className="modal-content"
      >
        <div className="flex justify-center items-center h-full">
          <div className={twMerge(" p-8 rounded-xl shadow-lg",modelClassStyle)}>{props.children}</div>
        </div>
      </ReactModal>
    </div>
  );
}
