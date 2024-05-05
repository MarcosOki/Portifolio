import { Contacts } from "../Contacts";
import { Header } from "../Header";
import { Section } from "../Section";
import { AuthProvider } from "../context/auth";


export function SectionMain(){

  return(
    <AuthProvider>
    <div className="flex flex-col justify-between bg-dark-primary w-11/12 px-12">
        <Header />
        <Section className="flex flex-col justify-center gap-8 h-[90vh]">
          <div className="w-7/12 ">
            <h1 className="text-dark-text-primary font-bold text-5xl">
              Engenheiro de Software, estudante apaixonado por tecnologia!
            </h1>
          </div>
          <div className="w-8/12">
            <p className="text-dark-text-secondary leading-8">
              Ei, eu sou o Marcos, tenho 18 anos e estou imerso no universo do
              ReactJS. Além de estudar essa tecnologia, eu também estudo na
              Universidade Estadual Do Pará(UEPA), focado em engenharia de
              software. Sou apaixonado por aprender e estou sempre em busca de
              novos desafios para me desenvolver, tanto pessoal quanto
              profissionalmente.
            </p>
          </div>
          <Contacts size="size-7" />
        </Section>
      </div>
      </AuthProvider>
  )
}