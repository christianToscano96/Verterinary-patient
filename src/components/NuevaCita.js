import React, { Component } from 'react';

class NuevaCita extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card-mt-10 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    <form>
                         <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                />
                            </div>
                         </div>{/*form-group */}

                         <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Dueño
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño Mascota"
                                    name="propieario"
                                />
                            </div>
                         </div>{/*form-group */}

                         <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4 ">
                                <input
                                    type="date"
                                    className="form-control "
                                    name="fecha"
                                />
                            </div>
                         
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                />
                            </div>
                         </div>{/*form-group */}

                         <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Sintomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    placeholder="Describe los sintomas de la mascota"
                                    name="sintomas"
                                ></textarea>
                               
                            </div>
                         </div>{/*form-group */}
                    </form>
                </div>
            </div>
         );
    }
}
 
export default NuevaCita;