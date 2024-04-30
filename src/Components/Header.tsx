import { ComponentProps, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { NavBar } from './NavBar'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'
import { Modal} from './Modal'
import { Contacts } from './Contacts'

interface HeaderProps extends ComponentProps<'header'> {
  className?:string,
  theme:boolean,
  toggleTheme: ()=>void
}

const pc = "w-full h-[10vh] flex justify-between items-center py-5"

export function Header({className,theme, toggleTheme,...props}: HeaderProps) {

  const [user,setUSer] = useState()
  const [password, setPassword] = useState()

  return (
    <header className={twMerge(`${pc}`,className)} {...props}>
        <button>
          <Modal 
          btnName='Login' 
          btnNameClass='hover:text-dark-hover border-[2px] p-2 rounded-3xl border-dark-border'
          modelClassStyle='bg-dark-primary text-dark-text-primary'
          >
            <div className='flex flex-col gap-6 py-4 items-center'>
              <span className='text-3xl'>LOGIN</span>
              <input type="email" className='p-2 bg-dark-primary border border-dark-border w-[20vw] rounded-lg ' placeholder='Usuário'/>
              <input type="password" className='p-2 bg-dark-primary border border-dark-border w-[20vw] rounded-lg 'placeholder='Senha' />
              <span className='text-dark-text-secondary cursor-pointer font-light'>Esqueceu a senha?</span>
              <button className='border p-2 w-[40%] rounded-lg'>LOGIN</button>
              <Contacts size='size-5' className='gap-3'/>
              <span className='text-dark-text-secondary'>Não tem uma conta? <a href='#' className='text-dark-text-secondary font-semibold'>Sign-up</a></span>
            </div>
          </Modal>
        </button>
        <NavBar className='hidden sm:block'/>
        <button onClick={toggleTheme} >{theme ? <FaRegMoon size={"30px"}  className='text-dark-text-secondary'/> :<FaRegSun size={"30px"} className='text-dark-text-secondary'/>}</button>
    </header>
  )
}