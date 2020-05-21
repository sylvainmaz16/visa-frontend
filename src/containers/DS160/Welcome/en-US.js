import React from 'react'

function welcome({ agency }) {
  return (
    <>
      <div className="visa-global-heading-1">You should have the following documents available while you complete your DS-160:</div>
      <ul className="visa-global-ul-1">
        <li>
          <p>
            <span>Passport</span>
          </p>
        </li>
        <li>
          <p>
            <span>Travel itinerary, if you have already made travel arrangements.</span>
          </p>
        </li>
        <li>
          <p>
            <span>
              Dates of your last five visits or trips to the United States, if you have previously travelled to the United States. You may also be asked for your international travel history for the
              past five years.{' '}
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>Résumé or Curriculum Vitae - You may be required to provide information about your current and previous education and work history. </span>
          </p>
        </li>
        <li>
          <p>
            <span>Other Information - Some applicants, depending on the intended purpose of travel, will be asked to provide additional information when completing the DS-160.</span>
          </p>
        </li>
        {agency ? (
          <li>
            <p>
              <span>This Us Visa Appointment Premium Service will cost you $280. This includes the MRV Fee that needs to be paid the Department of State and the DS-160 Application Review.</span>
            </p>
          </li>
        ) : (
          <li>
            <p>
              <span>Our agency charges $165 + Government fee.</span>
            </p>
          </li>
        )}
      </ul>
      <div className="visa-global-heading-1">Some applicants will need to have additional information and documents handy while completing the DS-160:</div>
      <ul className="visa-global-ul-1">
        <li>
          <p>
            <span>
              Students and Exchange Visitors (F, J, and M): You will be asked to provide your SEVIS ID, which is printed on your I-20 or DS-2019, so you should have this form available when completing
              your DS-160. You also will be asked to provide the address of the school/program at which you intend to study. This information should also be on your I-20 or DS-2019 form.{' '}
            </span>
          </p>
        </li>
        <li>
          <p>
            <span>Petition-based Temporary Workers (H-1B, H-2, H-3, CW1, L, O, P, R, E2C): You should have a copy of your I-129 available when completing your DS-160. </span>
          </p>
        </li>
        <li>
          <p>
            <span>Other Temporary Workers: You will be asked for information about your employer, including the employer’s address, while completing your DS-160.</span>
          </p>
        </li>
      </ul>
    </>
  )
}
export default welcome
