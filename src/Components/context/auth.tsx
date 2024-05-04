import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
interface AuthProviderProps{
  children:any
}
interface AuthContextType{
  signed?:any,
  user?:any
  SignIn?:any
}
const initialAuthContextValue: AuthContextType = {}


export const AuthContext = createContext<AuthContextType>(initialAuthContextValue)

export const  AuthProvider = ({children}:AuthProviderProps)=>{
  const [user,setUser] = useState<any>() 
  const [signed,setSigned] = useState<boolean>(false)
  useEffect(()=>{
    loadingStoreData()
  },[])

  const loadingStoreData = async () =>{
    const storageUser = localStorage.getItem("@Auth:user")
    const storageToken = localStorage.getItem("@Auth:token")
    if(storageToken && storageUser){
      setUser(storageUser)
      setSigned(true)
    }
  }
  interface SignInprops{
    email:string,
    password:string
  }
  const SignIn = async ({email,password}:SignInprops) =>{
    const response = await api.post("/auth",{email,password})
    if(response.data.error){
      alert(response.data.error)
    }else{
      setUser(response.data.user)
      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`
      localStorage.setItem("@Auth:token",response.data.token)
      localStorage.setItem("@Auth:user",JSON.stringify(response.data.user))
      setSigned(true)
    }
  }

  return (
    <AuthContext.Provider value={{user,signed,SignIn}}>
      {children}
    </AuthContext.Provider>
  )
}