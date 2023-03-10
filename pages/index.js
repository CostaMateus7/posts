import Head from "next/head";
import Link from "next/link";
import CardContainer from "../components/CardContainercomment";
import Selection from "../components/Selection";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { TfiMenu } from "react-icons/tfi";
import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import MiniContainer from "../components/Mini-container";
import { HeaderMobile } from "../components/HeaderMobile/style";
import TampleteMobile from "../components/TampleteMobile";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const commentsFromAPI = await data.json();
  return {
    props: {
      commentsFromAPI,
    },
  };
}

export default function Home({ commentsFromAPI }) {
  const [numberComments, setNumberComments] = useState(0);
  const [comments, setComments] = useState([]);
  const [controllerComments, setControllerComments] = useState([]);
  const [organizationComments, setOrganizationComments] = useState("NO_FILTER");
  const [Menu, setMenu] = useState(false);

  useEffect(() => {
    const copyComments = commentsFromAPI
      .filter((comment) => comment.id <= 5)
      .map((comment) => {
        return {
          id: comment.id,
          title: comment.title,
          body: comment.body,
          comentario: 2,
          like: comment.id * (10 - comment.id),
          tag: Math.floor(Math.random() * 100) % 2 === 0 ? "Feature" : "UI/UX",
        };
      });
    setNumberComments(copyComments.length);
    setControllerComments(copyComments);
    setComments(copyComments);
  }, []);

  const handleClickMenu = () => {
    setMenu((prevState) => (prevState === false ? true : false));
    Menu === false
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  };
  function filterByTags(tagName) {
    if (tagName === undefined) {
      setComments(controllerComments);
      setNumberComments(controllerComments.length);
      return;
    }
    const newComments = controllerComments.filter(
      (comment) => comment.tag == tagName
    );
    setComments(newComments);
    setNumberComments(newComments.length);
    return;
  }
  function sortComments(sortOrder) {
    if (sortOrder === "NO_FILTER") {
      const newComents = controllerComments.sort(function (a, b) {
        return a.like < b.like ? -1 : a.like > b.like ? 1 : 0;
      });
      setComments(newComents);
      setNumberComments(newComents.length);
      return;
    }
    if (sortOrder === "LIKE_ASC") {
      const newComents = comments.sort(function (a, b) {
        return a.like < b.like ? -1 : a.like > b.like ? 1 : 0;
      });
      setComments(newComents);
      setNumberComments(newComents.length);
      return;
    }
    if (sortOrder === "LIKE_DESC") {
      const newComments = comments.sort(function (a, b) {
        return a.like > b.like ? -1 : a.like < b.like ? 1 : 0;
      });
      setComments(newComments);
      setNumberComments(newComments.length);
      return;
    }
    return console.log(sortOrder);
  }
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="P??gina principal de post" />
      </Head>
      <Container>
        <Navbar>
          <div>
            <h1>Front-end</h1>
            <p>Painel de Coment??rios</p>
          </div>
          <section>
            <button type="click" onClick={() => filterByTags(undefined)}>
              All
            </button>
            <button type="click" onClick={() => filterByTags("Feature")}>
              Feature
            </button>
            <button type="click" onClick={() => filterByTags("UI/UX")}>
              UI/UX
            </button>
          </section>
          <article>
            <h3>Roteiro</h3>
            <ul>
              <li>
                Planejado <span>1</span>
              </li>
              <li>
                Planejado <span>2</span>
              </li>
              <li>
                Planejado <span>3</span>
              </li>
            </ul>
          </article>
        </Navbar>
        <HeaderMobile>
          <div>
            <h1>Front-end</h1>
            <p>Painel de Coment??rios</p>
          </div>
          <section>
            {Menu === false ? (
              <TfiMenu size={35} color="#fff" onClick={handleClickMenu} />
            ) : (
              <AiOutlineClose
                size={35}
                color="#fff"
                onClick={handleClickMenu}
              />
            )}
          </section>
          {Menu === false ? (
            ""
          ) : (
            <TampleteMobile>
              <article>
                <div>
                  <button type="click" onClick={() => filterByTags(undefined)}>
                    All
                  </button>
                  <button type="click" onClick={() => filterByTags("Feature")}>
                    Feature
                  </button>
                  <button type="click" onClick={() => filterByTags("UI/UX")}>
                    UI/UX
                  </button>
                </div>
              </article>
            </TampleteMobile>
          )}
        </HeaderMobile>

        <MiniContainer>
          <Selection>
            <HiOutlineLightBulb size={30} color="#fff" />
            <div>{numberComments} Sugest??es</div>
            <section>
              <span>Ordenar por:</span>
              <article>
                <select
                  value={organizationComments}
                  onChange={(text) => {
                    setOrganizationComments(text.target.value);
                    sortComments(text.target.value);
                  }}
                >
                  <option value={"NO_FILTER"}>Selecione um Filtro</option>
                  <option value={"LIKE_ASC"}>Likes Crescente</option>
                  <option value={"LIKE_DESC"}>Likes Decrescente</option>
                </select>
              </article>
            </section>
            <button>+ Adicionar Coment??rios</button>
          </Selection>

          {comments.map((coment) => (
            <CardContainer key={coment.id}>
              <section>
                <button>
                  <MdOutlineKeyboardArrowUp />
                </button>
                <span>{coment.like}</span>
              </section>

              <Link href={`/details/${coment.id}`}>
                <h3>{coment.title}</h3>
                <article>{coment.body}</article>
                <p>{coment.tag}</p>
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
                <span>{coment.comentario}</span>
              </div>
            </CardContainer>
          ))}
        </MiniContainer>
      </Container>
    </>
  );
}
