import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './Components/Formulario'
import Cita from './Components/Citas'


function App() {

  //citas en local Storage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if(!citasIniciales){
    citasIniciales = []
  }


  //arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  //UseEffect se utiliza para realizar ciertas operaciones cuando el state cambia

  useEffect( () => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales]);
  

  //Funciones que tome las citas actuales y agregue una nueva

  const crearCita = (cita) => {
    guardarCitas([
      ...citas,
      cita
    ])
  }
  
  //Funcion que elimina citas por ID

  const handleSubmit = (id) => {
    const nuevaCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevaCitas)
  }
  
  //Mensaje condicional

  const titulo = citas.length === 0 
  ? "No hay citas"
  : "Administra tus citas"

  return (
    <Fragment>
      <h1>Veterinaria</h1>

      <div className="Container">
        <div className= "row">
          <div className="one-half column">
            <Formulario 
            crearCita={crearCita}/>
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
              key= {cita.id}
              cita={cita}
              handleSubmit= {handleSubmit}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}



export default App;
