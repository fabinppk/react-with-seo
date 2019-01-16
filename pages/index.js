import Head from "next/head";
import Link from "next/link";
import "isomorphic-fetch";
import Navbar from "../components/Navbar";
import "../scss/style.scss";
import NextSeo from 'next-seo';

const Index = (props) => (
  <section className="page-section">
    <NextSeo
      config={{
        title: 'Desenvolvedores Bonitour',
        description: 'Lista de desenvolvedores que atuam na Bonitour Viagens e Turismo'
      }}
    />
    <Navbar />
    <div className="block-page">
      <h1>Lista de Desenvolvedores Bonitour</h1>
      {props.users.devs.map(user => (
        <Link key={user.id} as={`/dev/${user.nome}`.replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()} href={`/devs?id=${user.nome}`.replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()}>
          <a className="usuarios">
            <p className="nome">Nome: { user.nome }</p>
          </a>
        </Link>
      ))}
    </div>
  </section>
);

Index.getInitialProps = async function(props) {
  const requisicao =  {
                    url: 'https://api.bonitour.com.br' + '/api/v3/devs',
                    object: {
                      method: 'GET',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRpQGJvbml0b3VyLmNvbS5iciIsImV4cCI6MTU3OTA5MDg3M30.eyLkJgU6YKSuX5HQjuW3oCfl7GEpkKf_mGlQnVod7bY',
                        'secret_key': process.env.REACT_APP_SECRET_KEY
                      }
                    }
                  };

  const response = await fetch(requisicao.url, requisicao.object);

  const users = await response.json();
  console.log(users);
  return { users: users }
}

export default Index;
