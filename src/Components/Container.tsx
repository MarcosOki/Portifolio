import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
interface ContainerProps extends ComponentProps<'section'> {
  className?:string
}
const pc = " w-11/12 px-12"
export function Container({className, ...props}:ContainerProps) {
  return (
    <section className={twMerge(`sm:bg-dark-primary  ${pc}`,className)}>
      {props.children}
    </section>
  )
}