import React from 'react'

function welcome({ agency }) {
  return (
    <>
      <div className="visa-global-heading-1">Comment Appliquer?</div>
      <ul className="visa-global-ul-1">
        <li>
          <p>
            <span>
              1. Remplissez la <a href="https://ds-160.us/ds-160/application-form">Demande Électronique DS160</a> et effectuez votre paiement.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>2. Une fois votre demande soumise, vous recevrez par e-mail votre page de confirmation DS-160 avec les instructions.</span>
          </p>
        </li>
        <li>
          <p>
            <span>3. Consultez les instructions spécifiques sur le site Web de l'ambassade ou du consulat américain de votre pays et payez les frais MRV en conséquence.</span>
          </p>
        </li>
        <li>
          <p>
            <span>4. Planifiez votre rendez-vous pour un entretien de visa.</span>
          </p>
        </li>
      </ul>
      <div className="visa-global-heading-1">Vous devez disposer des documents suivants pendant que vous remplissez votre DS-160:</div>
      <ul className="visa-global-ul-1">
        <li>
          <p>
            <span>Passeport</span>
          </p>
        </li>
        <li>
          <p>
            <span> Itinéraire de voyage, si vous avez déjà organisé votre voyage. </span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Dates de vos cinq dernières visites ou voyages aux États-Unis, si vous avez déjà voyagé aux États-Unis. On peut également vous demander votre historique de voyages internationaux au
              cours des cinq dernières années.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span> Résumé ou Curriculum Vitae - Vous devrez peut-être fournir des informations sur votre formation actuelle et précédente et vos antécédents professionnels. </span>
          </p>
        </li>
        <li>
          <p>
            <span> Autres informations - Certains candidats, en fonction du but du voyage, seront invités à fournir des informations supplémentaires lors de la rédaction du DS-160. </span>
          </p>
        </li>
        {agency && (
          <li>
            <p>
              <span>
                Ce service premium de rendez-vous de visa américain vous coûtera 280 $. Cela comprend les frais MRV qui doivent être payés par le Département d'État et l'examen de la demande DS-160.
              </span>
            </p>
          </li>
        )}
      </ul>
      <div className="visa-global-heading-1"> Certains candidats devront avoir des informations et des documents supplémentaires à portée de main lors de la rédaction du DS-160: </div>
      <ul className="visa-global-ul-1">
        <li>
          <p>
            <span>
              Étudiants et visiteurs d'échange (F, J et M): Il vous sera demandé de fournir votre ID SEVIS, qui est imprimé sur votre I-20 ou DS-2019, vous devriez donc l'avoir formulaire disponible
              lorsque vous remplissez votre DS-160. Il vous sera également demandé de fournir l'adresse de l'école / du programme dans lequel vous avez l'intention d'étudier. Ces informations doivent
              également figurer sur votre formulaire I-20 ou DS-2019.
            </span>
          </p>
        </li>
        <li>
          <p>
            <span> Travailleurs temporaires sur pétition (H-1B, H-2, H-3, CW1, L, O, P, R, E2C): Vous devez avoir une copie de votre I-129 disponible lorsque vous complétez votre DS-160. </span>
          </p>
        </li>
        <li>
          <p>
            <span> Autres travailleurs temporaires: il vous sera demandé des informations sur votre employeur, y compris son adresse, lors de la rédaction de votre DS-160. </span>
          </p>
        </li>
      </ul>
    </>
  )
}
export default welcome
