import Link from "next/link";
import CardContainer from "../../components/CardContainercomment";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import ContainerDetails from "../../components/Container Details";
import { ContainerDetailsStyle } from "../../components/ContainerDetailsStyle/style";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Cabecalho } from "../../components/Container Details/style";
import FormComent from "../../components/FomComent";

export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.detailsId}`
  );
  const comments = await data.json();
  return {
    props: {
      comments,
    },
  };
}
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await response.json();
  const paths = data.map((details) => ({
    params: {
      detailsId: `${details.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export default function details({ comments }) {
  const dadosMokados = [
    {
      id: 1,
      name: "Mateus",
      email: "mateus@gmail.com",
      comentario: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "Lucas",
      email: "Lucas@gmail.com",
      comentario: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <ContainerDetails>
      <Cabecalho>
        <Link href={"/"}>
          <RiArrowLeftSLine size={20} />
          Voltar
        </Link>
        <button>Editar</button>
      </Cabecalho>
      <CardContainer>
        <section>
          <button>
            <MdOutlineKeyboardArrowUp />
          </button>
          <span>{comments.id * (10 - comments.id)}</span>
        </section>

        <Link href={`/details/${comments.id}`}>
          <h3>{comments.title}</h3>
          <article>{comments.body}</article>
          <p>Feature</p>
        </Link>

        <div>
          <svg
            data-v-30a547e3=""
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 16"
            width="22px"
          >
            <path
              data-v-30a547e3=""
              d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z"
              fill="#CDD2EE"
            ></path>
          </svg>
          <span>{2}</span>
        </div>
      </CardContainer>
      <ContainerDetailsStyle>
        <h1>2 Comentários</h1>
        {dadosMokados.map((user) => (
          <article key={user.id}>
            <section>
              <span></span>
            </section>
            <div>
              <h2>{user.name}</h2>
              <h3>{user.email}</h3>
              <p>{user.comentario}</p>
            </div>
          </article>
        ))}
      </ContainerDetailsStyle>
      <FormComent>
        <section>
          <h1>Adicionar Comentário</h1>
          <textarea cols="30" rows="10"></textarea>
          <div>
            <span>255 caracteres</span>
            <button>Postar</button>
          </div>
        </section>
      </FormComent>
    </ContainerDetails>
  );
}
