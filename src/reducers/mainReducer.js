import { API_GITHUB, DS160 } from '../actions/types'
import objectAssignDeep from 'object-assign-deep'

const initialState = {
  loading: false,
  bWaitLoadFromDB: false,

  applicationId: null,

  email: '',
  step_index: 1,
  ds160: {
    // step-1
    interview_location: null,

    // step-2
    b_agreement_2_1: false,
    b_agreement_2_2: false,
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
      surname: null,
      given_name: null,
      relationship: null,

      company: null
    },

    form_prev_travel_info: {
      b_ever_been_in_US: null,
      prev_visit_info: {
          date: null,
          length_of_stay: {
              period: null,
              unit: null
          }
      },
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
          b_same_as_home: null,
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
      email: null,
      social_media_info: {
          platform: null,
          identifier: null
      }
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
          given_name: null,
          birthday: null,
          b_in_US: null,
          status: null
      },
      mother: {
          surname: null,
          given_name: null,
          birthday: null,
          b_in_US: null,
          status: null
      },
      b_other_relative: null,
      other: {
          surname: null,
          given_name: null,
          relationship: null,
          status: null
      },
      b_more_relatives: null,

      spouse: {
        surname: null,
        given_name: null,
        date_birth: null,
        place_of_birth: {
          city: null,
          country: null
        },
        address: {
          street_addr1: null,
          street_addr2: null,
          city: null,
          state: null,
          zip_code: null,
          country: null
        }
      }
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
              { radio: null, text: null},
              { radio: null, text: null},
              { radio: null, text: null},
              { radio: null, text: null},
              { radio: null, text: null},
              { radio: null, text: null},
              { radio: null, text: null},
              { radio: null, text: null},
              { radio: null, text: null},
              { radio: null, text: null},
              { radio: null, text: null},
          ]
      },
      part4: {
          array: [
              { radio: null, text: null},
              { radio: null, text: null},
              { radio: null, text: null},
              { radio: null, text: null},
          ]
      },
      part5: {
          array: [
              { radio: null, text: null},
              { radio: null, text: null},
              { radio: null, text: null},
              { radio: null, text: null},
          ]
      }
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
        bWaitLoadFromDB: true
      };
    }
    case DS160.DS160_GET_SUCCESS: {
      console.log('reducer: ', action.data)
      return {
        ...state,
        bWaitLoadFromDB: false,
        step_index: action.data.step_index,
        applicationId: action.data.applicationId,
        ds160: action.data.data
      };
    }
    case DS160.DS160_GET_FAILURE: {
      return {
        ...state,
        bWaitLoadFromDB: false
      };
    }
    case DS160.DS160_SAVE_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case DS160.DS160_SAVE_SUCCESS: {
      console.log('reducer: ', action.data)
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
      console.log(action.values)
      return {
        ...state,
        ds160: objectAssignDeep(state.ds160, action.values)
      }
    }
    case DS160.DS160_INIT_STATE: {
      console.log('RESET')
      return {
        ...initialState
      }
    }
    /*
    case API_GITHUB.PROFILE_GET_REQUEST: {
      return {
        ...state,
        is_loading: true,
      }
    }
    case API_GITHUB.PROFILE_GET_SUCCESS: {
      return Object.assign({}, state, {
        profile: { ...action.data },
        is_loading: false,
      })
    }
    case API_GITHUB.PROFILE_GET_FAILURE: {
      return {
        ...state,
        is_loading: false,
      }
    }*/
    default: {
      return state
    }
  }
}

export default mainReducer
