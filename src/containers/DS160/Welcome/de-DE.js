
import React from 'react';
function welcome({ agency }) {
  return <>
    <div className = "visa-global-heading-1"> Während Sie Ihren DS-160 fertigstellen, sollten die folgenden Dokumente verfügbar sein: </ div>
    <ul className="visa-global-ul-1">
      <li> <p> <span> Reisepass </ span> </ p> </ li>
      <li> <p> <span> Reiseroute, wenn Sie bereits Reisevorbereitungen getroffen haben. </ span> </ p> </ li>
      <li> <p> <span> Datum Ihrer letzten fünf Besuche oder Reisen in die USA, wenn Sie zuvor in die USA gereist sind. Möglicherweise werden Sie auch nach Ihrem internationalen Reiseverlauf der letzten fünf Jahre gefragt. </ span> </ p> </ li>
      <li> <p> <span> Lebenslauf oder Lebenslauf - Möglicherweise müssen Sie Angaben zu Ihrer aktuellen und früheren Ausbildung und Arbeitserfahrung machen. </ span> </ p> </ li>
      <li> <p> <span> Weitere Informationen - Je nach dem beabsichtigten Reisezweck werden einige Antragsteller gebeten, beim Ausfüllen des DS-160 zusätzliche Informationen anzugeben. </ span> </ p> </ li>
      {agency ? 
        <li> <p> <span> Dieser Premium-Service für US-Visa-Termine kostet Sie 280 USD. Dies beinhaltet die MRV-Gebühr, die an das Außenministerium gezahlt werden muss, und die DS-160-Antragsprüfung. </span> </ p> </ li>
         :
        <li> <p> <span> Unsere Agentur berechnet 165 USD + Regierungsgebühr (von 160 USD bis 265 USD, abhängig von der Art des Visums). </ span> </ p> </ li>
      }
    </ul>
    <div className = "visa-global-heading-1"> Einige Antragsteller benötigen zusätzliche Informationen und Dokumente, um das DS-160 ausfüllen zu können: </ div>
    <ul className = "visa-global-ul-1">
      <li> <p> <span> Studenten und Austauschbesucher (F, J und M): Sie werden gebeten, Ihre SEVIS-ID anzugeben, die auf Ihrer I-20 oder DS-2019 gedruckt ist. Sie sollten diese also haben Formular verfügbar, wenn Sie Ihren DS-160 ausfüllen. Sie werden auch gebeten, die Adresse der Schule / des Programms anzugeben, an der / dem Sie studieren möchten. Diese Informationen sollten sich auch auf Ihrem I-20- oder DS-2019-Formular befinden. </ span> </ p> </ li>
      <li> <p> <span> Zeitarbeitskräfte auf Antrag (H-1B, H-2, H-3, KW1, L, O, P, R, E2C): Sie sollten eine Kopie Ihrer I-129 haben verfügbar, wenn Sie Ihren DS-160 vervollständigen. </ span> </ p> </ li>
      <li> <p> <span> Andere Zeitarbeiter: Sie werden beim Ausfüllen Ihres DS-160 um Informationen zu Ihrem Arbeitgeber gebeten, einschließlich der Adresse des Arbeitgebers. </ span> </ p> </ li>
    </ ul>
  </>
}
export default welcome;