import React from 'react';

const Cita = ({cita, eliminarCita}) =>  ( 
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">Mascota: {cita.mascota}</h3>
            <p className="card-text"><span className="font-weight-bold">Nombre Dueño: </span>{cita.propietario}</p>
            <p className="card-text"><span className="font-weight-bold">Fecha: </span>{cita.fecha}</p>
            <p className="card-text"><span className="font-weight-bold">Hora: </span>{cita.hora}</p>
            <p className="card-text"><span className="font-weight-bold">Sintomas: </span></p>
            <p className="card-text">{cita.sintomas}</p>
            
            <button
                className="btn btn-danger rounded-pill font-weight-bold"
                onClick={() => eliminarCita(cita.id)}
            >Borarr &times;</button>
        </div>
    </div>
 );

 
export default Cita;