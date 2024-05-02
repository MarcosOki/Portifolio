import { api } from "./api";

interface UserControllerRegister{
  user:string|undefined,
  email:string | undefined,
  password:string | undefined,
  confirmPassword:string | undefined
}

export class UserController{
  async register(data:UserControllerRegister){
    if(data.password != data.confirmPassword){return console.log("As senhas não batem")}
    const userRegister = { username: data.user , email: data.email , password : data.password}
    const response = await api.post("/create", userRegister)
    console.log(response.data)
  }
}
