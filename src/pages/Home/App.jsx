import Header from '../../componets/Header/App';
import BlocosSemanal from '../../componets/BlocosSemanal/App';
import Progress from '../../componets/Progress/App';
import './App.css';

function Home() {
  return (
    <div>
      <Header />
      <div className='bodyHome'>
        <div className="blocoMensagem">
          <p id='textExplicativo'>Seja bem-vindo à sua nova agenda online, onde organização e praticidade se encontram para simplificar o seu dia a dia!</p>
          <p id='textExplicativo'>Temos algumas funções bem interssantes que podem te ajudar a ter controle de seus clientes e de fácil acesso que estará logo abaixo explicando o que são suas funções.</p>
          <div className="agendamentoHistoria">
            <h1 id='tituloExplicacao'>⚫Agendamento</h1>
            <p id='textExplicativo'>Nessa parte conseguimos realizar o cadasto dos clientes e salvando em sua planilha de excel que sera utilizada para salvar seus dados de fácil acesso.</p>
          </div>
          <div className="historicoHistoria">
            <h1 id='tituloExplicacao'>⚫Histórico</h1>
            <p id='textExplicativo'>No histórico conseguimos verificar todos os clientes agendados do mês atual e também os detalhes de serviços prestados, valores, horários e etc... </p>
          </div>
        </div>
      </div>
      <div className="blocosSemanal">
        <div className='divTitulo'>
          <h1 id='tituloBlocos'>Clientes Da Semana</h1> 
        </div>
        <div className='divBlocos'>
          <BlocosSemanal/>
        </div>
      </div>
      <div className="divBarraProgress">
        <div><Progress /></div>
      </div>
    </div>

  )
}

export default Home
