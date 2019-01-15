import Link from "next/link";
import "isomorphic-fetch";
import Navbar from "../components/Navbar";
import "../scss/style.scss";
import "../scss/dev.scss";
import NextSeo from 'next-seo';

const User = (props) => (
  <div>
    <NextSeo
      config={{
        title: props.user.nome + ' - Desenvolvedor Bonitour',
        description: props.user.nome + ' - Lista de desenvolvedores que atuam na Bonitour Viagens e Turismo'
      }}
    />
    <Navbar />
    <div className="playground">
      <div className="profile">
        <Link href={"/"}>
          <a>
            <div className="back-button">
              <div className="arrow-wrap">
                <span className="arrow-part-1"></span>
                <span className="arrow-part-2"></span>
                <span className="arrow-part-3"></span>
              </div>
            </div>
          </a>
        </Link>
        <div className="p">
          <div className="avatar">
            <img onError={ User.onError } src={ "https:bonitour.com.br/assets/images/usuarios_fotos/" + props.user.arquivo_assinatura } alt={ props.user.nome } />
          </div>
          <p className="name">{ props.user.nome }</p>
          <p className="role">Email: { props.user.email }</p>
          <p className="role">Cargo: { props.user.cargo_descricao }</p>
        </div>
      </div>
    </div>
  </div>
);

User.onError = function(e) {
  console.log(e);
  e.target.onerror = null;
  e.target.src="https:bonitour.com.br/assets/images/sem_imagem.jpg";
};

User.getInitialProps = async function(props) {

  const requisicao =  {
                    url: 'http://localhost:3002/api/v3/dev/' + props.query.nome,
                    object: {
                      method: 'GET',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRpQGJvbml0b3VyLmNvbS5iciIsImV4cCI6MTU3OTA5MDg3M30.eyLkJgU6YKSuX5HQjuW3oCfl7GEpkKf_mGlQnVod7bY',
                        'secret_key': 'vSMtK8VnNI97RGxrEFM2Dg'
                      }
                    }
                  };

  const response = await fetch(requisicao.url, requisicao.object);
  const user = await response.json();
  console.log(user);
  return { user: user.dev }
};

export default User;
