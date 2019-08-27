import { API_GITHUB, DS160 } from '../actions/types'

const initialState = {
  loading: false,
  bWaitLoadFromDB: false,

  applicationId: null,

  email: '',
  step_index: 1,
  ds160: {
    // step-1
    interview_location: undefined,

    // step-2
    b_agreement_2_1: false,
    b_agreement_2_2: false,
    purpose_of_trip: undefined,

    form_personal_info: {
      surname: undefined,
      given_name: undefined,

      b_ever_used_other_names: undefined,
      used_other_name: {
          surname: undefined,
          given_name: undefined
      },
      b_has_telecode_of_name: undefined,
      telecode_of_name: {
          surname: undefined,
          given_name: undefined
      },
      sex: undefined,
      martial_status: undefined,
      martial_other_explain: undefined,
      date_birth: undefined,  //not
      place_of_birth: {
          city: undefined,
          state: undefined,
          country: undefined,
      },
      nationality: undefined,
      b_more_nationality: undefined,
      other_nationality: undefined,
      b_has_other_nationality_passport: undefined,
      other_nationality_passport: undefined,
      b_permanent_resident_other_than_nationality: undefined,
      permanent_resident_country: undefined,
      national_id_number: undefined,
      b_national_id_number_NA: undefined,
      social_security_number: undefined,
      // social_security_number: {
      //     ssn1: undefined,
      //     ssn2: undefined,
      //     ssn3: undefined
      // },
      b_social_security_number_NA: undefined,
      tax_id_number: undefined,
      b_tax_id_number_NA: undefined,
    },

    form_travel: {
      purpose_of_trip: undefined,
      other_purpose_of_trip: undefined,
      purpose_info_type: undefined,
      purpose_info: {
          surname: undefined,
          given_name: undefined,
          company: undefined,
          petition: undefined
      },
      b_specific_travel_plan: false,

      travel_plan: {
          date_of_arrival: undefined,
          length_of_stay: {
              length: undefined,
              period: undefined
          },
      },
  
      travel_plan_specific: {
          date_of_arrival: undefined,
          arrival_flight: undefined,
          arrival_city: undefined,
          date_of_departure: undefined,
          departure_flight: undefined,
          departure_city: undefined,
          visit_location: undefined,
      },
  
      address_you_will_stay: {
          street_addr1: undefined,
          street_addr2: undefined,
          city: undefined,
          state: undefined,
          zip_code: undefined
      },

      paying_person_for_trip: undefined,
      paying_org_info: {
        name: undefined,
        tel_number: undefined,
        relationship: undefined,
      },
      paying_person_info: {
          surname: undefined,
          given_name: undefined,
          tel_number: undefined,
          email: undefined,
          relationship: undefined, // Child (C), Parent (P), Spouse (S), Other Relative (R), Friend (F), Other (O)
          b_same_address: undefined,
          address: {
              street_addr1: undefined,
              street_addr2: undefined,
              city: undefined,
              b_state_NA: false,
              state: undefined,
              b_zip_code_NA: false,
              zip_code: undefined,
              country: undefined
          },
      },
    },

    form_travel_company: {
      b_other_person_travel_with: undefined,
      b_part_of_group: undefined,
      surname: undefined,
      given_name: undefined,
      relationship: undefined,

      company: undefined
    },

    form_prev_travel_info: {
      b_ever_been_in_US: undefined,
      prev_visit_info: {
          date: undefined,
          length_of_stay: {
              period: undefined,
              unit: undefined
          }
      },
      b_ever_hold_Driver_License: undefined,
      prev_DL_info: {
          number: undefined,
          b_number_NA: false,
          state: undefined
      },
      b_ever_been_issued_US_Visa: undefined,
      US_Visa: {
          date: undefined,
          number: undefined,
          number_NA: undefined,   // deprecated .. instead of this use number == ''
          b_same_type_visa: undefined,
          b_same_cntry_visa: undefined,
          b_been_ten_printed: undefined,
          b_ever_been_lost: undefined,
          lost_info: {
              year: undefined,
              explain: undefined
          },
          b_ever_been_cancelled: undefined,
          cancel_info: {
              explain: undefined
          }
      },
      b_ever_been_refused_US_Visa: undefined,
      refuse_info: {
          explain: undefined
      },
      b_ever_been_denied_travel_auth: undefined,
      denied_info: {
          explain: undefined
      },
      b_petition: undefined,
      petition_info: {
          explain: undefined
      }
    },

    form_addr_and_phone: {
      home_addr: {
          street_addr1: undefined,
          street_addr2: undefined,
          city: undefined,
          state: undefined,
          b_state_NA: undefined,
          zip_code: undefined,
          b_zip_code_NA: undefined,
          country: undefined
      },
      mail_addr: {
          b_same_as_home: undefined,
          info: {
              street_addr1: undefined,
              street_addr2: undefined,
              city: undefined,
              state: undefined,
              b_state_NA: undefined,
              zip_code: undefined,
              b_zip_code_NA: undefined,
              country: undefined
          },
      },
      phone_info: {
          home: undefined,
          mobile: undefined,
          mobile_NA: undefined,   // deprecated.. instead of this, use mobile == ''
          work: undefined,
          work_NA: undefined
      },
      email: undefined,
      social_media_info: {
          platform: undefined,
          identifier: undefined
      }
    },

    form_passport: {
      doc_type: undefined,
      doc_type_explain: undefined,
      doc_number: undefined,
      book_number: undefined,
      book_number_NA: undefined,
      doc_authority: undefined,
      issued_location: {
          city: undefined,
          state: undefined,
          country: undefined
      },
      issuance_date: undefined,
      expiration_date: undefined,
      b_expiration_date_NA: undefined,
      b_ever_lost_passport: undefined,
      lost_info: {
          number: undefined,
          number_NA: undefined,
          country: undefined,
          explain: undefined
      }
    },

    form_contact: {
      surname: undefined,
      given_name: undefined,
      name_NA: undefined,
      organization: undefined,
      organization_NA: undefined,
      relationship: undefined,
      address: {
          street_addr1: undefined,
          street_addr2: undefined,
          city: undefined,
          state: undefined,
          zip_code: undefined,
      },
      tel_number: undefined,
      email: undefined,
      email_NA: undefined,
      addr_and_phone_NA: undefined
    },

    form_family: {
      father: {
          surname: undefined,
          surname_NA: undefined,
          given_name: undefined,
          given_name_NA: undefined,
          birthday: undefined,
          birthday_NA: undefined,
          b_in_US: undefined,
          status: undefined
      },
      mother: {
          surname: undefined,
          surname_NA: undefined,
          given_name: undefined,
          given_name_NA: undefined,
          birthday: undefined,
          birthday_NA: undefined,
          b_in_US: undefined,
          status: undefined
      },
      b_other_relative: undefined,
      other: {
          surname: undefined,
          given_name: undefined,
          relationship: undefined,
          status: undefined
      },
      b_more_relatives: undefined,

      spouse: {
        surname: undefined,
        given_name: undefined,
        date_birth: undefined,
        place_of_birth: {
          city: undefined,
          country: undefined
        },
        address: {
          street_addr1: undefined,
          street_addr2: undefined,
          city: undefined,
          state: undefined,
          zip_code: undefined,
          country: undefined
        }
      }
    },

    form_work_or_edu: {
      occupation: undefined,
      specify_other_explain: undefined,
      name: undefined,
      address: {
          street_addr1: undefined,
          street_addr2: undefined,
          city: undefined,
          state: undefined,
          b_state_NA: false,
          zip_code: undefined,
          b_zip_code_NA: true,
          tel_number: undefined,
          country: undefined
      },
      start_date: undefined,
      monthly_income: undefined,
      monthly_income_NA: undefined,
      duty_explain: undefined
    },

    form_prev_work_or_edu: {
      b_previously_employed: undefined,
      emp_info: {
          name: undefined,
          address: {
            street_addr1: undefined,
            street_addr2: undefined,
            city: undefined,
            state: undefined,
            b_state_NA: false,
            zip_code: undefined,
            b_zip_code_NA: true,
            tel_number: undefined,
            country: undefined
          },
          job_title: undefined,
          supervisor: {
              surname: undefined,
              surname_NA: false,
              given_name: undefined,
              given_name_NA: false
          },
          date_from: undefined,
          date_to: undefined,
          duty_explain: undefined
      },
      b_edu_secondary_level: undefined,
      edu_info: {
          name: undefined,
          address: {
            street_addr1: undefined,
            street_addr2: undefined,
            city: undefined,
            state: undefined,
            b_state_NA: false,
            zip_code: undefined,
            b_zip_code_NA: true,
            tel_number: undefined,
            country: undefined
          },
          course: undefined,
          date_from: undefined,
          date_to: undefined,
      }
    },

    form_additional_work: {
      b_belong_to_clan: undefined,
      clan_name: undefined,
      languages: [""],
      b_travel_last_five_years: undefined,
      countries: [""],
      b_belong_to_org: undefined,
      organizations: [""],
      b_special_skill: undefined,
      special_skill_explain: undefined,
      b_military: undefined,
      militaries: [
          {
              country: undefined,
              service: undefined,
              rank: undefined,
              speciality: undefined,
              date_from: undefined,
              date_to: undefined,
          },
      ],
      b_rebel_group: undefined,
      rebel_group_explain: undefined
    },

    form_security: {
      part1: {
          b_disease: undefined,
          disease_explain: undefined,
          b_disorder: undefined,
          disorder_explain: undefined,
          b_druguser: undefined,
          druguser_explain: undefined,
      },
      part2: {
          b_Arrested: undefined,
          arrested_explain: undefined,
          b_ControlledSubstances: undefined,
          controlled_substances_explain: undefined,
          b_Prostitution: undefined,
          prostitution_explain: undefined,
          b_MoneyLaundering: undefined,
          money_laundering_explain: undefined,
          b_HumanTrafficking: undefined,
          human_trafficking_explain: undefined,
          b_AssistedSeveral: undefined,
          assisted_several_explain: undefined,
          b_human_related: undefined,
          human_related_explain: undefined,
      },
      part3: {
          array: [
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
          ]
      },
      part4: {
          array: [
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
          ]
      },
      part5: {
          array: [
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
              { radio: undefined, text: undefined},
          ]
      }
    },
    form_crew_visa: {
      job_title: undefined,
      company_name: undefined,
      company_tel: undefined,
      
      b_position: undefined,
      position_info: {
          agency_name: undefined,
          surname: undefined,
          given_name: undefined,
          address: {
              street_addr1: undefined,
              street_addr2: undefined,
              city: undefined,
              state: undefined,
              b_state_NA: undefined,
              zip_code: undefined,
              b_zip_code_NA: undefined,
              country: undefined,
              tel_number: undefined
          }
      },

      b_vessel: undefined,
      vessel_info: {
          vessel_name: undefined,
          vessel_id: undefined
      }
    },
    form_e_sign: {
      b_assist: undefined,
      assist_info: {
          preparer: {
              surname: undefined,
              given_name: undefined,
              name_NA: undefined
          },
          organization: {
              name: undefined,
              name_NA: undefined
          },
          address: {
              street_addr1: undefined,
              street_addr2: undefined,
              city: undefined,
              state: undefined,
              b_state_NA: undefined,
              zip_code: undefined,
              b_zip_code_NA: undefined,
              country: undefined
          },
          relationship: undefined
      },
      passport_number: undefined
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
        ds160: { ...state.ds160, ...action.values }
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
