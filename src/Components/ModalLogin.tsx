import { useState } from "react"
import ReactModal from "react-modal"

ReactModal.setAppElement("#root")

export function ModalLogin() {
  const [isOpen,setIsOpen] = useState(false)

  const  openModal = () =>{
    setIsOpen(true)
    document.documentElement.classList.add("overflow-hidden")
  }
  const closeModal = ()=>{
    setIsOpen(false)
    document.documentElement.classList.remove("overflow-hidden")
  }

  return (
    <div>
      <button onClick={openModal} className="text-zinc-500 p-10">Abrir Modal</button>
      <ReactModal isOpen={isOpen} onRequestClose={closeModal} overlayClassName="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50" portalClassName="modal" className="modal-content">
      <div className="flex justify-center items-center h-full">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            {/* Your login form here */}
            <button onClick={closeModal} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  )
}