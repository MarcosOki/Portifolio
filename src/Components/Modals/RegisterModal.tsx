import { Contacts } from "../Contacts"

interface RegisterModalProps{
  setUserRegister:(e:any)=>any,
  setEmailRegister:(e:any)=>any,
  setPasswordRegister:(e:any)=>any,
  setConfirmPasswordRegister:(e:any)=>any,
  closeModalSignUp:()=>any,
  openModalLogin:()=>any
  register:(e:any)=>any,
}

export function RegisterModal({setUserRegister,setConfirmPasswordRegister,closeModalSignUp,openModalLogin,register,setEmailRegister,setPasswordRegister}: RegisterModalProps) {
  return (
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
  )
}