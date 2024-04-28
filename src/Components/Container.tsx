import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
interface ContainerProps extends ComponentProps<'section'> {
  className?:string
}
const mob = "w-screen px-8 "
const pc = " sm:w-11/12 h-[100%] sm:px-12"
export function Container({className, ...props}:ContainerProps) {
  return (
    <section className={twMerge(`sm:bg-dark-primary ${mob} ${pc}`,className)}>
      {props.children}
    </section>
  )
}