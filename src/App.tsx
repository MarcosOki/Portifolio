import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Body } from "./Components/Body";
import { Container } from "./Components/Container";
import { Header } from "./Components/Header";
import { Section } from "./Components/Section";
import { Contacts } from "./Components/Contacts";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CardAdm } from "./Components/CardAdm";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const nextPage = () => {
    if (page <= totalPage - 1) {
      setPage(page + 1);
    } else {
      return
    }
  };
  const returnPage = () => {
    if (page === 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };

const url = "https://apiblog-lthw.onrender.com"

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
  const [title, setTitle] = useState<string>();
  const [text, setText] = useState<string>();
  const [authorPost, setAuthorPost] = useState<string>();
  const [att, setAtt] = useState<boolean>(true);


  const enviarPost = async (
    title: string | undefined,
    text: string | undefined,
    author: string | undefined
  ) => {
    if (title && text && author) {
      await axios
        .post(`${url}/createpost`, {
          title,
          text,
          author,
        })
        .then((resp) => {
          console.log(resp)
          console.log(resp.data);
          toast.success("Post criado com sucesso")
        })
        .catch(() => {
          toast.error("Erro ao criar Post")
        });
    }
    setAtt(att ? false : true);
  };

  useEffect(() => {
    getPost();
  }, [page, att]);

  async function getPost() {
    const response = (await axios.get(`${url}/page/${page}`))
      .data;
    const newPosts = response.posts.reverse();
    setPosts(newPosts);
    setTotalPage(response.totalPages);
    setTotalPosts(response.totalPosts);
    console.table(posts);
  }

  const toggleTheme = () => {
    setDark(dark ? false : true);
  };

  return (
    <Body
    className={`flex justify-center flex-col items-center ${dark ? "dark" : ""}`}
    >
      <ToastContainer />
      <Container className="flex flex-col">
        <Header toggleTheme={toggleTheme} theme={dark} />
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
      <Container>
        <Section className="sm:w-6/12 flex flex-col gap-5 sm:py-0 sm:pb-10">
          <span className="sm:text-4xl text-3xl  text-dark-text-primary sm:font-medium">
            Bem-Vindo ao meu Blog.
          </span>
          <p className="text-dark-text-secondary leading-8 border-l-2 border-dark-border px-4">
            Este blog tem o objetivo de ajudar pessoas que iniciaram na área, e
            também é útil para pessoas que já tem experiência nesse ramo.
          </p>
          <div className="flex flex-col gap-3 py-5">
            <input
              className="rounded-sm p-2 bg-dark-text-secondary placeholder:text-black "
              placeholder="Titulo"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="rounded-sm p-2 bg-dark-text-secondary placeholder:text-black "
              placeholder="Conteudo"
              type="text"
              onChange={(e) => setText(e.target.value)}
            />
            <input
              className="rounded-sm p-2 bg-dark-text-secondary placeholder:text-black "
              placeholder="Autor"
              type="text"
              onChange={(e) => setAuthorPost(e.target.value)}
            />
            <button
              className="w-[20%] p-2 bg-green-500 rounded-sm hover:bg-green-400 font-semibold"
              onClick={() => {
                enviarPost(title, text, authorPost);
              }}
            >
              Enviar
            </button>
          </div>
        </Section>
        <Section className="sm:py-0 sm:w-8/12 gap-4 flex flex-col">
          {posts.map((post) => {
            return (
              <CardAdm
                text={post.text}
                title={post.title}
                createdAt={post.createdAt}
                idPost={Number(post.id)}
                setAtt={setAtt}
                att={att}
              />
            );
          })}
          <div className="flex justify-between items-center sm:p-5">
            <span className="text-dark-text-secondary">
              Posts: {totalPosts}
            </span>
            <span className="text-dark-text-secondary">
              Página {page} de {totalPage}
            </span>

            <div className="flex gap-1">
              <button
                className="bg-neutral-900 rounded-sm"
                onClick={returnPage}
              >
                <ArrowLeft size={"30px"} />
              </button>
              <button className="bg-neutral-900 rounded-sm" onClick={nextPage}>
                <ArrowRight size={"30px"} />
              </button>
            </div>
          </div>
        </Section>
      </Container>
    </Body>
  );
}

export default App;
