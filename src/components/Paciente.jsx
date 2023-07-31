import React from 'react'

function Paciente({paciente,pacientes,setPacientes, setPaciente}) {

    const { mascota,propietario,email,alta,sintomas,id } = paciente;

    const editarPaciente = () => {
        const objetoEditarPaciente = {
            mascota,
            propietario,
            email,
            alta,
            sintomas,
            id,
        }
        setPaciente(objetoEditarPaciente);
    }

    const eliminarPaciente = (idPaciente) => {

        const listaActualizada = pacientes.filter(p=>p.id !== idPaciente);


        Swal.fire({
            title: `¿Desea Eliminar el Paciente?`,
            showDenyButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-end',
                    icon: `success`,
                    title: `Paciente Eliminado correctamente.`,
                    showConfirmButton: false,
                    timer: 2000
                  })
                  setPacientes(listaActualizada);
            } else if (result.isDenied) {

            }
          })

    }

  return (
    <div className='bg-white py-7 px-5 rounded-lg flex flex-col gap-3 shadow-md mb-3'>

        <p className='font-bold'>Mascota: <span className='font-normal'>{mascota}</span></p>
        <p className='font-bold'>Propietario: <span className='font-normal'>{propietario}</span></p>
        <p className='font-bold'>Email: <span className='font-normal'>{email}</span></p>
        <p className='font-bold'>Fecha de alta: <span className='font-normal'>{alta}</span></p>
        <p className='font-bold'>Sintomas: <span className='font-normal'>{sintomas}</span></p>

        <div className='flex justify-between mt-5 gap-3'>
        <button className='rounded-lg bg-indigo-600 w-1/2 text-white py-3 hover:bg-indigo-500' onClick={editarPaciente}>Editar</button>
        <button className='rounded-lg bg-red-600 w-1/2 text-white py-3 hover:bg-red-500' onClick={()=>{eliminarPaciente(id)}}>Eliminar</button>
        </div>

    </div>
  )
}

export default Paciente