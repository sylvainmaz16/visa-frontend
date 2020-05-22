import React from 'react'

function welcome({ agency }) {
  return (
    <>
      <div className="visa-global-heading-1"> Debe tener los siguientes documentos disponibles mientras completa su DS-160: </div>
      <ul className="visa-global-ul-1">
        <li>
          <p>
            <span>Passport</span>
          </p>
        </li>
        <li>
          <p>
            <span> Itinerario de viaje, si ya ha hecho los arreglos de viaje. </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Fechas de sus últimas cinco visitas o viajes a los Estados Unidos, si ha viajado previamente a los Estados Unidos. También es posible que se le solicite su historial de viajes
              internacionales durante los últimos cinco años.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span> Currículum Vitae o Curriculum Vitae: es posible que se le solicite que proporcione información sobre su educación y antecedentes laborales actuales y anteriores. </span>
          </p>
        </li>
        <li>
          <p>
            <span> Otra información - A algunos solicitantes, dependiendo del propósito del viaje, se les pedirá que proporcionen información adicional al completar el DS-160. </span>
          </p>
        </li>
        {agency ? (
          <li>
            <p>
              <span>
                Este servicio premium de cita con nosotros Visa le costará $ 280. Esto incluye la tarifa de MRV que debe pagarse al Departamento de Estado y la revisión de la solicitud DS-160.
              </span>
            </p>
          </li>
        ) : (
          <li>
            <p>
              <span> Nuestra agencia cobra $ 165 + tarifa gubernamental. </span>
            </p>
          </li>
        )}
      </ul>
      <div className="visa-global-heading-1"> Algunos solicitantes deberán tener a mano información y documentos adicionales mientras completan el DS-160: </div>
      <ul className="visa-global-ul-1">
        <li>
          <p>
            <span>
              Estudiantes y visitantes de intercambio (F, J y M): se le pedirá que proporcione su identificación SEVIS, que está impresa en su I-20 o DS-2019, por lo que debe tener esto formulario
              disponible al completar su DS-160. También se le pedirá que proporcione la dirección de la escuela / programa en el que piensa estudiar. Esta información también debe estar en su
              formulario I-20 o DS-2019.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span> Trabajadores temporales basados en una petición (H-1B, H-2, H-3, CW1, L, O, P, R, E2C): debe tener una copia de su I-129 disponible al completar su DS-160. </span>
          </p>
        </li>
        <li>
          <p>
            <span> Otros trabajadores temporales: Se le pedirá información sobre su empleador, incluida la dirección del empleador, mientras completa su DS-160. </span>
          </p>
        </li>
      </ul>
    </>
  )
}
export default welcome
