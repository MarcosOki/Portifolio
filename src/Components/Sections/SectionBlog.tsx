import { useContext, useEffect, useState } from "react";
import { Section } from "../Section";
import axios from "axios";
import { toast } from "react-toastify";
import { CardAdm } from "../CardAdm";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "../Header";
import { AuthContext } from "../context/auth";
import { Navigate } from "react-router-dom";

interface SectionBlogProps {}

export function SectionBlog({}: SectionBlogProps) {
  const url = "https://apiblog-lthw.onrender.com";

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
  const [title, setTitle] = useState<string>();
  const [text, setText] = useState<string>();
  const [authorPost, setAuthorPost] = useState<string>();
  const [att, setAtt] = useState<boolean>(true);

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
          console.log(resp);
          console.log(resp.data);
          toast.success("Post criado com sucesso");
        })
        .catch(() => {
          toast.error("Erro ao criar Post");
        });
    }
    setAtt(att ? false : true);
  };

  useEffect(() => {
    getPost();
  }, [page, att]);

  async function getPost() {
    const response = (await axios.get(`${url}/page/${page}`)).data;
    const newPosts = response.posts.reverse();
    setPosts(newPosts);
    setTotalPage(response.totalPages);
    setTotalPosts(response.totalPosts);
  }

  const { signed } = useContext(AuthContext);
  console.log(signed)
  return (
    <>
      {signed == true ? 
      <div className="flex flex-col h-[100vh] justify-between bg-dark-primary w-11/12 px-12">
      <Header />
      <Section className="w-6/12 flex flex-col gap-5 py-0">
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
      <Section className="py-0 w-8/12 gap-4 flex flex-col">
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
        <div className="flex justify-between items-center">
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
    </div>: <Navigate to={"/"}/>}
      
    </>
  );
}
