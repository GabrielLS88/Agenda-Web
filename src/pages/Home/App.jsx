import Header from '../../componets/Header/App';
import './App.css';

function Home() {
  return (
    <div>
      <Header />
      <div className='bodyHome'>
        <div className="blocoMensagem">
          <p>Seja bem-vindo à sua nova agenda online, onde organização e praticidade se encontram para simplificar o seu dia a dia!</p>
          <p>Temos algumas funções bem interssantes que podem te ajudar a ter controle de seus clientes e de fácil acesso que estará logo abaixo explicando o que são suas funções.</p>
          <div className="agendamentoHistoria">
            <h1>⚫Agendamento</h1>
            <p>Nessa parte conseguimos realizar o cadasto dos clientes e salvando em sua planilha de excel que sera utilizada para salvar seus dados de fácil acesso.</p>
          </div>
          <div className="historicoHistoria">
            <h1>⚫Histórico</h1>
            <p>No histórico conseguimos verificar todos os clientes agendados do mês atual e também os detalhes de serviços prestados, valores, horários e etc... </p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Home
