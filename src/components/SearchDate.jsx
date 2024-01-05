import React, { useState } from 'react'
import Response from './Response'
import calcularDiaTrabajo from './../service/calculateDayWork'

export default function SearchDate() {
    const [date, setDate] = useState(Date.now())
    const [response, setResponse] = useState('')
    const [dateQtn, setDateQtn] = useState('')
    const [subida, setSubida] = useState(7)
    const [descanso, setDescanso] = useState(7)

    const handleDate = (e) => { setDate(e.target.value) }
    const handleDateQtn = (e) => { setDateQtn(e.target.value) }
    const handleSubida = (e) => { setSubida(e.target.value) }
    const handleDescanso = (e) => { setDescanso(e.target.value) }

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        const fechaInicio = new Date(date); 
        const fechaEspecifica = new Date(dateQtn);
        const resp = calcularDiaTrabajo(fechaInicio, fechaEspecifica, subida, descanso, setResponse)
        setResponse(resp) 
    }

  return (
    <> 
        <div className="row">
            <form className="col" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Fecha de subida: </span>
                    <input type="date" className="form-control" aria-describedby="basic-addon1" onChange={handleDate} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Fecha de consulta: </span>
                    <input type="date" className="form-control" aria-describedby="basic-addon1" onChange={handleDateQtn} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Dias de subida: </span>
                    <input type="number" className="form-control" aria-describedby="basic-addon1" onChange={handleSubida} value={subida} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Dias de descanso: </span>
                    <input type="number" className="form-control" aria-describedby="basic-addon1" onChange={handleDescanso} value={descanso}/>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon1">Buscar</button>
                </div>
            </form> 
        </div> 
        <Response response={response} />
    </>
  )
}
