import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
interface NavBarProps extends ComponentProps<"nav"> {
  className?:string
}

export function NavBar({className,...props}: NavBarProps) {
  const listStyle = "hover:text-dark-hover hover:transition-[2s] transition-[2s]"
  return (
    <nav className={twMerge('',className)} {...props}>
      <ul className="flex gap-8 font-semibold text-dark-text-secondary border-[1px] border-dark-border rounded-full px-7 py-3">
        <li>
          <a href="#" className={listStyle}>About</a>
        </li>
        <li>
          <a href="#" className={listStyle}>Blog</a>
        </li>
        <li>
          <a href="#" className={listStyle}>Projects</a>
        </li>
        <li>
          <a href="#" className={listStyle}>Uses</a>
        </li>
      </ul>
    </nav>
  );
}
