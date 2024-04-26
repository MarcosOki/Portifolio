import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NavBar } from './NavBar'
import { FaRegMoon, FaUser, FaRegSun } from 'react-icons/fa'
interface HeaderProps extends ComponentProps<'header'> {
  className?:string,
  theme:boolean,
  toggleTheme: ()=>void
}

const mob =  "w-full h-10vh flex items-center justify-between"
const pc = "sm:w-full sm:h-[10vh] sm:flex sm:justify-between sm:items-center py-5"

export function Header({className,theme, toggleTheme,...props}: HeaderProps) {
  return (
    <header className={twMerge(`${pc} ${mob}`,className)} {...props}>
        <div className='sm:w-4/12'><FaUser size={"30px"} className='text-dark-text-secondary'/></div>
        <div className='sm:w-4/12 flex justify-center'><NavBar className='hidden sm:block'/></div>
        <button className='sm:w-4/12 flex justify-end' onClick={toggleTheme}>{theme ? <FaRegMoon size={"30px"}  className='text-dark-text-secondary'/> :<FaRegSun size={"30px"} className='text-dark-text-secondary'/>}</button>
    </header>
  )
}