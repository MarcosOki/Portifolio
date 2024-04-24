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
    <div className={twMerge("w-[100%]  p-4 bg-neutral-900 hover:bg-neutral-800 hover:transition-[2s] transition-[2s] rounded-lg flex flex-col  gap-3",className)} {...props}>
      <span className="text-dark-text-secondary border-dark-border border-l-2 pl-4 ">{createdAt.slice(0,10)}</span>
      <p className="text-xl text-dark-text-primary font-semibold" style={{overflowWrap:"break-word"}} >{title}</p>
      <span className="text-sm text-dark-text-secondary">{text}</span>
      <a href="#" className="text-green-500 font-bold">Read article</a>
    </div>
  )
}