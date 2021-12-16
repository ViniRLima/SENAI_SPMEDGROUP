import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import '../../assets/css/paciente.css';

import logo from '../../assets/img/logov.png';

export default class Paciente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaConsultas: [],
        }
    }

    buscarMinhasConsultas = () => {
        axios('http://localhost:5000/api/Pacientes', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
            }
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                this.setState({ listaConsultas: response.data });
                console.log(this.state.listaConsultas);
            }
        }).catch(erro => console.log(erro))
    }

    componentDidMount() {
        this.buscarMinhasConsultas();
    }

    render() {
        return (
            <html>
            <head>
              <meta charset="UTF-8" />
              <title>Pacientes</title>
              {/*<!-- Estilos -->*/}
              <link rel="stylesheet" href="./assets/css/paciente.css" />
              {/*<!-- Fonts -->*/}
              <link
                href="https://fonts.googleapis.com/css?family=Raleway"
                rel="stylesheet"
              />
            </head>
            <body>
          
          {/*<!-- BLOCO 1 -->*/}
          
          <div class="bloco_conf">
          <div class="foto_perfil">
          
          </div>
          
            {/*<!--- <form>
                  <div class="item">
                      <button class="btn_minha_conta" id="btn__login">
                          Minha Conta
                        </button>
                  </div>
                  <div class="item">
                      <button class="btn_configuracao" id="btn__login">
                          Configuracao
                        </button>
                  </div>
                  <div class="item">
                      <button class="btn_sair" id="btn__login">
                          Sair
                        </button>
                    </div>
           
                </form>--> */}
          
          
                <div class="item_bloco_conf">
                  <button class="item_bloco_conf" id="btn_minha_conta">
                      Minha Conta
                    </button>
              </div>
              <div class="item_bloco_conf">
                  <button class="item_bloco_conf" id="btn_configuracao">
                      Configuracao
                    </button>
              </div>
              <div class="item_bloco_conf">
                  <button class="item_bloco_conf" id="btn_sair">
                      Sair
                    </button>
                </div>
          
          
                <div class="item_icone">
                  <img src="./assets/img/logov.png" class="item_icone" alt="logo SpMedGroup" />
                </div>
          </div>
          
          {/*<!-- FIM BLOCO 1 -->*/}
          
          {/*<!-- BLOCO 2 -->*/}
          
          <div class="bloco_informacoes">
          
            {/*<!--Bloco Texto-->*/}
            <div class="bloco_usuario">
              <p class="text_adm">SpMedGroup | Paciente</p>
            </div>  {/*<!--FIM Bloco Texto-->*/}
          
            <div class="bloco_da_lista">{/*<!--BLOCO DA LISTA-->*/}
          
              <p class="text_consulta">Lista de Consulta</p>
              
              <div class="listar">
          
              </div>
          
              <div class="btn_listar">
                <button class="btn_listar_1" id="btn__login">
                  Listar
                 </button>
              </div>
            
            </div>{/*<!--FIM BLOCO DA LISTA-->*/}
          
             </div>{/*<!-- FIM BLOCO 2 -->*/}
          
          
          
              </body>
              </html>
      
      
      
          
        )
      }
      }