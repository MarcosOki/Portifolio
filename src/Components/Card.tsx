import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface CardProps extends ComponentProps<'div'> {
   className?:string,
   title:string,
   text:string,
   createdAt:string
}

export function Card({className,title,text,createdAt, ...props}: CardProps) {
  return (
    <div className={twMerge("w-[40%]  p-4 bg-white rounded-lg flex flex-col text-white gap-3",className)} {...props}>
      <span className="text-gray-400 border-gray-400 border-l-2 pl-4 ">{createdAt.slice(0,10)}</span>
      <p className="text-xl text-black font-semibold" style={{overflowWrap:"break-word"}} >{title}</p>
      <span className="text-sm text-gray-500">{text}</span>
      <a href="#" className="text-green-500 font-bold">Read article</a>
    </div>
  )
}