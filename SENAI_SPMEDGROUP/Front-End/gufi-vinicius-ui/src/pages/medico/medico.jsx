import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import '../../assets/css/medico.css';

import logo from '../../assets/img/logov.png';


export default class medico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idConsulta: 0,
            idPaciente: 0,
            descricao: '',
            dataConsulta: new Date(),
            idSituacao: 0,

            listaConsultas: [],
            listaPacientes: [],

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
}

render() {
    return (


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

  <div class="bloco_da_lista">{/*<!--BLOCO DA LISTA-->*/}

    <p class="text_consulta">Lista de Consulta</p>
    
    <div class="listar">
    <table>

{
  listaConsultas.map((consulta)=>{
    return(
    
     <tablerow>
     <h3>Consulta:{consulta.idConsulta}</h3>
     <h3>Situação:{consulta.idSituacao}</h3>
     <h3>Paciente:{consulta.idPaciente}</h3>
     <h3>Data e Hora:{consulta.dataConsulta}</h3>
     <h3>Descrição:{consulta.descricao}</h3>
     </tablerow>

    )
  })

}

</table>
    </div>

    <div class="btn_listar">
      <button class="btn_listar_1" id="btn__login">
        Listar
       </button>
    </div>
  
  </div>{/*<!--FIM BLOCO DA LISTA-->*/}

  <div class="bloco_usuario">
    <p class="text_adm">SpMedGroup | Medico</p>
  </div>



      <div class="bloco_cadastro">

        <p class="text_cadastro">Cadastro de Consulta</p>
            <div class="bloco_paciente">
              <b>Paciente:</b>
              <br></br>
              <input
                class="input_paciente"
                placeholder=""
                type="text"
                name="paciente"
                id="input_paciente"
                onChange={()=> this.setState(idPaciente)}
                value={this.state.idPaciente}
              />
            </div>
              <div class="bloco_data_hora">
                <b>Data e Hora:</b>
                <br></br>
                <input
                class="input_data_hora"
                placeholder=""
                type="text"
                name="data_hora"
                id="input_data_hora"
                onChange={()=> this.setState(dataConsulta)}
                value={this.state.dataConsulta}
                />
              </div>
            <div class="bloco_descricao">
              <b>Descrição:</b>
              <br></br>
                <input
                  class="input_descricao"
                  placeholder=""
                  type="text"
                  name="descricao"
                  id="input_descricao"
                  onChange={()=> this.setState(descricao)}
                  value={this.state.descricao}
                />
              </div>
              <div class="btn_cadastro">
                <button onClick={()=> cadastraConsulta} class="btn" id="btn_cadastro">
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