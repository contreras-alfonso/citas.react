import React from 'react'
import Paciente from './Paciente'

function ListaPacientes({ pacientes, setPacientes, setPaciente }) {


  return (

    pacientes.length>0 ?  (
    <div className='md:w-1/2 lg:w-3/5 mx-2'>
    <h1 className='font-black text-3xl text-center'>Listado de Pacientes</h1>
    <h2 className='text-center text-lg my-8'>Administra tus <span className='text-indigo-600 font-bold'>Pacientes y Citas</span></h2>
    <div className='h-screen overflow-x-scroll px-5'>
    { pacientes.map(paciente => {
        return (<Paciente key={paciente.id} paciente={paciente} pacientes={pacientes} setPacientes={setPacientes} setPaciente={setPaciente}></Paciente>)
    }) }
        </div>
    </div>
    ) :  (
    <div className='md:w-1/2 lg:w-2/3 mx-2'><h1 className='font-black text-3xl text-center'>Aún no hay pacientes</h1>
    <h2 className='text-center text-lg my-8'>Agrega algunos y <span className='text-indigo-600 font-bold'>Administralos</span></h2>
    </div>
    )

  )
}

export default ListaPacientes