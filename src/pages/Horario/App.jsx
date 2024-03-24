import Header from '../../componets/Header/App'
import Blocos from '../../componets/Blocos/App'
import Progress from '../../componets/Progress/App';
import './App.css'

function Horario() {
  return (
    <div>
      <Header></Header>
        <div className="divBory">
          <Blocos></Blocos>
        </div>
        <div className="divBarraProgress">
          <div><Progress /></div>
        </div>
    </div>
  )
}

export default Horario
