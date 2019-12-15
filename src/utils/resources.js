export const translate = (r, lang) => {
    if(!lang) 
        return r.en ? r.en : ''
    const pre = lang.split('-')[0]; 
    return r[pre] ? r[pre] : (r.en ? r.en : '') 
}
const resources = {
    yes: {
        en: `Yes`,
        fr: `Oui`,
        it: `Sì`,
        es: `Sí`,
        de: `Ja`,
    },
    no: {
        en: `No`,
        fr: `Non`,
        it: `No`,
        es: `Nein`,
        de: `No`,
    },
    add_another: {
        en: `Add another`,
        fr: `Ajouter un autre`,
        it: `Agrega otro`,
        es: `Neue hinzufügen`,
        de: `Aggiungi un altro`,
    },
    prev: {
        en: 'Prev',
        fr: 'Prec',
        es: 'Antes',
        de: 'Bis',
        it: 'Prec',
    },
    next: {
        en: 'Next',
        fr: 'Suiv',
        es: 'Próximo',
        de: 'Folgende',
        it: 'Seguente',
    },
    save_and_continue_later: {
        en: 'Save an Continue Later',
        fr: 'Enregistrer un continuer plus tard',
        es: 'Guardar y continuar más tarde',
        de: 'Speichern und später fortsetzen',
        it: 'Salva e continua più tardi',
    },
    submit_with_payment: {
        en: 'SUBMIT AND MAKE YOUR PAYMENT',
        fr: 'SOUMETTRE ET EFFECTUER VOTRE PAIEMENT',
        es: 'ENVÍE Y HAGA SU PAGO',
        de: 'Übermitteln Sie und machen Sie Ihre Zahlung',
        it: 'INVIA E EFFETTUA IL TUO PAGAMENTO',
    },
    continue_to_appointment: {
        en: 'Continue to Your Appointment Information',
        fr: 'Continuez vers vos informations de rendez-vous',
        es: 'Continúe con la información de su cita',
        de: 'Fahren Sie mit Ihren Termininformationen fort',
        it: `Continua con le informazioni sull'appuntamento`,
    },
    language: {
        label: {
            en: `Hints and help language`,
            fr: `Astuces et langage d'aide`,
            de: `Tipps und Hilfe-Sprache`,
            it: `Aiuto e suggerimenti lingua`,
            es: `Consejos y ayuda de idioma`,
        },
        extra: {
            en: `Select language in which you would like the hints, regarding completion of the application form, to be displayed`,
            fr: `Indiquez la langue des conseils sur le remplissage de votre demande de visa`,
            es: `Indique el idioma de soplos de la lista “Hints and help language”.`,
            de: `Geben Sie bitte die Sprache der Ausfüllhilfen an.`,
            it: `Indicare la lingua delle spiegazioni`,
        },
    },
    validations: {
        required: {
            en: `This field is required`,
            fr: `Ce champ de saisie est obligatoire`,
            es: `Campo obligatorio para rellenar`,
            de: `Das ist ein Pflichtfeld.`,
            it: `E obbligatorio compilare questo campo`,
        },
    },
    before: {
        start_button: {
            en: `Start Your Application`,
            fr: `Compléter un nouveau formulaire`,
            es: `Rellenar nuevo cuestionario`,
            de: `Neuen Antragsformular ausfüllen`,
            it: `Compila un nuovo modulo`,
        },
    },
    step_1: {
        section_title: {
            en: `On this website, you can apply through our agency for a U.S. Non-Immigrant Visa. EACH TRAVELER MUST COMPLETE HIS/HER OWN FORM IN ORDER TO GET HIS/HER VISA. The estimated average time to complete this submission is 35 minutes per respondent.`,
            fr: `Sur ce site Web, vous pouvez demander via notre agence un visa de non-immigrant américain. CHAQUE VOYAGEUR DOIT REMPLIR SON PROPRE FORMULAIRE POUR OBTENIR SON VISA. Le temps moyen estimé pour terminer cette présentation est de 35 minutes par répondant.`,
            es: `En este sitio web, puede solicitar a través de nuestra agencia una visa de no inmigrante de EE. UU. CADA VIAJERO DEBE COMPLETAR SU PROPIO FORMULARIO PARA OBTENER SU VISA. El tiempo promedio estimado para completar este envío es de 35 minutos por encuestado.`,
            de: `Auf dieser Website können Sie über unsere Agentur ein US-amerikanisches Nichteinwanderungsvisum beantragen. Jeder Reisende muss sein eigenes Formular ausfüllen, um sein Visum zu erhalten. Die geschätzte durchschnittliche Zeit, um diese Einreichung zu vervollständigen, beträgt 35 Minuten pro Befragten.`,
            it: `Su questo sito Web, è possibile richiedere tramite la nostra agenzia un visto per non immigranti negli Stati Uniti. OGNI VIAGGIATORE DEVE COMPLETARE IL SUO / IL SUO PROPRIO MODULO PER OTTENERE IL SUO / IL SUO VISTO. Il tempo medio stimato per completare questa presentazione è di 35 minuti per rispondente.`,
        },
        interview_location: {
            label: {
                en: `Please Choose Your Preferred Interview Location`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            extra: {
                en: `Select preferred US Consulate for your visa interview.`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        sq_type: {
            label: {
                en: `Security Question`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            extra: {
                en: `In order to access your application later, however, you will need: (1) your Application ID, and (2) the answer to the security question that you will choose on this page.`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        sq_answer: {
            label: {
                en: `Answer`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
    },
    step_2: {
        disclaimer: {
            agency: {
                en: `Before you begin this application, please read carefully this disclaimer and make sure that you have a valid passport. This application will only accept the following credit cards: MasterCard, VISA and Discover (JCB, Diners Club) or bank transfer. Our agency charges $280 for this premium processing service which includes your MRV fee. This charge does include the Visa Fee of$160 that needs to be paid directly to the Department of State and is NON-REFUNDABLE. All information provided by you, or on your behalf by a designated third party, must be true and correct.`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            default: {
                en: `DISCLAIMER: Before you begin this application, please read carefully this disclaimer and make sure that you have a valid passport. This application will only accept the following credit cards: MasterCard, VISA and Discover (JCB, Diners Club) or bank transfer. Our agency charges $165 for this premium processing service that offers 100% Refund Guarantee if your visa is denied. This charge does not include the Visa Fee that needs to be paid directly to the Department of State and is NON-REFUNDABLE except if your visa is denied. All information provided by you, or on your behalf by a designated third party, must be true and correct.`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            check: {
                en: `I understand that I may be subject to administrative or criminal penalties if I knowingly and willfully make a materially false, fictitious, or fraudulent statement or representation in a visa application submitted by me or on my behalf.`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        confirm: {
            label: {
                en: `Please confirm that you have read and understand the Disclaimer above.`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            check: {
                en: `I have read and understand the Disclaimer above and agree with these terms.`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        }
    },
    personal: {
        section_title: {
            en: `Personal Information`,
            fr: ``,
            es: ``,
            de: ``,
            it: ``
        },
        section_descr: {
            en: `Note: Data on this page must match exactly the information in your passport.`,
            fr: ``,
            es: ``,
            de: ``,
            it: ``
        },
        surname: {
            label: {
                en: `Surname(s) (Last Name)`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            extra: {
                en: `Last Name (Family Name)`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        section_descr_2: {
            en: `Enter all surnames (or family names) exactly as they are written in your passport. If only one name is written in your passport, enter that as your “Surname” (e.g, FERNANDEZ GARCIA)`,
            fr: ``,
            es: ``,
            de: ``,
            it: ``
        },
        given_name: {
            label: {
                en: `Given Name(s) (First Name(s))`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            extra: {
                en: `First Name(s)`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        section_descr_3: {
            en: `(e.g., JUAN MIGUEL), If your passport does not include a first or given name, please enter 'FNU' (meaning “first name unknown”) in the space for “Given Names”`,
            fr: ``,
            es: ``,
            de: ``,
            it: ``
        },
        b_ever_used_other_names: {
            label: {
                en: `Have you ever used other names (i.e., maiden, religious, professional, alias, etc.)?`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        used_other_name: {
            surname: {
                label: {
                    en: `Other Surnames Used (maiden, religious, professional, aliases, etc.)`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                }
            },
            given_name: {
                label: {
                    en: `Other Given Names Used`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                }
            }
        },
        b_has_telecode_of_name: {
            label: {
                en: `Do you have a telecode that represents your name?`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            extra: {
                en: `Telecodes are 4 digits numbers that represent characters in some non-Roman alphabet names.`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        telecode_of_name: {
            surname: {
                label: {
                    en: `Please provide your Telecode Surname`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                }
            },
            given_name: {
                label: {
                    en: `Please provide your Telecode Given Name`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                }
            }
        },
        sex: {
            label: {
                en: `Sex`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            male: {
                en: `Male`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            female: {
                en: `Female`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        martial_status: {
            label: {
                en: `Marital Status`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        martial_other_explain: {
            label: {
                en: `Martial Status Explain`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        date_birth: {
            label: {
                en: `Date of Birth`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        place_of_birth: {
            city: {
                label: {
                    en: `City of birth`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                }
            },
            state: {
                label: {
                    en: `Province / State of birth`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                }
            },
            country: {
                label: {
                    en: `Country of birth`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                }
            },
        },
        nationality: {
            label: {
                en: `Country/Region of Origin (Nationality)`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        b_more_nationality: {
            label: {
                en: `Do you hold or have you held any nationality other than the one indicated above on nationality?`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        other_nationality: {
            label: {
                en: `Other Country/Region of Origin (Nationality)`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        b_has_other_nationality_passport: {
            label: {
                en: `Do you hold a passport for the other country/region of origin (nationality) above?`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        other_nationality_passport: {
            label: {
                en: `Passport Number`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        b_permanent_resident_other_than_nationality: {
            label: {
                en: `Are you a permanent resident of a country/region other than country/region of origin (nationality) indicated above?`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        permanent_resident_country: {
            label: {
                en: `Other Permanent Resident Country/Region`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        section_title_4: {
            en: `Document Information`,
            fr: ``,
            es: ``,
            de: ``,
            it: ``
        },
        section_descr_4: {
            en: `Your National ID Number is a unique number that your government provides. The U.S Government provides unique numbers to those who seek employment (Social Security Number) or pay taxes (Taxpayer ID). Leave blank if you do not have any of these numbers`,
            fr: ``,
            es: ``,
            de: ``,
            it: ``
        },
        national_id_number: {
            label: {
                en: `National ID Number`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            extra: {
                en: `Your National ID Number is a unique number that your government provides. The U.S. Government provides unique numbers to those who seek employment (Social Security Number) or pay taxes (Taxpayer ID). Leave blank if you do not have any of these numbers`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        social_security_number: {
            label: {
                en: `US Social Security Number`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            extra: {
                en: `Leave blank if you do not have any of these numbers`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        tax_id_number: {
            label: {
                en: `US Tax ID Number`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            extra: {
                en: `Leave blank if you do not have any of these numbers`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
    },
    travel: {
        section_title: {
            en: `Travel Information`,
            fr: ``,
            es: ``,
            de: ``,
            it: ``
        },
        purpose_of_trip: {
            label: {
                en: `Purpose of Trip to the U.S.`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            extra: {
                en: `PLEASE SELECT A VISA CLASS`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        other_purpose_of_trip: {
            label: {
                en: `Specify (B)`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        purpose_info: {
            label: {
                en: `Principal Applicant Information`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            surname: {
                en: `Surname(s) (Last Name)`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            given_name: {
                en: `Given Name(s) (First Name)`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            petition: {
                label: {
                    en: `Application Receipt/Petition Number`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                },
                extra: {
                    en: `If you are applying for a petition-based visa, your application receipt/petition number was given to you by the Department of Homeland Security’s U. S. Citizenship and Immigration Services (USCIS) after you filed your petition application at a USCIS Service Center. The application receipt/petition number is 13 characters long and the first three characters are letters.`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                },
            }
        },
        section_title_2: {
            en: `US Travel Information`,
            fr: ``,
            es: ``,
            de: ``,
            it: ``
        },
        section_descr_2: {
            en: `Give details of the address where you will stay in the US. The address may be that of a hotel or private residence.`,
            fr: ``,
            es: ``,
            de: ``,
            it: ``
        },
        travel_plan: {
            date_of_arrival: {
                label: {
                    en: "Intended date of arrival in the USA",
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                }
            },
            length_of_stay: {
                length: {
                    label: {
                        en: `Intended Length of Stay in the USA`,
                        fr: ``,
                        es: ``,
                        de: ``,
                        it: ``
                    },
                    extra: {
                        en: `Enter the Number of Day(s), Week(s), Month(s), Year(s) ONLY THE NUMBER.`,
                        fr: ``,
                        es: ``,
                        de: ``,
                        it: ``
                    },
                },
                period: {
                    label: {
                        en: "Please Specify",
                        fr: ``,
                        es: ``,
                        de: ``,
                        it: ``
                    },
                }
            }
        },
        address_you_will_stay: {
            label: {
                en: `Address Where You Will Stay in the U.S.`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            street_addr1: {
                en: `Street Address`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            street_addr2: {
                en: `Address Line 2 (Optional)`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            city: {
                en: `City`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            state: {
                en: `State`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            zip_code: {
                en: `ZIP Code (if known)`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        paying_person_for_trip: {
            label: {
                en: `Person/Entity Paying for Your Trip`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        section_title_financial_support: {
            en: `Financial support for your trip`,
            fr: ``,
            es: ``,
            de: ``,
            it: ``
        },
        paying_person_info: {
            surname: {
                label: {
                    en: `Surnames of Person Paying for Trip`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``  
                },
                extra: {
                    en: `(e.g., FERNANDEZ GARCIA)`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``  
                },
            },
            given_name: {
                label: {
                    en: `Given Names of Person Paying for Trip`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``  
                },
                extra: {
                    en: `(e.g., JUAN MIGUEL)`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``  
                },
            },
            tel_number: {
                label: {
                    en: `Phone number of person paying for your trip`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``  
                },
            },
            email: {
                label: {
                    en: `Email of person paying for your trip`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``  
                },
                extra: {
                    en: `Leave blank if does not apply`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``  
                },
            },
            relationship: {
                label: {
                    en: `Relationship to You`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``  
                },
            },
            b_same_address: {
                label: {
                    en: `Is the address of the party paying for your trip the same as your Home or Mailing Address?`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``  
                },
            },
            address: {
                company: {
                    en: `Address of Company/Organization Paying`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                },
                person: {
                    en: `Address`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                }
            }
        },
        paying_org_info: {
            name: {
                label: {
                    en: `Name of Company/Organization Paying for Trip`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                }
            },
            tel_number: {
                label: {
                    en: `Telephone Number`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                }
            },
            relationship: {
                label: {
                    en: `Relationship to You`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                }
            },
        }
    },
    travel_companion: {
        section_title: {
            en: `Information about your travel companions`,
            fr: ``,
            es: ``,
            de: ``,
            it: ``
        },
        b_other_person_travel_with: {
            label: {
                en: `Are there other persons traveling with you?`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        b_part_of_group: {
            label: {
                en: `Are you traveling as part of a group or organization?`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        company: {
            label: {
                en: `Name of group or organisation if traveling as part of a group or organization`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        people: {
            label: {
                en: `List of people traveling with you. (EACH TRAVELLER MUST COMPLETE HIS OWN APPLICATION)`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        }
    },
    previous_travel: {
        section_title: {
            en: `Previous US Travel`,
            fr: ``,
            es: ``,
            de: ``,
            it: ``
        },
        b_ever_been_in_US: {
            label: {
                en: `Have you ever been to the US before?`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
            extra: {
                en: `Check if you have been in the US before and fill out the details of your last 5 visits below`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        prev_visit_info: {
            label: {
                en: `Provide a list of your last 5 visits`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        b_ever_hold_Driver_License: {
            label: {
                en: `Do you or did you ever hold a U.S. Driver’s License?`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        prev_DL_info: {
            number: {
                label: {
                    en: `Driver's License number`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                },
                extra: {
                    en: `Leave it blank if you do not know`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                },
            },
            state: {
                label: {
                    en: `State of Driver's License`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                },
            }
        },
        b_ever_been_issued_US_Visa: {
            label: {
                en: `Have you ever been issued a US visa?`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            },
        },
        US_Visa: {
            date: {
                label: {
                    en: `Date Last Visa Was Issued`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                },
            },
            number: {
                label: {
                    en: `Visa Number`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                },
                extra: {
                    en: `Enter the 8-digit number that is displayed in red on the lower right hand side of your visa. If your previous visa was a Border Crossing Card enter the last 12-digit number of the first line of the machine readable zone. Leave blank if you do not know`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                },
            },
            b_same_type_visa: {
                label: {
                    en: `Are you applying for the same type of visa?`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                },
            },
            b_same_cntry_visa: {
                label: {
                    en: `Are you applying in the same country or location where the visa above was issued, and is this country or location your place of principal of residence?`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                },
            },
            b_been_ten_printed: {
                label: {
                    en: `Have you been ten-printed?`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                },
            },
            b_ever_been_lost: {
                label: {
                    en: `Has your US Visa ever been lost or stolen?`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                },
            },
            lost_info: {
                year: {
                    label: {
                        en: `Which Year`,
                        fr: ``,
                        es: ``,
                        de: ``,
                        it: ``
                    }
                },
                explain: {
                    label: {
                        en: `If you answered yes, give details below.`,
                        fr: ``,
                        es: ``,
                        de: ``,
                        it: ``
                    }
                }
            },
            b_ever_been_cancelled: {
                label: {
                    en: `Have you ever had a US Visa cancelled or revoked?`,
                    fr: ``,
                    es: ``,
                    de: ``,
                    it: ``
                }
            },
        },
        b_ever_been_refused_US_Visa: {
            label: {
                en: `Have you ever been refused a US Visa, or been refused admission to the United States, or withdrawn your application for admission at the port of entry?`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        b_ever_been_denied_travel_auth: {
            label: {
                en: `Have you ever been denied travel authorization by the Department of Homeland Security through the Electronic System fo Travel Authorization (ESTA)?`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
        b_petition: {
            label: {
                en: `Has anyone ever filled an immigrant petition on your behalf with the US Citizenship and Immigration Services?`,
                fr: ``,
                es: ``,
                de: ``,
                it: ``
            }
        },
    },
}
export default resources