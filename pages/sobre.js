import Navbar from "../components/Navbar";
import { NextSeo } from "next-seo";
import { logPageView, initGA } from "../components/Analytics/index";

export default class Sobre extends React.Component {
  componentDidMount() {
    initGA();
    logPageView();
  }

  render() {
    return (
      <section className="page-section">
        <NextSeo
          title="Sobre a aplicação"
          description="Descrição da aplicação da listagem de desenvolvedores Bonitour"
        />
        <Navbar />
        <div className="block-page">
          <h1>Sobre a aplicação</h1>
          <p>
            Aplicação que lista e mostra detalhes de cada desenvolvedor da
            Bonitour Viagens e Turismo.
          </p>
          <p>React + Next js + SCSS</p>
        </div>
      </section>
    );
  }
}
