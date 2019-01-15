import React, { Component } from "react";
import Link from "next/link";
import "./Navbar.scss";

class Navbar extends Component {

  render() {
    return (
      <nav>
        <div>
          <Link href="/">
            <a title="Mostrar todos os usuários">Todos os Devs</a>
          </Link>
          <Link href="/sobre">
            <a title="Conheça a aplicação">Sobre a aplicação</a>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
