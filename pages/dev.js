import Link from "next/link";
import "isomorphic-fetch";
import Navbar from "../components/Navbar";
import "../scss/style.scss";
import "../scss/dev.scss";
import NextSeo from 'next-seo';

export default class User extends React.Component {

  static async getInitialProps ({ query: { nome } }) {
    const requisicao =  {
                      url: 'https://api.bonitour.com.br' + '/api/v3/dev/' + nome,
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
  }

  defineImage(){
    let url_image = "https://d159gdcp8gotlc.cloudfront.net/assets/images/";

    if(this.props.user.arquivo_assinatura != null){
      url_image = url_image + "/usuarios_fotos/" + this.props.user.arquivo_assinatura;
    }else{
      url_image = url_image + "sem_imagem.jpg";
    }
    return url_image;
  }

  render () {
    return (
      <div>
        <NextSeo
          config={{
            title: this.props.user.nome + ' - Desenvolvedor Bonitour',
            description: this.props.user.nome + ' - Lista de desenvolvedores que atuam na Bonitour Viagens e Turismo'
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
                <img src={ this.defineImage() } alt={ this.props.user.nome } />
              </div>
              <p className="name">{ this.props.user.nome }</p>
              <p className="role">Email: { this.props.user.email }</p>
              <p className="role">Cargo: { this.props.user.cargo_descricao }</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
