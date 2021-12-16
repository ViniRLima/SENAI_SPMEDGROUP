import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './index.css';

import Home from './pages/home/App';
import Login from './pages/login/login';
import Administrador from './pages/administrador/administrador';
import Medico from './pages/medico/medico';
import Paciente from './pages/paciente/paciente';

import reportWebVitals from './reportWebVitals';


const PermissaoAdm = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '1' ? (
        // operador spread
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);

const PermissaoComum = ({ component: Component }) => (
  <Route
    render={(props) =>
      usuarioAutenticado() && parseJwt().role === '2' ? (
        // operador spread
        <Component {...props} />
      ) : (
        <Redirect to="login" />
      )
    }
  />
);

const routing = (
<Router>
 <div>
   <Switch>
    <Route exact path="/" component={Home} /> {/* Home */}
    <Route path="/login" component={Login} /> {/* Login */}
    <PermissaoAdm Route path="/administrador" component={Administrador}/> {/* Administrador */}
    <PermissaoComum Route path="/medico" component={Medico}/> {/* Medico */}
    <PermissaoComum Route path="/paciente" component={Paciente}/> {/* Paciente */}

    <Route path="/notFound" component={NotFound} /> {/* Not Found */}
    <Redirect to="/notFound" /> {/* Redireciona para Not Found caso não encontre nenhuma rota */}
   </Switch>
  </div>
</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
