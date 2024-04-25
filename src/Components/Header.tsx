import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NavBar } from './NavBar'
import { FaRegMoon, FaUser, FaRegSun } from 'react-icons/fa'
interface HeaderProps extends ComponentProps<'header'> {
  className?:string,
  theme:boolean,
  toggleTheme: ()=>void
}

export function Header({className,theme, toggleTheme,...props}: HeaderProps) {
  return (
    <header className={twMerge("w-full h-[13vh] flex justify-between items-center py-5 ",className)} {...props}>
        <div className='w-4/12'><FaUser size={"30px"} className='text-dark-text-secondary'/></div>
        <div className='w-4/12 flex justify-center'><NavBar/></div>
        <button className='w-4/12 flex justify-end' onClick={toggleTheme}>{theme ? <FaRegMoon size={"30px"}  className='text-dark-text-secondary'/> :<FaRegSun size={"30px"} className='text-dark-text-secondary'/>}</button>
    </header>
  )
}