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
      idSituacao: this.state.idSituacao,
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

    this.buscarPacientes();
    this.buscarMedicos();
    this.buscarConsultas();
  }
  render() {
    return (

      <body>


        {/*<!-- BLOCO 1 -->*/}

        <div className="bloco_conf">
          <div className="foto_perfil">

          </div>

          <div className="item_bloco_conf">
            <button className="item_bloco_conf" id="btn_minha_conta">
              Minha Conta
            </button>
          </div>
          <div className="item_bloco_conf">
            <button className="item_bloco_conf" id="btn_configuracao">
              Configuracao
            </button>
          </div>
          <div className="item_bloco_conf">
            <button className="item_bloco_conf" id="btn_sair">
              Sair
            </button>
          </div>


          <div className="item_icone">
            <img src="./assets/img/logov.png" className="item_icone" alt="logo SpMedGroup" />
          </div>
        </div>

        {/*<!-- FIM BLOCO 1 -->*/}

        {/*<!-- BLOCO 2 -->*/}
        <div className="bloco_informacoes">

          {/*<!--BLOCO DA LISTA-->*/}
          <div className="bloco_da_lista">

            <p className="text_consulta">Lista de Consulta</p>

            <div className="listar">

            <table>

         {
           listaConsultas.map((consulta)=>{
             return(
             
              <tablerow>
              <h3>Consulta:  {consulta.idConsulta}</h3>
              <h3>Data e Hora:{consulta.dataConsulta}</h3>
              <h3>Médico:{consulta.idMedico}</h3>
              <h3>Paciente:{consulta.idPaciente}</h3>
              <h3>Situação:{consulta.idSituacao}</h3>
              </tablerow>

             )
           })

         }
         
         </table>

            </div>

            <div className="btn_listar">
              <button className="btn_listar_1" id="btn__login">
                Listar
              </button>
            </div>

          </div>{/*<!--FIM BLOCO DA LISTA-->*/}

          <div className="bloco_usuario">
            <p className="text_adm">SpMedGroup | Administrador</p>
          </div>


          <div className="bloco_cadastro">

            <p className="text_cadastro">Cadastro de Consulta</p>
            <div className="bloco_consulta">
              <b className="negrito">Consulta:</b>
              <br></br>
              {/*<!-- <br> -->*/}
              <input
                className="input_consulta"
                placeholder=""
                type="text"
                name="consulta"
                id="input_consulta"
                onChange={()=> this.setState(idConsulta)}
                value={this.state.idConsulta}
              />
            </div>
            <div className="bloco_data_hora">
              <b>Data e Hora:</b>
              <br></br>
              {/*<!-- <br> -->*/}
              <input
                className="input_data_hora"
                placeholder=""
                type="text"
                name="data_hora"
                id="input_data_hora"
                onChange={()=> this.setState(dataConsulta)}
                value={this.state.dataConsulta}
              />
            </div>
            <div className="bloco_paciente">
              <b>Paciente:</b>
              <br></br>
              {/*<!-- <br> -->*/}
              <input
                className="input_paciente"
                placeholder=""
                type="text"
                name="paciente"
                id="input_paciente"
                onChange={()=> this.setState(idPaciente)}
                value={this.state.idPaciente}
              />
            </div>
            <div className="bloco_medico">
              <b>Médico:</b>
              <br></br>
              {/*<!-- <br> -->*/}
              <input
                className="input_medico"
                placeholder=""
                type="text"
                name="medico"
                id="input_medico"
                onChange={()=> this.setState(idMedico)}
                value={this.state.idMedico}
              />
            </div>
            <div className="bloco_situacao">
              <b>Situação:</b>
              <br></br>
              {/*<!-- <br> -->*/}
              <input
                className="input_situacao"
                placeholder=""
                type="text"
                name="situacao"
                id="input_situacao"
                onChange={()=> this.setState(idSituacao)}
                value={this.state.idSituacao}
              />
            </div>
            <div className="btn_cadastro">
              <button onClick={()=> cadastraConsulta} className="btn" id="btn_cadastro">
                Cadastrar
              </button>
            </div>

            {/*<!--FORM FIM-->*/}

          </div>{/*<!--FIM BLOCO CADASTRO-->*/}

        </div>

        {/*<!-- FIM BLOCO 2 -->*/}



      </body>





    )
  }
}