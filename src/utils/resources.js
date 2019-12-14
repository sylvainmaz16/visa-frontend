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
                en: `Martial Status Explain`,
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
    }
}
export default resources