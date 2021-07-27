import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import LogoAlterdata from "../../assets/alterdata.svg";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import { useHistory, useParams } from "react-router";

import SvgColor from "react-svg-color";

import auth from "../../services/auth";

export default function Login() {
  const history = useHistory();

  const [login, setLogin] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const novo = {
      login,
      senha,
    };
    console.log(novo);
    auth
      .fazerLogin(novo)
      .then((res) => {
        console.log(res);
        alert("Usuário logado com sucesso");
        auth.guardarToken(res.data.token);
        /*
      res.status === 200
        ? history.push(`/inicio/${res.data.usuario.id}`)
        : alert(res.data.mensagem);
      */
      })
      .catch((e) => {
        console.log(e);
        alert("Usuário não pode ser logado! ");
      });
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <SvgColor svg={LogoAlterdata} width={400} colors={["#0083c1"]} />
        <Typography component="h1" variant="h5" color="primary">
          Controle de Equipe - Alterdata Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="Usuário"
            label="Nome de Usuário"
            name="Usuário"
            autoFocus
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Senha"
            label="Senha"
            type="password"
            id="senha"
            autoComplete="current-password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {/*<FormControlLabel
            control={<Checkbox value="Lembrar" color="primary" />}
            label="Lembre de mim"
          />*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            color="primary"
            onClick={handleClick}
            style={{ margin: 5 }}
          >
            Logar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu sua senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Não tem conta? Cadastre-se"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const useStyles = makeStyles({
  paper: {
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    // margin: theme.spacing(3, 0, 2),
  },
});
