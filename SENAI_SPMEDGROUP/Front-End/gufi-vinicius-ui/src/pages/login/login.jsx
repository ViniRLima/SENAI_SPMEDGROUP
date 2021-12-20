import { Component } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import { Link } from 'react-router-dom';


import '../../assets/css/login.css';

import logo from '../../assets/img/logov.png';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            erroMensagem: '',
            isLoading: false
        };
    };

      // Função que faz a chamada para a API para realiza o login
      efetuaLogin = (event) => {
        // ignora o comportamento padrão do navegador (recarregar a página, por exemplo)
        event.preventDefault();

        this.setState({ erroMensagem: '', isLoading: true });

        axios.post('http://localhost:5000/api/Login', {
            email: this.state.email,
            senha: this.state.senha
        })

            // recebe todo o conteúdo da resposta da requisição na variável resposta
            .then(resposta => {
                // verifico se o status code dessa resposta é igual a 200
                if (resposta.status === 200) {
                    // se sim, exibe no console do navegador o token do usuário logado,
                    // console.log('Meu token é: ' + resposta.data.token);
                    // salva o valor do token no localStorage
                    localStorage.setItem('usuario-login', resposta.data.token);
                    // e define que a requisição terminou
                    this.setState({ isLoading: false });

                    // define a variável base64 que vai receber o payload do token
                    let base64 = localStorage.getItem('usuario-login').split('.')[1];
                    // exibe no console do navegador o valor em base64
                    console.log(base64);

                    // exibe no console o valor decodificado de base64 para string
                    // console.log(window.atob(base64));

                    // exibe no console do navegador o valor da chave role
                    // console.log( JSON.parse( window.atob(base64) ) );

                    // console.log( parseJwt().role );

                    // exibe as propriedades da página
                    console.log(this.props);

                    // verifica se o usuário logado é do tipo administrador
                    if (parseJwt().role === '1' ) {
                        this.props.history.push('/tiposeventos');
                        console.log('estou logado: ' + usuarioAutenticado())
                    }

                    else{
                        this.props.history.push('/meusEventos');
                    }
                }
            })

            // Caso haja um erro,
            .catch(() => {
                // define o valor do state erroMensagem com uma mensagem personalizada
                this.setState({ erroMensagem: 'E-mail e/ou senha inválidos!', isLoading: false })
            })
    };

    atualizaStateCampo = (campo) => {
        // quando estiver digitando no campo username
        //                     email        :       adm@adm.com

        // quando estiver digitando no campo password
        //                     senha        :        senha123
        this.setState({ [campo.target.name]: campo.target.value })

    };

        render() {
            return (
                <div>
    
                    <main>
                    <section className="container-login flex">
      <div className="item_login"> 
        <div className="row">
       <div className="item">
        <Link to="/"><img src={logo} className="icone__login" alt="logo do SpMedGroup" /> </Link>
       </div>
       
      



       <form onSubmit={this.efetuaLogin}>
         <div className="item">
           <input
             className="input__login"
             placeholder="username"
             type="text"
             name="email"
             value={this.state.email}
             onChange={this.atualizaStateCampo}
           />
         </div>
         <div className="item">
           <input
             className="input__login"
             type="password"
             name="senha"
             value={this.state.senha}
             onChange={this.atualizaStateCampo}
             placeholder="password"

           />
         </div>

        <div className="item_btn_login">

          
          {/* Exibe a mensagem de erro ao tentar logar com credenciais inválidas */}
          <p style={{ color : 'red' }} >{this.state.erroMensagem}</p>


          {
            // Caso seja true, renderiza o botão desabilitado com o texto 'Loading...'
            this.state.isLoading === true &&
            <button type="submit" disabled className="btn btn__login" id="btn__login">
                Loading...
            </button>
        }

        {
            // Caso seja false, renderiza o botão habilitado com o texto 'Login'
            this.state.isLoading === false &&
            <button 
                className="btn btn__login" id="btn__login"
                type="submit"
                disabled={ this.state.email === '' || this.state.senha === '' ? 'none' : '' }>
                Login
            </button>
        }


           <button className="btn btn__login" id="btn__login">
             Login
           </button>
         </div>
         <div className="item" id="item__title">
          <p className="text__login" id="item__description">
            Ainda não é cadastrado <a href="url">clique aqui</a>. </p>
        </div>
       </form>
     </div>
    </div>



    <div className="img_login">
     
    </div>
    </section>
                    </main>
    
                </div>
            )
        }
    };

