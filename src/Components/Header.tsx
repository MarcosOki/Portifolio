import { ComponentProps, useContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import { NavBar } from "./NavBar";
import ReactModal from "react-modal";
import { api } from "../services/api";
import { LoginModal } from "./Modals/LoginModal";
import { RegisterModal } from "./Modals/RegisterModal";
import { toast } from "react-toastify";
import { AuthContext } from "./context/auth";
import { FaUser } from "react-icons/fa";

interface HeaderProps extends ComponentProps<"header"> {
  className?: string;
}

const pc = "w-full h-[10vh] flex justify-between items-center py-5";

export function Header({
  className,

  ...props
}: HeaderProps) {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const login = async (e: any) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    await SignIn(data)
    console.log(signed)
  };

  const {signed} = useContext(AuthContext)
  const {SignIn} = useContext(AuthContext)
  
  const [userRegister, setUserRegister] = useState<string | undefined>();
  const [emailRegister, setEmailRegister] = useState<string | undefined>();
  const [passwordRegister, setPasswordRegister] = useState<
    string | undefined
  >();
  const [confirmPassowrd, setConfirmPasswordRegister] = useState<
    string | undefined
  >();

  ReactModal.setAppElement("#root");

  const register = async (e: any) => {
    e.preventDefault();
    if (password === confirmPassowrd) {
      try{
      await api.post("/create", {
        username: userRegister,
        email: emailRegister,
        password: passwordRegister,
      })}catch{
        return toast.error("error ao se cadastrar")
      }
    }else{
      return toast.error("as senhas não batem")
    }
  };

  const openModalLogin = () => {
    setIsOpenLogin(true);
    document.documentElement.classList.add("overflow-hidden");
  };
  const closeModalLogin = () => {
    setIsOpenLogin(false);
    document.documentElement.classList.remove("overflow-hidden");
  };
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);

  const openModalSignUp = () => {
    setIsOpenSignUp(true);
    document.documentElement.classList.add("overflow-hidden");
  };
  const closeModalSignUp = () => {
    setIsOpenSignUp(false);
    document.documentElement.classList.remove("overflow-hidden");
  };

  return (
    <header className={twMerge(`${pc}`, className)} {...props}>
      {signed == false ? <button
        onClick={openModalLogin}
        className="text-dark-text-primary border-2 border-dark-border rounded-3xl p-2"
      >
        Login
      </button>: <FaUser className="text-dark-text-primary size-7"/>}
      <ReactModal
        isOpen={isOpenLogin}
        onRequestClose={closeModalLogin}
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50"
        portalClassName="modal"
        className="modal-content"
      >
        <LoginModal
          closeModalLogin={closeModalLogin}
          login={login}
          openModalSignUp={openModalSignUp}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      </ReactModal>
      <ReactModal
        isOpen={isOpenSignUp}
        onRequestClose={closeModalSignUp}
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50"
        portalClassName="modal"
        className="modal-content"
      >
        <RegisterModal
          closeModalSignUp={closeModalSignUp}
          openModalLogin={openModalLogin}
          register={register}
          setConfirmPasswordRegister={setConfirmPasswordRegister}
          setEmailRegister={setEmailRegister}
          setPasswordRegister={setPasswordRegister}
          setUserRegister={setUserRegister}
        />
      </ReactModal>
      <NavBar className="hidden sm:block" />
    </header>
  );
}
