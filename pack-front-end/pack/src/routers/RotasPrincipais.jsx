import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Rotas.css";

import RotasUsuario from "./Rotas";
import RotasCargo from "./RotasCargo";
import RotasTime from "./RotasTime";

import Nav from "../components/Nav";

function RotasPrincipais() {
  return (
    <Router>
      <div>
        <Link
          to={"/usuarios"}
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button>Usuarios</button>
        </Link>

        <Link to={"/cargos"}>
          <button>Cargos</button>
        </Link>

        <Link to={"/equipe"}>
          <button>Equipe</button>
        </Link>
      </div>
      <Switch>
        <Route path={"/usuarios"}>
          <Nav />
        </Route>

        <Route path={"/cargos"}>
          <RotasCargo />
        </Route>

        <Route path={"/equipe"}>
          <RotasTime />
        </Route>
      </Switch>
    </Router>
  );
}

export default RotasPrincipais;
