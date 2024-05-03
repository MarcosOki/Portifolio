import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import { NavBar } from "./NavBar";

import ReactModal from "react-modal";
import { Contacts } from "./Contacts";
import { UserController } from "../services/UserController";

interface HeaderProps extends ComponentProps<"header"> {
  className?: string;
}

const pc = "w-full h-[10vh] flex justify-between items-center py-5";

export function Header({
  className,

  ...props
}: HeaderProps) {

  const [user, setUSer] = useState<string| undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const login = (e:any) =>{
    e.preventDefault()
    userController.auth(user,password)
  }



  const [userRegister, setUserRegister] = useState<string| undefined>()
  const [emailRegister, setEmailRegister] = useState<string| undefined>()
  const [passwordRegister, setPasswordRegister] = useState<string| undefined>()
  const [confirmPassowrd, setConfirmPasswordRegister] = useState<string| undefined>()

  ReactModal.setAppElement("#root")

  const userController = new UserController()

  const register = (e:any) =>{
    e.preventDefault()
    userController.register({confirmPassword:confirmPassowrd,email:emailRegister,user:userRegister,password:passwordRegister})
  }
  
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
      <button onClick={openModalLogin} className="text-dark-text-primary border-2 border-dark-border rounded-3xl p-2">Login</button>
      <ReactModal
        isOpen={isOpenLogin}
        onRequestClose={closeModalLogin}
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50"
        portalClassName="modal"
        className="modal-content"
      >
        <div className="flex justify-center items-center h-full bg-dark-primary p-8 rounded-xl shadow-lg text-dark-text-primary">
          <div className="flex flex-col gap-6 py-4 items-center">
            <span className="text-3xl">LOGIN</span>
            <input
              type="text"
              className="p-2 bg-dark-primary border border-dark-border w-[20vw] rounded-lg "
              placeholder="Usuário"
              onChange={(e)=>{setUSer(e.target.value)}}
            />
            <input
              type="password"
              className="p-2 bg-dark-primary border border-dark-border w-[20vw] rounded-lg "
              placeholder="Senha"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
            <span className="text-dark-text-secondary cursor-pointer font-light">
              Esqueceu a senha?
            </span>
            <button className="border p-2 w-[40%] rounded-lg border-dark-border"  onClick={(e)=>{login(e)}}>
              LOGIN
            </button>
            <Contacts size="size-5" className="gap-3" />
            <div className="flex gap-2">
              <span className="text-dark-text-secondary">
                Não tem uma conta?
              </span>
              <button
                className="font-semibold hover:text-dark-hover"
                onClick={() => {
                  closeModalLogin();
                  openModalSignUp()
                }}
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
      <ReactModal
        isOpen={isOpenSignUp}
        onRequestClose={closeModalSignUp}
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50"
        portalClassName="modal"
        className="modal-content"
      >
        <div className="flex justify-center items-center h-full bg-dark-primary p-8 rounded-xl shadow-lg text-dark-text-primary">
          <form className="flex flex-col gap-6 py-4 items-center">
            <span className="text-3xl">Sign-Up</span>
            <input
              type="text"
              className="p-2 bg-dark-primary border border-dark-border w-[20vw] rounded-lg "
              placeholder="Usuário"
              onChange={(e)=>{setUserRegister(e.target.value)}}
            />
            <input
              type="email"
              className="p-2 bg-dark-primary border border-dark-border w-[20vw] rounded-lg "
              placeholder="E-mail"
              onChange={(e)=>{setEmailRegister(e.target.value)}}
            />
            <input
              type="password"
              className="p-2 bg-dark-primary border border-dark-border w-[20vw] rounded-lg "
              placeholder="Senha"
              onChange={e=>{setPasswordRegister(e.target.value)}}
            />
            <input
              type="password"
              className="p-2 bg-dark-primary border border-dark-border w-[20vw] rounded-lg "
              placeholder="Confirmar senha"
              onChange={e=>{setConfirmPasswordRegister(e.target.value)}}
            />
            <input type="submit" className="border p-2 w-[40%] rounded-lg border-dark-border" onClick={(e)=>{register(e)}} value={"Sign-Up"}/>
            <Contacts size="size-5" className="gap-3" />
            <div className="flex gap-2">
              <span className="text-dark-text-secondary">
                Já tem uma conta?
              </span>
              <button
                className="font-semibold hover:text-dark-hover"
                onClick={() => {
                  closeModalSignUp()
                  openModalLogin()
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </ReactModal>
      <NavBar className="hidden sm:block" />
    </header>
  );
}
