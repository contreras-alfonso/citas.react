import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListaPacientes from './components/ListaPacientes'
import Spinner from './components/Spinner'

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(()=>{

    const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
    if(pacientesLS.length>0){
      setPacientes(pacientesLS);
    }

  },[])

  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes));
  },[pacientes])

  return (
    <>

      <div className='container mt-7 mx-auto'>
      <Header></Header>
      <div className='md:flex mt-9'>
      <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente}></Formulario>
      <ListaPacientes pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente}></ListaPacientes>
      </div>
      </div>

    </>
  )
}

export default App
