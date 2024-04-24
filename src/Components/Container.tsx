import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
interface ContainerProps extends ComponentProps<'section'> {
  className?:string
}

export function Container({className, ...props}:ContainerProps) {
  return (
    <section className={twMerge('bg-dark-primary w-11/12 h-[100%] px-12',className)}>
      {props.children}
    </section>
  )
}