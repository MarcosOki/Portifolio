import axios from "axios"
import { ComponentProps } from "react"
import { FaRegTrashCan } from "react-icons/fa6"
import { twMerge } from "tailwind-merge"
import { toast } from "react-toastify"
import { Globals } from "../../globals"
interface CardAdmProps extends ComponentProps<'div'> {
   className?:string,
   title:string,
   text:string,
   idPost:number,
   createdAt:string,
   att:boolean,
   setAtt:any
}

export function CardAdm({className,title,text,createdAt,idPost,att,setAtt, ...props}: CardAdmProps) {
  const url = Globals.url

  const deletePost = async (idPost:number)=>{
    await axios.delete(`${url}/deletepost`,{data:{id:idPost}}).then(()=>{toast.success("Post deletado com sucesso")}).catch(()=>{toast.error("Erro ao deletar post")})
    setAtt(att ? false : true)
  }

  return (
    <div className={twMerge("w-[100%]  p-4 bg-neutral-900 hover:bg-neutral-800 hover:transition-[2s] transition-[2s] rounded-lg flex flex-col  gap-3",className)} {...props}>
      <div className="flex flex-row justify-between">
        <span className="text-dark-text-secondary border-dark-border border-l-2 pl-4">{createdAt.slice(0,10)}</span>
        <button onClick={()=>{deletePost(idPost)}}><FaRegTrashCan className="text-red-500 size-5"/></button>
      </div>
      <p className="text-xl text-dark-text-primary font-semibold" style={{overflowWrap:"break-word"}} >{title}</p>
      <span className="text-dark-text-secondary">id: {idPost}</span>
      <span className="text-sm text-dark-text-secondary line-clamp-1 w-[60%]">{text}</span>
      <a href="#" className="text-green-500 font-bold">Read article</a>
    </div>
  )
}