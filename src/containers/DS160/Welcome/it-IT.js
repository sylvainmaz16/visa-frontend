
import React from 'react';
function welcome({ agency }) {
  return <>
    <div className = "visa-global-heading-1"> Dovresti avere i seguenti documenti disponibili mentre completi DS-160: </div>
    <ul className = "visa-global-ul-1">
      <li> <p> <span> Passaporto </ span> </ p> </ li>
      <li><p> <span> Itinerario di viaggio, se hai già preso accordi sul viaggio. </span> </p> </li>
      <li><p> <span> Date delle tue ultime cinque visite o viaggi negli Stati Uniti, se hai già viaggiato negli Stati Uniti. È possibile che ti venga richiesta la cronologia dei tuoi viaggi internazionali negli ultimi cinque anni. </span> </ p> </ li>
      <li><p> <span> Curriculum vitae o curriculum vitae - Potrebbe esserti richiesto di fornire informazioni sulla tua attuale e precedente istruzione e storia lavorativa. </span> </ p> </ li>
      <li><p> <span> Altre informazioni - Ad alcuni candidati, a seconda dello scopo previsto del viaggio, verrà chiesto di fornire ulteriori informazioni al completamento del DS-160. </span> </p> </li>
      {agency ? 
        <li><p> <span> Questo servizio premium di appuntamenti Visa per gli Stati Uniti ti costerà $ 280. Ciò include la Commissione MRV che deve essere pagata dal Dipartimento di Stato e la Revisione dell'applicazione DS-160. </span> </p> </li>
        :
        <li><p> <span> La nostra agenzia addebita $ 165 + spese governative (da $ 160 a $ 265 a seconda del tipo di visto). </span> </p> </li>
      }
    </ul>
    <div className = "visa-global-heading-1"> Alcuni candidati dovranno avere a portata di mano informazioni e documenti aggiuntivi durante il completamento del DS-160: </div>
    <ul className = "visa-global-ul-1">
      <li><p> <span> Studenti e visitatori di scambio (F, J e M): ti verrà chiesto di fornire il tuo ID SEVIS, che è stampato sul tuo I-20 o DS-2019, quindi dovresti avere questo modulo disponibile al completamento del DS-160. Ti verrà anche chiesto di fornire l'indirizzo della scuola / programma in cui intendi studiare. Queste informazioni dovrebbero anche essere sul tuo modulo I-20 o DS-2019. </ span> </ p> </ li>
      <li><p> <span> Lavoratori temporanei basati su petizione (H-1B, H-2, H-3, CW1, L, O, P, R, E2C): dovresti avere una copia del tuo I-129 disponibile al completamento del DS-160. </span> </ p> </ li>
      <li><p> <span> Altri lavoratori temporanei: ti verranno chieste informazioni sul tuo datore di lavoro, incluso l'indirizzo del datore di lavoro, mentre completi DS-160. </span> </p> </li>
    </ul>
  </>
}
export default welcome;