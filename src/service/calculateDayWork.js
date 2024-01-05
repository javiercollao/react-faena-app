export default function calcularDiaTrabajo(fechaInicioTrabajo, fechaEspecifica, diasTrabajo, diasDescanso) {
    const tiempoTranscurrido = fechaEspecifica - fechaInicioTrabajo;
    const diasTranscurridos = tiempoTranscurrido / (1000 * 60 * 60 * 24); // Convertir milisegundos a días
    
    // Calcular el número de periodos completos de trabajo + descanso
    const totalDiasPeriodo = diasTrabajo + diasDescanso;
    // const periodosCompletos = Math.floor(diasTranscurridos / totalDiasPeriodo);
    
    // Calcular el día dentro del periodo actual
    const diaEnPeriodo = diasTranscurridos % totalDiasPeriodo;
  
    if (diaEnPeriodo < diasTrabajo) {
        // Está en día de trabajo, calcular días restantes hasta el próximo descanso
        const diasRestantesDescanso = diasTrabajo - diaEnPeriodo;
        return `Para esta fecha estas trabajando y faltan ${diasRestantesDescanso} días para el próximo descanso`;
    } else {
        // Está en día de descanso, calcular días restantes hasta el próximo trabajo
        const diasRestantesTrabajo = totalDiasPeriodo - diaEnPeriodo;
        return `Para esta fecha estas descansando y faltan ${diasRestantesTrabajo} días para el próximo día de trabajo`;
    }
  }