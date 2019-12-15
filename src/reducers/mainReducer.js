import { API_GITHUB, DS160 } from '../actions/types'
import objectAssignDeep from 'object-assign-deep'

const initialState = {
  loading: false,

  applicationId: null,

  email: '',
  step_index: 1,
  loading_pay: false,
  paid: false,
  checkout_result: null,
  ds160: {
    language: 'en-US',
    // step-1
    interview_location: null,

    // step-2
    b_agreement_2_1: false,
    b_agreement_2_2: false,
    sq_type: null,
    sq_answer: null,
    purpose_of_trip: null,

    form_personal_info: {
      surname: null,
      given_name: null,

      b_ever_used_other_names: null,
      used_other_name: {
        surname: null,
        given_name: null
      },
      b_has_telecode_of_name: null,
      telecode_of_name: {
        surname: null,
        given_name: null
      },
      sex: null,
      martial_status: null,
      martial_other_explain: null,
      date_birth: null,  //not
      place_of_birth: {
        city: null,
        state: null,
        country: null,
      },
      nationality: null,
      b_more_nationality: null,
      other_nationality: null,
      b_has_other_nationality_passport: null,
      other_nationality_passport: null,
      b_permanent_resident_other_than_nationality: null,
      permanent_resident_country: null,
      national_id_number: null,
      social_security_number: null,
      tax_id_number: null,
    },

    form_travel: {
      purpose_of_trip: null,
      other_purpose_of_trip: null,
      purpose_info_type: null,
      purpose_info: {
        surname: null,
        given_name: null,
        company: null,
        petition: null
      },
      b_specific_travel_plan: false,

      travel_plan: {
        date_of_arrival: null,
        length_of_stay: {
          length: null,
          period: null
        },
      },

      travel_plan_specific: {
        date_of_arrival: null,
        arrival_flight: null,
        arrival_city: null,
        date_of_departure: null,
        departure_flight: null,
        departure_city: null,
        visit_location: null,
      },

      address_you_will_stay: {
        street_addr1: null,
        street_addr2: null,
        city: null,
        state: null,
        zip_code: null
      },

      paying_person_for_trip: null,
      paying_org_info: {
        name: null,
        tel_number: null,
        relationship: null,
      },
      paying_person_info: {
        surname: null,
        given_name: null,
        tel_number: null,
        email: null,
        relationship: null, // Child (C), Parent (P), Spouse (S), Other Relative (R), Friend (F), Other (O)
        b_same_address: null,
        address: {
          street_addr1: null,
          street_addr2: null,
          city: null,
          state: null,
          zip_code: null,
          country: null
        },
      },
    },

    form_travel_company: {
      b_other_person_travel_with: null,
      b_part_of_group: null,
      people: [{
        surname: null,
        given_name: null,
        relationship: null,
      }],
      company: null
    },

    form_prev_travel_info: {
      b_ever_been_in_US: null,
      prev_visit_info: [{
        date: null,
        length_of_stay: {
          period: null,
          unit: null
        }
      }],
      b_ever_hold_Driver_License: null,
      prev_DL_info: {
        number: null,
        state: null
      },
      b_ever_been_issued_US_Visa: null,
      US_Visa: {
        date: null,
        number: null,
        b_same_type_visa: null,
        b_same_cntry_visa: null,
        b_been_ten_printed: null,
        b_ever_been_lost: null,
        lost_info: {
          year: null,
          explain: null
        },
        b_ever_been_cancelled: null,
        cancel_info: {
          explain: null
        }
      },
      b_ever_been_refused_US_Visa: null,
      refuse_info: {
        explain: null
      },
      b_ever_been_denied_travel_auth: null,
      denied_info: {
        explain: null
      },
      b_petition: null,
      petition_info: {
        explain: null
      }
    },

    form_addr_and_phone: {
      home_addr: {
        street_addr1: null,
        street_addr2: null,
        city: null,
        state: null,
        zip_code: null,
        country: null
      },
      mail_addr: {
        b_diff_with_home: false,
        info: {
          street_addr1: null,
          street_addr2: null,
          city: null,
          state: null,
          zip_code: null,
          country: null
        },
      },
      phone_info: {
        home: null,
        mobile: null,
        work: null,
      },
      b_additional_phones: null,
      additional_phones: [null],
      email: null,
      b_additional_emails: null,
      additional_emails: [null],
      social_media_info: [{
        platform: null,
        identifier: null
      }],
      b_additional_social_media: null,
      additional_social_media: [{
        platform: null,
        identifier: null
      }]
    },

    form_passport: {
      doc_type: null,
      doc_type_explain: null,
      doc_number: null,
      book_number: null,
      doc_authority: null,
      issued_location: {
        city: null,
        state: null,
        country: null
      },
      issuance_date: null,
      expiration_date: null,
      b_ever_lost_passport: null,
      lost_info: {
        number: null,
        country: null,
        explain: null
      }
    },

    form_contact: {
      surname: null,
      given_name: null,
      organization: null,
      relationship: null,
      address: {
        street_addr1: null,
        street_addr2: null,
        city: null,
        state: null,
        zip_code: null,
      },
      tel_number: null,
      email: null,
    },

    form_family: {
      father: {
        surname: null,
        surname_NA: false,
        given_name: null,
        given_name_NA: false,
        birthday: null,
        birthday_NA: false,
        b_in_US: null,
        status: null
      },
      mother: {
        surname: null,
        surname_NA: null,
        given_name: null,
        given_name_NA: null,
        birthday: null,
        birthday_NA: null,
        b_in_US: null,
        status: null
      },
      b_other_relative: null,
      others: [{
        surname: null,
        given_name: null,
        relationship: null,
        status: null
      }],
      b_more_relatives: null,

      spouse: {
        surname: null,
        given_name: null,
        birthday: null,
        nationality: null,
        place_of_birth: {
          city: null,
          country: null
        },
        address_type: null,
        address: {
          street_addr1: null,
          street_addr2: null,
          city: null,
          state: null,
          zip_code: null,
          country: null
        }
      },
      former_spouse_number: null,
      former_spouse: [{
        surname: null,
        given_name: null,
        birthday: null,
        nationality: null,
        place_of_birth: {
          city: null,
          country: null
        },
        marriage_date: null,
        end_date: null,
        end_explain: null,
        end_country: null,
        address: {
          street_addr1: null,
          street_addr2: null,
          city: null,
          state: null,
          zip_code: null,
          country: null
        }
      }]
    },

    form_work_or_edu: {
      occupation: null,
      specify_other_explain: null,
      name: null,
      address: {
        street_addr1: null,
        street_addr2: null,
        city: null,
        state: null,
        zip_code: null,
        tel_number: null,
        country: null
      },
      start_date: null,
      monthly_income: null,
      duty_explain: null
    },

    form_prev_work_or_edu: {
      b_previously_employed: null,
      emp_info: {
        name: null,
        address: {
          street_addr1: null,
          street_addr2: null,
          city: null,
          state: null,
          zip_code: null,
          tel_number: null,
          country: null
        },
        job_title: null,
        supervisor: {
          surname: null,
          given_name: null,
        },
        date_from: null,
        date_to: null,
        duty_explain: null
      },
      b_edu_secondary_level: null,
      edu_info: {
        name: null,
        address: {
          street_addr1: null,
          street_addr2: null,
          city: null,
          state: null,
          zip_code: null,
          tel_number: null,
          country: null
        },
        course: null,
        date_from: null,
        date_to: null,
      }
    },

    form_additional_work: {
      b_belong_to_clan: null,
      clan_name: null,
      languages: [""],
      b_travel_last_five_years: null,
      countries: [""],
      b_belong_to_org: null,
      organizations: [""],
      b_taliban: null,
      taliban_explain: null,
      b_special_skill: null,
      special_skill_explain: null,
      b_military: null,
      militaries: [
        {
          country: null,
          service: null,
          rank: null,
          speciality: null,
          date_from: null,
          date_to: null,
        },
      ],
      b_rebel_group: null,
      rebel_group_explain: null
    },

    form_security: {
      part1: {
        b_disease: null,
        disease_explain: null,
        b_disorder: null,
        disorder_explain: null,
        b_druguser: null,
        druguser_explain: null,
      },
      part2: {
        b_Arrested: null,
        arrested_explain: null,
        b_ControlledSubstances: null,
        controlled_substances_explain: null,
        b_Prostitution: null,
        prostitution_explain: null,
        b_MoneyLaundering: null,
        money_laundering_explain: null,
        b_HumanTrafficking: null,
        human_trafficking_explain: null,
        b_AssistedSeveral: null,
        assisted_several_explain: null,
        b_human_related: null,
        human_related_explain: null,
      },
      part3: {
        array: [
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
        ]
      },
      part4: {
        array: [
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
        ]
      },
      part5: {
        array: [
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
          { radio: null, text: null },
        ]
      }
    },
    form_SEVIS: {

      point_of_contact: [{
        surname: null,
        given_name: null,
        address: {
          street_addr1: null,
          street_addr2: null,
          city: null,
          state: null,
          zip_code: null
        },
        tel_number: null,
        email: null
      }, {
        surname: null,
        given_name: null,
        address: {
          street_addr1: null,
          street_addr2: null,
          city: null,
          state: null,
          zip_code: null
        },
        tel_number: null,
        email: null
      }],

      id: null,
      program_number: null,
      principal_id: null,
      b_study_in_US: null,
      school_info: {
        name: null,
        course: null,
        address: {
          street_addr1: null,
          street_addr2: null,
          city: null,
          state: null,
          zip_code: null
        }
      }
    },
    form_intracompany: {
      petition: null,
      name_filed_petition: null,
      employer: null,
      address: {
        street_addr1: null,
        street_addr2: null,
        city: null,
        state: null,
        zip_code: null,
        country: null,
        tel_number: null
      },
      tel_number: null,
      income: null
    },
    form_crew_visa: {
      job_title: null,
      company_name: null,
      company_tel: null,

      b_position: null,
      position_info: {
        agency_name: null,
        surname: null,
        given_name: null,
        address: {
          street_addr1: null,
          street_addr2: null,
          city: null,
          state: null,
          zip_code: null,
          country: null,
          tel_number: null
        }
      },

      b_vessel: null,
      vessel_info: {
        vessel_name: null,
        vessel_id: null
      }
    },
    form_photo: {
      b_photo: null,
      url: null,
      FGMC: null,
      HTP: null,
      payer: {
        surname: null,
        given_name: null,
        phone: null,
        passport: null,
        email: null,
        address: {
          street_addr1: null,
          street_addr2: null,
          city: null,
          state: null,
          zip_code: null,
          tel_number: null,
          country: null
        }
      },
      b_info_confirm: null,
      b_certify: null,
      fullname_sign: null,
      signature: null,
    },
    form_e_sign: {
      b_assist: null,
      assist_info: {
        preparer: {
          surname: null,
          given_name: null,
        },
        organization: {
          name: null,
        },
        address: {
          street_addr1: null,
          street_addr2: null,
          city: null,
          state: null,
          zip_code: null,
          country: null
        },
        relationship: null
      },
      passport_number: null
    }
  }
}
function mainReducer(state = initialState, action) {
  switch (action.type) {
    case DS160.DS160_GET_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case DS160.DS160_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        step_index: action.data.step_index,
        applicationId: action.applicationId,
        ds160: action.data.data
      };
    }
    case DS160.DS160_GET_FAILURE: {
      return {
        ...initialState,
        loading: false
      };
    }
    case DS160.DS160_SAVE_REQUEST: {
      return {
        ...state,
        loading: true,
        completed: action.payload.completed
      };
    }
    case DS160.DS160_SAVE_SUCCESS: {
      return {
        ...state,
        loading: false,
        applicationId: action.data._id
      };
    }
    case DS160.DS160_SAVE_FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    case DS160.DS160_NEXT_STEP: {
      return {
        ...state,
        step_index: state.step_index + 1
      }
    }
    case DS160.DS160_PREV_STEP: {
      return {
        ...state,
        step_index: state.step_index - 1
      }
    }
    case DS160.DS160_UPDATE_VALUES: {
      return {
        ...state,
        ds160: objectAssignDeep(state.ds160, action.values)
      }
    }
    case DS160.DS160_CHANGE_LANGUAGE: {
      return {
        ...state,
        ds160: {
          ...state.ds160,
          language: action.lang
        }
      }
    }
    case DS160.DS160_INIT_STATE: {
      console.log(action.initValue)
      return {
        ...initialState,
        ...action.initValue,
        ds160: {
          ...initialState.ds160,
          ...action.initValue.ds160
        }
      }
    }
    case DS160.DS160_CHECKOUT_REQUEST: {
      return {
        ...state,
        loading_pay: true
      }
    }
    case DS160.DS160_CHECKOUT_SUCCESS: {
      
      return {
        ...state,
        loading_pay: false,
        paid: action.data.response == 1 ? true : false,
        checkout_result: action.data.response == 1 ? true : false,
      }
    }
    case DS160.DS160_CHECKOUT_FAILURE: {
      return {
        ...state,
        loading_pay: false,
        paid: false,
        checkout_result: false
      }
    }

    case DS160.RESET_CHECKOUT_RESULT: {
      return {
        ...state,
        checkout_result: null
      }
    }
    default: {
      return state
    }
  }
}

export default mainReducer
