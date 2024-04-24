import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
interface BodyProps extends ComponentProps<'div'> {
  className?:string
}

export function Body({className,...props}: BodyProps) {
  return (
    <div className={twMerge("w-full bg-black ",className)}>{props.children}</div>
  )
}