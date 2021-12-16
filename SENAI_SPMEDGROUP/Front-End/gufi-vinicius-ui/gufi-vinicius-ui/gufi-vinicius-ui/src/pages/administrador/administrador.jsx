import { Component } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import { Link } from 'react-router-dom';


import '../../assets/css/administrador.css';

import logo from '../../assets/img/logov.png';

export default class Administrador extends Component {
    constructor(props) {
      super(props);
      this.state = {
        idConsulta: 0,
        idPaciente: 0,
        idMedico: 0,
        descricao: '',
        dataConsulta: new Date(),
        idSituacao: 0,

        listaConsultas: [],
        listaPacientes: [],
        listaMedicos: [],

        isLoading: false,
        errorMessage: '',
      };
    }

  // Função lista Pacientes
    buscarPacientes = () => {
      axios('http://localhost:5000/api/Pacientes', {
          headers: {
              Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
          }
      }).then((response) => {
          if (response.status === 200) {
              this.setState({ listaPacientes: response.data });
              console.log(this.state.listaPacientes);
          }
      }).catch(erro => console.log(erro))
  }

  // Função lista Medicos
  buscarMedicos = () => {
      axios('http://localhost:5000/api/Medicos', {
          headers: {
              Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
          }
      }).then((response) => {
          if (response.status === 200) {
              this.setState({ listaMedicos: response.data });
              console.log(this.state.listaMedicos);
          }
      }).catch(erro => console.log(erro))
  }

  // Função lista consultas
    buscarConsultas = () => {
      axios('http://localhost:5000/api/Consultas', {
          headers: {
              Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
          }
      }).then((response) => {
          if (response.status === 200) {

              console.log(response.data)
              this.setState({ listaConsultas: response.data });
              console.log(this.state.listaConsultas);
          }
      }).catch(erro => console.log(erro))
  }
    


  //Função cadastrar consulta

  //funcao que faz a chamada para API para cadastrar uma consulta.
  cadastrarConsulta = (consul) => {
    //Ignora o comportamento padrao do navegador.
    consul.preventDefault();
    this.setState({ isLoading: true });

    let consulta = {
      idPaciente = this.state.idPaciente,
      idMedico: this.state.idMedico,
      descricao: this.state.descricao,
      idSituacao: 1,
      dataConsulta: new Date(this.state.dataConsulta),
    };

    axios
      .post('http://localhost:5000/api/Consultas', consulta, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
        },
      })
      .then((resposta) => {
        if (resposta.status === 201) {
          console.log('Consulta cadastrada!');
          this.setState({ isLoading: false });
        }
      })
      .catch((erro) => {
        console.log(erro);
        this.setState({ isLoading: false });
      })
      .then(this.buscarConsultas);
  };
    
      
    
  componentDidMount() {
    this.buscarConsultas();
    this.buscarPacientes();
    this.buscarMedicos();
}
render() {
  return (
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Administrador</title>
   {/*<!-- Estilos -->*/}
    <link rel="stylesheet" href="./assets/css/administrador.css" />
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

    {/*<!--BLOCO DA LISTA-->*/}
  <div class="bloco_da_lista">

    <p class="text_consulta">Lista de Consulta</p>
    
    <div class="listar">

    </div>

    <div class="btn_listar">
      <button class="btn_listar_1" id="btn__login">
        Listar
       </button>
    </div>
  
  </div>{/*<!--FIM BLOCO DA LISTA-->*/}

  <div class="bloco_usuario">
    <p class="text_adm">SpMedGroup | Administrador</p>
  </div>



      <div class="bloco_cadastro">

        <p class="text_cadastro">Cadastro de Consulta</p>
            <div class="bloco_consulta">
              <b class="negrito">Consulta:</b>
            {/*<!-- <br> -->*/}
              <input
                class="input_consulta"
                placeholder=""
                type="text"
                name="consulta"
                id="input_consulta"
              />
            </div>
            <div class="bloco_data_hora">
              <b>Data e Hora:</b>
        {/*<!-- <br> -->*/}
              <input
              class="input_data_hora"
              placeholder=""
              type="text"
              name="data_hora"
              id="input_data_hora"
              />
            </div>
              <div class="bloco_paciente">
                <b>Paciente:</b>
           {/*<!-- <br> -->*/}
                <input
                  class="input_paciente"
                  placeholder=""
                  type="text"
                  name="paciente"
                  id="input_paciente"
                />
              </div>
              <div class="bloco_medico">
                <b>Médico:</b>
       {/*<!-- <br> -->*/}
                <input
                class="input_medico"
                placeholder=""
                type="text"
                name="medico"
                id="input_medico"
                />
              </div>
            <div class="bloco_situacao">
              <b>Situação:</b>
        {/*<!-- <br> -->*/}
                <input
                  class="input_situacao"
                  placeholder=""
                  type="text"
                  name="situacao"
                  id="input_situacao"
                />
              </div>
              <div class="btn_cadastro">
                <button class="btn" id="btn_cadastro">
                  Cadastrar
                 </button>
              </div>

        {/*<!--FORM FIM-->*/}

      </div>{/*<!--FIM BLOCO CADASTRO-->*/}
      
   </div>

 {/*<!-- FIM BLOCO 2 -->*/}



    </body>
    </html>



    
  )
}
}