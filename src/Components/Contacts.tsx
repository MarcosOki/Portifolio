import { ComponentProps } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

interface ContactsProps extends ComponentProps<'ul'> {
  className?: string
}

export function Contacts({className,...props}:ContactsProps) {
  const linkStyle = 'size-7 text-dark-text-secondary hover:text-dark-hover'
  return (
    
    <ul className={twMerge("flex gap-8",className)} {...props}>
      <li><a href='https://instagram.com/marcos_okitaa' target='_blank'><FaInstagram className={linkStyle}/></a></li>
      <li><a href='www.linkedin.com/in/marcos-okita-407021242' target='_blank'><FaLinkedin className={linkStyle}/></a></li>
      <li><a href="https://github.com/MarcosOki" target="_blank"><FaGithub className={linkStyle}/></a></li>
    </ul>
  )
}