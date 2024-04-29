import { Contacts } from "../Contacts";
import { Container } from "../Container";
import { Header } from "../Header";
import { Section } from "../Section";

interface SectionMainProps{
  toggleThemeFunction: ()=>void,
  theme:boolean
}
export function SectionMain({toggleThemeFunction,theme}:SectionMainProps){


  


  return(

    <Container className="flex flex-col">
        <Header toggleTheme={toggleThemeFunction} theme={theme} />
        <Section className="flex flex-col gap-5 justify-center sm:gap-8 h-[90vh] sm:justify-center">
          <div className="sm:w-7/12 ">
            <h1 className="text-dark-text-primary sm:font-bold sm:text-5xl text-3xl">
              Engenheiro de Software, estudante apaixonado por tecnologia!
            </h1>
          </div>
          <div className="sm:w-8/12">
            <p className="text-dark-text-secondary leading-8">
              Ei, eu sou o Marcos, tenho 18 anos e estou imerso no universo do
              ReactJS. Além de estudar essa tecnologia, eu também estudo na
              Universidade Estadual Do Pará(UEPA), focado em engenharia de
              software. Sou apaixonado por aprender e estou sempre em busca de
              novos desafios para me desenvolver, tanto pessoal quanto
              profissionalmente.
            </p>
          </div>
          <Contacts />
        </Section>
      </Container>
  )
}