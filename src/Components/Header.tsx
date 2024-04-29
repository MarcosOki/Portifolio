import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NavBar } from './NavBar'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'
import { Modal} from './Modal'
interface HeaderProps extends ComponentProps<'header'> {
  className?:string,
  theme:boolean,
  toggleTheme: ()=>void
}

const pc = "w-full h-[10vh] flex justify-between items-center py-5"

export function Header({className,theme, toggleTheme,...props}: HeaderProps) {
  return (
    <header className={twMerge(`${pc}`,className)} {...props}>
        <button>
          <Modal btnName='Login' btnNameClass='hover:text-dark-hover  border-[2px] p-2 rounded-3xl border-dark-border'>
            <input type="text" placeholder='Usuário'/>
            <input type="password" placeholder='senha'/>
          </Modal>
        </button>
        <NavBar className='hidden sm:block'/>
        <button onClick={toggleTheme}>{theme ? <FaRegMoon size={"30px"}  className='text-dark-text-secondary'/> :<FaRegSun size={"30px"} className='text-dark-text-secondary'/>}</button>
    </header>
  )
}