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
          
            {/*<!--Bloco Texto-->*/}
            <div className="bloco_usuario">
              <p className="text_adm">SpMedGroup | Paciente</p>
            </div>  {/*<!--FIM Bloco Texto-->*/}
          
            <div className="bloco_da_lista">{/*<!--BLOCO DA LISTA-->*/}
          
              <p className="text_consulta">Lista de Consulta</p>
              
              <div className="listar">
              <table>

{
  listaConsultas.map((consulta)=>{
    return(
    
     <tablerow>
     <h3>Consulta:</h3>
     <p>{consulta.listaConsultas}</p>
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
          
             </div>{/*<!-- FIM BLOCO 2 -->*/}
          
          
          
              </body>

          
        )
      }
      }