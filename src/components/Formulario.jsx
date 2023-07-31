import { useState, useEffect } from 'react'

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {

    const [mascota,setMascota] = useState('');
    const [propietario,setPropietario] = useState('');
    const [email,setEmail] = useState('');
    const [alta,setAlta] = useState('');
    const [sintomas,setSintomas] = useState('');

    const swalMensaje = (mensaje,tipo) => {
        Swal.fire({
            position: 'top-end',
            icon: `${tipo}`,
            title: `${mensaje}`,
            showConfirmButton: false,
            timer: 2000
          })
    }

    useEffect(()=>{
        if(Object.keys(paciente).length>0){
            setMascota(paciente.mascota);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setAlta(paciente.alta);
            setSintomas(paciente.sintomas);
        }
    },[paciente])

    const limpiarStates = () => {
        setMascota('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if([mascota,propietario,email,alta,sintomas].includes('')){
            swalMensaje('Todos los campos son obligatorios.','error')
            return;
        }

        const objetoPaciente = {
            mascota,
            propietario,
            email,
            alta,
            sintomas,
        }

        if(paciente.id){
            objetoPaciente.id = paciente.id;
            const listaActualizada = pacientes.map(p=>p.id === paciente.id ? objetoPaciente : p);
            setPaciente({});
            setPacientes(listaActualizada);
            swalMensaje('Paciente Editado correctamente.','success');
        }else{
            objetoPaciente.id = crypto.randomUUID();
            setPacientes([...pacientes,objetoPaciente]);
            swalMensaje('Paciente Agregado correctamente.','success');
        }


        limpiarStates();

        
    }

  return (
    <div className='md:w-1/2 lg:w-2/5 mb-8 mx-2'>
        <h1 className='font-black text-3xl text-center'>Seguimiento Pacientes</h1>
        <h2 className='text-center text-lg my-8'>Añade los pacientes y <span className='text-indigo-600 font-bold'>Administralos</span></h2>
        <form onSubmit={handleSubmit} className='bg-white py-2 px-7 rounded-lg shadow-xl'>

            <label htmlFor="mascota" className='block my-4 font-bold'>Nombre de la mascota</label>
            <input type="text" placeholder='Nombre de la mascota' id='mascota' className='w-full p-3 rounded-lg border' value={mascota} onChange={(e) => setMascota(e.target.value)}/>

            <label htmlFor="propietario" className='block my-4 font-bold'>Nombre del propietario</label>
            <input type="text" placeholder='Nombre del propietario' id='propietario' className='w-full p-3 rounded-lg border' value={propietario} onChange={(e) => setPropietario(e.target.value)}/>

            <label htmlFor="email" className='block my-4 font-bold'>Email</label>
            <input type="text" placeholder='Email del propietario' id='email' className='w-full p-3 rounded-lg border' value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="alta" className='block my-4 font-bold'>Alta</label>
            <input type="date" id='alta' className='w-full p-3 rounded-lg border' value={alta} onChange={(e) => setAlta(e.target.value)}/>

            <label htmlFor="sintomas" className='block my-4 font-bold'>Sintomas</label>
            <textarea id='sintomas' className='w-full p-3 rounded-lg border' value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>

            <button type='submit' className='w-full rounded-lg py-3 bg-indigo-600 text-white mt-5 text-lg mb-4 hover:bg-indigo-700'>{paciente.id ? 'Guardar Cambios' : 'Agregar Paciente'}</button>
            
        </form>
    </div>
  )
}

export default Formulario