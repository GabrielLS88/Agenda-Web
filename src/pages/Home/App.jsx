import Header from '../../componets/Header/App';
import BlocosSemanal from '../../componets/BlocosSemanal/App';
import Progress from '../../componets/Progress/App';
import './App.css';

function Home() {
  return (
    <div>
      <Header />
      <div className='bodyHome'>
        
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
