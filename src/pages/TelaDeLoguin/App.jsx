import Header from '../../componets/Header/App'
import Blocos from '../../componets/Blocos/App'
import Progress from '../../componets/Progress/App';
import './App.css'

function verificarAcess() {
  let userIp = document.getElementById("userIP").value
  let password = document.getElementById("passwordIP").value
  console.log(userIp, password)
  if(userIp == "" || password == ""){
    alert("Por gentileza tente nomavente!!" + "\n" + "Dados incompletos")
  }else if(userIp === "Gab" && password === "123"){
    localStorage.setItem("token", "true");
    window.location.href = "/home";
  }
}

function Loguin() {
  return (
    <div className='bodyLoguin'>
      <h1 className='tituloLogin'>AGENDA CONNECT</h1>
      <div className="view">
        <input type="text" id='userIP' placeholder='Usuario' />
        <input type="password" id='passwordIP' placeholder='Senha' />
        <button id='btnLoguin' onClick={verificarAcess}>Entrar</button>
      </div>
    </div>
  )
}

export default Loguin
