import { Contacts } from "../Contacts"

interface LoginModalProps{
  setEmail:any,
  setPassword:(e:any)=>void,
  login:(e:any)=>void,
  closeModalLogin:()=>void,
  openModalSignUp:()=>void
}
export function LoginModal({setEmail,setPassword,login,closeModalLogin,openModalSignUp}: LoginModalProps) {
  return (
    <div className="flex justify-center items-center h-full bg-dark-primary p-8 rounded-xl shadow-lg text-dark-text-primary">
          <div className="flex flex-col gap-6 py-4 items-center">
            <span className="text-3xl">LOGIN</span>
            <input
              type="text"
              className="p-2 bg-dark-primary border border-dark-border w-[20vw] rounded-lg "
              placeholder="Usuário"
              onChange={(e)=>{setEmail(e.target.value)}}
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
  )
}