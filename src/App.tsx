import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Body } from "./Components/Body";
import { Container } from "./Components/Container";
import { Header } from "./Components/Header";
import { Section } from "./Components/Section";
import { Contacts } from "./Components/Contacts";
import { Card } from "./Components/Card";
import { ArrowLeft, ArrowRight } from "lucide-react";

function App() {
  const nextPage = () => {
    if (page <= totalPage - 1) {
      setPage(page + 1);
    } else {
      return;
    }
  };
  const returnPage = () => {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };

  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<
    {
      title: string;
      text: string;
      author: string;
      id: string;
      createdAt: string;
    }[]
  >([]);
  const [totalPage, setTotalPage] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [dark, setDark] = useState(true);


  useEffect(() => {
    getPost();
  }, [page]);
  async function getPost() {
    const response = (await axios.get(`http://localhost:3333/page/${page}`))
      .data;
    const newPosts = response.posts;
    setPosts(newPosts);
    setTotalPage(response.totalPages);
    setTotalPosts(response.totalPosts);
    console.table(posts);
  }

  return (
    <Body
      className={`flex justify-center flex-col items-center ${
        dark ? "dark:" : ""
      }`}
    >
      <Container className="flex flex-col">
        <Header/>
        <Section className="flex flex-col gap-8 h-[90vh] justify-center">
          <div className="w-7/12">
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
          <Contacts />
        </Section>
      </Container>
      <Container>
        <Section className="w-6/12 flex flex-col gap-5 py-0 pb-10">
            <span className="text-4xl text-dark-text-primary font-medium">Bem-Vindo ao meu Blog.</span>
            <p className="text-dark-text-secondary leading-8 border-l-2 border-dark-border px-4">
              Este blog tem o objetivo de ajudar pessoas que iniciaram na área,
              e também é útil para pessoas que já tem experiência nesse ramo.
            </p>
        </Section>
        <Section className="py-0 w-8/12 gap-4 flex flex-col">
          {
            posts.map((post)=>{
              return <Card text={post.text} title={post.title} createdAt={post.createdAt}/>
            })
          }
          <div className="flex justify-between items-center p-5">
            <span className="text-dark-text-secondary">Total de Post: {totalPosts}</span>
            <span className="text-dark-text-secondary">Página {page}  de {totalPage}</span>

            <div className="flex gap-1">
              <button className="bg-neutral-900 rounded-lg" onClick={returnPage}><ArrowLeft size={"30px"}/></button>
              <button className="bg-neutral-900 rounded-lg" onClick={nextPage}><ArrowRight size={"30px"}/></button>
            </div>
          </div>
        </Section>
      </Container>
    </Body>
  );
}

export default App;
