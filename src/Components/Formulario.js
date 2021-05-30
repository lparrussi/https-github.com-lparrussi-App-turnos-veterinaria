import React, {Fragment, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';



const Formulario = ({crearCita}) => {

    //crear state de Citas

    const[ cita, actualizarCita] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora:"",
        sintomas: ""
    })

    //creamos otro state

    const [ error, actualizarError ] = useState(false)

    //Funcion que se ejecuta cada vez que el usuario escribe en el input

    const handleOnChange = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validaciones
        if(mascota.trim() === '' || 
        propietario.trim() === ''||
        fecha.trim() === ''||
        hora.trim() === ''||
        sintomas.trim() === ''){
            actualizarError(true)
            return
        }

        //Eliminar mensaje de error
        actualizarError(false)

        //asignar un ID
        cita.id = uuidv4()


        //Crear la cita
        crearCita(cita)

        //Reiniciar el form(reinicia el state)
        actualizarCita({
        mascota: "",
        propietario: "",
        fecha: "",
        hora:"",
        sintomas: ""
        })
    }

    //extraer los valores

    const { mascota, propietario, fecha, hora, sintomas } = cita;



    return (
        <Fragment>
             <h2>Crear cita</h2>

             {error 
             ? <p className='alerta-error'>Todos los campos deben ser completados</p>
             : null}

             <form
             onSubmit= {handleSubmit}
             >
                 <label>Mascota</label>
                 <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange= {handleOnChange}
                    value= {mascota}
                 />
                 <label>Nombre dueño</label>
                 <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange= {handleOnChange}
                    value= {propietario}
                    
                 />
                 <label>Fecha</label>
                 <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange= {handleOnChange}
                    value= {fecha}
                 />
                 <label>Hora</label>
                 <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange= {handleOnChange}
                    value= {hora}
                 />
                  <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange= {handleOnChange}
                    value= {sintomas}>
                    
                </textarea> 
                <button 
                type="submit"
                className="u-full-width button-primary"
                >Agregar cita</button>
             </form>

        </Fragment>
    )
}



export default Formulario