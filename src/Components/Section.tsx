import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
interface SectionProps extends ComponentProps<'section'> {
  className?:string
}

export function Section({className,...props}: SectionProps) {
  return (
    <section className={twMerge(`w-full sm:py-16 py-5 pl-0`,className)}>{props.children}</section>
  )
}