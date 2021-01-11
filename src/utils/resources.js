export const translate = (r, lang) => {
  if (!lang) {
    return r.en ? r.en : ''
  }
  const pre = lang.split('-')[0]

  return r[pre] ? r[pre] : r.en ? r.en : ''
}
const resources = {
  yes: {
    en: 'Yes',
    fr: 'Oui',
    it: 'Sì',
    es: 'Sí',
    de: 'Ja',
    ar: 'نعم',
    zh: '是',
    jp: 'はい',
    ko: '예',
    pt: 'sim',
    he: 'כן',
    ru: 'да',
    nl: 'Ja',
    bn: 'হ্যাঁ',
    hi: 'हाँ',
  },
  no: {
    en: 'No',
    fr: 'Non',
    it: 'No',
    es: 'No',
    de: 'No',
    ar: 'لا',
    zh: '没有',
    jp: '番号',
    ko: '아니',
    pt: 'Não',
    he: 'לא',
    ru: 'Нет',
    nl: 'Nee',
    bn: 'না',
    hi: 'नहीं',
  },
  add_another: {
    en: 'Add another',
    fr: 'Ajouter',
    it: 'Agrega otro',
    es: 'Neue hinzufügen',
    de: 'Aggiungi un altro',
    ar: 'أضف آخر',
    zh: '加上另一个',
    jp: '別の追加',
    ko: '다른 추가',
    pt: 'Adicionar outro',
    he: 'להוסיף עוד',
    ru: 'Добавить еще',
    nl: 'Een andere toevoegen',
    bn: 'অন্য একটি যোগ করুন',
    hi: 'एक और जोड़ें',
  },
  remove: {
    en: 'Remove',
    fr: 'Supprimer',
    it: 'Rimuovere',
    es: 'Quitar',
    de: 'Entfernen',
    ar: 'إزالة',
    zh: '去掉',
    jp: '削除する',
    ko: '삭제',
    pt: 'Retirar',
    he: 'לְהַסִיר',
    ru: 'удалять',
    nl: 'Verwijderen',
    bn: 'অপসারণ',
    hi: 'हटाना',
  },
  do_not_know: {
    en: 'Do Not Know',
    fr: 'Ne Sais Pas',
    it: 'Non So',
    es: 'No Sé',
    de: 'Weiß Nicht,',
    ar: 'لا أعلم',
    zh: '不知道',
    jp: 'わかりません',
    ko: '몰라요',
    pt: 'Não sei',
    he: 'לא יודע',
    ru: 'Не знать',
    nl: 'Weet niet',
    bn: 'জানি না',
    hi: 'नही पता',
  },
  first: {
    en: 'First',
    fr: 'Première',
    es: 'Primera',
    de: 'Zuerst',
    it: 'Prima',
    ar: 'أول',
    zh: '第一',
    jp: '最初',
    ko: '처음',
    pt: 'Primeiro',
    he: 'ראשון',
    ru: 'первый',
    nl: 'eerste',
    bn: 'প্রথম',
    hi: 'प्रथम',
  },
  prev: {
    en: 'Prev',
    fr: 'Préc',
    es: 'Antes',
    de: 'Bis',
    it: 'Prec',
    ar: 'السابق',
    zh: '上一个',
    jp: '前へ',
    ko: '이전',
    pt: 'Anterior',
    he: 'קודמת',
    ru: 'предыдущий',
    nl: 'Vorige',
    bn: 'Prev',
    hi: 'पिछला',
  },
  next: {
    en: 'Next',
    fr: 'Suiv',
    es: 'Próximo',
    de: 'Folgende',
    it: 'Seguente',
    ar: 'التالى',
    zh: '下一个',
    jp: '次',
    ko: '다음',
    pt: 'Próximo',
    he: 'הַבָּא',
    ru: 'следующий',
    nl: 'De volgende',
    bn: 'পরবর্তী',
    hi: 'आगे',
  },
  save_and_continue_later: {
    en: 'Save and Continue Later',
    fr: 'Enregistrer un continuer plus tard',
    es: 'Guardar y continuar más tarde',
    de: 'Speichern und später fortsetzen',
    it: 'Salva e continua più tardi',
    ar: 'احفظ وتابع لاحقًا',
    zh: '保存并稍后继续',
    jp: '保存して後で続行',
    ko: '저장하고 나중에 계속',
    pt: 'Salvar e continuar depois',
    he: 'שמור והמשך מאוחר יותר',
    ru: 'Сохранить и продолжить позже',
    nl: 'Bewaar en ga later verder',
    bn: 'সংরক্ষণ করুন এবং পরে চালিয়ে যান',
    hi: 'बाद में सहेजें और जारी रखें',
  },
  submit_with_payment: {
    en: 'SUBMIT AND MAKE YOUR PAYMENT',
    fr: 'SOUMETTRE ET EFFECTUER VOTRE PAIEMENT',
    es: 'ENVÍE Y HAGA SU PAGO',
    de: 'Übermitteln Sie und machen Sie Ihre Zahlung',
    it: 'INVIA E EFFETTUA IL TUO PAGAMENTO',
    ar: 'أرسل مدفوعاتك وادفعها',
    zh: '提交并付款',
    jp: '送信して支払いを行う',
    ko: '제출 및 결제',
    pt: 'ENVIE E FAÇA SEU PAGAMENTO',
    he: 'הגש והשלם את התשלום שלך',
    ru: 'ПОДАТЬ И СДЕЛАТЬ ОПЛАТУ',
    nl: 'DIEN EN BETALEN',
    bn: 'জমা দিন এবং আপনার অর্থ প্রদান করুন',
    hi: 'सबमिट और अपना भुगतान करें',
  },
  continue_to_appointment: {
    en: 'Continue to Your Appointment Information',
    fr: 'Continuez vers vos informations de rendez-vous',
    es: 'Continúe con la información de su cita',
    de: 'Fahren Sie mit Ihren Termininformationen fort',
    it: "Continua con le informazioni sull'appuntamento",
    ar: 'تابع إلى معلومات موعدك',
    zh: '继续您的预约信息',
    jp: 'あなたの予定情報に進む',
    ko: '귀하의 약속 정보로 계속',
    pt: 'Continue com as informações do seu compromisso',
    he: 'המשך למידע על פגישותיך',
    ru: 'Перейти к информации о встрече',
    nl: 'Ga verder naar uw afspraakgegevens',
    bn: 'আপনার অ্যাপয়েন্টমেন্ট তথ্য অবিরত',
    hi: 'आपकी नियुक्ति की जानकारी जारी रखें',
  },
  language: {
    label: {
      en: 'Hints and help language',
      fr: "Astuces et langage d'aide",
      de: 'Tipps und Hilfe-Sprache',
      it: 'Aiuto e suggerimenti lingua',
      es: 'Consejos y ayuda de idioma',
      ar: 'تلميحات ولغة مساعدة',
      zh: '提示和帮助语言',
      jp: 'ヒントとヘルプ言語',
      ko: '힌트 및 도움말 언어',
      pt: 'Dicas e linguagem de ajuda',
      he: 'רמזים ושפת עזרה',
      ru: 'Подсказки и справочный язык',
      nl: 'Hints en helptaal',
      bn: 'ইঙ্গিত এবং সহায়তা ভাষা',
      hi: 'संकेत और मदद भाषा',
    },
    extra: {
      en: 'Select language in which you would like the hints, regarding completion of the application form, to be displayed',
      fr: 'Indiquez la langue de conseils pour le remplissage de votre demande de visa',
      es: 'Indique el idioma de soplos de la lista “Hints and help language”.',
      de: 'Geben Sie bitte die Sprache der Ausfüllhilfen an.',
      it: 'Indicare la lingua delle spiegazioni',
      ar: 'اختر اللغة التي تريد أن تظهر بها التلميحات ، بخصوص استكمال نموذج الطلب',
      zh: '选择您想以何种语言显示有关填写申请表格的提示',
      jp: '申請書の記入に関するヒントを表示する言語を選択してください',
      ko: '신청서 작성에 관한 힌트를 표시 할 언어를 선택하십시오.',
      pt: 'Selecione o idioma no qual deseja que as dicas, relativas ao preenchimento do formulário de inscrição, sejam exibidas',
      he: 'בחר שפה בה תרצה שהרמזים, לגבי מילוי טופס הבקשה, יוצגו',
      ru: 'Выберите язык, на котором вы хотите, чтобы подсказки, касающиеся заполнения формы заявки, отображались',
      nl: 'Selecteer de taal waarin u de hints met betrekking tot het invullen van het aanvraagformulier wilt weergeven',
      bn: 'অ্যাপ্লিকেশন ফর্মটি সম্পূর্ণ হওয়ার বিষয়ে আপনি যে ভাষাতে ইঙ্গিতগুলি চান তা নির্বাচন করুন',
      hi: 'उस भाषा का चयन करें जिसमें आप संकेत चाहते हैं, आवेदन पत्र के पूरा होने के बारे में, प्रदर्शित होने के लिए',
    },
  },
  validations: {
    english: {
      en: "Only the following characters are valid for this field: A-Z, a-z, 0-9, #, $, *, %, &, (;), !, @, ^, ?, >, <, parens (), period (.), apostrophe ('), comma (,), hyphen (-), and space.",
      fr:
        "Seuls les caractères suivants sont valides pour ce champ: A-Z, a-z, 0-9, #, $, *, %, &, (;), !, @, ^, ?, >, <, les parenthèses (), le point (.), apostrophe ('), la virgule (,), tiret (-), et de l'espace.",
      es:
        "Sólo los siguientes caracteres son válidos para este campo: a-Z, a-z, 0-9, #, $, *, %, &, (;), !, @, ^, ?, >, <, paréntesis (), punto (.), el apóstrofo ('), la coma (,), guión (-), y en el espacio.",
      de:
        "Nur die folgenden Zeichen sind gültig für dieses Feld: A-Z, a-z, 0-9, #, $, *, %, &, (;), !, @, ^, ?, >, <, parens (), Punkt (.), Apostroph ('), Komma (,), Bindestrich ( - ) und Leerzeichen.",
      it:
        "Solo i seguenti caratteri sono validi per il settore: A-Z, a-z, 0-9, #, $, *, %, &, (;), !, @, ^, ?, >, <, parentesi (), il punto (.), apostrofo ('), virgola (,), il trattino (-), e lo spazio.",
      ar: "فقط الأحرف التالية صالحة لهذا الحقل: AZ ، az ، 0-9 ، # ، $ ، * ،٪ ، & ، (؛) ،! ، @ ، ^ ،؟ ،> ، <، أقواس () ، نقطة ( .) ، الفاصلة العليا (') ، الفاصلة (،) ، الواصلة (-) ، والمسافة.",
      zh: "此字段仅以下字符有效：AZ，az，0-9，＃，$，*，％，＆，（;），！，@，^，？，>，<，parens（），句点（ 。），撇号（'），逗号（，），连字符（-）和空格。",
      jp: "このフィールドに有効な文字は次のとおりです：AZ、az、0-9、＃、$、*、％、＆、（;）、！、@、^、？、>、<、parens（）、ピリオド（ 。）、アポストロフィ（ '）、コンマ（、）、ハイフン（-）、およびスペース。",
      ko: "이 필드에는 다음 문자 만 유효합니다. AZ, az, 0-9, #, $, *, %, &, (;),!, @, ^,?,>, <, 괄호 (), 마침표 ( .), 아포스트로피 ( '), 쉼표 (,), 하이픈 (-) 및 공백.",
      pt: "Apenas os seguintes caracteres são válidos para este campo: AZ, az, 0-9, #, $, *,%, &, (;),!, @, ^,?,>, <, Parênteses (), ponto final ( .), apóstrofo ('), vírgula (,), hífen (-) e espaço.",
      he: "רק התווים הבאים תקפים לשדה זה: AZ, az, 0-9, #, $, *,%, &, (;),!, @, ^,?,>, <, Parens (), נקודה ( .), אפוסטרוף ('), פסיק (,), מקף (-), ומרחב.",
      ru: "Для этого поля допустимы только следующие символы: AZ, az, 0-9, #, $, *,%, &, (;),!, @, ^,?,>, <, Parens (), period ( .), апостроф ('), запятая (,), дефис (-) и пробел.",
      nl: "Alleen de volgende tekens zijn geldig voor dit veld: AZ, az, 0-9, #, $, *,%, &, (;),!, @, ^,?,>, <, Parens (), punt ( .), apostrof ('), komma (,), koppelteken (-) en spatie.",
      bn: "এই ক্ষেত্রের জন্য কেবল নিম্নলিখিত অক্ষরগুলি বৈধ: AZ, আজ, 0-9, #, $, *,%, &, (;),!, @, ^,?,>, <, পেরেন্স (), সময়কাল ( ।), অ্যাস্টোস্ট্রোফ ('), কমা (,), হাইফেন (-) এবং স্পেস।",
      hi: "इस फ़ील्ड के लिए केवल निम्न वर्ण मान्य हैं: AZ, az, 0-9, #, $, *,%, &, (;) ;, @, ^,?,>, <, Parens (), अवधि (?) ।), एपोस्ट्रोफ ('), अल्पविराम (,), हाइफ़न (-), और स्थान।",
    },
    required: {
      en: 'This field is required',
      fr: 'Ce champ de saisie est obligatoire',
      es: 'Campo obligatorio para rellenar',
      de: 'Das ist ein Pflichtfeld.',
      it: 'E obbligatorio compilare questo campo',
      ar: 'هذه الخانة مطلوبه',
      zh: '这是必填栏',
      jp: 'この項目は必須です',
      ko: '이 필드는 필수입니다',
      pt: 'Este campo é obrigatório',
      he: 'זהו שדה חובה',
      ru: 'Это поле обязательно к заполнению',
      nl: 'Dit veld is verplicht',
      bn: 'ঘরটি অবশ্যই পূরণ করতে হবে',
      hi: 'यह फ़ील्ड आवश्यक है',
    },
    required_input_or_delete: {
      en: 'This field is required',
      fr: 'Ce champ de saisie est obligatoire',
      es: 'Campo obligatorio para rellenar',
      de: 'Das ist ein Pflichtfeld.',
      it: 'E obbligatorio compilare questo campo',
      ar: 'هذه الخانة مطلوبه',
      zh: '这是必填栏',
      jp: 'この項目は必須です',
      ko: '이 필드는 필수입니다',
      pt: 'Este campo é obrigatório',
      he: 'זהו שדה חובה',
      ru: 'Это поле обязательно к заполнению',
      nl: 'Dit veld is verplicht',
      bn: 'ঘরটি অবশ্যই পূরণ করতে হবে',
      hi: 'यह फ़ील्ड आवश्यक है',
    },
    required_photo: {
      en: 'Please select your photo',
      fr: 'Veuillez sélectionner votre photo',
      es: 'Por favor seleccione su foto',
      de: 'Bitte wählen Sie Ihr Foto',
      it: 'Si prega di selezionare la tua foto',
      ar: 'الرجاء تحديد صورتك',
      zh: '请选择你的照片',
      jp: '写真を選択してください',
      ko: '사진을 선택하세요',
      pt: 'Por favor selecione sua foto',
      he: 'אנא בחר את התמונה שלך',
      ru: 'Пожалуйста, выберите ваше фото',
      nl: 'Selecteer uw foto',
      bn: 'আপনার ছবি নির্বাচন করুন',
      hi: 'कृपया अपना फोटो चुनें',
    },
    required_sign: {
      en: 'Please sign',
      fr: 'Veuillez signer',
      es: 'Por favor firme',
      de: 'Bitte melden',
      it: 'Si prega di firmare',
      ar: 'الرجاء تسجيل الدخول',
      zh: '请签名',
      jp: '署名してください',
      ko: '사인 부탁합니다',
      pt: 'Por favor assine',
      he: 'אנא חתום',
      ru: 'Пожалуйста подпишите',
      nl: 'Gelieve te tekenen',
      bn: 'সাইন ইন করুন',
      hi: 'कृपया हस्ताक्षर करें',
    },
  },
  before: {
    start_button: {
      en: 'Start Your Application',
      fr: 'Commencez votre Application',
      es: 'Rellenar nuevo cuestionario',
      de: 'Neuen Antragsformular ausfüllen',
      it: 'Compila un nuovo modulo',
      ar: 'ابدأ طلبك',
      zh: '开始申请',
      jp: 'アプリケーションを開始します',
      ko: '신청 시작',
      pt: 'Inicie seu aplicativo',
      he: 'התחל את היישום שלך',
      ru: 'Запустите ваше приложение',
      nl: 'Start uw aanvraag',
      bn: 'আপনার আবেদন শুরু করুন',
      hi: 'अपना आवेदन शुरू करें',
    },
  },
  step_1: {
    section_title: {
      en:
        'On this website, you can apply through our agency for a U.S. Non-Immigrant Visa. EACH TRAVELER MUST COMPLETE HIS/HER OWN FORM IN ORDER TO GET HIS/HER VISA. The estimated average time to complete this submission is 35 minutes per respondent.',
      fr:
        'Sur ce site Web, vous pouvez appliquer pour un visa américain de non-immigrant via notre agence. CHAQUE VOYAGEUR DOIT REMPLIR SON PROPRE FORMULAIRE POUR OBTENIR SON VISA. Le temps moyen estimé pour terminer cette application est de 35 minutes par applicant.',
      es:
        'En este sitio web, puede solicitar a través de nuestra agencia una visa de no inmigrante de EE. UU. CADA VIAJERO DEBE COMPLETAR SU PROPIO FORMULARIO PARA OBTENER SU VISA. El tiempo promedio estimado para completar este envío es de 35 minutos por encuestado.',
      de:
        'Auf dieser Website können Sie über unsere Agentur ein US-amerikanisches Nichteinwanderungsvisum beantragen. Jeder Reisende muss sein eigenes Formular ausfüllen, um sein Visum zu erhalten. Die geschätzte durchschnittliche Zeit, um diese Einreichung zu vervollständigen, beträgt 35 Minuten pro Befragten.',
      it:
        'Su questo sito Web, è possibile richiedere tramite la nostra agenzia un visto per non immigranti negli Stati Uniti. OGNI VIAGGIATORE DEVE COMPLETARE IL SUO / IL SUO PROPRIO MODULO PER OTTENERE IL SUO / IL SUO VISTO. Il tempo medio stimato per completare questa presentazione è di 35 minuti per rispondente.',
    },
    interview_location: {
      label: {
        en: 'Please Choose Your Preferred Interview Location',
        fr: "Veuillez Choisir Votre Lieu Préféré Pour L'Entrevue",
        es: 'Por Favor, Elija Su Preferido Ubicación De La Entrevista',
        de: 'Bitte Wählen Sie Ihren Bevorzugten Ort Des Bewerbungsgesprächs',
        it: 'Si Prega Di Scegliere Il Vostro Preferito Intervista Posizione',
      },
      extra: {
        en: 'Select preferred US Consulate for your visa interview.',
        fr: 'Choix du Consulat des États-Unis pour votre entretien de visa.',
        es: 'Seleccionar la preferencia de Consulado de los estados unidos para su entrevista de visa.',
        de: 'Wählen Sie das bevorzugte US-Konsulat für das Visum-interview.',
        it: 'Selezionare preferito Consolato degli stati UNITI per il tuo colloquio per il visto.',
      },
    },
    privacy: {
      label: {
        en: 'Privacy Act',
        fr: 'Loi sur la protection des renseignements personnels',
        es: 'Acto privado',
        de: 'Datenschutzgesetz',
        it: 'Legge sulla privacy',
      },
      extra: {
        authorities: {
          en: 'AUTHORITIES: The information sought is pursuant to 8 U.S.C. §§ 1201-1202.',
          fr: 'AUTORITÉS: Les informations recherchées sont conformes à 8 U.S.C. §§ 1201-1202.',
          es: 'AUTORIDADES : La información buscada es conforme a 8 U.S.C. §§ 1201-1202.',
          de: 'BEHÖRDEN: Die gesuchten Informationen entsprechen 8 U. S. C. §§ 1201-1202.',
          it: 'AUTORITÀ: Le informazioni richieste sono conformi a 8 U.S.C. §§ 1201-1202.',
        },
        purpose: {
          en: 'PURPOSE: The information solicited on this form will be used by consular officers to determine an applicant’s eligibility for a visa.',
          fr: `BUT: Les informations sollicitées sur ce formulaire seront utilisées par les agents consulaires pour déterminer l'admissibilité d'un demandeur à un visa.`,
          es: 'PROPÓSITO : La información solicitada en este formulario será utilizada por los funcionarios consulares para determinar la elegibilidad del solicitante para una visa.',
          de: 'ZWECK: Die auf diesem Formular angeforderten Informationen werden von Konsularbeamten verwendet, um die Berechtigung eines Antragstellers für ein Visum zu bestimmen.',
          it: `SCOPO: Le informazioni richieste in questo modulo saranno utilizzate dagli agenti consolari per determinare l'idoneità di un richiedente per un visto.`,
        },
        routine: {
          en:
            'ROUTINE USES: The information on this form may be shared with federal, state, and local government agencies, members of Congress, and officials of foreign governments in accordance with certain approved routine uses. More information on the Routine Uses for the system can be found in the System of Records Notice State-39, Visa Records.',
          fr:
            'UTILISATIONS COURANTES: Les informations sur ce formulaire peuvent être partagées avec les agences gouvernementales fédérales, étatiques et locales, les membres du Congrès et les représentants de gouvernements étrangers conformément à certaines utilisations de routine approuvées. De plus amples informations sur les utilisations de routine du système sont disponibles dans le System of Records Notice State-39, Visa Records.',
          es:
            'USOS DE RUTINA : La información en este formulario se puede compartir con agencias gubernamentales federales, estatales y locales, miembros del Congreso y funcionarios de gobiernos extranjeros de acuerdo con ciertos usos de rutina aprobados. Puede encontrar más información sobre los Usos de rutina para el sistema en el Sistema de Registros de Notificación del Estado-39, Registros de Visa.',
          de:
            'ROUTINENVERWENDUNG: Die Informationen auf diesem Formular können gemäß bestimmten genehmigten Routineverwendungen an Bundes-, Landes- und lokale Regierungsbehörden, Kongressmitglieder und Beamte ausländischer Regierungen weitergegeben werden. Weitere Informationen zu den routinemäßigen Verwendungen des Systems finden Sie im System of Records Notice State-39, Visa Records.',
          it: `USI ORDINARI: Le informazioni contenute in questo modulo possono essere condivise con agenzie governative federali, statali e locali, membri del Congresso e funzionari di governi stranieri in conformità con determinati usi di routine approvati. Ulteriori informazioni sugli usi di routine per il sistema sono disponibili nell'Avviso di sistema dei registri State-39, Visa Records.`,
        },
        disclosure: {
          en:
            'DISCLOSURE: Although providing this information is voluntary, failure to provide the information requested on this form may result in the applicant’s inability to receive an immigrant or nonimmigrant visa.',
          fr: `DIVULGATION : Bien que la fourniture de ces informations soit volontaire, le fait de ne pas fournir les informations demandées sur ce formulaire peut entraîner l'incapacité du demandeur à recevoir un visa d'immigrant ou de non-immigrant.`,
          es:
            'DIVULGACIÓN : Aunque proporcionar esta información es voluntaria, la falta de proporcionar la información solicitada en este formulario puede resultar en la incapacidad del solicitante para recibir una visa de inmigrante o no inmigrante.',
          de:
            'OFFENLEGUNG: Obwohl die Bereitstellung dieser Informationen freiwillig ist, kann die Nichtbereitstellung der auf diesem Formular angeforderten Informationen dazu führen, dass der Antragsteller kein Einwanderungs- oder Nichteinwanderungsvisum erhalten kann.',
          it: `INFORMATIVA: Sebbene la fornitura di queste informazioni sia volontaria, la mancata fornitura delle informazioni richieste in questo modulo può comportare l'incapacità del richiedente di ricevere un visto per immigrati o non immigranti.`,
        },
      },
      check: {
        en: 'I have read the terms of the Privacy Act Notice',
        fr: `J’ai lu les conditions de l'avis relatif à la Loi sur la protection des renseignements personnels`,
        es: 'He leído los términos del Aviso de la Ley de Privacidad',
        de: 'Ich habe die Bestimmungen der Datenschutzerklärung gelesen',
        it: `Ho letto i termini dell'Informativa sulla legge sulla privacy`,
      },
    },
    sq_type: {
      label: {
        en: 'Security Question',
        fr: 'Question De Sécurité',
        es: 'Pregunta De Seguridad',
        de: 'Sicherheits-Frage',
        it: 'La Domanda Di Sicurezza',
      },
      extra: {
        en: 'In order to access your application later, however, you will need: (1) your Application ID, and (2) the answer to the security question that you will choose on this page.',
        fr: "Afin d'accéder à votre demande plus tard, vous aurez besoin de: (1) votre ID d'Application, et (2) la réponse à la question de sécurité que vous avez choisi sur cette page.",
        es: 'Con el fin de acceder a su solicitud más tarde, sin embargo, será necesario: (1) su ID de la Aplicación, y (2) la respuesta a la pregunta de seguridad que usted elija en esta página.',
        de:
          'Um den Zugriff auf Ihre Anwendung zu einem späteren Zeitpunkt, jedoch, müssen Sie: (1) Ihre Anwendung ID, und (2) die Antwort auf die Sicherheitsfrage, die Sie wählen, wird auf dieser Seite.',
        it:
          'Per accedere alla tua applicazione in un secondo momento, tuttavia, è necessario: (1) il vostro ID di Applicazione, e (2) la risposta alla domanda di sicurezza che si sceglie su questa pagina.',
      },
    },
    sq_answer: {
      label: {
        en: 'Answer',
        fr: 'Réponse',
        es: 'Respuesta',
        de: 'Antwort',
        it: 'Risposta',
      },
    },
  },
  step_2: {
    disclaimer: {
      uva: {
        en:
          'Before you begin this application, please read carefully this disclaimer and make sure that you have a valid passport. This application will only accept the following credit cards: MasterCard, VISA and Discover (JCB, Diners Club) or bank transfer. Our agency charges $280 for this premium processing service which includes your MRV fee. This charge does include the Visa Fee of$160 that needs to be paid directly to the Department of State and is NON-REFUNDABLE. All information provided by you, or on your behalf by a designated third party, must be true and correct.',
        fr:
          "Avant de commencer cette demande, veuillez lire attentivement cet avertissement et assurez-vous d'avoir un passeport valide. Cette application accepte uniquement les cartes de crédit suivantes: MasterCard, VISA et Discover (JCB, Diners Club). Notre agence facture 280$ pour ce service de traitement qui comprend les frais MRV. Ces frais comprennent les Frais de Visa de 160$ qui doivent être payé directement au Département d'État et sont NON-REMBOURSABLE. Toutes les informations fournies par vous ou en votre nom par un tiers désigné doivent être véridiques et correctes.",
        es:
          'Antes de comenzar esta aplicación, por favor lea cuidadosamente este descargo de responsabilidad y asegúrese de que usted tiene un pasaporte válido. Esta aplicación sólo se aceptan las siguientes tarjetas de crédito: MasterCard, VISA y Discover (JCB, Diners Club) o transferencia bancaria. Nuestra agencia cobra $280 para esta prima de servicio de procesamiento que incluye su cargo MRV. Este precio no incluye el costo de la Visa de$160 que debe ser pagado directamente al Departamento de Estado y NO es REEMBOLSABLE. Toda la información proporcionada por usted o en su nombre por un designado de terceros, debe ser verdadera y correcta.',
        de:
          'Bevor Sie beginnen, diese Anwendung, bitte Lesen Sie sorgfältig diesen Haftungsausschluss, sowie stellen Sie sicher, dass Sie einen gültigen Reisepass. Diese Anwendung wird nur akzeptiert die folgende Kredit Karten: MasterCard, VISA und Discover (JCB, Diners Club) oder Banküberweisung. Unsere Agentur erhebt 280 $für das premium processing service die auch Ihren MRV-Gebühr. Diese Gebühr beinhaltet die Visa-Gebühr von$160, die bezahlt werden muss direkt an das Department of State und ist NICHT ERSTATTBAR. Alle Informationen, die von Ihnen oder in Ihrem Auftrag durch eine von Ihnen benannte Dritte, wahrheitsgetreu und richtig sein müssen.',
        it:
          "Prima di iniziare questa applicazione, si prega di leggere attentamente questo disclaimer e assicurarsi che si dispone di un passaporto valido. Questa applicazione si accettano solo i seguenti carte di credito: MasterCard, VISA e Discover (JCB, Diners Club) o bonifico bancario. La nostra agenzia le spese di $280 per questo l'elaborazione di premio di servizio, che comprende la vostra tassa MRV. Questo costo non include la Tassa per il Visto di$160 che deve essere pagato direttamente al Dipartimento di Stato ed è NON-RIMBORSABILE. Tutte le informazioni fornite da voi, o sul vostro conto da parte di un incaricato di terzi, devono essere veritiere e corrette.",
      },
      AES: {
        en:
          'DISCLAIMER: Before you begin this application, please read carefully this disclaimer and make sure that you have a valid passport. This application will only accept the following credit cards: MasterCard, VISA and Discover (JCB, Diners Club) or bank transfer. This premium processing service of $95 is NON-REFUNDABLE except if your visa is denied. All information provided by you, or on your behalf by a designated third party, must be true and correct.',
        fr:
          "AVERTISSEMENT: Avant de commencer cette application, veuillez lire attentivement cet avertissement et assurez-vous d'avoir un passeport valide. Cette application accepte uniquement les cartes de crédit suivantes: MasterCard, VISA et Discover (JCB, Diners Club). Ce service de traitement premium de $79 n'est PAS REMBOURSABLE sauf si votre visa est refusé. Toutes les informations fournies par vous ou en votre nom par un tiers désigné doivent être véridiques et correctes.",
        es:
          'DESCARGO de responsabilidad: Antes de comenzar esta aplicación, por favor lea cuidadosamente este descargo de responsabilidad y asegúrese de que usted tiene un pasaporte válido. Esta aplicación sólo se aceptan las siguientes tarjetas de crédito: MasterCard, VISA y Discover (JCB, Diners Club) o transferencia bancaria. Este servicio de procesamiento premium de $79 y NO es REEMBOLSABLE, excepto si su visa es negada. Toda la información proporcionada por usted o en su nombre por un designado de terceros, debe ser verdadera y correcta.',
        de:
          'HAFTUNGSAUSSCHLUSS: Bevor Sie mit diesem Antrag beginnen, lesen Sie diesen Haftungsausschluss sorgfältig durch und stellen Sie sicher, dass Sie einen gültigen Reisepass haben. Dieser Antrag akzeptiert nur die folgenden Kreditkarten: MasterCard, VISA und Discover (JCB, Diners Club) oder Überweisung. Dieser Premium-Bearbeitungsservice in Höhe von 79 USD ist NICHT RÜCKERSTATTBAR, es sei denn, Ihr Visum wird abgelehnt. Alle von Ihnen oder in Ihrem Namen von einem bestimmten Dritten bereitgestellten Informationen müssen wahr und korrekt sein.',
        it:
          'DISCLAIMER: Prima di iniziare questa applicazione, si prega di leggere attentamente questo disclaimer e assicurarsi che si dispone di un passaporto valido. Questa applicazione si accettano solo i seguenti carte di credito: MasterCard, VISA e Discover (JCB, Diners Club) o bonifico bancario. Questo servizio di elaborazione premium di $79 NON È RIMBORSABILE tranne se il visto viene negato. Tutte le informazioni fornite da te o per tuo conto da una terza parte designata devono essere veritiere e corrette.',
      },
      default: {
        en:
          'DISCLAIMER: Before you begin this application, please read carefully this disclaimer and make sure that you have a valid passport. This application will only accept the following credit cards: MasterCard, VISA and Discover (JCB, Diners Club) or bank transfer. This premium processing service of $165 is NON-REFUNDABLE except if your visa is denied. All information provided by you, or on your behalf by a designated third party, must be true and correct.',
        fr:
          "AVERTISSEMENT: Avant de commencer cette application, veuillez lire attentivement cet avertissement et assurez-vous d'avoir un passeport valide. Cette application accepte uniquement les cartes de crédit suivantes: MasterCard, VISA et Discover (JCB, Diners Club). Ce service de traitement premium de $165 n'est PAS REMBOURSABLE sauf si votre visa est refusé. Toutes les informations fournies par vous ou en votre nom par un tiers désigné doivent être véridiques et correctes.",
        es:
          'DESCARGO de responsabilidad: Antes de comenzar esta aplicación, por favor lea cuidadosamente este descargo de responsabilidad y asegúrese de que usted tiene un pasaporte válido. Esta aplicación sólo se aceptan las siguientes tarjetas de crédito: MasterCard, VISA y Discover (JCB, Diners Club) o transferencia bancaria. Este servicio de procesamiento premium de $165 y NO es REEMBOLSABLE, excepto si su visa es negada. Toda la información proporcionada por usted o en su nombre por un designado de terceros, debe ser verdadera y correcta.',
        de:
          'HAFTUNGSAUSSCHLUSS: Bevor Sie mit diesem Antrag beginnen, lesen Sie diesen Haftungsausschluss sorgfältig durch und stellen Sie sicher, dass Sie einen gültigen Reisepass haben. Dieser Antrag akzeptiert nur die folgenden Kreditkarten: MasterCard, VISA und Discover (JCB, Diners Club) oder Überweisung. Dieser Premium-Bearbeitungsservice in Höhe von 165 USD ist NICHT RÜCKERSTATTBAR, es sei denn, Ihr Visum wird abgelehnt. Alle von Ihnen oder in Ihrem Namen von einem bestimmten Dritten bereitgestellten Informationen müssen wahr und korrekt sein.',
        it:
          'DISCLAIMER: Prima di iniziare questa applicazione, si prega di leggere attentamente questo disclaimer e assicurarsi che si dispone di un passaporto valido. Questa applicazione si accettano solo i seguenti carte di credito: MasterCard, VISA e Discover (JCB, Diners Club) o bonifico bancario. Questo servizio di elaborazione premium di $ 165 NON È RIMBORSABILE tranne se il visto viene negato. Tutte le informazioni fornite da te o per tuo conto da una terza parte designata devono essere veritiere e corrette.',
      },
      check: {
        en:
          'I understand that I may be subject to administrative or criminal penalties if I knowingly and willfully make a materially false, fictitious, or fraudulent statement or representation in a visa application submitted by me or on my behalf.',
        fr:
          "Je comprends que je peux être soumis à des sanctions administratives ou pénales si j'ai sciemment et volontairement fait une déclaration fausse, fictive ou frauduleuse, dans une demande de visa déposée par moi ou en mon nom.",
        es:
          'Entiendo que puedo estar sujeto administrativas o penales, si yo a sabiendas y voluntariamente hacer una falsa, ficticia o declaración falsa en una solicitud de visado presentadas por mí o en mi nombre.',
        de:
          'Ich verstehe, dass ich kann vorbehaltlich Verwaltungs-oder strafrechtlicher Sanktionen, wenn ich wissentlich und vorsätzlich eine sachlich falsche, fiktive oder betrügerische Erklärung oder Darstellung in einem visa-Antrag durch mich oder in meinem Namen.',
        it:
          'Capisco che I può essere soggetta a amministrative o penali se ho consapevolmente e volontariamente fanno un materialmente falsa, fittizia o fraudolenta dichiarazione o rappresentazione in una domanda di visto presentate da me o sul mio conto.',
      },
    },
    confirm: {
      label: {
        en: 'Please confirm that you have read and understand the Disclaimer above.',
        fr: "S'il vous plaît confirmer que vous avez lu et compris l'Avertissement ci-dessus.",
        es: 'Por favor, confirme que ha leído y entendido la Renuncia.',
        de: 'Bitte bestätigen Sie, dass Sie gelesen haben und verstehen, den Haftungsausschluss vor.',
        it: 'Si prega di confermare di aver letto e compreso la dichiarazione di cui sopra.',
      },
      check: {
        en: 'I have read and understand the Disclaimer above and agree with these terms.',
        fr: "J'ai lu et compris l'Avertissement ci-dessus et j'accepte ces termes.",
        es: 'He leído y entiendo la Renuncia y de acuerdo con estos términos.',
        de: 'Ich habe gelesen und verstanden Verzichtserklärung oben und mit diesen Bedingungen einverstanden.',
        it: "Ho letto e compreso la dichiarazione di cui sopra e sono d'accordo con questi termini.",
      },
    },
  },
  personal: {
    section_title: {
      en: 'Personal Information',
      fr: 'Renseignements Personnels',
      es: 'Información Personal',
      de: 'Persönliche Informationen',
      it: 'Informazioni Personali',
    },
    section_descr: {
      en: 'Note: Data on this page must match exactly the information in your passport.',
      fr: 'Note: les Données sur cette page doivent correspondre exactement aux informations de votre passeport.',
      es: 'Nota: los Datos de esta página debe coincidir exactamente con la información de su pasaporte.',
      de: 'Hinweis: die Daten auf dieser Seite müssen exakt mit den Angaben in Ihrem Reisepass.',
      it: 'Nota: i Dati su questa pagina deve corrispondere esattamente le informazioni nel vostro passaporto.',
    },
    surname: {
      label: {
        en: 'Surname(s) (Last Name)',
        fr: 'Nom de Famille',
        es: 'Apellido(s) (apellido)',
        de: 'Vorname(N) (Nachname)',
        it: 'Cognome(i) (cognome)',
      },
      extra: {
        en: 'Last Name (Family Name)',
        fr: 'Nom de Famille',
        es: 'Apellido (Nombre De Familia)',
        de: 'Nachname (Familienname)',
        it: 'Last Name (Nome Di Famiglia)',
      },
    },
    section_descr_2: {
      en: 'Enter all surnames (or family names) exactly as they are written in your passport. If only one name is written in your passport, enter that as your “Surname” (e.g, FERNANDEZ GARCIA)',
      fr: 'Entrer tous les Noms de Famille exactement comme ils sont écrits dans votre passeport. Si un seul nom est écrit dans votre passeport, entrez votre “Nom” e.g, FERNANDEZ GARCIA)',
      es:
        'Introduzca todos los apellidos (o nombres de familia) exactamente como aparecen en su pasaporte. Si sólo hay un nombre que está escrito en su pasaporte, introducir como el "Apellido" (e.g, FERNÁNDEZ GARCÍA)',
      de: 'Geben Sie alle Familiennamen (oder Familiennamen), genau so wie Sie im Pass geschrieben. Wenn nur ein name im Pass geschrieben, geben Sie Ihren "Nachnamen" (e.g, FERNANDEZ GARCIA)',
      it: 'Inserire tutti i nomi (o cognomi) esattamente come sono scritti nel vostro passaporto. Se un solo nome è scritto nel passaporto, inserire come “Cognome” (e.g, FERNANDEZ GARCIA)',
    },
    given_name: {
      label: {
        en: 'Given Name(s) (First Name(s))',
        fr: 'Prénom(s)',
        es: 'Nombre(s) (Nombre(s))',
        de: 'Vorname(N) (First Name(s))',
        it: 'Nome(i) cognome(i))',
      },
      extra: {
        en: 'First Name(s)',
        fr: 'Prénom(s)',
        es: 'Nombre(s)',
        de: 'Vorname(N)',
        it: 'Nome(i)',
      },
    },
    section_descr_3: {
      en: "(e.g., JUAN MIGUEL), If your passport does not include a first or given name, please enter 'FNU' (meaning “first name unknown”) in the space for “Given Names”",
      fr: '(par exemple, JUAN MIGUEL), Si votre passeport ne comporte pas de prénom, entrez "FNU\' (ce qui signifie “nom inconnu”) dans le champ “prénoms”',
      es: '(por ejemplo, JUAN MIGUEL), Si su pasaporte no incluye un primero o el nombre, por favor, entrar en "FNU\' (que significa "primer nombre desconocido") en el espacio para "Nombres"',
      de: '(z.B., JUAN MIGUEL), Wenn Sie Ihren Pass nicht in der ersten oder bestimmten Namen, geben Sie bitte \'FNU\' (im Sinne von "Erster name unbekannt") in den Raum für einen "Vornamen"',
      it: '(ad esempio, JUAN MIGUEL), Se il vostro passaporto non includono nome, immettere \'FNU" (nel senso di “primo nome sconosciuto”) lo spazio per i “Nomi”',
    },
    b_ever_used_other_names: {
      label: {
        en: 'Have you ever used other names (i.e., maiden, religious, professional, alias, etc.)?',
        fr: "Avez-vous déjà utilisé d'autres noms (c'est à dire, Nom de jeune fille, religieux, professionnel, alias, etc.)?",
        es: '¿Alguna vez has usado otros nombres (es decir, de soltera, religiosa, profesional, alias, etc.)?',
        de: 'Haben Sie jemals andere Namen (D. H., maiden, religiöse, professionelle, alias, etc.)?',
        it: 'Avete mai usato altri nomi (cioè, fanciulla, religiosa, professionale, alias, etc.)?',
      },
    },
    used_other_name: {
      surname: {
        label: {
          en: 'Other Surnames Used (maiden, religious, professional, aliases, etc.)',
          fr: 'Autres Noms Utilisés (jeune fille, religieux, professionnel, alias, etc.)',
          es: 'Otros Apellidos que se Usan (de soltera, religiosa, profesional, alias, etc.)',
          de: 'Andere Nachnamen Verwendet (Jungfrau, religiös, Professionell, Aliase, etc.)',
          it: 'Altri Cognomi Usati (maiden, religiosa, professionale, alias, etc.)',
        },
      },
      given_name: {
        label: {
          en: 'Other Given Names Used',
          fr: 'Autres Noms Utilisés',
          es: 'Otros Nombres Usados',
          de: 'Andere Vornamen Verwendet',
          it: 'Altri Nomi Usati',
        },
      },
    },
    b_has_telecode_of_name: {
      label: {
        en: 'Do you have a telecode that represents your name?',
        fr: 'Avez-vous un télécode qui représente votre nom?',
        es: '¿Tienes un telecode que representa su nombre?',
        de: 'Haben Sie eine telecode für Ihre Namen?',
        it: 'Hai un telecode che rappresenta il tuo nome?',
      },
      extra: {
        en: 'Telecodes are 4 digits numbers that represent characters in some non-Roman alphabet names.',
        fr: 'Télécodes 4 chiffres nombres qui représentent des caractères dans certaines non-alphabet Romain noms.',
        es: 'Telecodes son 4 dígitos de números que representan caracteres en la no-alfabeto Romano nombres.',
        de: 'Telecodes sind 4-stellige zahlen, die die Zeichen darstellen, die in einigen nicht-lateinischen alphabet Namen.',
        it: 'Telecodes sono 4 cifre che rappresentano i personaggi non-alfabeto Romano nomi.',
      },
    },
    telecode_of_name: {
      surname: {
        label: {
          en: 'Please provide your Telecode Surname',
          fr: 'Veuillez fournir votre Télécode Nom de famille',
          es: 'Por favor, proporcione su Telecode Apellido',
          de: 'Bitte geben Sie Ihre Telecode Familienname',
          it: 'Si prega di fornire il vostro Telecode Cognome',
        },
      },
      given_name: {
        label: {
          en: 'Please provide your Telecode Given Name',
          fr: 'Veuillez fournir votre Télécode Prénom',
          es: 'Por favor, proporcione su Telecode Nombre',
          de: 'Bitte geben Sie Ihre Telecode Vorname',
          it: 'Si prega di fornire il vostro Telecode Nome',
        },
      },
    },
    sex: {
      label: {
        en: 'Sex',
        fr: 'Sexe',
        es: 'Sexo',
        de: 'Sex',
        it: 'Sesso',
      },
      male: {
        en: 'Male',
        fr: 'Mâle',
        es: 'Macho',
        de: 'Männlich',
        it: 'Maschio',
      },
      female: {
        en: 'Female',
        fr: 'Femelle',
        es: 'Hembra',
        de: 'Weiblich',
        it: 'Femmina',
      },
    },
    martial_status: {
      label: {
        en: 'Marital Status',
        fr: 'Statut Matrimonial',
        es: 'Estado Civil',
        de: 'Familienstand',
        it: 'Stato Civile',
      },
    },
    martial_other_explain: {
      label: {
        en: 'Marital Status Explain',
        fr: 'Expliquer le Statut Matrimonial',
        es: 'Estado Civil Explicar',
        de: 'Martial Status Erklären',
        it: 'Marziali Stato Spiegare',
      },
    },
    date_birth: {
      label: {
        en: 'Date of Birth',
        fr: 'Date de Naissance',
        es: 'Fecha de Nacimiento',
        de: 'Geburtsdatum',
        it: 'Data di Nascita',
      },
    },
    place_of_birth: {
      city: {
        label: {
          en: 'City of birth',
          fr: 'Ville de Naissance',
          es: 'Ciudad de nacimiento',
          de: 'Stadt der Geburt',
          it: 'Città di nascita',
        },
      },
      state: {
        label: {
          en: 'Province / State of birth',
          fr: 'Province / Région de Naissance',
          es: 'Estado / provincia de nacimiento',
          de: 'Provinz / Staat der Geburt',
          it: 'Provincia / Stato di nascita',
        },
      },
      country: {
        label: {
          en: 'Country of birth',
          fr: 'Pays de Naissance',
          es: 'País de nacimiento',
          de: 'Land der Geburt',
          it: 'Paese di nascita',
        },
      },
    },
    nationality: {
      label: {
        en: 'Country/Region of Origin (Nationality)',
        fr: "Pays/Région d'Origine (Nationalité)",
        es: 'País/Región de Origen (Nacionalidad)',
        de: 'Land/Region der Herkunft (Nationalität)',
        it: 'Paese/Regione di Provenienza (Nazionalità)',
      },
    },
    b_more_nationality: {
      label: {
        en: 'Do you hold or have you held any nationality other than the one indicated above on nationality?',
        fr: 'Avez-vous actuellement ou dans le passé déjà eu une autre Nationalité que celle indiquée ci-dessus sur le champ Nationalité?',
        es: '¿Tiene o ha tenido cualquier nacionalidad distinta a la indicada anteriormente en la nacionalidad?',
        de: 'Besitzen Sie oder haben Sie gehalten, jede Nationalität eine andere als die oben angegebene Staatsangehörigkeit?',
        it: 'Non si tiene o ha tenuto in qualsiasi nazionalità diversa da quella sopra indicata, sulla cittadinanza?',
      },
    },
    other_nationality: {
      label: {
        en: 'Other Country/Region of Origin (Nationality)',
        fr: "Autres Pays/Région d'Origine (Nationalité)",
        es: 'Otro País/Región de Origen (Nacionalidad)',
        de: 'Anderen Land/Region der Herkunft (Nationalität)',
        it: 'Altro Paese/Regione di Provenienza (Nazionalità)',
      },
    },
    b_has_other_nationality_passport: {
      label: {
        en: 'Do you hold a passport for the other country/region of origin (nationality) above?',
        fr: "Êtes vous titulaire d'un passeport pour les autres Pays/Région d'origine (Nationalité) ci-dessus?",
        es: '¿Tienes un pasaporte de otro país/región de origen (nacionalidad) de arriba?',
        de: 'Halten Sie einen Pass für das andere Land/die region der Herkunft (Nationalität) vor?',
        it: 'Non sei in possesso di un passaporto di un altro paese/regione di provenienza (nazionalità) di cui sopra?',
      },
    },
    other_nationality_passport: {
      label: {
        en: 'Passport Number',
        fr: 'Numéro De Passeport',
        es: 'Número De Pasaporte',
        de: 'Pass-Nummer',
        it: 'Il Numero Di Passaporto',
      },
    },
    b_permanent_resident_other_than_nationality: {
      label: {
        en: 'Are you a permanent resident of a country/region other than country/region of origin (nationality) indicated above?',
        fr: "Êtes-vous un résident permanent d'un pays/d'une région autre que le pays/région d'origine (nationalité) indiqué ci-dessus?",
        es: '¿Es usted un residente permanente de un país/región a otra del país/región de origen (nacionalidad) se indicó anteriormente?',
        de: 'Sind Sie Ihren ständigen Wohnsitz in einem Land oder einer anderen region als Land/region der Herkunft (Nationalität) oben angegeben?',
        it: 'Sei un residente permanente di un paese/regione diversa da paese/regione di provenienza (nazionalità) sopra indicato?',
      },
    },
    permanent_resident_country: {
      label: {
        en: 'Other Permanent Resident Country/Region',
        fr: 'Autres Pays/Région dont vous êtes Résident',
        es: 'Otro Residente Permanente Del País/Región',
        de: 'Andere Permanent Resident Land/Region',
        it: 'Altre Residente Permanente Paese/Regione',
      },
    },
    section_title_4: {
      en: 'Document Information',
      fr: "Document D'Information",
      es: 'Documento De Información',
      de: 'Dokument-Informationen',
      it: 'Documento Informazioni',
    },
    section_descr_4: {
      en:
        'Your National ID Number is a unique number that your government provides. The U.S Government provides unique numbers to those who seek employment (Social Security Number) or pay taxes (Taxpayer ID). Leave blank if you do not have any of these numbers',
      fr:
        "Votre Numéro de carte d'identité est un numéro unique que votre gouvernement fournit. Le Gouvernement des États-Unis fournit des numéros uniques pour ceux qui cherchent un emploi (Numéro de Sécurité Sociale) ou pour payer des impôts (numéro de Contribuable). Laissez vide si vous n'avez pas l'un de ces numéros",
      es:
        'Nacional de identidad Número es un número único que su gobierno ofrece. El U. S Gobierno proporciona números únicos a los que buscan empleo (Número de Seguridad Social) o el pago de impuestos (IDENTIFICACIÓN de Contribuyente). Dejar en blanco si no tiene alguno de estos números',
      de:
        'Ihre Nationale ID-Nummer ist eine einzigartige Nummer, die Ihre Regierung stellt. Die U. S Regierung liefert eindeutige zahlen für diejenigen, die eine Beschäftigung suchen (Social Security Number) oder Steuern zahlen (Steuernummer). Lassen Sie das Feld leer, wenn Sie nicht über eine dieser Nummern',
      it:
        'Il Numero della carta di identità è un numero univoco che il governo fornisce. U. S Governo fornisce numeri unici per coloro che cercano occupazione (Numero di previdenza Sociale) o pagare le tasse (fiscale). Lasciare vuoto se non si dispone di uno qualsiasi di questi numeri',
    },
    national_id_number: {
      label: {
        en: 'National ID Number',
        fr: "Numéro National d'Identité",
        es: 'Nacional de identidad Número',
        de: 'Nationale ID-Nummer',
        it: 'Numero della carta di identità',
      },
      extra: {
        en:
          'Your National ID Number is a unique number that your government provides. The U.S. Government provides unique numbers to those who seek employment (Social Security Number) or pay taxes (Taxpayer ID). Leave blank if you do not have any of these numbers',
        fr:
          "Votre Numéro National d'Identité est un numéro unique que votre gouvernement fournit. Le Gouvernement des États-Unis fournit des numéros uniques pour ceux qui cherchent un emploi (Numéro de Sécurité Sociale) ou pour payer des impôts (numéro de Contribuable). Laissez vide si vous n'avez pas l'un de ces numéros",
        es:
          'Nacional de identidad Número es un número único que su gobierno ofrece. El Gobierno de estados UNIDOS proporciona números únicos a los que buscan empleo (Número de Seguridad Social) o el pago de impuestos (IDENTIFICACIÓN de Contribuyente). Dejar en blanco si no tiene alguno de estos números',
        de:
          'Ihre Nationale ID-Nummer ist eine einzigartige Nummer, die Ihre Regierung stellt. Die US-Regierung bietet eine einzigartige Nummern für diejenigen, die eine Beschäftigung suchen (Social Security Number) oder Steuern zahlen (Steuernummer). Lassen Sie das Feld leer, wenn Sie nicht über eine dieser Nummern',
        it:
          'Il Numero della carta di identità è un numero univoco che il governo fornisce. Il Governo degli stati UNITI fornisce numeri unici per coloro che cercano occupazione (Numero di previdenza Sociale) o pagare le tasse (fiscale). Lasciare vuoto se non si dispone di uno qualsiasi di questi numeri',
      },
    },
    social_security_number: {
      label: {
        en: 'US Social Security Number',
        fr: 'Numéro de Sécurité Sociale US',
        es: 'Número de seguro Social',
        de: 'US-Social-Security-Nummer',
        it: 'Numero di previdenza Sociale',
      },
      extra: {
        en: 'Leave blank if you do not have any of these numbers',
        fr: "Laissez vide si vous n'avez pas l'un de ces numéros",
        es: 'Dejar en blanco si no tiene alguno de estos números',
        de: 'Lassen Sie das Feld leer, wenn Sie nicht über eine dieser Nummern',
        it: 'Lasciare vuoto se non si dispone di uno qualsiasi di questi numeri',
      },
    },
    tax_id_number: {
      label: {
        en: 'US Tax ID Number',
        fr: 'Numéro de Taxe US',
        es: 'NOSOTROS, Número de IDENTIFICACIÓN Fiscal',
        de: 'US-Steuer-ID-Nummer',
        it: 'NOI Tax ID Number',
      },
      extra: {
        en: 'Leave blank if you do not have any of these numbers',
        fr: "Laissez vide si vous n'avez pas l'un de ces numéros",
        es: 'Dejar en blanco si no tiene alguno de estos números',
        de: 'Lassen Sie das Feld leer, wenn Sie nicht über eine dieser Nummern',
        it: 'Lasciare vuoto se non si dispone di uno qualsiasi di questi numeri',
      },
    },
  },
  travel: {
    section_title: {
      en: 'Travel Information',
      fr: 'Informations De Voyage',
      es: 'Información De Viajes',
      de: 'Reise-Informationen',
      it: 'Informazioni Di Viaggio',
    },
    purpose_of_trip: {
      label: {
        en: 'Purpose of Trip to the U.S.',
        fr: 'Le but du Voyage aux États-Unis',
        es: 'El propósito del Viaje a los estados UNIDOS',
        de: 'Zweck der Reise in die USA',
        it: 'Scopo del Viaggio negli stati UNITI',
      },
      extra: {
        en: 'PLEASE SELECT A VISA CLASS',
        fr: 'VEUILLEZ SÉLECTIONNER UN TYPE DE VISA',
        es: 'POR FAVOR, SELECCIONE UN TIPO DE VISA',
        de: 'BITTE WÄHLEN SIE EIN VISUM DER KLASSE',
        it: 'SI PREGA DI SELEZIONARE UN VISTO DI CLASSE',
      },
    },
    other_purpose_of_trip: {
      label: {
        en: 'Specify (B)',
        fr: 'Spécifier (B)',
        es: 'Especificar (B)',
        de: 'Geben Sie (B)',
        it: 'Specificare (B)',
      },
    },
    purpose_info: {
      label: {
        en: 'Principal Applicant Information',
        fr: "Informations de l'Applicant Principal",
        es: 'Director De Información Del Solicitante',
        de: 'Hauptbewerber Informationen',
        it: 'Principali Dati Del Richiedente',
      },
      surname: {
        en: 'Surname(s) (Last Name)',
        fr: 'Nom de famille',
        es: 'Apellido(s) (apellido)',
        de: 'Vorname(N) (Nachname)',
        it: 'Cognome(i) (cognome)',
      },
      given_name: {
        en: 'Given Name(s) (First Name)',
        fr: 'Prénom(s)',
        es: 'Nombre(s) (Primer Nombre)',
        de: 'Vorname(N) (First Name)',
        it: 'Nome(s) (Nome)',
      },
      petition: {
        label: {
          en: 'Application Receipt/Petition Number',
          fr: 'Récépissé de La Demande/Numéro de Pétition',
          es: 'La Recepción De La Solicitud/Petición Número',
          de: 'Antrag Eingang/Petition Nummer',
          it: 'Ricevuta Della Domanda/Petizione Numero',
        },
        extra: {
          en:
            'If you are applying for a petition-based visa, your application receipt/petition number was given to you by the Department of Homeland Security’s U. S. Citizenship and Immigration Services (USCIS) after you filed your petition application at a USCIS Service Center. The application receipt/petition number is 13 characters long and the first three characters are letters.',
          fr:
            "Si vous postulez pour une pétition de visa, votre Récépissé de Demande/Numéro de Pétition vous a été donnée par le Ministère de la Sécurité intérieure de l'U. S. Citizenship and Immigration Services (USCIS). Ce Récépicé est composé de 13 caractères et les trois premiers caractères sont des lettres.",
          es:
            'Si usted está solicitando una petición de visa, su aplicación recibo/número de la petición les fue dado por el Departamento de Seguridad Nacional de estados unidos (U. S. Citizenship and Immigration Services (USCIS) después de haber presentado su petición de la solicitud en un Centro de Servicio de USCIS. La recepción de la solicitud/petición número es de 13 caracteres y los tres primeros caracteres son letras.',
          de:
            'Wenn Sie sich bewerben für eine petition-basierten visa, Ihre Anwendung Erhalt/petition Nummer gegeben wurde durch das Department of Homeland Security U. S. Citizenship and Immigration Services (USCIS) nach der Einreichung Ihrer petition Anwendung in einem USCIS Service-Center. Der Antrag Eingang/petition-Nummer ist 13 Zeichen lang und die ersten drei Zeichen sind Buchstaben.',
          it:
            'Se si sta applicando per una petizione a base di visto, ricevuta della domanda/petizione numero è stato dato a voi dal Dipartimento di Homeland Security degli stati uniti Cittadinanza e Servizi Immigrazione (USCIS) dopo aver archiviato la vostra applicazione petizione presso un Centro di Servizio di USCIS. La ricevuta della domanda/petizione numero è di 13 caratteri, di cui i primi tre caratteri sono lettere.',
        },
      },
    },
    section_title_2: {
      en: 'US Travel Information',
      fr: 'Informations de Voyage aux États-Unis',
      es: 'NOSOTROS Información de Viaje',
      de: 'US-Reise-Informationen',
      it: 'NOI di Informazioni di Viaggio',
    },
    section_descr_2: {
      en: 'Give details of the address where you will stay in the US. The address may be that of a hotel or private residence.',
      fr: "Donner les détails de l'adresse où vous pourrez séjourner aux États-Unis. L'adresse peut être celle d'un hôtel ou d'une résidence privée.",
      es: 'Dar los datos de la dirección donde va a permanecer en los estados unidos. La dirección puede ser la de un hotel o residencia privada.',
      de: 'Geben Sie die details der Adresse, wo Sie in den USA bleiben. Die Adresse kann sein, dass der ein hotel oder privater Wohnsitz.',
      it: "Dare i dettagli dell'indirizzo a cui si desidera soggiornare negli stati UNITI. L'indirizzo può essere quella di un hotel o residenza privata.",
    },
    travel_plan: {
      date_of_arrival: {
        label: {
          en: 'Intended date of arrival in the USA',
          fr: "Date d'arrivée prévue aux États-Unis",
          es: 'La intención de la fecha de llegada a los estados UNIDOS',
          de: 'Geplantes Ankunftsdatum in den USA',
          it: 'Data di arrivo negli USA',
        },
      },
      length_of_stay: {
        length: {
          label: {
            en: 'Intended Length of Stay in the USA',
            fr: 'Durée de Séjour aux États-Unis',
            es: 'La intención de la Duración de la Estancia en los estados UNIDOS',
            de: 'Beabsichtigte Dauer des Aufenthalts in den USA',
            it: 'Prevista Durata di Soggiorno negli USA',
          },
          extra: {
            en: 'Enter the Number of Day(s), Week(s), Month(s), Year(s) ONLY THE NUMBER.',
            fr: 'Entrez le Nombre de Jour(s), Semaine(s), Mois(s), Année(s) UNIQUEMENT LE NOMBRE.',
            es: 'Introduzca el Número de Día(s) Semana(s), Mes(es), Año(s) SÓLO EL NÚMERO.',
            de: 'Geben Sie die Anzahl Tag(en) Woche(N), Monat(E) Jahr(E) NUR DIE ANZAHL.',
            it: 'Immettere il Numero di Giorni, settimane, Mesi, anni) SOLO IL NUMERO.',
          },
        },
        period: {
          label: {
            en: 'Please Specify',
            fr: 'Veuillez Spécifier',
            es: 'Por Favor Especificar',
            de: 'Bitte Geben Sie',
            it: 'Si Prega Di Specificare',
          },
        },
      },
    },
    address_you_will_stay: {
      label: {
        en: 'Address Where You Will Stay in the U.S.',
        fr: 'Adresse où vous pourrez séjourner aux États-Unis',
        es: 'La dirección Donde podrá Permanecer en los estados UNIDOS',
        de: 'Adresse, Wo Sie in den USA Bleiben',
        it: 'Indirizzo a Cui Si desidera Stare negli USA',
      },
      street_addr1: {
        en: 'Street Address',
        fr: 'Adresse',
        es: 'Dirección De La Calle',
        de: 'Anschrift',
        it: 'Indirizzo',
      },
      street_addr2: {
        en: 'Address Line 2 (Optional)',
        fr: 'Adresse Ligne 2 (Facultatif)',
        es: 'La Dirección De La Línea 2 (Opcional)',
        de: 'Adresse Zeile 2 (Optional)',
        it: 'Indirizzo 2 (Opzionale)',
      },
      city: {
        en: 'City',
        fr: 'Ville',
        es: 'Ciudad',
        de: 'Stadt',
        it: 'Città',
      },
      state: {
        en: 'State',
        fr: 'État',
        es: 'Estado',
        de: 'Zustand',
        it: 'Stato',
      },
      zip_code: {
        en: 'ZIP Code (if known)',
        fr: 'Code POSTAL (si connu)',
        es: 'Código POSTAL (si se conoce)',
        de: 'ZIP-Code (wenn bekannt)',
        it: 'Codice postale (se noto)',
      },
    },
    paying_person_for_trip: {
      label: {
        en: 'Person/Entity Paying for Your Trip',
        fr: 'Personne ou Entité qui paye votre voyage',
        es: 'Persona/Entidad a Pagar por Tu Viaje',
        de: 'Person/Entität, die Bezahlung Ihrer Reise',
        it: 'Persona/Entità di Pagare per il Vostro Viaggio',
      },
    },
    section_title_financial_support: {
      en: 'Financial support for your trip',
      fr: 'Soutien financier pour votre voyage',
      es: 'Apoyo financiero para tu viaje',
      de: 'Finanzielle Unterstützung für Ihre Reise',
      it: 'Il sostegno finanziario per il vostro viaggio',
    },
    paying_person_info: {
      surname: {
        label: {
          en: 'Surnames of Person Paying for Trip',
          fr: 'Nom de la Personne qui paye votre voyage',
          es: 'Los apellidos de la Persona que Paga por Viaje',
          de: 'Die Familiennamen der Person, die die Zahlung für die Reise',
          it: 'Cognome della Persona che ha pagato per il Viaggio',
        },
        extra: {
          en: '(e.g., FERNANDEZ GARCIA)',
          fr: '(par exemple, FERNANDEZ GARCIA)',
          es: '(por ejemplo, FERNÁNDEZ GARCÍA)',
          de: '(z.B., FERNANDEZ GARCIA)',
          it: '(ad esempio, FERNANDEZ GARCIA)',
        },
      },
      given_name: {
        label: {
          en: 'Given Names of Person Paying for Trip',
          fr: 'Prénoms de la Personne qui paye votre voyage',
          es: 'Nombre de la Persona que Paga por Viaje',
          de: 'Die Namen der Zahlenden Person für die Reise',
          it: 'Nomi di Persona che ha pagato per il Viaggio',
        },
        extra: {
          en: '(e.g., JUAN MIGUEL)',
          fr: '(par exemple, JUAN MIGUEL)',
          es: '(por ejemplo, JUAN MIGUEL)',
          de: '(z.B., JUAN MIGUEL)',
          it: '(ad esempio, JUAN MIGUEL)',
        },
      },
      tel_number: {
        label: {
          en: 'Phone number of person paying for your trip',
          fr: 'Numéro de téléphone de la personne qui paye votre voyage',
          es: 'Número de teléfono de la persona que paga para tu viaje',
          de: 'Telefon-Nummer der person, die die Zahlung für Ihre Reise',
          it: 'Il numero di telefono della persona che ha pagato per il tuo viaggio',
        },
      },
      email: {
        label: {
          en: 'Email of person paying for your trip',
          fr: 'E-mail de la personne qui paye votre voyage',
          es: 'Correo electrónico de la persona que paga para tu viaje',
          de: 'E-Mail der person, die die Zahlung für Ihre Reise',
          it: 'E-mail della persona a pagare per il vostro viaggio',
        },
        extra: {
          en: 'Leave blank if does not apply',
          fr: "Laissez vide si ça s'applique pas",
          es: 'Dejar en blanco si no se aplica',
          de: 'Leer lassen, wenn nicht anwendbar',
          it: 'Lasciare vuoto se non si applica',
        },
      },
      relationship: {
        label: {
          en: 'Relationship to You',
          fr: 'Relation',
          es: 'Relación para que Usted',
          de: 'Beziehung zu Ihnen',
          it: 'Rapporto di parentela',
        },
      },
      b_same_address: {
        label: {
          en: 'Is the address of the party paying for your trip the same as your Home or Mailing Address?',
          fr: "L'adresse de la partie qui paye votre voyage est-elle la même que votre Habitation ou votre Adresse Postale?",
          es: 'Es la dirección de la parte que pagar por su viaje en el mismo, como su Dirección de Correo o Casa?',
          de: 'Die Adresse der Partei die Bezahlung Ihrer Reise die gleiche wie Ihre Haus-oder Postanschrift?',
          it: "È l'indirizzo del partito di pagare per il vostro viaggio stesso come la vostra Casa o l'Indirizzo?",
        },
      },
      address: {
        company: {
          en: 'Address of Company/Organization Paying',
          fr: "Adresse de l'Entreprise/Organisation qui paye votre voyage",
          es: 'La dirección de la Empresa/Organización Pagando',
          de: 'Adresse der Firma/Organisation Zahlen',
          it: "Indirizzo dell'Azienda/Organizzazione Pagare",
        },
        person: {
          en: 'Address',
          fr: 'Adresse',
          es: 'Dirección',
          de: 'Adresse',
          it: 'Indirizzo',
        },
      },
    },
    paying_org_info: {
      name: {
        label: {
          en: 'Name of Company/Organization Paying for Trip',
          fr: "Nom de l'Entreprise/Organisation qui paye votre voyage",
          es: 'Nombre de la Empresa/Organización de Pagar por el Viaje',
          de: 'Name des Unternehmens/der Organisation die Zahlung für die Reise',
          it: "Il nome dell'Azienda/Organizzazione Pagare per il Viaggio",
        },
      },
      tel_number: {
        label: {
          en: 'Telephone Number',
          fr: 'Le Numéro De Téléphone',
          es: 'Número De Teléfono',
          de: 'Telefonnummer',
          it: 'Il Numero Di Telefono',
        },
      },
      relationship: {
        label: {
          en: 'Relationship to You',
          fr: 'Relation',
          es: 'Relación para que Usted',
          de: 'Beziehung zu Ihnen',
          it: 'Rapporto di parentela',
        },
      },
    },
  },
  travel_companion: {
    section_title: {
      en: 'Information about your travel companions',
      fr: 'Informations sur vos compagnons de voyage',
      es: 'La información acerca de sus compañeros de viaje',
      de: 'Informationen über Ihre Mitreisenden',
      it: 'Informazioni circa i vostri compagni di viaggio',
    },
    b_other_person_travel_with: {
      label: {
        en: 'Are there other persons traveling with you?',
        fr: "Existe-il d'autres personnes qui voyagent avec vous?",
        es: 'Hay otras personas que viajan con usted?',
        de: 'Gibt es noch andere Personen mit Ihnen Reisen?',
        it: 'Ci sono altre persone che viaggiano con voi?',
      },
    },
    b_part_of_group: {
      label: {
        en: 'Are you traveling as part of a group or organization?',
        fr: "Voyagez vous dans le cadre d'un groupe ou d'une organisation?",
        es: 'Viaja como parte de un grupo u organización?',
        de: 'Sie Reisen als Teil einer Gruppe oder Organisation?',
        it: "Viaggi come parte di un gruppo o di un'organizzazione?",
      },
    },
    company: {
      label: {
        en: 'Name of group or organisation if traveling as part of a group or organization',
        fr: "Indiquez le nom du groupe ou de l'organisation si vous faites partie d'un groupe ou d'une organisation",
        es: 'El nombre del grupo o de la organización en caso de que viaje como parte de un grupo u organización',
        de: 'Name der Gruppe oder organisation, wenn das Reisen als Teil einer Gruppe oder Organisation',
        it: "Il nome del gruppo o dell'organizzazione se si viaggia come parte di un gruppo o di un'organizzazione",
      },
    },
    people: {
      label: {
        en: 'List of people traveling with you. (EACH TRAVELLER MUST COMPLETE HIS OWN APPLICATION)',
        fr: 'Liste de personnes voyageant avec vous. (CHAQUE VOYAGEUR DOIT REMPLIR SA PROPRE DEMANDE)',
        es: 'Lista de las personas que viajan con usted. (CADA VIAJERO DEBE COMPLETAR SU PROPIA APLICACIÓN)',
        de: 'Liste der Menschen, die mit Ihnen Reisen. (JEDER REISENDE HAT SEINE EIGENE ANWENDUNG)',
        it: 'Elenco di persone che viaggiano con voi. (OGNI VIAGGIATORE DEVE COMPLETARE LA SUA APPLICAZIONE)',
      },
    },
  },
  previous_travel: {
    section_title: {
      en: 'Previous US Travel',
      fr: 'Les Précédents Voyages aux États-Unis',
      es: 'Anterior Viajar a los EE.UU.',
      de: 'Frühere Reisen in die USA',
      it: 'Precedenti Viaggi negli stati UNITI',
    },
    b_ever_been_in_US: {
      label: {
        en: 'Have you ever been to the US before?',
        fr: 'Avez-vous déjà été aux États-Unis?',
        es: 'Ha sido usted alguna vez a los estados unidos antes?',
        de: 'Haben Sie schon einmal in den USA vor?',
        it: 'Sei mai stato a prima?',
      },
      extra: {
        en: 'Check if you have been in the US before and fill out the details of your last 5 visits below',
        fr: 'Cochez la case si vous avez été aux États-Unis et fournissez le détail de vos 5 dernières visites ci-dessous',
        es: 'Compruebe si usted ha estado en los estados unidos antes y rellene los detalles de sus últimas 5 visitas a continuación',
        de: 'Prüfen Sie, ob Sie in den USA vor und füllen Sie die details Ihrer letzten 5 Besuche unten',
        it: 'Controllare se vi sono stati negli stati UNITI, prima e compilare i dettagli del tuo ultimo 5 visite al di sotto',
      },
    },
    prev_visit_info: {
      label: {
        en: 'Provide a list of your last 5 visits',
        fr: 'Fournir une liste de vos 5 dernières visites',
        es: 'Proporcionar una lista de sus últimas 5 visitas',
        de: 'Stellen Sie eine Liste Ihrer letzten 5 besuchen',
        it: 'Fornire un elenco degli ultimi 5 visite',
      },
    },
    b_ever_hold_Driver_License: {
      label: {
        en: 'Do you or did you ever hold a U.S. Driver’s License?',
        fr: 'Avez-vous actuellement ou dans le passé détenu un permis de conduire Américain?',
        es: '¿O ¿alguna vez mantener una Licencia de conducir de EE.UU.?',
        de: 'Haben Sie oder haben Sie jemals ein US-Führerschein?',
        it: 'Avete o avete mai tenere un AMERICANO patente di guida?',
      },
    },
    prev_DL_info: {
      number: {
        label: {
          en: "Driver's License number",
          fr: 'Numéro du permis de conduire',
          es: 'Número de Licencia de conducir',
          de: 'Führerschein-Nummer',
          it: 'Numero di patente di guida',
        },
        extra: {
          en: 'Leave it blank if you do not know',
          fr: 'Laisser vide si vous ne savez pas',
          es: 'Deje en blanco si no sabe',
          de: 'Lassen Sie es leer, wenn Sie nicht wissen,',
          it: 'Lasciare vuoto se non si conosce',
        },
      },
      state: {
        label: {
          en: "State of Driver's License",
          fr: "L'État ayant fourni le permis de conduire",
          es: 'Estado de la Licencia de conducir',
          de: 'Zustand der Führerschein',
          it: 'Stato di patente di guida',
        },
      },
    },
    b_ever_been_issued_US_Visa: {
      label: {
        en: 'Have you ever been issued a US visa?',
        fr: 'Avez-vous déjà obtenu un visa Américain?',
        es: '¿Alguna vez has sido expedido un visado?',
        de: 'Haben Sie jemals ausgestellt wurde ein US-Visum?',
        it: 'Sei mai stato rilasciato un visto di ingresso?',
      },
    },
    US_Visa: {
      date: {
        label: {
          en: 'Date Last Visa Was Issued',
          fr: 'La dernière Date à laquelle le Visa a été délivré',
          es: 'Fecha De La Última Visa Fue Emitida',
          de: 'Datum Letzte Visum Ausgestellt Wurde',
          it: 'Data Ultimo Visto È Stato Rilasciato',
        },
      },
      number: {
        label: {
          en: 'Visa Number',
          fr: 'Numéro Du Visa',
          es: 'Número De Visa',
          de: 'Visa Nummer',
          it: 'Numero Di Visto',
        },
        extra: {
          en:
            'Enter the 8-digit number that is displayed in red on the lower right hand side of your visa. If your previous visa was a Border Crossing Card enter the last 12-digit number of the first line of the machine readable zone. Leave blank if you do not know',
          fr:
            "Entrez le numéro à 8 chiffres qui s'affiche en rouge sur le côté droit inférieur de votre visa. Si votre visa précédent était une carte de Passage à la Frontière, entrez le dernier numéro à 12 chiffres de la première ligne de la zone de lecture automatique. Laissez vide si vous ne savez pas",
          es:
            'Introduzca los 8 dígitos del número que se muestra en rojo en el lado inferior derecho de su visa. Si su visa anterior era una Tarjeta para Cruzar la Frontera entre el último número de 12 dígitos de la primera línea de la zona legible por máquina. Dejar en blanco si no sabe',
          de:
            'Geben Sie die 8-stellige Nummer, die wird in rot angezeigt, auf der unteren rechten Seite Ihres Visums. Wenn Ihr den vorherigen visa war ein Grenzübergang-Karte geben Sie die letzten 12-stellige Nummer der ersten Zeile der maschinenlesbaren zone. Lassen Sie das Feld leer, wenn Sie nicht wissen,',
          it:
            "Immettere il numero di 8 cifre che viene visualizzato in rosso in basso a destra del vostro visto. Se il precedente visto è stato un valico di Frontiera di Carta di inserire l'ultimo numero a 12 cifre della prima linea della zona a lettura automatica. Lasciare vuoto se non si conosce",
        },
      },
      b_same_type_visa: {
        label: {
          en: 'Are you applying for the same type of visa?',
          fr: 'Faites-vous une demande pour le même type de visa?',
          es: 'Se va a solicitar para el mismo tipo de visa?',
          de: 'Bewerben Sie sich für die gleiche Art von Visum?',
          it: 'Si candida per lo stesso tipo di visto?',
        },
      },
      b_same_cntry_visa: {
        label: {
          en: 'Are you applying in the same country or location where the visa above was issued, and is this country or location your place of principal of residence?',
          fr: 'Appliquez-vous dans le même pays où le visa ci-dessus a été obtenu, et est ce que ce pays est votre lieu principal de résidence?',
          es: 'Se va a solicitar en el mismo país o ubicación donde la visa anterior fue emitido, y es a este país o ubicación de su lugar principal de residencia?',
          de: 'Bewerben Sie sich im selben Land oder Ort, wo das Visum war ausgestellt, und ist in diesem Land oder Ort Ihr Ort der Rektor der Residenz?',
          it: 'Sono applicate nello stesso paese o luogo in cui il visto di cui sopra è stato rilasciato, ed è questo il paese o il luogo per il luogo principale di residenza?',
        },
      },
      b_been_ten_printed: {
        label: {
          en: 'Have you been ten-printed?',
          fr: "Avez vous fait un relevé d'empreintes?",
          es: 'Han sido diez-impreso?',
          de: 'Haben Sie schon zehn-gedruckt?',
          it: 'Sei stato a dieci stampato?',
        },
      },
      b_ever_been_lost: {
        label: {
          en: 'Has your US Visa ever been lost or stolen?',
          fr: 'Votre Visa a-t-il été perdu ou volé?',
          es: 'Tiene su Visa de EE.UU. nunca ha perdido o robado?',
          de: 'Hat Ihr US-Visum jemals verloren geht oder gestohlen wird?',
          it: 'Ha il Visto mai stato perso o rubato?',
        },
      },
      lost_info: {
        year: {
          label: {
            en: 'Which Year',
            fr: 'En quelle Année',
            es: 'Que Año',
            de: 'Das Jahr',
            it: 'Che Anno',
          },
        },
        explain: {
          label: {
            en: 'If you answered yes, give details below.',
            fr: 'Si vous avez répondu oui, donnez les détails ci-dessous.',
            es: 'Si usted contesta sí, dé los detalles a continuación.',
            de: 'Wenn Sie mit ja beantwortet, geben Sie die details unten.',
            it: 'Se avete risposto sì, fornire dettagli.',
          },
        },
      },
      b_ever_been_cancelled: {
        label: {
          en: 'Have you ever had a US Visa cancelled or revoked?',
          fr: 'Avez-vous déjà eu un Visa annulé ou révoqué?',
          es: '¿Alguna vez has tenido una Visa cancelada o revocada?',
          de: 'Haben Sie jemals ein US-Visum annulliert oder aufgehoben?',
          it: 'Avete mai avuto un Visto di ingresso o annullato o revocato?',
        },
      },
    },
    b_ever_been_refused_US_Visa: {
      label: {
        en: 'Have you ever been refused a US Visa, or been refused admission to the United States, or withdrawn your application for admission at the port of entry?',
        fr: "Vous a-t-on déjà refusé un Visa, ou refuser l'admission aux États-unis, ou retirer votre demande d'admission au port d'entrée?",
        es: '¿Alguna vez has sido negado una Visa, o que ha sido denegada la admisión a los Estados unidos, o retirado su solicitud de admisión en el puerto de entrada?',
        de: 'Haben Sie schon einmal weigerte sich ein US-Visum, oder wurde verweigert Einreise in die Vereinigten Staaten oder Ihre Bewerbung zurückgezogen, die für die Zulassung bei der Einreise?',
        it: "Sei mai stato rifiutato un Visto di ingresso o stato negato l'ingresso negli Stati Uniti, o ritirato il ricorso per l'ammissione alla porta di ingresso?",
      },
    },
    b_ever_been_denied_travel_auth: {
      label: {
        en: 'Have you ever been denied travel authorization by the Department of Homeland Security through the Electronic System fo Travel Authorization (ESTA)?',
        fr: "AVous a-t-on déjà refusé une autorisation de voyage par le Ministère de la Sécurité intérieure par le biais du Système Électronique d'Autorisation de Voyage (ESTA)?",
        es: '¿Alguna vez has sido negada la autorización de viajes por el Departamento de Seguridad Nacional a través del Sistema Electrónico de las fo de la Autorización de Viaje (ESTA)?',
        de: 'Haben Sie schon einmal die Reise verwehrt Genehmigung durch das Department of Homeland Security über das Elektronische System fo Travel Authorization (ESTA)?',
        it: "Sei mai stato negato l'autorizzazione al viaggio da parte del Dipartimento di Homeland Security, attraverso il Sistema Elettronico fo l'Autorizzazione al Viaggio (ESTA)?",
      },
    },
    b_petition: {
      label: {
        en: 'Has anyone ever filled an immigrant petition on your behalf with the US Citizenship and Immigration Services?',
        fr: "Quelqu'un a-t-il rempli une pétition d'immigrant en votre nom avec le service d'Immigration des États-Unis?",
        es: '¿Alguien ha llenado una petición de inmigrante en su nombre con la Ciudadanía de los EE.UU. y Servicios de Inmigración?',
        de: 'Hat jemand schon gefüllt, ein immigrant petition in Ihrem Namen mit dem US Citizenship and Immigration Services?',
        it: 'Qualcuno ha mai compilato una petizione immigrati sul tuo conto con gli stati UNITI Cittadinanza e Servizi Immigrazione?',
      },
    },
  },
  address_and_phone: {
    section_title: {
      en: 'Applicant Contact Information',
      fr: "Informations de l'Applicant",
      es: 'Información De Contacto Del Solicitante',
      de: 'Bewerber-Kontakt-Informationen',
      it: 'Richiedente Le Informazioni Di Contatto',
    },
    home_addr: {
      label: {
        en: 'Applicant Home Address',
        fr: "Adresse de résidence de l'Applicant",
        es: 'Solicitante Domicilio',
        de: 'Antragsteller Anschrift',
        it: 'Richiedente Indirizzo Di Casa',
      },
    },
    phone_info: {
      home: {
        label: {
          en: 'Primary Phone number',
          fr: 'Numéro de Téléphone principal',
          es: 'Número de Teléfono principal',
          de: 'Primäre Telefonnummer',
          it: 'Il numero di Telefono primario',
        },
      },
      mobile: {
        label: {
          en: 'Secondary Phone number',
          fr: 'Numéro de Téléphone Secondaire',
          es: 'Secundaria número de Teléfono',
          de: 'Sekundäre Telefonnummer',
          it: 'Secondaria numero di Telefono',
        },
        extra: {
          en: 'Leave blank if you do not have a secondary phone number.',
          fr: "Laissez vide si vous n'avez pas de numéro de téléphone secondaire.",
          es: 'Deje en blanco si no tiene un segundo número de teléfono.',
          de: 'Lassen Sie das Feld leer, wenn Sie nicht über eine sekundäre Telefonnummer ein.',
          it: 'Lasciare vuoto se non si dispone di un secondario numero di telefono.',
        },
      },
      work: {
        label: {
          en: 'Work Phone number',
          fr: 'Numéro de téléphone du travail',
          es: 'Número de Teléfono del trabajo',
          de: 'Telefon-Nummer',
          it: "Numero di Telefono dell'ufficio",
        },
        extra: {
          en: 'Leave blank if you do not have a work phone number.',
          fr: "Laissez vide si vous ne disposez pas d'un numéro de téléphone au travail.",
          es: 'Dejar en blanco si no tiene un número de teléfono del trabajo.',
          de: 'Lassen Sie das Feld leer, wenn Sie nicht haben eine Telefon-Nummer.',
          it: "Lasciare vuoto se non si dispone di un numero di telefono dell'ufficio.",
        },
      },
    },
    email: {
      label: {
        en: 'Email',
        fr: 'E-mail',
        es: 'Correo electrónico',
        de: 'E-Mail',
        it: 'Email',
      },
      extra: {
        en: 'Please enter a valid email address. It will be used to contact you about your application.',
        fr: 'Veuillez entrer une adresse email valide. Elle sera utilisée pour vous contacter à propos de votre demande.',
        es: 'Por favor, introduzca una dirección válida de correo electrónico. Será utilizada para contactar con usted acerca de su aplicación.',
        de: 'Bitte geben Sie eine gültige E-Mail-Adresse. Es wird verwendet, um Kontakt mit Ihnen über Ihre Anwendung.',
        it: "Si prega di inserire un indirizzo email valido. Saranno utilizzati per contattare l'utente circa la vostra applicazione.",
      },
    },
    enter_email: {
      extra: {
        en: 'Enter Email',
        fr: 'Entrez E-Mail',
        es: 'Ingresa Tu Correo Electrónico',
        de: 'Geben Sie E-Mail',
        it: 'Inserisci E-Mail',
      },
    },
    email_confirm: {
      extra: {
        en: 'Confirm Email',
        fr: 'Confirmer E-Mail',
        es: 'Confirmar Dirección De Correo Electrónico',
        de: 'E-Mail Bestätigen',
        it: "Confermare L'E-Mail",
      },
    },
    b_additional_phones: {
      label: {
        en: 'Have you used any other phone numbers in the last five years?',
        fr: "Avez-vous utilisé d'autres numéros de téléphone dans les cinq dernières années?",
        es: 'Has usado otros números de teléfono en los últimos cinco años?',
        de: 'Haben Sie noch weitere Telefonnummern, die in den letzten fünf Jahren?',
        it: 'Hai usato altri numeri di telefono negli ultimi cinque anni?',
      },
    },
    additional_phones: {
      label: {
        en: 'Provide a list of additional phone numbers',
        fr: 'Fournir une liste des autres numéros de téléphone',
        es: 'Proporcionar una lista de números de teléfono adicionales',
        de: 'Eine Liste der weiteren Telefonnummern',
        it: 'Fornire un elenco di ulteriori numeri di telefono',
      },
    },
    b_additional_emails: {
      label: {
        en: 'Have you used any other email addresses in the last five years?',
        fr: "Avez-vous utilisé d'autres adresses e-mail dans les cinq dernières années?",
        es: 'Han utilizado otras direcciones de correo electrónico en los últimos cinco años?',
        de: 'Haben Sie eine andere E-Mail-Adressen in den letzten fünf Jahren?',
        it: 'Hai usato altri indirizzi email negli ultimi cinque anni?',
      },
    },
    additional_emails: {
      label: {
        en: 'Provide a list of additional emails',
        fr: 'Fournir une liste des autres e-mails',
        es: 'Proporcionar una lista de correos electrónicos adicionales',
        de: 'Stellen Sie eine Liste von zusätzlichen E-Mails',
        it: 'Fornire un elenco di ulteriori messaggi di posta elettronica',
      },
    },
    mail_addr: {
      b_diff_with_home: {
        label: {
          en: 'Mailing Address',
          fr: 'Adresse Postale',
          es: 'Dirección De Correo',
          de: 'Postanschrift',
          it: 'Indirizzo Postale',
        },
        check: {
          en: 'The mailing address is different from the applicant address',
          fr: "L'adresse postale est différente de l'adresse de demandeur",
          es: 'La dirección de correo es diferente de la dirección del solicitante',
          de: 'Die Postanschrift ist anders als die Antragsteller-Adresse',
          it: "L'indirizzo è diverso dal richiedente indirizzo",
        },
      },
      info: {
        label: {
          en: 'Mailing Address',
          fr: 'Adresse Postale',
          es: 'Dirección De Correo',
          de: 'Postanschrift',
          it: 'Indirizzo Postale',
        },
      },
    },
    section_title_social_media: {
      en: 'Social Media',
      fr: 'Médias Sociaux',
      es: 'Medios De Comunicación Social',
      de: 'Social Media',
      it: 'Social Media',
    },
    section_descr_social_media: {
      en:
        "Do you have a social media presence? Select from the list below each social media platform you have used within the last five years. In the space next to the platform’s name, enter the username or handle you have used on that platform. Please do not provide your passwords. If you have used more than one platform or more than one username or handle on a single platform, click the 'Add Another' button to list each one separately. If you have not used any of the listed social media platforms in the last five years, select 'None.'",
      fr:
        "Avez-vous une présence sur les réseaux sociaux? Sélectionnez dans la liste ci-dessous chaque plateforme de médias sociaux que vous avez utilisée au cours des cinq dernières années. Dans l'espace à côté du nom de la plateforme, entrez le nom d'utilisateur ou le pseudonyme que vous avez utilisé sur cette plateforme. Veuillez ne pas fournir vos mots de passe. Si vous avez utilisé plusieurs plates-formes ou plusieurs noms d'utilisateur ou identifiants sur une seule plate-forme, cliquez sur le bouton «Ajouter un autre» pour les répertorier séparément. Si vous n'avez utilisé aucune des plateformes de réseaux sociaux répertoriées au cours des cinq dernières années, sélectionnez «NONE».",
      es:
        '¿Usted tiene una presencia en los medios sociales? Seleccione de la lista debajo de cada plataforma de medios sociales que se han utilizado en los últimos cinco años. En el espacio junto a la plataforma del nombre, introduzca el nombre de usuario o identificador se han utilizado en la plataforma. Por favor, no proporcionar sus contraseñas. Si usted ha utilizado más de una plataforma, o más de un nombre de usuario o identificador en una sola plataforma, haga clic en "Agregar Otro" botón de lista de cada uno de ellos por separado. Si usted no ha usado alguna de las plataformas de medios sociales en los últimos cinco años, seleccione " Ninguno.\'',
      de:
        'Haben Sie eine social-media-Präsenz? Wählen Sie aus der Liste unten jede social media-Plattform, die Sie verwendet haben innerhalb der letzten fünf Jahre. In dem Raum neben der Plattform-name, geben Sie den Benutzernamen oder einen Griff, den Sie benutzt haben auf, der Plattform. Bitte nicht bieten Sie Ihre Passwörter. Wenn Sie verwendet haben, mehr als eine Plattform oder mehr als einen Benutzernamen oder einen Handgriff auf einer einzigen Plattform klicken Sie bitte auf "Weitere Hinzufügen" - Taste, um die Liste jeweils separat. Wenn Sie eine der aufgeführten social-media-Plattformen in den letzten fünf Jahren, wählen Sie "None".',
      it:
        "Hai una presenza sui social media? Selezionare dall'elenco di seguito ogni piattaforma di social media si sono utilizzati negli ultimi cinque anni. Nello spazio accanto alla piattaforma del nome, immettere il nome utente o la maniglia di aver usato su quella piattaforma. Si prega di non fornire la tua password. Se hai utilizzato più di una piattaforma o di più di un nome utente o gestire su un'unica piattaforma, fare clic su \" Aggiungi un Altro pulsante per elencare separatamente. Se non hai usato nessuna delle seguenti piattaforme di social media negli ultimi cinque anni, selezionare 'Nessuno.'",
    },
    social_media_info: {
      label: {
        en: 'Provide a list of social media platforms',
        fr: 'Fournir une liste de plateformes de médias sociaux',
        es: 'Proporcionar una lista de plataformas de medios sociales',
        de: 'Eine Liste von social-media-Plattformen',
        it: 'Fornire un elenco di piattaforme di social media',
      },
    },
    b_additional_social_media: {
      label: {
        en:
          'Do you wish to provide information about your presence on any other websites or applications you have used within the last five years to create or share content (photos, videos, status updates, etc.)?',
        fr:
          "Voulez-vous fournir des informations sur votre présence sur d'autres sites internet ou d'applications que vous avez utilisées dans les cinq dernières années pour créer ou partager des contenus (photos, vidéos, mises à jour de statut, etc.)?",
        es:
          '¿Desea proporcionar información acerca de su presencia en otros sitios web o aplicaciones que se han utilizado en los últimos cinco años para crear o compartir contenidos (fotos, vídeos, actualizaciones de estado, etc.)?',
        de:
          'Möchten Sie Informationen über Ihre Präsenz auf anderen websites oder Anwendungen, die Sie verwendet haben innerhalb der letzten fünf Jahre zu erstellen oder teilen von Inhalten (Fotos, videos, status updates, etc.)?',
        it:
          'Non si desidera fornire le informazioni sulla vostra presenza su altri siti web o applicazioni che hai usato negli ultimi cinque anni, per creare o condividere i contenuti (foto, video, aggiornamenti di stato, etc.)?',
      },
      extra: {
        en:
          'Please provide the name of the platform and the associated unique social media identifier (username or handle) for each social media platform you would like to list. This does not include private messaging on person-to-person messaging services, such as WhatsApp.',
        fr:
          "Veuillez fournir le nom de la plate-forme et de l'identifiant (nom d'utilisateur ou pseudonyme) pour chaque plateforme de média social vous souhaitez à la liste. Cela ne comprend pas la messagerie privée de la personne-à-personne, des services de messagerie tel que WhatsApp.",
        es:
          'Por favor, proporcione el nombre de la plataforma y los únicos asociados social media identificador (nombre de usuario o identificador) para cada plataforma de medios sociales que usted desea a la lista. Esto no incluye la mensajería privada en persona-a-persona, servicios de mensajería, como WhatsApp.',
        de:
          'Bitte geben Sie den Namen der Plattform und die damit verbundene einzigartige social media-id (Benutzername oder Griff) für jede social media-Plattform, die Sie möchten, zur Liste. Dies beinhaltet nicht die privaten Nachrichten über die person-to-person-messaging-Dienste wie WhatsApp.',
        it:
          'Si prega di fornire il nome della piattaforma e associati unico social media identificativo (username o manico) per ogni piattaforma di social media che si desidera elenco. Questo non include la messaggistica privata della persona-a-persona servizi di messaggistica come WhatsApp.',
      },
    },
    additional_social_media: {
      label: {
        en: 'Provide a list of additional social media',
        fr: 'Fournir une liste des autres médias sociaux',
        es: 'Proporcionar una lista de otros medios de comunicación social',
        de: 'Stellen Sie eine Liste von zusätzlichen social media',
        it: 'Fornire un elenco di altri social media',
      },
    },
  },
  passport: {
    section_title: {
      en: 'Passport Information',
      fr: 'Renseignements sur le Passeport',
      es: 'Información Del Pasaporte',
      de: 'Passport-Informationen',
      it: 'Le Informazioni Del Passaporto',
    },
    doc_type: {
      label: {
        en: 'Passport/Travel Document Type',
        fr: 'Type de Passeport Ou Document De Voyage',
        es: 'Pasaporte/Documento De Viaje Tipo',
        de: 'Passport/Travel Document Art',
        it: 'Passaporto/Documento Di Viaggio Tipo',
      },
    },
    doc_type_explain: {
      label: {
        en: 'Explain',
        fr: 'Expliquer',
        es: 'Explicar',
        de: 'Erklären',
        it: 'Spiegare',
      },
    },
    doc_number: {
      label: {
        en: 'Passport/Travel Document Number',
        fr: 'Numéro du Passeport/Document De Voyage',
        es: 'Pasaporte/Documento De Viaje Número De',
        de: 'Passport/Travel Document Number',
        it: 'Passaporto/Documento Di Viaggio In Numero',
      },
    },
    book_number: {
      label: {
        en: 'Passport Book Number',
        fr: 'Numéro du Livret',
        es: 'Libro De Pasaporte Número',
        de: 'Passport Book Number',
        it: 'Libro Passaporto Numero',
      },
      extra: {
        en: 'Leave blank if does not apply',
        fr: "Laissez vide si ça ne s'applique pas",
        es: 'Dejar en blanco si no se aplica',
        de: 'Leer lassen, wenn nicht anwendbar',
        it: 'Lasciare vuoto se non si applica',
      },
    },
    doc_authority: {
      label: {
        en: 'Country/Authority that Issued Passport/Travel Document',
        fr: "Pays/de l'Autorité qui a délivré le Passeport ou Document de Voyage",
        es: 'País o de la Autoridad que Emitió el Pasaporte/Documento de Viaje',
        de: 'Land/Behörde Ausgestellten Reisepass/Reisedokument',
        it: 'Paese/Autorità che ha Emesso il Passaporto/Documento di Viaggio',
      },
    },
    issued_location: {
      city: {
        en: 'City of Issue',
        fr: 'Ville de délivrance',
        es: 'La ciudad de Problema',
        de: 'Stadt-Problem',
        it: 'Città di Edizione',
      },
      state: {
        en: 'State/Province *If shown on passport',
        fr: 'État/Province *Si indiqué sur le passeport',
        es: 'Estado/Provincia *Si aparece en el pasaporte',
        de: 'Staat/Provinz *Wenn angezeigt, auf Pass',
        it: 'Stato/Provincia *Se indicato sul passaporto',
      },
      country: {
        en: 'Country/Region',
        fr: 'Pays/Région',
        es: 'País/Región',
        de: 'Land/Region',
        it: 'Paese/Regione',
      },
    },
    issuance_date: {
      label: {
        en: 'Issuance Date',
        fr: 'Date de Délivrance',
        es: 'Fecha De Emisión De La',
        de: 'Ausstellungsdatum',
        it: 'Data Di Emissione',
      },
    },
    expiration_date: {
      label: {
        en: 'Expiration Date',
        fr: "Date D'Expiration",
        es: 'Fecha De Vencimiento',
        de: 'Ablaufdatum',
        it: 'Data Di Scadenza',
      },
      check: {
        en: 'No Expiration',
        fr: "Aucune Date D'Expiration",
        es: 'No De Caducidad',
        de: 'Kein Ablaufdatum',
        it: 'Nessuna Scadenza',
      },
    },
    b_ever_lost_passport: {
      label: {
        en: 'Have you ever lost a passport or had one stolen?',
        fr: "Avez-vous déjà perdu un passeport ou vous l'a-t-on volé?",
        es: '¿Alguna vez has perdido un pasaporte o había una robado?',
        de: 'Haben Sie schon einmal verloren, ein Pass oder hatte man gestohlen?',
        it: 'Hai mai perso un passaporto o aveva rubato uno?',
      },
    },
    section_title_lost_passport: {
      en: 'Lost or Stolen Passport Information',
      fr: 'Information du Passeport perdu ou volé',
      es: 'Pasaporte perdido o Robado Información',
      de: 'Verlorene oder Gestohlene Reisepass Informationen',
      it: 'Smarrimento o Furto del Passaporto Informazioni',
    },
    lost_info: {
      label: {
        en: 'List of lost or stolen passports',
        fr: 'Liste des passeports perdus ou volés',
        es: 'Lista de pérdida o robo de pasaportes',
        de: 'Liste der verlorene oder gestohlene Pässe',
        it: 'Elenco di smarrimento o furto del passaporto',
      },
    },
  },
  contact: {
    section_title: {
      en: 'US Point of contact',
      fr: 'Point de contact aux États-Unis',
      es: 'Punto de contacto',
      de: 'UNS Ansprechpartner',
      it: 'Punto di contatto',
    },
    section_descr: {
      en: 'Give the name of a contact person or Hotel or organisation in the US. This may be different from the place or person you intend to stay with.',
      fr:
        "Donnez le nom d'une personne de contact, d'un hôtel ou d'une organisation aux États-Unis. Cela peut être différent de l'endroit ou de la personne avec laquelle vous avez l'intention de rester.",
      es: 'Dar el nombre de la persona de contacto o Hotel o de la organización en los estados unidos. Esto puede ser diferente del lugar o de la persona que tiene la intención de quedarse con.',
      de:
        'Geben Sie den Namen eines Ansprechpartners oder Hotel oder einer organisation in den USA. Diese unterscheidet sich möglicherweise von der Stelle oder person, die Sie beabsichtigen zu bleiben.',
      it: "Dare il nome di un contatto o di un Hotel o di un'organizzazione in stati UNITI. Questo può essere diverso dal luogo o la persona che si ha intenzione di rimanere con.",
    },
    relationship: {
      en: 'Relationship to you',
      fr: 'Relation',
      es: 'Relación para que usted',
      de: 'Beziehung zu Ihnen',
      it: 'Rapporto di parentela',
    },
    surname: {
      en: 'Surname(s)',
      fr: 'Nom(s)',
      es: 'Apellido(s)',
      de: 'Nachname(N)',
      it: 'Cognome(i/)',
    },
    given_name: {
      en: 'Given Name(s)',
      fr: 'Prénom(s)',
      es: 'Nombre(s)',
      de: 'Vorname(N)',
      it: 'Nome(s)',
    },
    organization: {
      en: 'Hotel or Organisation Name',
      fr: "Hôtel ou Nom de l'Organisation",
      es: 'Hotel o Nombre de la Organización',
      de: 'Hotel oder Name der Einrichtung',
      it: "Hotel o il Nome dell'Organizzazione",
    },
    address: {
      en: 'Address',
      fr: 'Adresse',
      es: 'Dirección',
      de: 'Adresse',
      it: 'Indirizzo',
    },
    tel_number: {
      en: 'Phone Number',
      fr: 'Numéro De Téléphone',
      es: 'Número De Teléfono',
      de: 'Telefonnummer',
      it: 'Il Numero Di Telefono',
    },
    email: {
      en: 'Email if known',
      fr: 'E-mail si elle est connue',
      es: 'Correo electrónico si se conoce',
      de: 'E-Mail, wenn bekannt',
      it: 'E-mail se noto',
    },
  },
  family: {
    section_title: {
      en: 'Family Information : Your Parents',
      fr: 'Information sur la Famille : Vos Parents',
      es: 'Información Para La Familia : Sus Padres',
      de: 'Informationen Zur Familie : Ihre Eltern',
      it: 'Informazioni Sulla Famiglia : I Tuoi Genitori',
    },
    father: {
      label: {
        en: "List your Father's information here",
        fr: 'Informations concernant votre Père',
        es: 'La lista de su Padre de la información aquí',
        de: 'Liste dein Vater Informationen hier',
        it: 'Elenco di tuo Padre e informazioni qui',
      },
      surname: {
        label: {
          en: "Father's Surname (Last Name)",
          fr: 'Nom de famille du Père (Nom de Famille)',
          es: 'Del padre Apellido (apellido)',
          de: "Vater ' s Name (Last Name)",
          it: 'Cognome del padre (cognome)',
        },
        extra: {
          en: 'Please check if you do not know',
          fr: 'Veuillez cocher la case si vous ne savez pas',
          es: 'Por favor, compruebe si usted no sabe',
          de: 'Bitte prüfen Sie, ob Sie nicht wissen,',
          it: 'Si prega di controllare se non si conosce',
        },
      },
      given_name: {
        label: {
          en: "Father's Given Name (First Name)",
          fr: 'Prénom du Père',
          es: 'Del padre Nombre (Primer Nombre)',
          de: 'Vater Vorname (First Name)',
          it: 'Padre Nome ()',
        },
        extra: {
          en: 'Please check if you do not know',
          fr: 'Veuillez cocher la case si vous ne savez pas',
          es: 'Por favor, compruebe si usted no sabe',
          de: 'Bitte prüfen Sie, ob Sie nicht wissen,',
          it: 'Si prega di controllare se non si conosce',
        },
      },
      birthday: {
        label: {
          en: "Father's date of birth",
          fr: 'Date de naissance du Père',
          es: 'Fecha de nacimiento del padre',
          de: 'Vaters Geburtsdatum',
          it: 'Padre data di nascita',
        },
      },
      b_in_US: {
        label: {
          en: 'Is your Father in the US?',
          fr: 'Votre Père est-il aux États-Unis?',
          es: 'Es su Padre en los estados unidos?',
          de: 'Ist Ihr Vater in den USA?',
          it: 'È il vostro Padre in NOI?',
        },
      },
      status: {
        label: {
          en: "Father's Status",
          fr: 'Statut du Père',
          es: 'El padre del Estado de',
          de: 'Vater Status',
          it: 'Padre Stato',
        },
      },
    },
    mother: {
      label: {
        en: "List your Mother's information here",
        fr: 'Informations concernant votre Mère',
        es: 'Lista de su Madre que la información aquí',
        de: 'Listen Sie Ihre Mutter Informationen hier',
        it: 'Elenco di tua Madre informazioni qui',
      },
      surname: {
        label: {
          en: "Mother's Surname (Last Name)",
          fr: 'Nom de famille de la Mère (Nom de famille)',
          es: 'Apellido de la madre (apellido)',
          de: 'Mutter Familienname (Last Name)',
          it: 'Madre Cognome (Last Name)',
        },
        extra: {
          en: 'Please check if you do not know',
          fr: 'Veuillez cocher la case si vous ne savez pas',
          es: 'Por favor, compruebe si usted no sabe',
          de: 'Bitte prüfen Sie, ob Sie nicht wissen,',
          it: 'Si prega di controllare se non si conosce',
        },
      },
      given_name: {
        label: {
          en: "Mother's Given Name (First Name)",
          fr: 'Prénom(s) de la Mère',
          es: 'Madre Nombre (Primer Nombre)',
          de: 'Mutter Vorname (First Name)',
          it: 'Madre Nome ()',
        },
        extra: {
          en: 'Please check if you do not know',
          fr: 'Veuillez cocher la case si vous ne savez pas',
          es: 'Por favor, compruebe si usted no sabe',
          de: 'Bitte prüfen Sie, ob Sie nicht wissen,',
          it: 'Si prega di controllare se non si conosce',
        },
      },
      birthday: {
        label: {
          en: "Mother's date of birth",
          fr: 'Date de naissance de la Mère',
          es: 'De la madre fecha de nacimiento',
          de: 'Mutter Geburtsdatum',
          it: 'Madre data di nascita',
        },
      },
      b_in_US: {
        label: {
          en: 'Is your Mother in the US?',
          fr: 'Votre Mère est-elle aux États-Unis?',
          es: 'Es su Madre en los estados unidos?',
          de: 'Ist Ihre Mutter in den USA?',
          it: 'È tua Madre negli stati UNITI?',
        },
      },
      status: {
        label: {
          en: "Mother's Status",
          fr: 'Statut de la Mère',
          es: 'La madre de Estado',
          de: 'Mutter Status',
          it: 'Mamma Stato',
        },
      },
    },
    section_title_relatives: {
      en: 'Family information : Your Relatives',
      fr: 'Information sur votre famille',
      es: 'Información para la familia : Sus Parientes',
      de: 'Informationen zur Familie : Ihren Verwandten',
      it: 'Informazioni sulla famiglia : i Tuoi Parenti',
    },
    b_other_relative: {
      label: {
        en: 'Do you have any immediate relatives other than parents living in the United States?',
        fr: 'Avez-vous des proches autres que les parents vivant aux États-Unis?',
        es: '¿Tienes alguna familiares inmediatos otro de los padres que viven en los Estados unidos?',
        de: 'Sie haben keine unmittelbaren verwandten, ausgenommen die Eltern Leben in den Vereinigten Staaten?',
        it: 'Avete parenti diversi dai genitori che vivono negli Stati Uniti?',
      },
      extra: {
        en: 'Means fiancé/fiancée, spouse (husband/wife), child (son/daughter) or sibling (brother/sister)',
        fr: 'Signifie fiancé/fiancée, conjoint (mari/femme), enfant (fils/fille, frère ou frère ou soeur',
        es: 'Significa novio/novia, su cónyuge (esposo/esposa), niño (hijo/hija) o hermano (hermano/hermana)',
        de: 'Bedeutet Verlobter/Verlobte, Ehepartner (Mann/Frau), Kind (Sohn/Tochter) oder Geschwister (Bruder/Schwester)',
        it: 'Significa fidanzato/fidanzata, il coniuge (marito/moglie), bambino (figlio/figlia) fratello o sorella (fratello/sorella)',
      },
    },
    others: {
      label: {
        en: 'Enter Full Name, Relationship to you, Immigration Status',
        fr: "Entrez le Nom Complet, la Relation, le Statut d'Immigration",
        es: 'Ingrese el Nombre Completo, Parentesco, Estatus de Inmigración',
        de: 'Geben Sie den kompletten Namen, Ihre Beziehung zu Ihnen -, Einwanderungs-Status',
        it: 'Inserisci il tuo Nome Completo, Rapporto di parentela, di Status di Immigrazione',
      },
    },
    b_more_relatives: {
      label: {
        en: 'Do you have any other relatives in the United States?',
        fr: "Avez-vous d'autres parents aux États-Unis?",
        es: '¿Tiene otros parientes en los Estados unidos?',
        de: 'Haben Sie andere Verwandte in den Vereinigten Staaten?',
        it: 'Avete altri parenti negli Stati Uniti?',
      },
    },
    section_title_family_information: {
      en: 'Family Information',
      fr: 'Information de Famille',
      es: 'Información De La Familia',
      de: 'Familie Informationen',
      it: 'Informazioni Sulla Famiglia',
    },
    spouse: {
      label: {
        en: "List your Spouse/Partner's information here",
        fr: 'Informations concernant votre Époux(se)/Partenaire',
        es: 'La lista de su Cónyuge/Pareja de la información aquí',
        de: 'Listen Sie Ihre Ehemann/Ehefrau / Partner Informationen hier',
        it: 'Elenco Coniuge/Partner informazioni qui',
      },
      surname: {
        label: {
          en: "Spouse/Partner's First Name",
          fr: 'Prénom du Conjoint/Partenaire',
          es: 'Cónyuge/Pareja del Primer Nombre',
          de: 'Ehegatte/Partner Vorname',
          it: 'Coniuge/Partner, il Primo Nome',
        },
      },
      given_name: {
        label: {
          en: "Spouse/Partner's Last Name",
          fr: 'Nom de famille du Conjoint/Partenaire',
          es: 'Cónyuge/Pareja apellido',
          de: 'Ehegatte/Partner Nachname',
          it: 'Coniuge/Partner cognome',
        },
      },
      birthday: {
        label: {
          en: "Spouse/Partner's date of birth",
          fr: 'Date de naissance du Conjoint/Partenaire',
          es: 'Cónyuge/Pareja fecha de nacimiento',
          de: 'Ehegatten/Partners Geburtsdatum',
          it: 'Coniuge/Partner data di nascita',
        },
      },
      nationality: {
        label: {
          en: 'Nationality',
          fr: 'Nationalité',
          es: 'Nacionalidad',
          de: 'Nationalität',
          it: 'Nazionalità',
        },
      },
      place_of_birth: {
        label: {
          en: 'Place of birth',
          fr: 'Lieu de naissance',
          es: 'Lugar de nacimiento',
          de: 'Ort der Geburt',
          it: 'Luogo di nascita',
        },
        city: {
          label: {
            en: 'City',
            fr: 'Ville',
            es: 'Ciudad',
            de: 'Stadt',
            it: 'Città',
          },
          extra: {
            en: 'Leave blank if you do not know',
            fr: 'Laissez vide si vous ne savez pas',
            es: 'Dejar en blanco si no sabe',
            de: 'Lassen Sie das Feld leer, wenn Sie nicht wissen,',
            it: 'Lasciare vuoto se non si conosce',
          },
        },
        country: {
          label: {
            en: 'Country',
            fr: 'Pays',
            es: 'País',
            de: 'Land',
            it: 'Paese',
          },
        },
      },
      address_type: {
        label: {
          en: 'Address',
          fr: 'Adresse',
          es: 'Dirección',
          de: 'Adresse',
          it: 'Indirizzo',
        },
      },
      address: {
        label: {
          en: 'Specify Address',
          fr: "Spécifiez L'Adresse",
          es: 'Especifique Una Dirección',
          de: 'Geben Sie Eine Adresse',
          it: "Specificare L'Indirizzo",
        },
      },
    },
    former_spouse_number: {
      label: {
        en: 'Number of Former Spouses',
        fr: "Nombre d'Ex-Conjoints",
        es: 'Número de Ex Cónyuges',
        de: 'Nummer des Früheren Ehegatten',
        it: 'Numero di Ex Coniugi',
      },
    },
    former_spouse: {
      label: {
        en: "Former Spouse's Information",
        fr: "Informations concernant l'ex conjoint",
        es: 'El ex Esposo de la Información',
        de: 'Ehemalige Ehepartner, die Informationen',
        it: "L'ex Coniuge Informazioni",
      },
    },
  },
  work_or_edu: {
    section_title: {
      en: 'Present Work/Education/Training Information',
      fr: "Informations sur l'actuel Travail/Éducation/Formation",
      es: 'El Presente Trabajo/Educación/Entrenamiento De La Información',
      de: 'Derzeitige Arbeit/Bildung/Ausbildung Informationen',
      it: 'Presente Lavoro/Istruzione/Formazione Informazioni',
    },
    occupation: {
      label: {
        en: 'Primary Occupation',
        fr: 'Occupation Principale',
        es: 'Ocupación Principal',
        de: 'Primäre Besetzung',
        it: 'Occupazione Primaria',
      },
    },
    specify_other_explain: {
      other: {
        en: 'Specify Other',
        fr: 'Spécifier Autres',
        es: 'Especificar Otros',
        de: 'Geben Sie Anderen',
        it: 'Specificare Altri',
      },
      explain: {
        en: 'Explain',
        fr: 'Expliquer',
        es: 'Explicar',
        de: 'Erklären',
        it: 'Spiegare',
      },
    },
    name: {
      label: {
        en: 'Present Employer or School Name',
        fr: "Employeur actuel ou Nom de l'École",
        es: 'El Empleador actual o el Nombre de la Escuela',
        de: 'Derzeitigen Arbeitgeber oder Name der Schule',
        it: 'Datore di lavoro attuale o il Nome della Scuola',
      },
    },
    address: {
      label: {
        en: 'Present employer or school address',
        fr: "Adresse de l'employeur actuel ou de l'école",
        es: 'El empleador actual o la dirección de la escuela',
        de: 'Derzeitigen Arbeitgeber oder Schule Adresse',
        it: "Datore di lavoro attuale o l'indirizzo della scuola",
      },
    },
    start_date: {
      label: {
        en: 'Start Date',
        fr: 'Date De Début',
        es: 'Fecha De Inicio',
        de: 'Start Datum',
        it: 'Data Di Inizio',
      },
    },
    monthly_income: {
      label: {
        en: 'Monthly Income in Local Currency (if employed)',
        fr: 'Revenu mensuel en Monnaie Locale (si employé)',
        es: 'Ingreso mensual en Moneda Local (si es empleado)',
        de: 'Monatliches Einkommen in der Lokalen Währung (wenn eingesetzt)',
        it: 'Reddito mensile in Valuta Locale (se impiegato)',
      },
    },
    duty_explain: {
      label: {
        en: 'Briefly describe your duties:',
        fr: 'Décrivez brièvement vos fonctions: IMPÉRATIVEMENT EN ANGLAIS',
        es: 'Describa brevemente sus funciones:',
        de: 'Beschreiben Sie kurz Ihre Aufgaben:',
        it: 'Descrivere brevemente il compito di:',
      },
    },
  },
  prev_work_or_edu: {
    section_title: {
      en: 'Previous Work / Education / Training Information',
      fr: 'Informations sur le prédédent Travail/Éducation/Formation',
      es: 'Anterior Trabajo / Educación / Entrenamiento De La Información',
      de: 'Previous Work / Education / Training Informationen',
      it: 'Il Precedente Lavoro / Istruzione / Formazione Informazioni',
    },
    b_previously_employed: {
      label: {
        en: 'Were you previously employed?',
        fr: 'Avez-vous été employé auparavant?',
        es: 'Fueron previamente empleado?',
        de: 'Waren Sie zuvor beschäftigt?',
        it: 'Erano in precedenza occupati?',
      },
    },
    emp_info: {
      name: {
        label: {
          en: 'Previous Employer Name',
          fr: 'Nom du Précédent Employeur',
          es: 'Anterior Nombre Del Empleador',
          de: 'Vorherigen Arbeitgeber Name',
          it: 'Precedente Nome Del Datore Di Lavoro',
        },
      },
      address: {
        label: {
          en: 'Previous Employer Address',
          fr: 'Adresse du Précédent Employeur',
          es: 'Anterior Dirección Del Empleador',
          de: 'Vorherigen Arbeitgeber Adresse',
          it: 'Precedente Datore Di Lavoro Indirizzo',
        },
        tel_number: {
          en: 'Telephone number',
          fr: 'Le numéro de téléphone',
          es: 'Número de teléfono',
          de: 'Telefonnummer',
          it: 'Il numero di telefono',
        },
      },
      job_title: {
        label: {
          en: 'Job Title',
          fr: "Titre de L'Emploi",
          es: 'Título Del Trabajo',
          de: 'Job-Titel',
          it: 'Titolo Di Lavoro',
        },
      },
      supervisor: {
        surname: {
          label: {
            en: "Supervisor's Surname(s) (Last Name)",
            fr: 'Nom de Famille du Superviseur',
            es: 'Supervisor Apellido(s) (apellido)',
            de: 'Betreuerin Vorname(N) (Nachname)',
            it: 'Supervisore Cognome(s) (cognome)',
          },
          extra: {
            en: 'Leave blank if you do not know',
            fr: 'Laissez vide si vous ne savez pas',
            es: 'Dejar en blanco si no sabe',
            de: 'Lassen Sie das Feld leer, wenn Sie nicht wissen,',
            it: 'Lasciare vuoto se non si conosce',
          },
        },
        given_name: {
          label: {
            en: "Supervisor's Given Name(s) (First Name)",
            fr: 'Prénom(s) du Superviseur',
            es: 'Del Supervisor Nombre(s) (Primer Nombre)',
            de: 'Betreuerin Vorname(N) (First Name)',
            it: 'Supervisore Nome(s) (Nome)',
          },
          extra: {
            en: 'Leave blank if you do not know',
            fr: 'Laissez vide si vous ne savez pas',
            es: 'Dejar en blanco si no sabe',
            de: 'Lassen Sie das Feld leer, wenn Sie nicht wissen,',
            it: 'Lasciare vuoto se non si conosce',
          },
        },
      },
      date_from: {
        label: {
          en: 'Employment Date From',
          fr: "Date d'Emploi du",
          es: 'Empleo Fecha De',
          de: 'Beschäftigung Datum Aus',
          it: 'Occupazione Data Da',
        },
      },
      date_to: {
        label: {
          en: 'Employment Date To',
          fr: "Date d'Emploi À",
          es: 'Empleo Fecha De',
          de: 'Beschäftigung Datum',
          it: 'Occupazione Data Di',
        },
      },
      duty_explain: {
        label: {
          en: 'Describe your duties IN FEW WORDS (3 lines maximum)',
          fr: 'Décrivez vos tâches EN QUELQUES MOTS (3 lignes maximum IMPERATIVEMENT EN ANGLAIS)',
          es: 'Describir sus funciones EN POCAS PALABRAS (3 líneas máximo)',
          de: 'Beschreiben Sie Ihre Aufgaben IN WENIGEN WORTEN (3 Zeilen maximal)',
          it: 'Descrivi il tuo doveri IN POCHE PAROLE (3 righe al massimo)',
        },
        extra: {
          en: '0 of 300 max characters',
          fr: '0 de 300 caractères max',
          es: '0 de 300 máximo de caracteres',
          de: '0 300 max Zeichen',
          it: '0 di max 300 caratteri',
        },
      },
    },
    b_edu_secondary_level: {
      label: {
        en: 'Have you attended any educational institutions at a secondary level or above?',
        fr: 'Avez-vous suivi un enseignement de niveau secondaire ou supérieur?',
        es: 'Ha asistido a ninguna de las instituciones educativas en el nivel secundario o superior?',
        de: 'Haben Sie besucht, alle Bildungseinrichtungen auf Sekundar-Niveau oder höher?',
        it: 'Hai partecipato a qualche istituzioni scolastiche di livello secondario o superiore?',
      },
    },
    edu_info: {
      name: {
        label: {
          en: 'Name of Institution',
          fr: "Nom de l'établissement",
          es: 'Nombre de la Institución',
          de: 'Name der Institution',
          it: "Nome dell'Istituzione che",
        },
      },
      address: {
        label: {
          en: "Institution's Address",
          fr: "Adresse de l'établissement",
          es: 'Dirección de la institución',
          de: 'Institution Adresse',
          it: 'Istituzione di Indirizzo',
        },
      },
      course: {
        label: {
          en: 'Course of Study',
          fr: 'Cours étudié(s)',
          es: 'Curso de Estudio',
          de: 'Studium',
          it: 'Corso di Studio',
        },
      },
      date_from: {
        label: {
          en: 'Date of Attendance From',
          fr: 'Date de participation du:',
          es: 'Fecha de Asistencia De',
          de: 'Datum der Teilnahme Von',
          it: 'Data di Frequenza',
        },
      },
      date_to: {
        label: {
          en: 'Date of Attendance To',
          fr: 'Date de participation au:',
          es: 'Fecha de Asistencia A',
          de: 'Datum der Teilnahme An',
          it: 'Data di Partecipazione Al',
        },
      },
    },
  },
  additional_work: {
    section_title: {
      en: 'Additional Work / Education / Training Information',
      fr: 'Informations Supplémentaires sur le Travail/Éducation/Formation',
      es: 'Adicionales De Trabajo / Educación / Entrenamiento De La Información',
      de: 'Zusätzliche Arbeit / Bildung / Ausbildung Informationen',
      it: 'Lavori Supplementari / Educazione / Formazione, Informazione',
    },
    b_belong_to_clan: {
      en: 'Do you belong to a clan or tribe?',
      fr: 'Appartenez vous à un clan ou à une tribu?',
      es: '¿Perteneces a un clan o a la tribu?',
      de: 'Gehören Sie einem clan oder Stamm?',
      it: 'Fai parte di un clan o tribù?',
    },
    clan_name: {
      en: 'If you answer Yes, please give the name of the clan or tribe',
      fr: 'Si vous répondez Oui, veuillez donner le nom du clan ou de la tribu',
      es: 'Si la respuesta es Sí, sírvase indicar el nombre del clan o de la tribu',
      de: 'Wenn Sie mit ja Antworten, geben Sie bitte den Namen des Clans oder des Stammes',
      it: 'Se la risposta è Sì, si prega di fornire il nome del clan o della tribù,',
    },
    languages: {
      label: {
        en: 'Provide a list of languages you speak"',
        fr: 'Fournir une liste des langues que vous parlez"',
        es: 'Proporcionar una lista de los idiomas que habla"',
        de: 'Eine Liste der Sprachen, die Sie sprechen"',
        it: 'Fornire un elenco di lingue che si parlano"',
      },
    },
    b_travel_last_five_years: {
      en: 'Have you travelled to any countries within the last five years?',
      fr: 'Avez-vous voyagé dans des pays au cours des cinq dernières années?',
      es: 'Han viajado a los países dentro de los últimos cinco años?',
      de: 'Haben Sie bereist alle Länder, die innerhalb der letzten fünf Jahre?',
      it: 'Hai viaggiato per tutti i paesi negli ultimi cinque anni?',
    },
    countries: {
      label: {
        en: 'List of Countries',
        fr: 'Liste des Pays',
        es: 'Lista de Países',
        de: 'Liste der Länder,',
        it: 'Elenco dei Paesi',
      },
    },
    b_belong_to_org: {
      en: 'Have you belonged to, contributed to, or worked for any professional, social, or charitable organisation?',
      fr: 'Avez-vous appartenu, contribué ou travaillé pour une organisation professionnelle, sociale ou caritative?',
      es: '¿Ha pertenecido, contribuido o trabajado para alguna organización profesional, social o caritativa?',
      de: 'Haben Sie einer beruflichen, sozialen oder gemeinnützigen Organisation angehört, zu dieser beigetragen oder für diese gearbeitet?',
      it: 'Hai aderito, contribuito o lavorato a organizzazioni professionali, sociali o di beneficenza?',
    },
    organizations: {
      label: {
        en: 'List of Organizations',
        fr: 'Liste des Organismes',
        es: 'Lista de Organizaciones',
        de: 'Liste der Organisationen',
        it: 'Elenco delle Organizzazioni',
      },
    },
    b_military: {
      en: 'Have you ever served in the military?',
      fr: "Avez-vous déjà servi dans l'armée?",
      es: 'Ha servido en las fuerzas armadas?',
      de: 'Haben Sie jemals in der Armee diente?',
      it: 'Avete mai prestato servizio militare?',
    },
    militaries: {
      country: {
        en: 'Name of Country/Region',
        fr: 'Nom du Pays/de la Région',
        es: 'Nombre de País/Región',
        de: 'Namen von Land/Region',
        it: 'Il nome del Paese/Regione',
      },
      service: {
        en: 'Branch of Service',
        fr: 'Branche de Service',
        es: 'Rama de Servicio',
        de: 'Zweig-of-Service',
        it: 'Ramo di Servizio',
      },
      rank: {
        en: 'Rank/Position',
        fr: 'Rang/Poste',
        es: 'Rango/Cargo',
        de: 'Rang/Position',
        it: 'Rank/Posizione',
      },
      speciality: {
        en: 'Military Speciality',
        fr: 'Spécialité Militaire',
        es: 'Militar De La Especialidad',
        de: 'Militärische Spezialität',
        it: 'Militare Specialità',
      },
      date_from: {
        en: 'Date of Attendance From',
        fr: 'Date de participation du',
        es: 'Fecha de Asistencia De',
        de: 'Datum der Teilnahme Von',
        it: 'Data di Frequenza',
      },
      date_to: {
        en: 'Date of Attendance To',
        fr: 'Date de participation au',
        es: 'Fecha de Asistencia A',
        de: 'Datum der Teilnahme An',
        it: 'Data di Partecipazione Al',
      },
    },
    b_taliban: {
      en: 'Have you ever been a member of the Taliban?',
      fr: 'Avez-vous déjà été membre des Talibans?',
      es: '¿Alguna vez has sido un miembro de los Talibanes?',
      de: 'Haben Sie schon einmal ein Mitglied der Taliban?',
      it: 'Sei mai stato un membro dei Talebani?',
    },
    b_special_skill: {
      en: 'Do you have any specialized skills or training, such as firearms, explosives, nuclear, biological, or chemical experience?',
      fr: 'Avez-vous des compétences ou une formation spécialisée, telles que les armes à feu, les explosifs, une expérience nucléaire, biologique ou chimique?',
      es: '¿Tiene alguna habilidad o capacitación especializada, como armas de fuego, explosivos, experiencia nuclear, biológica o química?',
      de: 'Haben Sie irgendwelche speziellen Fähigkeiten oder training, wie Feuerwaffen, Sprengstoff, nukleare, biologische oder Chemische Erfahrungen?',
      it: 'Hai qualche competenza o addestramento specializzato, come armi da fuoco, esplosivi, esperienza nucleare, biologica o chimica?',
    },
    b_rebel_group: {
      en: 'Have you ever served in, been a member of, or been involved with a paramilitary unit, vigilante unit, rebel group, guerilla group, or insurgent organisation?',
      fr: "Avez-vous déjà servi, été membre ou impliqué dans une unité paramilitaire, une unité de vigilance, un groupe rebelle, un groupe de guérilla ou une organisation d'insurgés?",
      es: '¿Alguna vez ha servido, ha sido miembro o ha estado involucrado con una unidad paramilitar, unidad de vigilancia, grupo rebelde, grupo guerrillero u organización insurgente?',
      de: 'Haben Sie jemals serviert, Mitglied oder beteiligten wurde mit einer paramilitärischen Einheit, Bürgerwehr-Einheit, Rebellengruppe, guerilla-Gruppe oder der Aufständischen organisation?',
      it: 'Avete mai servita, stato membro o stato coinvolto con un gruppo paramilitare, vigilante unità, gruppo di ribelli, gruppo di guerriglieri, o insorti organizzazione?',
    },
  },
  security: {
    part1: {
      0: {
        en: 'Do you have a communicable disease of public health significance such as tuberculosis (TB)?',
        fr: "Avez-vous une maladie transmissible d'importance pour la santé publique telle que la tuberculose (TB)?",
        es: '¿Tiene usted una enfermedad transmisible de importancia para la salud pública, tales como la tuberculosis (TB)?',
        de: 'Haben Sie eine übertragbare Krankheit, die öffentliche Gesundheit Bedeutung wie Tuberkulose (TB)?',
        it: 'Avete una malattia trasmissibile rilevanti per la salute pubblica, come la tubercolosi (TB)?',
      },
      1: {
        en: 'Do you have a mental or physical disorder that poses or is likely to pose a threat to the safety or welfare of yourself or others?',
        fr: 'Avez-vous un trouble mental ou physique qui constitue ou est susceptible de menacer la sécurité ou le bien-être de vous-même ou des autres?',
        es: '¿Tiene un trastorno mental o físico que plantea o es probable que represente una amenaza para la seguridad o el bienestar de usted u otros?',
        de: 'Sie haben eine psychische oder physische Störung, die Posen oder wahrscheinlich ist, um eine Bedrohung für die Sicherheit und das Wohlergehen von sich selbst oder andere?',
        it: 'Hai un fisico o mentale, disturbo che si pone o è probabile che rappresentano una minaccia per la sicurezza o al benessere di se stessi o gli altri?',
      },
      2: {
        en: 'Are you or have you ever been a drug abuser or addict?',
        fr: 'Êtes-vous ou avez-vous jamais été un drogué ou un toxicomane?',
        es: '¿Eres o has sido alguna vez drogadicto o adicto?',
        de: 'Bist du oder warst du jemals drogenabhängig oder Süchtigen?',
        it: 'Sei o sei mai stato un farmaco tossicodipendente o dipendente?',
      },
      section_title: {
        en: 'Security and Background: Part 1',
        fr: 'Sécurité et Historique: Partie 1',
        es: 'De seguridad y de Fondo: Parte 1',
        de: 'Sicherheits-und Hintergrund: Teil 1',
        it: 'Di sicurezza e di Sfondo: Parte 1',
      },
      section_descr: {
        en:
          'NOTE: Provide the following security and background information. Provide complete and accurate information to all questions that require an explanation. A visa may not be issued to persons who are within specific categories defined by law as inadmissible to the United States (except when a waiver is obtained in advance). Are any of the following applicable to you? While a YES answer does not automatically signify ineligibility for a visa, if you answer YES you may be required to personally appear before a consular officer.',
        fr:
          "REMARQUE: fournissez les informations de sécurité et de base suivantes. Fournissez des informations complètes et précises à toutes les questions qui nécessitent une explication. Un visa ne peut être délivré à des personnes appartenant à des catégories spécifiques définies par la loi comme interdites de territoire aux États-Unis (sauf si une dérogation est obtenue à l'avance). L'un des éléments suivants vous concerne-t-il? Bien qu'une réponse OUI ne signifie pas automatiquement l'inadmissibilité à un visa, si vous répondez OUI, vous devrez peut-être comparaître personnellement devant un agent consulaire.",
        es:
          'NOTA: Proporcione la siguiente seguridad y la información de fondo. Proporcionar información precisa y completa a todas las preguntas que requieren una explicación. Una visa no podrá ser expedido a las personas que están dentro de categorías específicas definidas por la ley como inadmisible a los Estados unidos (excepto cuando la renuncia se obtienen por adelantado). Son alguna de las siguientes es aplicable a usted? Mientras que una respuesta de SÍ no automáticamente significar la pérdida de elegibilidad para una visa, si su respuesta es SÍ, usted puede ser obligado a comparecer personalmente a un oficial consular.',
        de:
          'HINWEIS: Geben Sie die folgenden Sicherheits-und hintergrund-Informationen. Vollständige und genaue Informationen zu allen Fragen, die bedürfen einer Erklärung. Ein Visum darf nicht erteilt werden an Personen, die in bestimmten Kategorien gesetzlich definiert als unzulässig zu den Vereinigten Staaten (außer, wenn eine Befreiung im Voraus). Die folgenden sind auf Sie anwendbar? Während eine JA-Antwort nicht automatisch bedeuten, die Sperre für ein Visum, wenn Sie Antwort JA, Sie können aufgefordert werden, persönlich zu erscheinen vor dem Konsularbeamten.',
        it:
          "NOTA: non forniamo le seguenti sicurezza e informazioni generali. Fornire informazioni complete e accurate a tutte le domande che richiedono una spiegazione. Un visto non può essere rilasciato a persone che sono all'interno di specifiche categorie definite dalla legge come inammissibile per gli Stati Uniti (tranne in caso di rinuncia si ottiene in anticipo). Sono applicabili a voi? Mentre una risposta di SÌ non automaticamente significare ineleggibilità per un visto, se la risposta è SÌ, si può essere tenuti a presentarsi personalmente prima di un funzionario consolare.",
      },
    },
    part2: {
      0: {
        en: 'Have you ever been arrested or convicted for any offense or crime, even though subject of a pardon, amnesty, or other similar action?',
        fr: "Avez-vous déjà été arrêté ou condamné pour une infraction ou un crime, même s'il a fait l'objet d'une grâce, d'une amnistie ou d'une autre action similaire?",
        es: '¿Alguna vez ha sido arrestado o condenado por algún delito o delito, a pesar de ser objeto de perdón, amnistía u otra acción similar?',
        de: 'Haben Sie jemals verhaftet oder verurteilt für irgendwelche vergehen oder Verbrechen, auch wenn Gegenstand einer Begnadigung, Amnestie oder andere ähnliche Aktion?',
        it: 'Sei mai stato arrestato o condannato per alcun reato o un crimine, anche se oggetto di un atto di clemenza, amnistia, o altra simile azione?',
      },
      1: {
        en: 'Have you ever violated, or engaged in a conspiracy to violate, any law related to controlled substances?',
        fr: 'Avez-vous déjà violé ou participé à un complot pour violer une loi relative aux substances contrôlées?',
        es: '¿Alguna vez ha violado, o ha participado en una conspiración para violar, alguna ley relacionada con sustancias controladas?',
        de: 'Haben Sie jemals verletzt oder engagiert sich in einer Verschwörung gegen alle Gesetze im Zusammenhang mit kontrollierten Substanzen?',
        it: 'Avete mai violato, o coinvolto in una cospirazione per violare una qualsiasi legge connessi a sostanze controllate?',
      },
      2: {
        en: 'Are you coming to the US to engage in prostitution or unlawful commercialized vice or have been engaged in prostitution or procuring prostitutes within the past 10 years?',
        fr:
          'Venez vous aux États-Unis pour vous livrer à la prostitution ou à un vice commercial illégal ou vous êtes livrés à la prostitution ou au recrutement de prostituées au cours des 10 dernières années?',
        es:
          '¿Vienes a los Estados Unidos para ejercer la prostitución o el vicio comercializado ilegalmente o has estado involucrado en la prostitución o la adquisición de prostitutas en los últimos 10 años?',
        de:
          'Kommen Sie zur UNS zu engagieren in der prostitution oder der rechtswidrige Handel Schraubstock oder engagiert haben, in der prostitution oder der Beschaffung von Prostituierten, die innerhalb der letzten 10 Jahre?',
        it: "Vieni a NOI, a impegnarsi nella prostituzione o illegale vizio commercializzato o sono stati impegnati nella prostituzione o l'ottenimento prostitute negli ultimi 10 anni?",
      },
      3: {
        en: 'Have you ever been involved in, or do you seek to engage in, money laundering?',
        fr: "Avez-vous été impliqué (e), ou avez-vous chercher à s'engager dans, le blanchiment d'argent?",
        es: '¿Alguna vez has estado involucrado en, o con miras a participar en el blanqueo de capitales?',
        de: 'Haben Sie jemals beteiligt waren oder Sie bemüht sich um Geldwäsche?',
        it: 'Sei mai stato coinvolto, o fare è cercare di impegnarsi in, il riciclaggio di denaro?',
      },
      4: {
        en: 'Have you ever committed or conspired to commit a human trafficking offense in the US or outside of the US?',
        fr: "Avez-vous déjà commis ou comploté pour commettre une infraction de traite des êtres humains aux États-Unis ou à l'extérieur des États-Unis?",
        es: '¿Alguna vez ha cometido o conspirado para cometer un delito de trata de personas en los Estados Unidos o fuera de los Estados Unidos?',
        de: 'Haben Sie jemals begangen oder eine Verschwörung zur Begehung von Menschenhandel strafbar in den USA oder außerhalb der USA?',
        it: 'Hai mai commesso, o cospirato per commettere un reato di tratta di esseri umani in NOI o fuori di NOI?',
      },
      5: {
        en: 'Have you ever knowingly aided, abetted, assisted or colluded with an individual who has committed, or conspired to commit a sever human trafficking offense in the US or outside the US?',
        fr:
          "Avez-vous déjà sciemment aidé, encouragé, aidé ou été complice d'une personne qui a commis ou comploté pour commettre une grave infraction de traite des êtres humains aux États-Unis ou en dehors des États-Unis?",
        es:
          '¿Alguna vez ha ayudado, instigado, asistido o coludido a sabiendas con una persona que cometió o conspiró para cometer un delito grave de trata de personas en los Estados Unidos o fuera de los Estados Unidos?',
        de:
          'Haben Sie jemals wissentlich unterstützt, begünstigt, unterstützt oder in Zusammenarbeit mit einer Person begangen hat, oder eine Verschwörung zur Begehung von sever Menschenhandel strafbar in den USA oder außerhalb der USA?',
        it:
          'Avete mai consapevolmente aiutato, sostenuto, aiutato, o in collusione con un individuo che ha commesso, o cospirato per commettere un sever tratta di esseri umani reato in NOI o fuori di NOI?',
      },
      6: {
        en:
          'Are you the spouse, son or daughter of an individual who has committed or conspired to commit a human trafficking offense in the US or outside or the US and have you within the last five years, knowingly benefited from the trafficking activities?',
        fr:
          "Êtes-vous le conjoint, le fils ou la fille d'une personne qui a commis ou comploté pour commettre une infraction de traite des êtres humains aux États-Unis ou à l'extérieur ou aux États-Unis et avez-vous, au cours des cinq dernières années, sciemment profité des activités de traite?",
        es:
          '¿Es usted el cónyuge, hijo o hija de una persona que se ha comprometido o conspiró para cometer un delito de trata de personas en los EE. UU. O fuera de los EE. UU. Y lo ha beneficiado a sabiendas de las actividades de trata en los últimos cinco años?',
        de:
          'Sind Sie der Ehepartner, der Sohn oder die Tochter eine Person, die sich verpflichtet hat, oder eine Verschwörung zur Begehung von Menschenhandel strafbar in den USA oder außerhalb oder den USA und haben Sie innerhalb der letzten fünf Jahre, wissentlich profitiert von der Menschenhandels-Aktivitäten?',
        it:
          'Sono il coniuge, il figlio o la figlia di un individuo che ha commesso o cospirato per commettere un reato di tratta di esseri umani in NOI o fuori o in USA e avete negli ultimi cinque anni, consapevolmente tratto beneficio dal traffico di attività?',
      },
      section_title: {
        en: 'Security and Background: Part 2',
        fr: 'Sécurité et Historique: Partie 2',
        es: 'De seguridad y de Fondo: Parte 2',
        de: 'Sicherheits-und Hintergrund: Teil 2',
        it: 'Di sicurezza e di Sfondo: Parte 2',
      },
      section_descr: {
        en:
          'NOTE: Provide the following security and background information. Provide complete and accurate information to all questions that require an explanation. A visa may not be issued to persons who are within specific categories defined by law as inadmissible to the United States (except when a waiver is obtained in advance). Are any of the following applicable to you? While a YES answer does not automatically signify ineligibility for a visa, if you answer YES you may be required to personally appear before a consular officer.',
        fr:
          "REMARQUE: fournissez les informations de sécurité et de base suivantes. Fournissez des informations complètes et précises à toutes les questions qui nécessitent une explication. Un visa ne peut être délivré à des personnes appartenant à des catégories spécifiques définies par la loi comme interdites de territoire aux États-Unis (sauf si une dérogation est obtenue à l'avance). L'un des éléments suivants vous concerne-t-il? Bien qu'une réponse OUI ne signifie pas automatiquement l'inadmissibilité à un visa, si vous répondez OUI, vous devrez peut-être comparaître personnellement devant un agent consulaire.",
        es:
          'NOTA: Proporcione la siguiente seguridad y la información de fondo. Proporcionar información precisa y completa a todas las preguntas que requieren una explicación. Una visa no podrá ser expedido a las personas que están dentro de categorías específicas definidas por la ley como inadmisible a los Estados unidos (excepto cuando la renuncia se obtienen por adelantado). Son alguna de las siguientes es aplicable a usted? Mientras que una respuesta de SÍ no automáticamente significar la pérdida de elegibilidad para una visa, si su respuesta es SÍ, usted puede ser obligado a comparecer personalmente a un oficial consular.',
        de:
          'HINWEIS: Geben Sie die folgenden Sicherheits-und hintergrund-Informationen. Vollständige und genaue Informationen zu allen Fragen, die bedürfen einer Erklärung. Ein Visum darf nicht erteilt werden an Personen, die in bestimmten Kategorien gesetzlich definiert als unzulässig zu den Vereinigten Staaten (außer, wenn eine Befreiung im Voraus). Die folgenden sind auf Sie anwendbar? Während eine JA-Antwort nicht automatisch bedeuten, die Sperre für ein Visum, wenn Sie Antwort JA, Sie können aufgefordert werden, persönlich zu erscheinen vor dem Konsularbeamten.',
        it:
          "NOTA: non forniamo le seguenti sicurezza e informazioni generali. Fornire informazioni complete e accurate a tutte le domande che richiedono una spiegazione. Un visto non può essere rilasciato a persone che sono all'interno di specifiche categorie definite dalla legge come inammissibile per gli Stati Uniti (tranne in caso di rinuncia si ottiene in anticipo). Sono applicabili a voi? Mentre una risposta di SÌ non automaticamente significare ineleggibilità per un visto, se la risposta è SÌ, si può essere tenuti a presentarsi personalmente prima di un funzionario consolare.",
      },
    },
    part3: {
      0: {
        en: 'Do you seek to engage in espionage, sabotage, export control violations, or any other illegal activity while in the US?',
        fr: "Cherchez-vous à vous engager dans l'espionnage, le sabotage, les violations du contrôle des exportations ou toute autre activité illégale aux États-Unis?",
        es: '¿Busca participar en espionaje, sabotaje, violaciones del control de exportaciones o cualquier otra actividad ilegal mientras está en los Estados Unidos?',
        de: 'Sie bemüht sich um Spionage, sabotage, export-Steuern, Verstöße gegen, oder jede andere illegale Aktivität, während in den USA?',
        it: 'Fare è cercare di impegnarsi in missioni di spionaggio, sabotaggio, di controllo delle esportazioni di violazioni, o qualsiasi altra attività illecita, mentre negli stati UNITI?',
      },
      1: {
        en: 'Do you seek to engage in terrorist activities while in the united states or have you ever engaged in terrorist activities?',
        fr: 'Cherchez-vous à vous engager dans des activités terroristes aux États-Unis ou avez-vous déjà participé à des activités terroristes?',
        es: '¿Busca participar en actividades terroristas mientras está en los Estados Unidos o alguna vez ha participado en actividades terroristas?',
        de: 'Sie bemüht sich um terroristische Aktivitäten in den Vereinigten Staaten oder haben Sie schon einmal engagiert in terroristische Aktivitäten?',
        it: 'Fare è cercare di impegnarsi in attività terroristiche, mentre negli stati uniti o avete mai impegnato in attività terroristiche?',
      },
      2: {
        en: 'Have you ever or do you intend to provide financial assistance or other support to terrorists or terrorists organisations?',
        fr: "Avez-vous déjà ou avez-vous l'intention de fournir une aide financière ou un autre soutien à des terroristes ou à des organisations terroristes?",
        es: '¿Alguna vez o tiene la intención de proporcionar asistencia financiera u otro tipo de apoyo a terroristas u organizaciones terroristas?',
        de: 'Haben Sie jemals oder haben Sie die Absicht, finanzielle Hilfe oder andere Unterstützung von Terroristen oder Terroristen-Organisationen?',
        it: 'Avete mai o si intende fornire assistenza finanziaria o altre forme di sostegno per i terroristi o i terroristi organizzazioni?',
      },
      3: {
        en: 'Are you a member or representative of a terrorist organisation?',
        fr: "Êtes-vous membre ou représentant d'une organisation terroriste?",
        es: '¿Es usted un miembro o representante de una organización terrorista?',
        de: 'Sind Sie Mitglied oder Vertreter einer terroristischen organisation?',
        it: 'Sei un membro o di un rappresentante di una organizzazione terroristica?',
      },
      4: {
        en:
          'Are you the spouse, son, or daughter of an individual who has engaged in terrorist activity, including providing financial assistance or other support to terrorists or terrorist organizations, in the last five years?',
        fr:
          "Êtes-vous le conjoint, le fils ou la fille d'une personne qui s'est livrée à des activités terroristes, notamment en fournissant une aide financière ou un autre soutien à des terroristes ou à des organisations terroristes, au cours des cinq dernières années?",
        es:
          '¿Es usted cónyuge, hijo o hija de una persona que ha participado en actividades terroristas, incluida la prestación de asistencia financiera u otro tipo de apoyo a terroristas u organizaciones terroristas, en los últimos cinco años?',
        de:
          'Sind Sie der Ehepartner, der Sohn oder die Tochter eine Person, die sich engagiert hat, die in terroristische Aktivitäten, einschließlich der Bereitstellung von finanzielle Hilfe oder andere Unterstützung von Terroristen oder terroristischen Organisationen, die in den letzten fünf Jahren?',
        it:
          'Sono il coniuge, il figlio o la figlia di un individuo che si è impegnato in attività terroristiche, compresa la fornitura di assistenza finanziaria o altre forme di sostegno per i terroristi o con organizzazioni terroristiche, negli ultimi cinque anni?',
      },
      5: {
        en: 'Have you ever ordered, incited, committed, assisted, or otherwise participated in genocide?',
        fr: 'Avez-vous jamais ordonné, incité, commis, aidé, ou autrement participé à un génocide?',
        es: '¿Alguna vez has ordenado, incitado, comprometido, con la asistencia, o de otra manera participaron en el genocidio?',
        de: 'Haben Sie jemals befohlen, angestiftet, begangen, unterstützt oder anderweitig beteiligte am Völkermord?',
        it: "Avete mai ordinato, incitato, impegnata, con l'aiuto, o comunque partecipato genocidio?",
      },
      6: {
        en: 'Have you ever ordered, incited, committed, assisted, or otherwise participated in torture?',
        fr: 'Avez-vous jamais ordonné, incité, commis, aidé, ou autrement participé à la torture?',
        es: '¿Alguna vez has ordenado, incitado, comprometido, con la asistencia, o de otra manera participaron en la tortura?',
        de: 'Haben Sie jemals befohlen, angestiftet, begangen, unterstützt oder anderweitig beteiligte sich an der Folter?',
        it: "Avete mai ordinato, incitato, impegnata, con l'aiuto, o comunque partecipato tortura?",
      },
      7: {
        en: 'Have you ever ordered, incited, committed, assisted, or otherwise participated in extrajudicial killings, political killings, or other acts of violence?',
        fr: "Avez-vous jamais ordonné, incité, commis, aidé, ou autrement participé à des exécutions extrajudiciaires, des assassinats politiques, ou d'autres actes de violence?",
        es: '¿Alguna vez has ordenado, incitado, comprometido, con la asistencia, o de otra manera participaron en ejecuciones extrajudiciales, homicidios políticos, u otros actos de violencia?',
        de: 'Haben Sie jemals befohlen, angestiftet, begangen, unterstützt oder anderweitig beteiligte sich an außergerichtlichen Tötungen, politische Morde oder andere Gewalttaten?',
        it: "Avete mai ordinato, incitato, impegnata, con l'aiuto, o comunque partecipato uccisioni extragiudiziali, omicidi politici, o di altri atti di violenza?",
      },
      8: {
        en: 'Have you ever engaged in the recruitment or the use of child soldiers?',
        fr: "Avez-vous déjà engagé dans le recrutement ou l'utilisation d'enfants soldats?",
        es: '¿Alguna vez has participado en el reclutamiento o la utilización de niños soldados?',
        de: 'Haben Sie schon einmal engagiert in der Rekrutierung oder Einsatz von Kindersoldaten?',
        it: "Avete mai impegnato nel reclutamento o l'uso dei bambini soldato?",
      },
      9: {
        en: 'Have you, while serving as a government official, been responsible for or directly carried out, at any time, particularly sever violations of religious freedom?',
        fr: 'Avez-vous, en tant que fonctionnaire du gouvernement, été responsable ou directement commis, à tout moment, de graves violations de la liberté religieuse?',
        es: '¿Alguna vez, mientras se desempeñó como funcionario del gobierno, ha sido responsable o ha llevado a cabo directamente, en algún momento, violaciones graves de la libertad religiosa?',
        de: 'Haben Sie, während er wie ein Beamter, der verantwortliche für oder direkt durchgeführt, zu jeder Zeit, besonders sever Verletzungen der religiösen Freiheit?',
        it: 'Hai, mentre prestava servizio come ufficiale del governo, è stato responsabile o direttamente svolte, in qualsiasi momento, in particolare sever violazioni della libertà religiosa?',
      },
      10: {
        en:
          'Have you ever been directly involved in the establishment or enforcement of population controls forcing a woman to undergo an abortion against her free choice or a man or a woman to undergo sterilization against his or her free will?',
        fr:
          "Avez-vous jamais été directement impliqués dans la création ou l'application de contrôle de la population de forcer une femme à subir un avortement à l'encontre de son libre choix ou un homme ou une femme à subir la stérilisation à l'encontre de son libre arbitre?",
        es:
          '¿Alguna vez has estado involucrado directamente en el establecimiento o aplicación de los controles de la población en obligar a una mujer a someterse a un aborto en contra de su libre elección o a un hombre o a una mujer a someterse a la esterilización en contra de su voluntad?',
        de:
          'Haben Sie schon einmal die direkt beteiligten in der Einrichtung oder die Vollstreckung von der Bevölkerung kontrolliert zwingt eine Frau eine Abtreibung vornehmen zu lassen, gegen Ihre freie Wahl oder ein Mann oder eine Frau zu Unterziehen die Sterilisation gegen seinen freien Willen?',
        it:
          "Sei mai stata direttamente coinvolta nella creazione o l'esecuzione di controlli di popolazione costringere una donna a sottoporsi a un aborto contro la sua libera scelta o un uomo o una donna a sottoporsi a sterilizzazione contro il suo o la sua libera volontà?",
      },
      11: {
        en: 'Have you ever been directly involved in the coercive transplantation of human organs or bodily tissue?',
        fr: "Avez-vous déjà été directement impliqué dans la transplantation coercitive d'organes humains ou de tissus corporels?",
        es: '¿Alguna vez ha estado directamente involucrado en el trasplante coercitivo de órganos humanos o tejido corporal?',
        de: 'Haben Sie schon einmal direkt in der Zwangs transplantation von menschlichen Organen oder körperlichen Gewebe?',
        it: 'Avete mai stato direttamente coinvolto nella coercitive trapianto di organi o tessuti corporei?',
      },
      section_title: {
        en: 'Security and Background: Part 3',
        fr: 'Sécurité et Historique: Partie 3',
        es: 'De seguridad y de Fondo: Parte 3',
        de: 'Sicherheits-und Hintergrund: Teil 3',
        it: 'Di sicurezza e di Sfondo: Parte 3',
      },
      section_descr: {
        en:
          'NOTE: Provide the following security and background information. Provide complete and accurate information to all questions that require an explanation. A visa may not be issued to persons who are within specific categories defined by law as inadmissible to the United States (except when a waiver is obtained in advance). Are any of the following applicable to you? While a YES answer does not automatically signify ineligibility for a visa, if you answer YES you may be required to personally appear before a consular officer.',
        fr:
          "REMARQUE: fournissez les informations de sécurité et de base suivantes. Fournissez des informations complètes et précises à toutes les questions qui nécessitent une explication. Un visa ne peut être délivré à des personnes appartenant à des catégories spécifiques définies par la loi comme interdites de territoire aux États-Unis (sauf si une dérogation est obtenue à l'avance). L'un des éléments suivants vous concerne-t-il? Bien qu'une réponse OUI ne signifie pas automatiquement l'inadmissibilité à un visa, si vous répondez OUI, vous devrez peut-être comparaître personnellement devant un agent consulaire.",
        es:
          'NOTA: Proporcione la siguiente seguridad y la información de fondo. Proporcionar información precisa y completa a todas las preguntas que requieren una explicación. Una visa no podrá ser expedido a las personas que están dentro de categorías específicas definidas por la ley como inadmisible a los Estados unidos (excepto cuando la renuncia se obtienen por adelantado). Son alguna de las siguientes es aplicable a usted? Mientras que una respuesta de SÍ no automáticamente significar la pérdida de elegibilidad para una visa, si su respuesta es SÍ, usted puede ser obligado a comparecer personalmente a un oficial consular.',
        de:
          'HINWEIS: Geben Sie die folgenden Sicherheits-und hintergrund-Informationen. Vollständige und genaue Informationen zu allen Fragen, die bedürfen einer Erklärung. Ein Visum darf nicht erteilt werden an Personen, die in bestimmten Kategorien gesetzlich definiert als unzulässig zu den Vereinigten Staaten (außer, wenn eine Befreiung im Voraus). Die folgenden sind auf Sie anwendbar? Während eine JA-Antwort nicht automatisch bedeuten, die Sperre für ein Visum, wenn Sie Antwort JA, Sie können aufgefordert werden, persönlich zu erscheinen vor dem Konsularbeamten.',
        it:
          "NOTA: non forniamo le seguenti sicurezza e informazioni generali. Fornire informazioni complete e accurate a tutte le domande che richiedono una spiegazione. Un visto non può essere rilasciato a persone che sono all'interno di specifiche categorie definite dalla legge come inammissibile per gli Stati Uniti (tranne in caso di rinuncia si ottiene in anticipo). Sono applicabili a voi? Mentre una risposta di SÌ non automaticamente significare ineleggibilità per un visto, se la risposta è SÌ, si può essere tenuti a presentarsi personalmente prima di un funzionario consolare.",
      },
    },
    part4: {
      0: {
        en: 'Have you ever been the subject of a removal or deportation hearing?',
        fr: "Avez-vous déjà fait l'objet d'une audience de renvoi ou d'expulsion?",
        es: '¿Alguna vez ha sido objeto de una audiencia de expulsión o deportación?',
        de: 'Haben Sie schon einmal den Gegenstand einer Entfernung oder deportation zu hören?',
        it: 'Sei mai stato oggetto di una rimozione o la deportazione di udito?',
      },
      1: {
        en: 'Have you ever sought to obtain or assist others to obtain a visa, entry in the US, or any other US immigration benefit by fraud or willful misrepresentation or other unlawful means?',
        fr:
          "Avez-vous déjà cherché à obtenir ou à aider d'autres personnes à obtenir un visa, une entrée aux États-Unis ou tout autre avantage en matière d'immigration aux États-Unis par fraude ou fausse déclaration volontaire ou par d'autres moyens illégaux?",
        es:
          '¿Alguna vez ha tratado de obtener o ayudar a otros a obtener una visa, ingresar a los Estados Unidos o cualquier otro beneficio de inmigración de los Estados Unidos por fraude o tergiversación intencional u otros medios ilegales?',
        de:
          'Haben Sie jemals versucht, zu erhalten oder zu helfen, andere erhalten ein Visum, die Einreise in die USA, oder alle anderen US-Einwanderung profitieren von Betrug oder vorsätzlicher Täuschung oder andere ungesetzliche Mittel?',
        it:
          "Avete mai cercato di ottenere o di aiutare gli altri, per ottenere un visto d'ingresso negli USA, o qualsiasi altro di NOI beneficio di immigrazione da frode o dolo o altri mezzi illeciti?",
      },
      2: {
        en: 'Have you failed to attend a hearing on removability or inadmissibility within the last five years?',
        fr: "Avez-vous échoué à assister à une audience sur l'amovibilité ou l'interdiction de territoire au cours des cinq dernières années?",
        es: 'Tiene usted no pudo asistir a una audiencia de deportación o de inadmisibilidad en los últimos cinco años?',
        de: 'Haben Sie nicht zu einer Vernehmung auf die Entfernbarkeit oder Unzulässigkeit innerhalb der letzten fünf Jahre?',
        it: "Avete omesso di partecipare a un'udienza della rimovibilità o irricevibilità entro gli ultimi cinque anni?",
      },
      3: {
        en: 'Have you ever been unlawfully present, overstayed the amount of time granted by an immigration official or otherwise violated the terms of a U.S. visa?',
        fr: "Avez-vous déjà été en situation irrégulière, dépassé la quantité de temps accordé par un agent d'immigration ou autrement violé les termes d'un visa AMÉRICAIN?",
        es: '¿Alguna vez has estado ilegalmente, sobrepasado la cantidad de tiempo concedido por un oficial de inmigración o violado los términos de una visa a los estados UNIDOS?',
        de: 'Haben Sie schon einmal illegal, abgelaufen die Zeit gewährt, in eine Einwanderung Beamten oder sonst gegen die Bestimmungen ein US-Visum?',
        it: "Sei mai stato presente in violazione di legge, si è fermato il tempo concesso da un funzionario dell'immigrazione o altrimenti violato i termini di un visto degli stati UNITI?",
      },
      4: {
        en: 'Have you ever been removed or deported from any country?',
        fr: "Avez-vous déjà été expulsé ou déportés à partir de n'importe quel pays?",
        es: '¿Alguna vez has sido eliminado o deportados desde cualquier país?',
        de: 'Haben Sie jemals entfernt worden oder deportiert aus jedem Land?',
        it: 'Sei mai stato rimosso o espulso da qualsiasi paese?',
      },
      section_title: {
        en: 'Security and Background: Part 4',
        fr: "De sécurité et d'arrière-plan: Partie 4",
        es: 'De seguridad y de Fondo: Parte 4',
        de: 'Sicherheits-und Hintergrund: Teil 4',
        it: 'Di sicurezza e di Sfondo: Parte 4',
      },
      section_descr: {
        en:
          'NOTE: Provide the following security and background information. Provide complete and accurate information to all questions that require an explanation. A visa may not be issued to persons who are within specific categories defined by law as inadmissible to the United States (except when a waiver is obtained in advance). Are any of the following applicable to you? While a YES answer does not automatically signify ineligibility for a visa, if you answer YES you may be required to personally appear before a consular officer.',
        fr:
          "REMARQUE: fournissez les informations de sécurité et de base suivantes. Fournissez des informations complètes et précises à toutes les questions qui nécessitent une explication. Un visa ne peut être délivré à des personnes appartenant à des catégories spécifiques définies par la loi comme interdites de territoire aux États-Unis (sauf si une dérogation est obtenue à l'avance). L'un des éléments suivants vous concerne-t-il? Bien qu'une réponse OUI ne signifie pas automatiquement l'inadmissibilité à un visa, si vous répondez OUI, vous devrez peut-être comparaître personnellement devant un agent consulaire.",
        es:
          'NOTA: Proporcione la siguiente seguridad y la información de fondo. Proporcionar información precisa y completa a todas las preguntas que requieren una explicación. Una visa no podrá ser expedido a las personas que están dentro de categorías específicas definidas por la ley como inadmisible a los Estados unidos (excepto cuando la renuncia se obtienen por adelantado). Son alguna de las siguientes es aplicable a usted? Mientras que una respuesta de SÍ no automáticamente significar la pérdida de elegibilidad para una visa, si su respuesta es SÍ, usted puede ser obligado a comparecer personalmente a un oficial consular.',
        de:
          'HINWEIS: Geben Sie die folgenden Sicherheits-und hintergrund-Informationen. Vollständige und genaue Informationen zu allen Fragen, die bedürfen einer Erklärung. Ein Visum darf nicht erteilt werden an Personen, die in bestimmten Kategorien gesetzlich definiert als unzulässig zu den Vereinigten Staaten (außer, wenn eine Befreiung im Voraus). Die folgenden sind auf Sie anwendbar? Während eine JA-Antwort nicht automatisch bedeuten, die Sperre für ein Visum, wenn Sie Antwort JA, Sie können aufgefordert werden, persönlich zu erscheinen vor dem Konsularbeamten.',
        it:
          "NOTA: non forniamo le seguenti sicurezza e informazioni generali. Fornire informazioni complete e accurate a tutte le domande che richiedono una spiegazione. Un visto non può essere rilasciato a persone che sono all'interno di specifiche categorie definite dalla legge come inammissibile per gli Stati Uniti (tranne in caso di rinuncia si ottiene in anticipo). Sono applicabili a voi? Mentre una risposta di SÌ non automaticamente significare ineleggibilità per un visto, se la risposta è SÌ, si può essere tenuti a presentarsi personalmente prima di un funzionario consolare.",
      },
    },
    part5: {
      0: {
        en: 'Have you ever withheld custody of a US citizen child outside the US from a person granted legal custody by a US court?',
        fr: "Avez-vous déjà refusé la garde d'un enfant citoyen américain en dehors des États-Unis à une personne ayant obtenu la garde légale d'un tribunal américain?",
        es: '¿Alguna vez ha retenido la custodia de un niño ciudadano de EE. UU. Fuera de los EE. UU. De una persona a quien un tribunal de EE. UU. Le otorgó la custodia legal?',
        de: 'Haben Sie sich jemals zurückgehalten Haft von einem US-Bürger Kindes außerhalb der USA von einer person gewährten rechtlichen Haft von einem US-Gericht?',
        it: 'Hai mai rifiutato la custodia di un cittadino degli stati UNITI bambino al di fuori degli USA da una persona concessa la custodia legale da parte di un giudice statunitense?',
      },
      1: {
        en: 'Have you voted in the US in violation of any law or regulation?',
        fr: 'Avez-vous voté aux États-Unis en violation de toute loi ou règlement?',
        es: 'Ha votado en los estados unidos en violación de cualquier ley o regulación?',
        de: 'Haben Sie abgestimmt in den USA in Verletzung von Gesetz oder Verordnung?',
        it: 'Avete votato in NOI, in violazione di qualsiasi legge o regolamento?',
      },
      2: {
        en: 'Have you ever renounced US citizenship for the purpose of avoiding taxation?',
        fr: "Avez-vous déjà renoncé à la citoyenneté américaine dans le but d'échapper à l'impôt?",
        es: '¿Alguna vez has renunciado a la ciudadanía estadounidense para el propósito de evitar el pago de impuestos?',
        de: 'Haben Sie jemals verzichtete auf die US-Staatsbürgerschaft für den Zweck der Vermeidung von der Besteuerung?',
        it: "Avete mai rinunciato alla cittadinanza allo scopo di eludere l'imposizione?",
      },
      3: {
        en: 'Have you attended a public elementary school on student (F) status or a public secondary school after November 30,1996 without reimbursing the school?',
        fr: "Avez-vous fréquenté une école primaire publique sur le statut d'élève (F) ou une école secondaire publique après le 30 novembre 1996 sans rembourser l'école?",
        es: '¿Ha asistido a una escuela primaria pública con estatus de estudiante (F) o una escuela secundaria pública después del 30 de noviembre de 1996 sin reembolsar a la escuela?',
        de: 'Haben Sie besucht eine öffentliche Grundschule auf Schüler - (F) - status oder ein öffentlich-Gymnasium nach November 30,1996 ohne Erstattung der Kosten von der Schule?',
        it: 'Hai frequentato una scuola elementare pubblica degli studenti (F) stato o di una scuola secondaria pubblica dopo il mese di novembre 30,1996, senza rimborso della scuola?',
      },
      4: {
        en: 'Are you a former exchange visitor (J) who has not yet fulfilled the two-year foreign residence requirement?',
        fr: "Êtes-vous un ancien visiteur d'échange (J) qui n'a pas encore satisfait à l'exigence de résidence à l'étranger de deux ans?",
        es: '¿Es usted un antiguo visitante de intercambio (J) que aún no ha cumplido el requisito de residencia en el extranjero de dos años?',
        de: 'Sind Sie ein ehemaliger exchange visitor (J) wer hat noch nicht erfüllt, wird das zwei-Jahres-foreign residence requirement?',
        it: 'Sono un ex exchange visitor (J) che non ha ancora compiuto i due anni di residenza per stranieri requisito?',
      },
      section_title: {
        en: 'Security and Background: Part 5',
        fr: 'Sécurité et Historique: Partie 5',
        es: 'De seguridad y de Fondo: Parte 5',
        de: 'Sicherheits-und Hintergrund: Teil 5',
        it: 'Di sicurezza e di Sfondo: Parte 5',
      },
      section_descr: {
        en:
          'NOTE: Provide the following security and background information. Provide complete and accurate information to all questions that require an explanation. A visa may not be issued to persons who are within specific categories defined by law as inadmissible to the United States (except when a waiver is obtained in advance). Are any of the following applicable to you? While a YES answer does not automatically signify ineligibility for a visa, if you answer YES you may be required to personally appear before a consular officer.',
        fr:
          "REMARQUE: fournissez les informations de sécurité et de base suivantes. Fournissez des informations complètes et précises à toutes les questions qui nécessitent une explication. Un visa ne peut être délivré à des personnes appartenant à des catégories spécifiques définies par la loi comme interdites de territoire aux États-Unis (sauf si une dérogation est obtenue à l'avance). L'un des éléments suivants vous concerne-t-il? Bien qu'une réponse OUI ne signifie pas automatiquement l'inadmissibilité à un visa, si vous répondez OUI, vous devrez peut-être comparaître personnellement devant un agent consulaire.",
        es:
          'NOTA: Proporcione la siguiente seguridad y la información de fondo. Proporcionar información precisa y completa a todas las preguntas que requieren una explicación. Una visa no podrá ser expedido a las personas que están dentro de categorías específicas definidas por la ley como inadmisible a los Estados unidos (excepto cuando la renuncia se obtienen por adelantado). Son alguna de las siguientes es aplicable a usted? Mientras que una respuesta de SÍ no automáticamente significar la pérdida de elegibilidad para una visa, si su respuesta es SÍ, usted puede ser obligado a comparecer personalmente a un oficial consular.',
        de:
          'HINWEIS: Geben Sie die folgenden Sicherheits-und hintergrund-Informationen. Vollständige und genaue Informationen zu allen Fragen, die bedürfen einer Erklärung. Ein Visum darf nicht erteilt werden an Personen, die in bestimmten Kategorien gesetzlich definiert als unzulässig zu den Vereinigten Staaten (außer, wenn eine Befreiung im Voraus). Die folgenden sind auf Sie anwendbar? Während eine JA-Antwort nicht automatisch bedeuten, die Sperre für ein Visum, wenn Sie Antwort JA, Sie können aufgefordert werden, persönlich zu erscheinen vor dem Konsularbeamten.',
        it:
          "NOTA: non forniamo le seguenti sicurezza e informazioni generali. Fornire informazioni complete e accurate a tutte le domande che richiedono una spiegazione. Un visto non può essere rilasciato a persone che sono all'interno di specifiche categorie definite dalla legge come inammissibile per gli Stati Uniti (tranne in caso di rinuncia si ottiene in anticipo). Sono applicabili a voi? Mentre una risposta di SÌ non automaticamente significare ineleggibilità per un visto, se la risposta è SÌ, si può essere tenuti a presentarsi personalmente prima di un funzionario consolare.",
      },
    },
  },
  crew_visa: {
    section_title: {
      en: 'Crew Visa Information',
      fr: "Informations sur le Visa d'Équipage",
      es: 'La Tripulación De Información De Visados',
      de: 'Crew-Visum Informationen',
      it: 'Equipaggio Di Informazione Visti',
    },
    section_descr: {
      en: 'NOTE: You have indicated that you are a crew member.',
      fr: "REMARQUE: Vous avez indiqué que vous êtes un membre de l'équipage.",
      es: 'NOTA: Usted ha indicado que usted es un miembro de la tripulación.',
      de: 'HINWEIS: Sie haben angegeben, dass Sie ein Mitglied der crew.',
      it: "NOTA: Si hanno indicato che sei un membro dell'equipaggio.",
    },
    job_title: {
      en: 'Specific job title aboard aircraft or vessel',
      fr: "Titre de fonction spécifique à bord d'un aéronef ou d'un navire",
      es: 'Trabajo específico de título a bordo de la aeronave o embarcación',
      de: 'Bestimmten job-Titel an Bord des Flugzeugs oder Schiffes',
      it: 'Specifiche titolo di lavoro a bordo di un aereo o di nave',
    },
    company_name: {
      en: 'Name of company that owns the aircraft or vessel you will be working on',
      fr: "Nom de l'entreprise propriétaire de l'aéronef ou du navire sur lequel vous travaillerez",
      es: 'Nombre de la empresa propietaria de la aeronave o buque que va a trabajar en',
      de: 'Name der Firma, die besitzt das Flugzeug oder das Schiff in dem Sie arbeiten werden auf',
      it: "Nome della società che possiede l'aereo o la nave che si dovrà lavorare su",
    },
    company_tel: {
      en: 'Company Telephone Number',
      fr: "Numéro de téléphone de l'entreprise",
      es: 'Empresa Número De Teléfono',
      de: 'Unternehmen Telefonnummer',
      it: "Numero Di Telefono Dell'Azienda",
    },
    b_position: {
      en: 'Did you acquire your position using a recruiting/manning/crewing agency?',
      fr: "Avez-vous acquis votre poste auprès d'une agence de recrutement / recrutement / équipage?",
      es: 'Usted adquirió su posición mediante un reclutamiento/manning/tripulantes de la agencia?',
      de: 'Haben Sie erwerben Sie Ihre position mit Hilfe eines recruiting/manning/Besatzung Agentur?',
      it: 'Ha acquisito la propria posizione utilizzando un reclutamento/manning/equipaggio agenzia?',
    },
    position_info: {
      agency_name: {
        en: 'Agency Name',
        fr: "Nom De L'Agence",
        es: 'Nombre De La Agencia',
        de: 'Name Des Reisebüros:',
        it: "Nome Dell'Agenzia",
      },
      surname: {
        label: {
          en: 'Contact Surname(s)',
          fr: 'Contact Nom(s)',
          es: 'Contacto Apellido(s)',
          de: 'Kontakt name(N)',
          it: 'Contattare Cognome(i)',
        },
        extra: {
          en: 'Contact Family Name',
          fr: 'Contact Nom De Famille',
          es: 'Contacto Nombre De La Familia',
          de: 'Kontakt-Familie Namen',
          it: 'Contatto Nome Di Famiglia',
        },
      },
      given_name: {
        label: {
          en: 'Contact Given Name(s)',
          fr: 'Contact Prénom(s)',
          es: 'Contacto Nombre(s)',
          de: 'Kontakt Vorname(N)',
          it: 'Contatto Nome(s)',
        },
        extra: {
          en: 'Contact First Name',
          fr: 'Contact Prénom',
          es: 'Contacto Nombre De La Primera',
          de: 'Kontakt Vorname',
          it: 'Nome Contatto',
        },
      },
      address: {
        label: {
          en: 'Address',
          fr: 'Adresse',
          es: 'Dirección',
          de: 'Adresse',
          it: 'Indirizzo',
        },
        tel_number: {
          en: 'Telephone Number',
          fr: 'Numéro De Téléphone',
          es: 'Número De Teléfono',
          de: 'Telefonnummer',
          it: 'Il Numero Di Telefono',
        },
      },
    },
    b_vessel: {
      en: 'Are you serving aboard a seagoing ship or vessel?',
      fr: "Travaillez vous à bord d'un bateau ou d'un navire de mer?",
      es: 'Servir a bordo de un buque de navegación marítima o de los vasos?',
      de: 'Sind Sie auf der portion, die an Bord eines Seeschiffes oder Schiff?',
      it: 'Sei servire a bordo di una nave marittima o nave?',
    },
    vessel_info: {
      vessel_name: {
        en: 'Seagoing Ship/Vessel Name',
        fr: 'Nom du Bateau/Navire De Mer',
        es: 'Buque De Navegación Marítima/Nombre Del Buque',
        de: 'See-Schiff/Schiff Name',
        it: 'Nave Marittima/Nome Della Nave',
      },
      vessel_id: {
        en: 'Seagoing Ship/Vessel Identification Number',
        fr: "Numéro D'Identification du Bateau/Navire De Mer",
        es: 'Buque De Navegación Marítima/Número De Identificación Del Buque',
        de: 'See-Schiff/Schiff-Identifikationsnummer',
        it: 'Nave Marittima/Natanti',
      },
    },
  },
  intracompany: {
    section_title: {
      en: 'Intracompany Transferee Information',
      fr: 'Informations du Transfert Intracompagnie',
      es: 'Dentro De Una Sociedad Adquirente De La Información',
      de: 'Unternehmensinterne Erwerber Informationen',
      it: 'Intraziendale Cessionario Informazioni',
    },
    petition: {
      en: 'Application Receipt/Petition Number',
      fr: "Numéro du reçu de l'Application/Pétition",
      es: 'La Recepción De La Solicitud/Petición Número',
      de: 'Antrag Eingang/Petition Nummer',
      it: 'Ricevuta Della Domanda/Petizione Numero',
    },
    name_filed_petition: {
      en: 'Name of Person/Company who Filed your Petition',
      fr: 'Nom de la Personne/Société qui a Déposé la Pétition',
      es: 'Nombre de la Persona/Empresa que Presentó su Petición',
      de: 'Name der Person/Firma, die Ihre Petition Eingereicht',
      it: 'Nome di Persona/Azienda che ha Presentato la Petizione',
    },
    employer: {
      en: 'Name of Employer where you intend to Work',
      fr: "Nom de l'Employeur où vous avez l'intention de travailler",
      es: 'Nombre de la empresa donde va a Trabajar',
      de: 'Name des Arbeitgebers, wo Sie Arbeiten möchten',
      it: 'Nome del Datore di lavoro in cui si desidera Lavorare',
    },
    address: {
      label: {
        en: 'Address',
        fr: 'Adresse',
        es: 'Dirección',
        de: 'Adresse',
        it: 'Indirizzo',
      },
    },
    tel_number: {
      en: 'Phone Number',
      fr: 'Numéro De Téléphone',
      es: 'Número De Teléfono',
      de: 'Telefonnummer',
      it: 'Il Numero Di Telefono',
    },
    income: {
      en: 'Enter Monthly Income (In USD)',
      fr: 'Indiquez le Revenu Mensuel (En USD)',
      es: 'Indique el Ingreso Mensual (En DÓLARES)',
      de: 'Geben Sie das Monatliche Einkommen (In USD)',
      it: 'Inserisci il Reddito Mensile (In USD)',
    },
  },
  SEVIS: {
    section_title: {
      en: 'Additional Point of Contact Information',
      fr: 'Informations du Point de Contact',
      es: 'Punto adicional de la Información de Contacto',
      de: 'Weitere Kontaktmöglichkeiten',
      it: 'Ulteriore Punto di Contatto per Informazioni',
    },
    section_descr: {
      en:
        'NOTE: You have indicated that you will be studying in some capacity while in the United States. List at least two contacts in your country of residence who can verify the information that you have provided on this application. Do not list immediate family members or other relatives. Postal office box numbers are unacceptable. ',
      fr:
        "REMARQUE: Vous avez indiqué que vous étudieriez dans une certaine mesure aux États-Unis. Énumérez au moins deux contacts dans votre pays de résidence qui peuvent vérifier les informations que vous avez fournies sur cette demande. Ne mentionnez pas les membres de la famille immédiate ou d'autres proches. Les numéros de boîte postale sont inacceptables. ",
      es:
        'NOTA: Usted ha indicado que va a estudiar en alguna capacidad, mientras que en los Estados unidos. Lista de al menos dos contactos en su país de residencia y que se pueda verificar la información que usted ha proporcionado en esta aplicación. No lista de miembros de su familia inmediata o de otros familiares. La oficina Postal cuadro cifras son inaceptables. ',
      de:
        'HINWEIS: Sie haben angegeben, dass Sie studieren werden, die in etwas Kapazität, während in den Vereinigten Staaten. Liste mindestens zwei Kontakte in Ihrem Land des Wohnsitzes, die können überprüfen, die Informationen, die Sie auf diese Anwendung. Nicht Liste mit unmittelbaren Familienangehörigen oder anderen verwandten. Post-office box zahlen sind nicht akzeptabel. ',
      it:
        'NOTA: Si hanno indicato che si studia in alcune capacità, mentre negli Stati Uniti. Elenco di almeno due contatti nel vostro paese di residenza che può verificare le informazioni fornite su questa applicazione. Non elenco i familiari o altri parenti. Ufficio postale casella di numeri, sono inaccettabili. ',
    },
    point_of_contact: {
      label: {
        en: 'Contact',
        fr: 'Contact',
        es: 'Contacto',
        de: 'Kontakt',
        it: 'Contatto',
      },
      surname: {
        en: 'Surnames',
        fr: 'Nom(s) de famille',
        es: 'Apellidos',
        de: 'Familiennamen',
        it: 'Cognomi',
      },
      given_name: {
        en: 'Given Names',
        fr: 'Prénom(s)',
        es: 'Dado Nombres',
        de: 'Namen Gegeben',
        it: 'Nomi',
      },
      address: {
        en: 'Address',
        fr: 'Adresse',
        es: 'Dirección',
        de: 'Adresse',
        it: 'Indirizzo',
      },
      tel_number: {
        en: 'Telephone Number',
        fr: 'Numéro De Téléphone',
        es: 'Número De Teléfono',
        de: 'Telefonnummer',
        it: 'Il Numero Di Telefono',
      },
      email: {
        en: 'Email Address',
        fr: 'Adresse Email',
        es: 'Dirección De Correo Electrónico',
        de: 'E-Mail-Adresse',
        it: 'Indirizzo E-Mail',
      },
    },
    section_title_sevis: {
      en: 'SEVIS Information',
      fr: 'Informations du SEVIS ',
      es: 'SEVIS Información',
      de: 'SEVIS-Informationen',
      it: 'SEVIS Informazioni',
    },
    section_descr_sevis: {
      en:
        'NOTE: You have indicated that the purpose of your trip to the U.S. is to be a student or exchange visitor. Provide the following information regarding the institution at which you intend to study.',
      fr:
        "REMARQUE: Vous avez indiqué que le but de votre voyage aux États-Unis est d'être étudiant ou visiteur d'échange. Fournissez les informations suivantes concernant l'établissement dans lequel vous avez l'intention d'étudier.",
      es:
        'NOTA: Usted ha indicado que el propósito de su viaje a los estados UNIDOS es ser un estudiante o visitante de intercambio. Dar la siguiente información sobre la institución en la que desea estudiar.',
      de:
        'HINWEIS: Sie haben angegeben, dass Sie den Zweck Ihrer Reise in die USA ist ein Schüler oder Austausch Besucher. Geben Sie die folgenden Informationen über die institution, an der Sie studieren möchten.',
      it:
        "NOTA: Si hanno indicato che lo scopo del vostro viaggio negli stati UNITI è quello di essere uno studente o un visitatore. Fornire le seguenti informazioni riguardanti l'ente presso cui si intende studiare.",
    },
    id: {
      label: {
        en: 'SEVIS ID',
        fr: 'Identification SEVIS',
        es: 'IDENTIFICACIÓN SEVIS',
        de: 'SEVIS ID',
        it: 'SEVIS ID',
      },
      extra: {
        en:
          'All SEVIS ID numbers start with the letter N. On the Form I-20, the number is on the top right hand side of the first page under the words Student’s Copy and above the barcode. On the DS-2019, the number is on the top right hand side of the page in the box above the barcode. (e.g., N0123456789)',
        fr:
          'Tous les numéros d’identification SEVIS commencent par la lettre N. Sur le formulaire I-20, le numéro se trouve en haut à droite de la première page sous le mot "Copie de l’étudiant" et au-dessus du code-barres. Sur le DS-2019, le numéro est en haut à droite de la page dans la case au-dessus du code-barres. (par exemple, N0123456789)',
        es:
          'Todos los números de IDENTIFICACIÓN SEVIS comienzan con la letra N. En el Formulario I-20, el número está en la parte superior derecha de la primera página, debajo de las palabras del Estudiante, Copia y encima del código de barras. En el formulario DS-2019, el número está en la parte superior derecha de la página en la caja de arriba del código de barras. (por ejemplo, N0123456789)',
        de:
          "Alle SEVIS-ID-Nummern beginnen mit dem Buchstaben N. Auf dem Formular I-20, die Zahl ist auf der oberen rechten Seite der ersten Seite unter den Worten Student ' s Kopieren und über dem barcode. Auf dem DS-2019, wird die Zahl auf der oberen rechten Seite der Seite in dem Kästchen über dem barcode. (z.B., N0123456789)",
        it:
          'Tutti SEVIS numeri di ID iniziano con la lettera N. il Modulo I-20, il numero è sul lato superiore destro della prima pagina, sotto le parole dello Studente Copia e sopra il codice a barre. Il DS-2019, il numero è sul lato superiore destro della pagina nella casella sopra il codice a barre. (ad esempio, N0123456789)',
      },
    },
    program_number: {
      en: 'Program Number',
      fr: 'Numéro du Programme',
      es: 'Número De Programa',
      de: 'Programm-Nummer',
      it: 'Il Numero Di Programma',
    },
    principal_id: {
      en: 'Principal Applicant SEVIS ID',
      fr: 'Demandeur Principal du SEVIS',
      es: 'Solicitante Principal de IDENTIFICACIÓN SEVIS',
      de: 'Hauptbewerber SEVIS-ID',
      it: 'Candidato principale SEVIS ID',
    },
    b_study_in_US: {
      en: 'Do you intend to study in the U.S?',
      fr: "Avez-vous l'intention d'étudier aux États-Unis?",
      es: '¿Tienes intención de estudio en la U. S?',
      de: 'Haben Sie die Absicht zu studieren in den U. S?',
      it: 'Avete intenzione di studiare in U. S?',
    },
    school_info: {
      name: {
        en: 'Name of School',
        fr: "Nom de l'École",
        es: 'Nombre de la Escuela',
        de: 'Name der Schule',
        it: 'Nome della Scuola',
      },
      course: {
        en: 'Course of Study',
        fr: 'Type de Cours',
        es: 'Curso de Estudio',
        de: 'Studium',
        it: 'Corso di Studio',
      },
      address: {
        en: 'Address',
        fr: 'Adresse',
        es: 'Dirección',
        de: 'Adresse',
        it: 'Indirizzo',
      },
    },
  },
  e_sign: {
    section_title: {
      en: 'Preparer of Application',
      fr: "Préparateur d'Application",
      es: 'Preparador de Aplicación',
      de: 'Ersteller der Anwendung',
      it: 'Preparatore di Applicazione',
    },
    b_assist: {
      en: 'Did anyone assist you in filling out this application?',
      fr: "Quelqu'un vous a aider à remplir cette demande?",
      es: '¿Alguien ayuda para llenar esta solicitud?',
      de: 'Haben jemand unterstützen Sie beim ausfüllen dieser Anwendung?',
      it: 'Qualcuno di aiutarvi nella compilazione di questa applicazione?',
    },
    assist_info: {
      preparer: {
        surname: {
          en: 'Surname',
          fr: 'Nom de famille',
          es: 'Apellido',
          de: 'Familienname',
          it: 'Cognome',
        },
        given_name: {
          en: 'Given Name',
          fr: 'Prénom',
          es: 'Nombre',
          de: 'Vorname',
          it: 'Nome',
        },
      },
      organization: {
        name: {
          en: 'Organization',
          fr: 'Organisation',
          es: 'Organización',
          de: 'Organisation',
          it: 'Organizzazione',
        },
      },
      address: {
        en: 'Address',
        fr: 'Adresse',
        es: 'Dirección',
        de: 'Adresse',
        it: 'Indirizzo',
      },
      relationship: {
        en: 'Relationship to you',
        fr: 'Relation avec vous',
        es: 'Relación para que usted',
        de: 'Beziehung zu Ihnen',
        it: 'Rapporto di parentela',
      },
    },
  },
  photo: {
    section_title: {
      0: {
        en: 'A digital photo is required for each applicant while applying for a US visitor visa.',
        fr: "Une photo numérique est nécessaire pour chaque candidat lors de l'application pour un visa visiteur.",
        es: 'Una foto digital es necesaria para cada solicitante, mientras que la aplicación de la visa de visitante.',
        de: 'Ein digitales Foto erforderlich ist für jeden Antragsteller während der Anwendung für einen US-Besucher-Visum.',
        it: 'Una foto digitale è necessaria per ogni candidato, mentre la richiesta di visto turistico.',
      },
      1: {
        en: 'The photo must meet certain criteria:',
        fr: 'La photo doit répondre à certains critères:',
        es: 'La foto debe cumplir con ciertos criterios:',
        de: 'Das Foto muss bestimmte Kriterien erfüllen:',
        it: 'La foto deve rispettare determinati criteri:',
      },
    },
    section_descr: {
      0: {
        en: 'Eyes glasses will no longer be allowed in new visa photo.',
        fr: 'Les lunettes ne sont plus admises.',
        es: 'Ojos gafas ya no será permitido en la nueva visa de fotos.',
        de: 'Augen Brille wird nicht mehr erlaubt sein, in die neue visa-Foto.',
        it: 'Occhi occhiali non saranno più ammessi in nuove foto dei visti.',
      },
      1: {
        en: 'Size of photo: 2 x 2 inches (51 x 51 mm)',
        fr: 'Taille de la photo: 2 x 2 pouces (51 x 51 mm)',
        es: 'Tamaño de la foto: 2 x 2 pulgadas (51 mm x 51 mm)',
        de: 'Größe der Fotos: 2 x 2 Zoll (51 x 51 mm)',
        it: 'Dimensioni della foto: 2 x 2 pollici (51 x 51 mm)',
      },
      2: {
        en: 'Head must be between 1 -1 3/8 inches (25 - 35 mm) from the bottom of the chin to the top of the head.',
        fr: 'La tête doit être comprise entre 1 -1 3/8 pouces (25 - 35 mm) à partir du bas du menton au sommet de la tête.',
        es: 'La cabeza debe estar entre 1 -1 3/8 pulgadas (25 - 35 mm) de la parte inferior de la barbilla a la parte superior de la cabeza.',
        de: 'Kopf muss zwischen 1 -1 3/8 Zoll (25 - 35 mm) von der Unterseite des Kinns zur Spitze des Kopfes.',
        it: 'La testa deve essere compreso tra 1 -1 3/8 di pollice (25 - 35 mm) sulla parte inferiore del mento alla sommità della testa.',
      },
      3: {
        en: 'Recent, taken in the last 6 months to reflect current appearance',
        fr: "Récente, prise au cours des 6 derniers mois, afin de refléter l'apparence actuelle",
        es: 'Reciente, tomada en los últimos 6 meses para reflejar el aspecto actual',
        de: 'Die jüngsten, die in den letzten 6 Monaten entsprechend der aktuellen Darstellung',
        it: 'Recenti, scattate negli ultimi 6 mesi, per riflettere aspetto attuale',
      },
      4: {
        en: 'Plain white or off-white background',
        fr: 'Arrière-plan de couleur blanche ou blanc cassé',
        es: 'Blanco o casi blanco de fondo',
        de: 'Weißen oder off-weißen hintergrund',
        it: 'Plain white o off-white background',
      },
      5: {
        en: 'Head must face the camera directly with full face in view',
        fr: 'La visage doit faire face entièrement (Pas de profil)',
        es: 'La cabeza debe enfrentar directamente a la cámara con cara llena de vista',
        de: 'Kopf muss in Richtung der Kamera direkt mit vollem Gesicht in Sicht',
        it: 'La testa deve essere di fronte alla fotocamera con il pieno faccia a vista',
      },
      6: {
        en: 'Taken with a neutral facial expression or a natural smile, with both eyes open',
        fr: 'Prise avec une expression faciale neutre ou un sourire naturel, avec les deux yeux ouverts',
        es: 'Tomado con una expresión facial neutra o una sonrisa natural, con los dos ojos abiertos',
        de: 'Aufgenommen mit einem neutralen Gesichtsausdruck oder ein natürliches lächeln, mit beiden Augen offen',
        it: "Prese con un'espressione neutra del viso o di un sorriso naturale, con entrambi gli occhi aperti",
      },
      7: {
        en: 'Photo in color',
        fr: 'Photo en couleur',
        es: 'Foto en color',
        de: 'Foto in Farbe',
        it: 'Foto a colori',
      },
      8: {
        en: 'Taken in clothing normally worn on a daily basis',
        fr: 'Prise dans les vêtements habituellement portés sur une base quotidienne',
        es: 'Tomado en la ropa que se usa normalmente sobre una base diaria',
        de: 'Genommen in der Kleidung, die normalerweise getragen auf einer täglichen basis',
        it: 'Preso in abbigliamento normalmente indossato su una base quotidiana',
      },
      9: {
        en:
          "No hats or head coverings (Unless worn daily for religious or medical purposes. Submit a signed statement that verifies that the hat or head covering is part of recognized, traditional religious attire that is customarily or required to be worn continuously in public or a signed doctor's statement verifying the item is used daily for medical purposes. Your full face must be visible and your hat or head covering cannot obscure your hairline or cast shadows on your face.)",
        fr:
          "Aucun chapeau ni couvre-chef (à moins qu'il ne soit porté quotidiennement à des fins religieuses ou médicales. Soumettez une déclaration signée qui vérifie que le chapeau ou le couvre-chef fait partie d'une tenue religieuse traditionnelle reconnue qui est habituellement ou doit être portée en permanence en public ou par un médecin signé. une déclaration attestant que l'article est utilisé quotidiennement à des fins médicales. Votre visage doit être visible et votre chapeau ou votre couvre-chef ne doivent pas masquer votre ligne de cheveux ou projeter des ombres sur votre visage.",
        es:
          'No hay sombreros o tocados (Menos usado a diario para religiosos o fines médicos. Presentar una declaración firmada en la que se comprueba que el sombrero o el cubrirse la cabeza es parte de reconocidos, de la religión tradicional atuendo que es habitualmente o requiere para ser usado continuamente en público o una firma de la declaración de verificar el elemento que se utiliza diariamente para fines médicos. Su cara completa debe ser visible y su sombrero o cubrirse la cabeza no puede ocultar su nacimiento o sombras en su cara.)',
        de:
          'Keine Hüte oder Kopfbedeckungen (es sei denn, täglich getragen für religiöse oder medizinische Zwecke. Senden Sie eine signierte Anweisung, die überprüft, ob der Hut oder Kopfbedeckung ist Teil der anerkannten, traditionelle religiöse Kleidung, die üblich oder erforderlich ist, um ständig getragen werden, die in öffentlichen oder einer signierten Arzt-Anweisung überprüfung der Artikel, die täglich im Einsatz für medizinische Zwecke. Ihr volles Gesicht muss sichtbar sein und Ihr Hut oder Kopfbedeckung kann nicht darüber hinwegtäuschen Ihr Haaransatz oder Schatten auf Ihr Gesicht.)',
        it:
          "No cappelli o il velo (a Meno che non indossati quotidianamente per motivi religiosi o per scopi medici. Presentare una dichiarazione firmata che verifica che il cappello o copricapo è parte del riconosciuto, religiosa tradizionale abbigliamento abitualmente o che devono essere indossati continuamente in pubblico o sottoscritta la dichiarazione del medico verificare l'elemento viene usato quotidianamente per scopi medici. Il pieno viso deve essere visibile e il suo cappello o copricapo non può nascondere l'attaccatura dei capelli o gettare ombre sul tuo viso.)",
      },
      10: {
        en: 'No headphones or wireless hands-free devices.',
        fr: "Pas de casque ou d'appareils mains-libres sans fil.",
        es: 'Ningún auriculares inalámbricas o dispositivos de manos libres.',
        de: 'Keine Kopfhörer oder drahtlose Hand-freie Geräte.',
        it: 'Niente cuffie senza fili o dispositivi hands-free.',
      },
    },
    b_photo: {
      label: {
        en: 'Are you ready to Upload your Photo?',
        fr: 'Êtes-vous prêt à Télécharger votre Photo?',
        es: '¿Estás listo para Subir tu Foto?',
        de: 'Sind Sie bereit, Ihr Foto Hochladen?',
        it: 'Siete pronti per Caricare la tua Foto?',
      },
      extra: {
        en: 'RECOMMENDED YES. If NO, you should bring your photo during the interview',
        fr: "RECOMMANDÉ OUI. Si NON, vous devez apporter votre photo lors de l'entrevue",
        es: 'RECOMENDABLE SÍ. Si NO, usted debe traer su foto durante la entrevista',
        de: 'EMPFOHLEN, JA. Wenn NEIN, sollten Sie bringen Ihr Foto während des Interviews',
        it: "RACCOMANDATO SÌ. Se NO, si dovrebbe portare la tua foto durante l'intervista",
      },
    },
    avatar: {
      label: {
        en: 'US Passport type photo ID',
        fr: "Type de photo d'identité pour Passeport américain",
        es: 'Pasaporte de los estados unidos tipo de IDENTIFICACIÓN con foto',
        de: 'US-Pass-Foto-ID-Typ',
        it: 'NOI Passaporto tipo di foto ID',
      },
      extra: {
        en: 'Upload your US passport type photo here, must be at least 600x600px. It must be a US passport type photo ID.',
        fr: "Téléchargez votre photo de type passeport américain ici, doit être au moins 600x600px. Il doit s'agir d'une pièce d'identité avec photo de type passeport américain.",
        es: 'Sube tu pasaporte de los estados unidos tipo de fotos aquí, debe ser al menos 600x600px. Debe ser un pasaporte de los estados unidos tipo de IDENTIFICACIÓN con foto.',
        de: 'Laden Sie Ihre US-Pass-Typ Foto hier, muss mindestens 600x600px. Es muss ein US-Pass-Typ Foto-ID.',
        it: 'Caricare il passaporto tipo di foto qui, deve essere di almeno 600x600px. Deve essere un tipo di passaporto foto ID.',
      },
    },
    FGMC: {
      label: {
        en: 'Female Genital Mutilation/Cutting (FGM/C) Prevention',
        fr: 'Prévention de la Mutilation Génitale féminine/Excision (MGF/E)',
        es: 'La Mutilación Genital femenina (MGF/C) Prevención de',
        de: 'Female Genital Mutilation/Cutting (FGM/C) Prävention',
        it: 'Escissione/Mutilazione Genitale femminile (FGM/C) Prevenzione',
      },
      check: {
        en:
          'Pursuant to Section 644 the Illegal Immigration Reform and Immigrant Responsibility Act (IIRIRA), Public Law 104-208 (8 U.S.C. 1374), the Department of State is required to provide you with access to copy the information sheet on the severe harm to physical and psychological health caused by female genital mutilation/cutting (FGM/C). Here is the access to the Female Genital Mutilation or Cutting Government Fact Sheet: https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fact-sheet-on-female-genital-mutilation-or-cutting.html. I certify that I have received the U.S. Government Fact Sheet on Female Genital Mutilation or Cutting (FGM/C).',
        fr:
          "En vertu de l'article 644 de la loi sur la réforme de l'immigration illégale et la responsabilité des immigrants (IIRIRA), loi publique 104-208 (8 USC 1374), le Département d'État est tenu de vous donner accès à la copie de la fiche d'information sur les dommages graves aux santé psychologique causée par les mutilations génitales féminines / excision (MGF / E). Voici l'accès à la fiche d'information du gouvernement sur les mutilations génitales féminines ou les coupures: https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fact-sheet-on-female-genital -mutilation-ou-coupe.html. Je certifie avoir reçu la fiche d'information du gouvernement américain sur les mutilations génitales féminines ou l'excision (MGF/E)",
        es:
          'De conformidad con la Sección 644 la Reforma de Inmigración Ilegal y Responsabilidad del Inmigrante (IIRIRA), Ley Pública 104-208 (8 U. S. C. 1374), el Departamento de Estado está obligado a proveer de usted el acceso a la copia de la hoja de información sobre los graves daños a la salud física y psicológica causada por la mutilación genital femenina (MGF/C). Aquí es el acceso a la Mutilación Genital Femenina o el Corte de Gobierno de la Hoja: https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fact-sheet-on-female-genital-mutilation-or-cutting.html. Certifico que he recibido el Gobierno de los estados UNIDOS Hoja informativa sobre la Mutilación Genital Femenina o de Corte (M/C).',
        de:
          'Gemäß § 644 der Illegal Immigration Reform and Immigrant Responsibility Act (IIRIRA), Öffentliches Recht 104-208 (8 U. S. C. 1374), dem Department of State ist erforderlich, um Ihnen Zugang zu Kopier-Informationsblatt über die schweren Schaden für die körperliche und psychische Gesundheit, die durch weibliche Genitalverstümmelung/Beschneidung (FGM/C). Hier ist der Zugriff auf die Weibliche Genitalverstümmelung oder-Schneiden Regierung Fact Sheet: https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fact-sheet-on-female-genital-mutilation-or-cutting.html. Ich bestätige, dass ich erhalten habe, die US-Regierung Factsheet Weibliche Genitalverstümmelung oder Cutting (FGM/C).',
        it:
          "Ai sensi dell'articolo 644 di Immigrazione Clandestina, di Riforma e di Immigrati Responsabilità Act (IIRIRA), Diritto Pubblico 104-208 (8 U. S. C. 1374), il Dipartimento di Stato è richiesto di fornire l'accesso a copiare il foglio di informazioni sul grave danno per la salute fisica e psicologica causata da escissione/mutilazione genitale femminile (FGM/C). Qui è l'accesso alla Mutilazione Genitale Femminile o il Taglio di Governo Fact Sheet: https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fact-sheet-on-female-genital-mutilation-or-cutting.html. Dichiaro di aver ricevuto il Governo degli stati UNITI Foglio di Fatto contro la Mutilazione Genitale Femminile o di Taglio (FGM/C).",
      },
    },
    HTP: {
      label: {
        en: 'Human Trafficking Prevention',
        fr: 'Prévention de la traite des êtres humains',
        es: 'La Prevención De La Trata De Seres Humanos',
        de: 'Menschenhandel-Prävention',
        it: 'Il Traffico Di Esseri Umani Prevenzione',
      },
      check: {
        en:
          'Your application indicates that you are applying for an employment- or education-based nonimmigrant visa. Pursuant to Section 202 of the William Wilberforce Trafficking Victims Protection Reauthorization Act of 2008 you are required to receive a copy of an informational pamphlet on the legal rights and resources of aliens applying for employment- or education-based nonimmigrants visas. Please read the pamphlet carefully. We strongly encourage you to print a copy of a pamphlet and keep it with you if your visa is granted and you travel to the United States. William Wilberforce Trafficking Victims Protection Reauthorization Act of 2008 Pamphlet I certify that I have received, read, and understand the William Wilberforce Trafficking Victims Protection Reauthorization Act of 2008 Pamphlet.',
        fr:
          "Votre demande indique que vous demandez un visa de non-immigrant basé sur l'emploi ou l'éducation. Conformément à l'article 202 de la loi de 2008 sur la réautorisation de la protection des victimes de la traite des êtres humains William Wilberforce, vous êtes tenu de recevoir une copie d'une brochure d'information sur les droits et les ressources juridiques des étrangers qui demandent un visa de non-immigrant basé sur l'emploi ou l'éducation. Veuillez lire attentivement la brochure. Nous vous encourageons fortement à imprimer une copie d'une brochure et à la garder avec vous si votre visa est accordé et que vous voyagez aux États-Unis. Pamphlet de la loi de 2008 sur la réautorisation de la protection des victimes de la traite de William Wilberforce Je certifie que j'ai reçu, lu et compris la brochure de 2008 de la loi de 2008 de William Wilberforce sur la réautorisation de la protection des victimes de la traite.",
        es:
          'Su solicitud indica que está solicitando una visa de no inmigrante basada en empleo o educación. De conformidad con la Sección 202 de la Ley de Reautorización de Protección de Víctimas de Tráfico de William Wilberforce de 2008, debe recibir una copia de un folleto informativo sobre los derechos y recursos legales de los extranjeros que solicitan visas de no inmigrantes basadas en el empleo o la educación. Por favor lea el folleto cuidadosamente. Le recomendamos encarecidamente que imprima una copia de un folleto y que lo tenga con usted si le otorgan su visa y viaja a los Estados Unidos. William Wilberforce Trafficaut Victims Protection Reauthorization Act of 2008 Panmphlet Certifico que he recibido, leído y entiendo el folleto William Wilberforce Trafficking Victims Protection Reauthorization Act of 2008',
        de:
          'Ihre Anwendung zeigt an, dass Sie die Bewerbung für eine Beschäftigung oder Bildung-basierte nonimmigrant visa. Gemäß Abschnitt 202 des William Wilberforce Trafficking Victims Protection Reauthorization Act of 2008 Sie sind erforderlich, um zu erhalten eine Kopie der Informations-Broschüre über die Rechte und Ressourcen von aliens Anwendung für die Beschäftigung oder Bildung-basierte nonimmigrants Visa. Bitte Lesen Sie die Broschüre sorgfältig durch. Wir empfehlen Ihnen dringend, eine Kopie drucken einer Broschüre und halten Sie es mit Ihnen, wenn Ihr Visum erteilt wird, und Sie Reisen in die Vereinigten Staaten. William Wilberforce Trafficking Victims Protection Reauthorization Act of 2008 Broschüre bestätige ich, dass ich erhalten habe, Lesen, und zu verstehen, die William Wilberforce Trafficking Victims Protection Reauthorization Act of 2008 Pamphlet.',
        it:
          "L'applicazione indica che si sta applicando per un lavoro o di istruzione a base di visto per non immigranti. Ai sensi dell'articolo 202 del William Wilberforce Vittime di Protezione Reauthorization Act del 2008 si sono tenuti a ricevere una copia di un opuscolo informativo sui diritti legali e risorse di alieni di applicare per l'occupazione - o educativo nonimmigrants visti. Si prega di leggere l'opuscolo con attenzione. Si consiglia di stampare una copia di un opuscolo e la tieni con te se il visto è concesso e si è in viaggio per gli Stati Uniti. William Wilberforce Vittime di Protezione Reauthorization Act del 2008 Opuscolo dichiaro di aver ricevuto, letto e compreso il William Wilberforce Vittime di Protezione Reauthorization Act del 2008 Opuscolo.",
      },
    },
    section_title_payment: {
      en: 'Payment Information',
      fr: 'Les Informations De Paiement',
      es: 'La Información De Pago',
      de: 'Zahlungsinformationen',
      it: 'Informazioni Di Pagamento',
    },
    section_descr_payment: {
      en: 'Note: Please enter the first and last name of the person who makes the payment.',
      fr: 'Remarque: Veuillez saisir le Prénom et le Nom de la personne qui effectue le paiement.',
      es: 'Nota: por Favor, introduzca el nombre y apellido de la persona que realiza el pago.',
      de: 'Hinweis: Bitte geben Sie den ersten und letzten Namen der person, die macht die Zahlung.',
      it: 'Nota: si Prega di inserire il nome e il cognome della persona che effettua il pagamento.',
    },
    payer: {
      label: {
        en: "Payer's Name",
        fr: 'Nom du Payeur',
        es: 'Del ordenante Nombre',
        de: 'Zahlers Name',
        it: 'Nome del pagatore',
      },
      surname: {
        en: 'First Name',
        fr: 'Prénom',
        es: 'Primer Nombre',
        de: 'Vorname',
        it: 'Nome',
      },
      given_name: {
        en: 'Last Name',
        fr: 'Nom de Famille',
        es: 'Apellido',
        de: 'Nachname',
        it: 'Cognome',
      },
      phone: {
        en: 'Payer Phone Number',
        fr: 'Numéro De Téléphone',
        es: 'Ordenante Número De Teléfono',
        de: 'Zahler Telefonnummer',
        it: 'Pagatore Numero Di Telefono',
      },
      passport: {
        en: "Payer's Passport Number",
        fr: 'Numéro de Passeport du payeur',
        es: 'Del ordenante Número de Pasaporte',
        de: 'Zahlers Pass-Nummer',
        it: 'Pagatore Numero di Passaporto',
      },
      email: {
        en: "Payer's Email",
        fr: 'E-Mail du payeur',
        es: 'Pagador de Correo electrónico',
        de: 'Zahlers E-Mail',
        it: 'Del pagatore e-Mail',
      },
      address: {
        en: 'Address',
        fr: 'Adresse',
        es: 'Dirección',
        de: 'Adresse',
        it: 'Indirizzo',
      },
    },
    b_info_confirm: {
      label: {
        en: 'Information Confirmation',
        fr: 'Confirmation Des Informations',
        es: 'Información De Confirmación',
        de: 'Informationen Bestätigung',
        it: 'Informazioni Di Conferma',
      },
      check: {
        en:
          'I confirm that the information provided on this form is correct and accurate to the best of my knowledge. I have read and agreed with the Disclaimer, the Terms and Conditions and the Refund Policy. I understand that this transaction is Non-Refundable. This site is not a US Government entity and is in no way associated with any US Embassy or Consulate and if a cardholder attempts to falsely report that a transaction was fraudulent and requests a chargeback of an application fee, the Embassy will be informed and it may result in cancellation of any visas already scheduled. Your submission of credit card information, or any kind of payment card information, constitutes your authorization for our agency to charge your card for the services ordered and for any related fees or expenses. You further agree to abide by the terms of your card issuer’s agreement. This applies to any fee charged, incurred or paid by our agency for or in any way relating to publication requirements for any document we prepare and/or file at your request whether the filing is ultimately accepted or not.',
        fr:
          "Je confirme que les renseignements fournis sur ce formulaire sont exacts au meilleur de ma connaissance. J'ai lu et accepté l'Avertissement, les Termes et Conditions et la Politique de Remboursement. Je comprends que cette opération est Non-Remboursable. Ce site n'est pas une entité Gouvernementale et n'est en aucune façon associée avec les États-Unis, l'Ambassade ou le Consulat et si un titulaire de carte de paiement tente de signaler à tort qu'une transaction est frauduleuse et demande un remboursement, l'Ambassade sera informé et celà peut entraîner l'annulation de tous les visas d'ores et déjà prévue. L'envoi de vos informations de carte de crédit, ou toute sorte d'informations de carte de paiement, constitue votre autorisation pour notre agence de débiter votre carte de crédit pour les services commandés et les frais connexes ou des dépenses. De plus, vous acceptez de respecter les termes de l'émetteur de votre carte. Cela s'applique à tous les frais, engagés ou payés par notre agence de ou en aucune façon liés aux exigences en matière de publication de tout document, nous préparer et/ou le fichier à votre demande, si le dépôt est finalement acceptée ou non.",
        es:
          'Confirmo que la información proporcionada en este formulario es correcta y precisa a mi leal saber y entender. He leído y acepto el Descargo de responsabilidad, los Términos y condiciones y la Política de reembolso. Entiendo que esta transacción no es reembolsable. Este sitio no es una entidad del Gobierno de los EE. UU. Y no está asociado de ninguna manera con ninguna Embajada o Consulado de los EE. UU. resultará en la cancelación de cualquier visa ya programada. Su envío de información de tarjeta de crédito, o cualquier tipo de información de tarjeta de pago, constituye su autorización para que nuestra agencia le cobre a su tarjeta los servicios solicitados y cualquier tarifa o gasto relacionado. Además, acepta cumplir con los términos del acuerdo del emisor de su tarjeta. Esto se aplica a cualquier tarifa cobrada, incurrida o pagada por nuestra agencia por o de alguna manera relacionada con los requisitos de publicación de cualquier documento que preparemos y / o archivemos a su solicitud, ya sea que la presentación sea finalmente aceptada o no.',
        de:
          'Ich bestätige, dass die Angaben auf diesem Formular korrekt sind und nach meinem besten wissen. Ich habe gelesen und akzeptiert die Nutzungsbedingungen, die Allgemeinen Geschäftsbedingungen und das Rückgaberecht. Ich verstehe, dass diese Transaktion wird Nicht Zurückerstattet. Diese Website ist nicht eine US-Regierungsbehörde und ist in keiner Weise verbunden mit der US-Botschaft oder einem Konsulat und wenn ein Karteninhaber versucht, die fälschlicherweise melden, dass eine Transaktion betrügerisch und fordert eine Rückbuchung von einer Anwendung Gebühr, die Botschaft informiert werden, und es kann die Annullierung von Visa bereits geplant. Die übermittlung von Kreditkarten-Informationen oder jede Art von Kreditkarte Informationen, stellt Ihre Genehmigung für unsere Agentur, Ihre Karte zu belasten, die für die bestellten Leistungen und für alle damit verbundenen Gebühren oder Aufwendungen. Des weiteren Stimmen Sie der Einhaltung der Bedingungen Ihrer Karte Emittenten Vereinbarung. Dies gilt für etwaige Gebühren, Kosten oder bezahlt durch unsere Agentur oder in irgendeiner Weise im Zusammenhang mit der Veröffentlichung Anforderungen für Dokument-wir bereiten Sie und/oder Datei an Ihre Anfrage, ob die Einreichung ist letztendlich akzeptiert oder nicht.',
        it:
          "Confermo che le informazioni fornite in questo modulo sono corrette e accurate al meglio delle mie conoscenze. Ho letto e accettato il Disclaimer, i Termini e le Condizioni e la Politica di Rimborso. Capisco che questa transazione Non è Rimborsabile. Questo sito non è un ente Governativo e non è in alcun modo associato con qualsiasi Ambasciata o il Consolato e se un titolare tentativi di simulare la relazione che una transazione fraudolenta e le richieste di storno dell'importo di una tassa di iscrizione, l'Ambasciata sarà informato e può comportare la cancellazione di qualsiasi visti già programmate. L'invio di informazioni di carta di credito, o qualsiasi tipo di carta di pagamento informazioni, costituisce autorizzazione per la nostra agenzia a caricare la carta per i servizi ordinati e per le connesse eventuali commissioni o spese. Si accetta di rispettare i termini dell'emittente della carta dell'accordo. Questo vale per qualsiasi pagamento, pagati o la nostra agenzia o in qualsiasi modo connessi a un obbligo di pubblicazione per tutti i documenti prepariamo e/o in file presso la vostra richiesta se il deposito è in definitiva accettata o meno.",
      },
    },
    b_certify: {
      label: {
        en: 'Digital Signature Acknowledgment',
        fr: 'Accusé de réception de Signature Numérique',
        es: 'Firma Digital De Reconocimiento',
        de: 'Digitale Signatur-Bestätigung',
        it: 'Firma Digitale Di Riconoscimento',
      },
      check: {
        en:
          'I certify under penalty of perjury under the laws of the United States of America that the foregoing is true and correct. I acknowledge and approve that entering my name in the signature field legally replace my physical signature.',
        fr:
          "Je certifie, sous peine de parjure en vertu de la législation des États-unis d'Amérique, que ce qui précède est vrai et correct. Je reconnais et j'approuve que la saisie de mon nom dans le champ de signature remplace juridiquement ma signature physique.",
        es:
          'Certifico bajo pena de perjurio bajo las leyes de los Estados unidos de América que lo anterior es verdadero y correcto. Reconozco y aprobar que el ingreso a mi nombre en el campo de firma legalmente reemplazar mi firma física.',
        de:
          'Ich erkläre unter der Strafe des Meineids gemäß den Gesetzen der Vereinigten Staaten von Amerika, dass das vorstehende wahr und korrekt ist. Ich bestätigen und genehmigen Sie, dass die Eintragung meines namens in das Feld Signatur rechtlich ersetzen meine physische Unterschrift.',
        it:
          "Dichiaro sotto pena di spergiuro, secondo le leggi degli Stati Uniti d'America che quanto sopra è vero e corretto. Prendo atto ed approvare che inserendo il mio nome nel campo firma legalmente sostituire la mia firma fisica.",
      },
    },
    fullname_sign: {
      label: {
        en: 'E-Signature of Applicant',
        fr: 'E-Signature du Demandeur',
        es: 'E-Firma del Solicitante',
        de: 'E-Unterschrift des Antragstellers',
        it: 'E-Firma del Richiedente',
      },
      extra: {
        en: 'Enter your full name as a digital signature.',
        fr: 'Entrez votre nom complet en tant que signature numérique.',
        es: 'Escriba su nombre completo como una firma digital.',
        de: 'Geben Sie Ihren vollständigen Namen als digitale Signatur.',
        it: 'Inserisci il tuo nome completo, come firma digitale.',
      },
    },
    signature: {
      en: 'Signature',
      fr: 'Signature',
      es: 'Firma',
      de: 'Signatur',
      it: 'Firma',
    },
  },
  final: {
    section_title: {
      en: 'Submit your application',
      fr: 'Soumettre votre demande',
      es: 'Presentar su solicitud',
      de: 'Senden Sie Ihre Bewerbung',
      it: 'Invia la tua domanda',
    },
  },
  components: {
    additional_social_media: {
      platform: {
        en: 'Additional Social Media Platform',
        fr: 'Plateforme De Média Social Additionelles',
        es: 'Adicionales De La Plataforma De Medios Sociales',
        de: 'Zusätzliche Social-Media-Plattform',
        it: 'Ulteriori Piattaforma Di Social Media',
      },
      identifier: {
        en: 'Additional Social Media Handle',
        fr: 'Pseudonymes Supplémentaires De Médias Sociaux',
        es: 'Adicional De Medios De Comunicación Social De La Manija',
        de: 'Zusätzliche Social-Media-Griff',
        it: 'Social Media Maniglia',
      },
    },
    address: {
      street_addr1: {
        en: 'Street Address',
        fr: 'Adresse',
        es: 'Dirección De La Calle',
        de: 'Anschrift',
        it: 'Indirizzo',
      },
      street_addr2: {
        en: 'Address Line 2 (Optional)',
        fr: 'Adresse Ligne 2 (Facultatif)',
        es: 'La Dirección De La Línea 2 (Opcional)',
        de: 'Adresse Zeile 2 (Optional)',
        it: 'Indirizzo 2 (Opzionale)',
      },
      city: {
        en: 'City',
        fr: 'Ville',
        es: 'Ciudad',
        de: 'Stadt',
        it: 'Città',
      },
      state: {
        en: 'State / Province / Region',
        fr: 'État / Province / Région',
        es: 'Estado / Provincia / Región',
        de: 'Staat / Provinz / Region',
        it: 'Stato / Provincia / Regione',
      },
      zip_code: {
        en: 'ZIP / Postal Code',
        fr: 'ZIP / Code Postal',
        es: 'ZIP / Código Postal',
        de: 'ZIP / Postal Code',
        it: 'ZIP / Postal Code',
      },
      tel_number: {
        en: 'Phone',
        fr: 'Téléphone',
        es: 'Teléfono',
        de: 'Telefon',
        it: 'Telefono',
      },
      country: {
        en: 'Country',
        fr: 'Pays',
        es: 'País',
        de: 'Land',
        it: 'Paese',
      },
    },
    date_length: {
      period: {
        label: {
          en: 'Length of stay',
          fr: 'Durée du séjour',
          es: 'La duración de la estancia',
          de: 'Länge des Aufenthalts',
          it: 'La durata del soggiorno',
        },
        extra: {
          en: '0 of 3 max characters',
          fr: '0 de 3 caractères max',
          es: '0 de 3 máximo de caracteres',
          de: '0 3 max Zeichen',
          it: '0 di 3 caratteri max',
        },
      },
      unit: {
        label: {
          en: 'Length of stay',
          fr: 'Durée du séjour',
          es: 'La duración de la estancia',
          de: 'Länge des Aufenthalts',
          it: 'La durata del soggiorno',
        },
      },
    },
    explain: {
      textLabel: {
        en: 'If you answered yes, give details below.',
        fr: 'Si vous avez répondu oui, donnez les détails ci-dessous.',
        es: 'Si usted contesta sí, dé los detalles a continuación.',
        de: 'Wenn Sie mit ja beantwortet, geben Sie die details unten.',
        it: 'Se avete risposto sì, fornire dettagli.',
      },
    },
    former_spouses: {
      surname: {
        en: 'First Name',
        fr: 'Prénom',
        es: 'Primer Nombre',
        de: 'Vorname',
        it: 'Nome',
      },
      given_name: {
        en: 'Last Name',
        fr: 'Nom De Famille',
        es: 'Apellido',
        de: 'Nachname',
        it: 'Cognome',
      },
      birthday: {
        en: 'Date of birth',
        fr: 'Date de naissance',
        es: 'Fecha de nacimiento',
        de: 'Geburtsdatum',
        it: 'Data di nascita',
      },
      nationality: {
        en: 'Nationality',
        fr: 'Nationalité',
        es: 'Nacionalidad',
        de: 'Nationalität',
        it: 'Nazionalità',
      },
      place_of_birth: {
        label: {
          en: 'Place of birth',
          fr: 'Lieu de naissance',
          es: 'Lugar de nacimiento',
          de: 'Ort der Geburt',
          it: 'Luogo di nascita',
        },
        city: {
          label: {
            en: 'City',
            fr: 'Ville',
            es: 'Ciudad',
            de: 'Stadt',
            it: 'Città',
          },
          extra: {
            en: 'Leave blank if you do not know',
            fr: 'Laissez vide si vous ne savez pas',
            es: 'Dejar en blanco si no sabe',
            de: 'Lassen Sie das Feld leer, wenn Sie nicht wissen,',
            it: 'Lasciare vuoto se non si conosce',
          },
        },
        country: {
          label: {
            en: 'Country',
            fr: 'Pays',
            es: 'País',
            de: 'Land',
            it: 'Paese',
          },
        },
      },
      marriage_date: {
        en: 'Date of Marriage',
        fr: 'Date de Mariage',
        es: 'Fecha de Matrimonio',
        de: 'Das Datum der Eheschließung',
        it: 'La data del Matrimonio',
      },
      end_date: {
        en: 'Date Marriage End',
        fr: 'Date de la fin du Mariage',
        es: 'Fecha De Matrimonio Final',
        de: 'Datum Ehe-Ende',
        it: 'Data Di Fine Del Matrimonio',
      },
      end_explain: {
        en: 'How the Marriage Ended',
        fr: "Comment le Mariage s'est terminé",
        es: 'Cómo el Matrimonio se Acabó',
        de: 'Wie die Ehe Endete',
        it: 'Come il Matrimonio è Finito',
      },
      end_country: {
        en: 'Country/Region Marriage was Terminated',
        fr: 'Pays/Région où le Mariage a était Résilié',
        es: 'País/Región Matrimonio estaba Terminado',
        de: 'Land/Region der Ehe war Beendet',
        it: 'Paese/Regione Matrimonio è stato Terminato',
      },
      address: {
        en: 'Address',
        fr: 'Adresse',
        es: 'Dirección',
        de: 'Adresse',
        it: 'Indirizzo',
      },
    },
    lost_pssports: {
      number: {
        label: {
          en: 'Lost or stolen Passport/Travel Document Number',
          fr: 'Numéro du Passeport/Document de Voyage perdu ou volé',
          es: 'Pérdida o robo de Pasaporte/Documento de Viaje Número de',
          de: 'Verlorene oder gestohlene Reisepass/Travel Document Number',
          it: 'Smarrimento o furto del Passaporto/Documento di Viaggio in Numero',
        },
        extra: {
          en: 'Please check if you do not know',
          fr: 'Veuillez cocher la case si vous ne savez pas',
          es: 'Por favor, compruebe si usted no sabe',
          de: 'Bitte prüfen Sie, ob Sie nicht wissen,',
          it: 'Si prega di controllare se non si conosce',
        },
      },
      country: {
        en: 'Country/Authority that Issued Passport/Travel Document',
        fr: "Pays/de l'Autorité qui a Délivré le Passeport ou Document de Voyage",
        es: 'País o de la Autoridad que Emitió el Pasaporte/Documento de Viaje',
        de: 'Land/Behörde Ausgestellten Reisepass/Reisedokument',
        it: 'Paese/Autorità che ha Emesso il Passaporto/Documento di Viaggio',
      },
      explain: {
        en: 'Explain',
        fr: 'Expliquer',
        es: 'Explicar',
        de: 'Erklären',
        it: 'Spiegare',
      },
    },
    other_relatives: {
      surname: {
        en: 'First Name',
        fr: 'Prénom',
        es: 'Primer Nombre',
        de: 'Vorname',
        it: 'Nome',
      },
      given_name: {
        en: 'Last Name',
        fr: 'Nom De Famille',
        es: 'Apellido',
        de: 'Nachname',
        it: 'Cognome',
      },
      relationship: {
        en: 'Relationship to you',
        fr: 'Relation pour vous',
        es: 'Relación para que usted',
        de: 'Beziehung zu Ihnen',
        it: 'Rapporto di parentela',
      },
      status: {
        en: 'Immigration Status',
        fr: "Statut d'Immigration",
        es: 'Estado De Inmigración',
        de: 'Einwanderung Status',
        it: 'Lo Status Di Immigrazione',
      },
    },
    previous_visits: {
      date: {
        en: 'Date of arrival (last visit to the US)',
        fr: "Date d'arrivée (dernière visite aux États-Unis)",
        es: 'Fecha de llegada (última visita a los estados unidos)',
        de: 'Datum der Ankunft (Letzte Besuch in den USA)',
        it: 'Data di arrivo (a NOI)',
      },
      length_of_stay: {
        period: {
          label: {
            en: 'Length of stay',
            fr: 'Durée du séjour',
            es: 'La duración de la estancia',
            de: 'Länge des Aufenthalts',
            it: 'La durata del soggiorno',
          },
          extra: {
            en: '0 of 3 max characters',
            fr: '0 de 3 caractères max',
            es: '0 de 3 máximo de caracteres',
            de: '0 3 max Zeichen',
            it: '0 di 3 caratteri max',
          },
        },
        unit: {
          en: 'Please Specify',
          fr: 'Veuillez Spécifier',
          es: 'Por Favor Especificar',
          de: 'Bitte Geben Sie',
          it: 'Si Prega Di Specificare',
        },
      },
    },
    social_media_array: {
      platform: {
        en: 'Social Media Provider/Platform',
        fr: 'Fournisseur/Plate-Forme de Médias Sociaux',
        es: 'Medios De Comunicación Social Del Proveedor/De La Plataforma',
        de: 'Social-Media-Anbieter/Plattform',
        it: 'Social Media Provider/Piattaforma',
      },
      identifier: {
        label: {
          en: 'Social Media Identifier',
          fr: 'Identifiant Média Social',
          es: 'Los Medios Sociales Identificador',
          de: 'Social Media Identifier',
          it: 'Social Media Identificatore',
        },
        extra: {
          en: 'Enter the username or handle you have used on that platform. Please do not provide your passwords.',
          fr: "Entrez le nom d'utilisateur ou du pseudonyme que vous avez utilisé sur cette plate-forme. S'il vous plaît ne donnez pas votre mot de passe.",
          es: 'Introduzca el nombre de usuario o identificador se han utilizado en la plataforma. Por favor, no proporcionar sus contraseñas.',
          de: 'Geben Sie den Benutzernamen oder einen Griff, den Sie benutzt haben auf, der Plattform. Bitte nicht bieten Sie Ihre Passwörter.',
          it: 'Immettere il nome utente o la maniglia di aver usato su quella piattaforma. Si prega di non fornire la tua password.',
        },
      },
    },
    travellers: {
      surname: {
        en: 'Given Name (First Name)',
        fr: 'Prénom(s)',
        es: 'Nombre (Primer Nombre)',
        de: 'Vorname (First Name)',
        it: 'Nome ()',
      },
      given_name: {
        en: 'Surname (Last Name)',
        fr: 'Nom De Famille',
        es: 'Apellido (Apellido)',
        de: 'Familienname (Last Name)',
        it: 'Cognome (Last Name)',
      },
      relationship: {
        en: 'Relationship to you',
        fr: 'Relation pour vous',
        es: 'Relación para que usted',
        de: 'Beziehung zu Ihnen',
        it: 'Rapporto di parentela',
      },
    },
  },
  statement: {
    line_1: {
      en: 'Public reporting burden for this collection of information is estimated to average 90 minutes per response, including time required for searching existing data sources, gathering the necessary documentation, providing the information and/or documents required, and reviewing the final collection. You do not have to supply this information unless this collection displays a currently valid OMB control number. If you have comments on the accuracy of this burden estimate and/or recommendations for reducing it, please send them to: PRA_BurdenComments@state.gov',
      fr: "La charge de déclaration publique pour cette collecte d'informations est estimée à 90 minutes en moyenne par réponse, y compris le temps nécessaire pour rechercher les sources de données existantes, rassembler la documentation nécessaire, fournir les informations et / ou les documents requis et examiner la collecte finale. Vous n'êtes pas obligé de fournir ces informations, sauf si cette collection affiche un numéro de contrôle OMB actuellement valide. Si vous avez des commentaires sur l'exactitude de cette estimation de la charge et / ou des recommandations pour la réduire, veuillez les envoyer à: PRA_BurdenComments@state.gov",
      es: 'Se estima que la carga de informes públicos para esta recopilación de información promedia 90 minutos por respuesta, incluido el tiempo necesario para buscar fuentes de datos existentes, recopilar la documentación necesaria, proporcionar la información y / o documentos requeridos y revisar la recopilación final. No es necesario que proporcione esta información a menos que esta colección muestre un número de control OMB válido actualmente. Si tiene comentarios sobre la precisión de esta estimación de carga y / o recomendaciones para reducirla, envíelos a: PRA_BurdenComments@state.gov',
      de: 'Der Aufwand für die öffentliche Berichterstattung für diese Sammlung von Informationen wird auf durchschnittlich 90 Minuten pro Antwort geschätzt, einschließlich der Zeit, die erforderlich ist, um vorhandene Datenquellen zu durchsuchen, die erforderlichen Unterlagen zu sammeln, die erforderlichen Informationen und / oder Dokumente bereitzustellen und die endgültige Sammlung zu überprüfen. Sie müssen diese Informationen nur angeben, wenn in dieser Sammlung eine aktuell gültige OMB-Kontrollnummer angezeigt wird. Wenn Sie Kommentare zur Genauigkeit dieser Belastungsschätzung und / oder Empfehlungen zur Reduzierung dieser Belastung haben, senden Sie diese bitte an: PRA_BurdenComments@state.gov',
      it: "L'onere di rendicontazione pubblica per questa raccolta di informazioni è stimato in media di 90 minuti per risposta, compreso il tempo necessario per la ricerca delle fonti di dati esistenti, la raccolta della documentazione necessaria, la fornitura delle informazioni e / o dei documenti richiesti e la revisione della raccolta finale. Non è necessario fornire queste informazioni a meno che questa raccolta non visualizzi un numero di controllo OMB attualmente valido. Se hai commenti sull'accuratezza di questa stima dell'onere e / o consigli per ridurlo, ti preghiamo di inviarli a: PRA_BurdenComments@state.go",
    },
    line_2: {
      en: 'Confidentiality Statement',
      fr: 'DÉCLARATION DE confidentialité',
      es: 'Declaración de confidencialidad',
      de: 'Vertraulichkeitserklärung',
      it: 'Dichiarazione riservata'
    },
    line_3: {
      en: 'The information asked for on this form is requested pursuant to Section 222 of the Immigration and Nationality Act. INA Section 222(f) provides that the records of the Department of State and of diplomatic and consular offices of the United States pertaining to the issuance and refusal of visas or permits to enter the United States shall be considered confidential and shall be used only for the formulation, amendment, administration, or enforcement of the immigration, nationality, and other laws of the United States. Certified copies of such records may be made available to a court provided the court certifies that the information contained in such records is needed in a case pending before the court.',
      fr: "Les informations demandées sur ce formulaire sont demandées conformément à l'article 222 de la loi sur l'immigration et la nationalité. L'article 222 f) de l'INA prévoit que les dossiers du Département d'État et des bureaux diplomatiques et consulaires des États-Unis relatifs à la délivrance et à la le refus de visas ou de permis d'entrer aux États-Unis sera considéré comme confidentiel et ne sera utilisé que pour la formulation, la modification, l'administration ou l'application des lois sur l'immigration, la nationalité et d'autres lois des États-Unis. Des copies certifiées conformes de ces dossiers peuvent être mises à la disposition d'un tribunal à condition que le tribunal certifie que les informations contenues dans ces registres sont nécessaires dans une affaire pendante devant le tribunal.",
      es: 'La información solicitada en este formulario se solicita de conformidad con la Sección 222 de la Ley de Inmigración y Nacionalidad. La Sección 222 (f) de la INA establece que los registros del Departamento de Estado y de las oficinas diplomáticas y consulares de los Estados Unidos relacionados con la emisión y denegación de visas o permisos para ingresar a los Estados Unidos se considerarán confidenciales y se utilizarán solo para la formulación, enmienda, administración o aplicación de las leyes de inmigración, nacionalidad y otras leyes de los Estados Unidos. Las copias certificadas de dichos registros pueden estar disponibles para un tribunal siempre que el tribunal certifique que la información contenida en dichos registros es necesaria en un caso pendiente ante el tribunal.',
      de: 'Die auf diesem Formular angeforderten Informationen werden gemäß Abschnitt 222 des Einwanderungs- und Staatsangehörigkeitsgesetzes angefordert. INA-Abschnitt 222 (f) sieht vor, dass die Aufzeichnungen des Außenministeriums sowie der diplomatischen und konsularischen Ämter der Vereinigten Staaten in Bezug auf die Ausstellung und Die Verweigerung von Visa oder Genehmigungen zur Einreise in die Vereinigten Staaten gilt als vertraulich und darf nur zur Formulierung, Änderung, Verwaltung oder Durchsetzung der Einwanderungs-, Staatsangehörigkeits- und anderer Gesetze der Vereinigten Staaten verwendet werden. Beglaubigte Kopien solcher Aufzeichnungen können einem Gericht zur Verfügung gestellt werden, sofern das Gericht bestätigt, dass die in diesen Aufzeichnungen enthaltenen Informationen in einem beim Gericht anhängigen Fall benötigt werden.',
      it: "Le informazioni richieste in questo modulo sono richieste ai sensi della Sezione 222 dell'Immigration and Nationality Act. La sezione 222 (f) INA prevede che i registri del Dipartimento di Stato e degli uffici diplomatici e consolari degli Stati Uniti relativi all'emissione e il rifiuto di visti o permessi di ingresso negli Stati Uniti sarà considerato riservato e sarà utilizzato solo per la formulazione, la modifica, l'amministrazione o l'applicazione delle leggi sull'immigrazione, la nazionalità e altre leggi degli Stati Uniti. Copie certificate di tali documenti possono essere messe a disposizione di un tribunale a condizione che il tribunale attesti che le informazioni contenute in tali documenti sono necessarie in un caso pendente dinanzi al tribunale."
    },
  },
  welcome: {
    how_to_apply: {
      title: {
        en: 'How to Apply?',
        fr: 'Comment Appliquer?',
        es: 'Cómo Aplicar ?',
        de: 'Wie bewerbe ich mich?',
        it: 'Come Applicare?',
        ar: 'كيفية التقديم؟',
        zh: '怎样申请？',
        jp: '適用する方法？',
        ko: '신청 방법?',
        pt: 'Como aplicar?',
        he: 'איך ליישם?',
        ru: 'Как применить?',
        nl: 'Hoe solliciteren?',
        bn: 'কিভাবে আবেদন করতে হবে?',
        hi: 'आवेदन कैसे करें?',
      },
      first_prev: {
        en: '1. Complete the ',
        fr: '1. Remplissez la Demande Électronique ',
        es: '1. Complete la Solicitud Electrónica ',
        de: '1. Füllen Sie den Elektronischen ',
        it: "1. Completa l'Applicazione Elettronica "
      },
      first_back: {
        en: ' Electronic Application and make your payment.',
        fr: ' et effectuez votre paiement.',
        es: ' y realice su pago.',
        de: '-Antrag aus und leisten Sie Ihre Zahlung.',
        it: ' ed effettua il pagamento.'
      },
      second: {
        en: '2. Once your application is submitted, you will receive by email your DS-160 confirmation page with the instructions.',
        fr: '2. Une fois votre demande soumise, vous recevrez par e-mail votre page de confirmation DS-160 avec les instructions.',
        es: "2. Una vez que se envíe su solicitud, recibirá por correo electrónico su página de confirmación DS-160 con las instrucciones.",
        de: '2. Sobald Ihre Bewerbung eingereicht wurde, erhalten Sie per E-Mail Ihre DS-160-Bestätigungsseite mit den Anweisungen.',
        it: '2. Una volta inviata la domanda, riceverai via e-mail la pagina di conferma del DS-160 con le istruzioni.',
        ar: '2. بمجرد تقديم طلبك ، ستتلقى عبر البريد الإلكتروني صفحة تأكيد النموذج DS-160 تحتوي على التعليمات.',
        bn: '2. আপনার আবেদন জমা দেওয়ার পরে, আপনি নির্দেশাবলীর সাহায্যে আপনার ডিএস-160 নিশ্চিতকরণ পৃষ্ঠা ইমেলের মাধ্যমে পাবেন।',
        zh: '2.提交申请后，您将通过电子邮件收到DS-160确认页面以及相关说明。',
        nl: '2. Zodra uw aanvraag is ingediend, ontvangt u per e-mail uw DS-160 bevestigingspagina met de instructies.',
        he: '2. לאחר הגשת בקשתך, תקבל בדוא"ל את דף האישור של DS-160 עם ההוראות.',
        ko: '2. 신청서가 제출되면 지침이 포함 된 DS-160 확인 페이지를 이메일로 받게됩니다.',
        jp: '2.申請書が提出されると、DS-160確認ページに手順が記載された電子メールが届きます。',
        ru: '2. После подачи заявки вы получите по электронной почте страницу подтверждения DS-160 с инструкциями.',
        hi: '2. एक बार जब आपका आवेदन जमा हो जाता है, तो आप निर्देशों के साथ अपने DS-160 पुष्टिकरण पृष्ठ को ईमेल द्वारा प्राप्त करेंगे।',
        pt: '2. Assim que sua inscrição for enviada, você receberá por e-mail a página de confirmação do DS-160 com as instruções.',
      },
      third: {
        en: '3. Review specific instructions on the U.S. Embassy or Consulate website of your country and pay the MRV fee accordingly.',
        fr: "3. Consultez les instructions spécifiques sur le site Web de l'ambassade ou du consulat américain de votre pays et payez les frais MRV en conséquence.",
        es: '3. Revise las instrucciones específicas en el sitio web de la Embajada o el Consulado de los EE. UU. De su país y pague la tarifa de MRV correspondiente.',
        de: '3. Lesen Sie die spezifischen Anweisungen auf der Website der US-Botschaft oder des US-Konsulats Ihres Landes und zahlen Sie die MRV entsprechend.',
        it: "3. Rivedi le istruzioni specifiche sul sito web dell'Ambasciata o del Consolato degli Stati Uniti del tuo paese e paga le tasse MRV di conseguenza.",
        ar: '3. راجع التعليمات المحددة على موقع الويب الخاص بالسفارة أو القنصلية الأمريكية لبلدك وادفع رسوم التأشيرة الإلكترونية (MRV) وفقًا لذلك.',
        bn: '3. আপনার দেশের মার্কিন দূতাবাস বা কনস্যুলেট ওয়েবসাইটে সুনির্দিষ্ট নির্দেশনা পর্যালোচনা করুন এবং সেই অনুযায়ী এমআরভি ফি প্রদান করুন।',
        zh: '3.查看您所在国家/地区的美国大使馆或领事馆网站上的特定说明，并相应地支付MRV费用。',
        nl: '3. Bekijk de specifieke instructies op de website van de Amerikaanse ambassade of het consulaat van uw land en betaal dienovereenkomstig de MRV-vergoeding.',
        he: '3. עיין בהוראות ספציפיות באתר השגרירות או הקונסוליה של ארה"ב במדינתך ושלם את דמי ה- MRV בהתאם.',
        ko: '3. 해당 국가의 미국 대사관 또는 영사관 웹 사이트에서 구체적인 지침을 검토하고 그에 따라 MRV 수수료를 지불합니다.',
        jp: '3.お住まいの国の米国大使館または領事館のウェブサイトで具体的な手順を確認し、それに応じてMRV料金を支払います。',
        ru: '3. Ознакомьтесь с конкретными инструкциями на веб-сайте посольства или консульства США в вашей стране и соответствующим образом оплатите сборы MRV.',
        hi: '3. अपने देश की अमेरिकी दूतावास या वाणिज्य दूतावास की वेबसाइट पर विशिष्ट निर्देशों की समीक्षा करें और तदनुसार एमआरवी शुल्क का भुगतान करें।',
        pt: '3. Revise as instruções específicas no site da Embaixada ou Consulado dos EUA em seu país e pague a taxa MRV de acordo.',
      },
      fourth: {
        en: '4. Schedule your visa interview appointment.',
        fr: '4. Planifiez votre rendez-vous pour un entretien de visa.',
        es: '4. Programe su cita de entrevista de visa.',
        de: '4. Planen Sie Ihren Termin für ein Visuminterview.',
        it: "4. Pianifica l'appuntamento per il colloquio con il visto.",
        ar: '4. حدد موعد مقابلة التأشيرة.',
        bn: '4. আপনার ভিসার সাক্ষাত্কারের অ্যাপয়েন্টমেন্ট নির্ধারণ করুন।',
        zh: '4.安排您的签证面试预约。',
        nl: '4. Maak een afspraak voor uw visuminterview.',
        he: '4. קבעו פגישה לראיון הוויזה שלכם.',
        ko: '4. 비자 인터뷰 약속을 잡으십시오.',
        jp: '4.ビザ面接の予約をスケジュールします。',
        ru: '4. Запишитесь на собеседование для получения визы.',
        hi: '4. अपने वीज़ा साक्षात्कार नियुक्ति को शेड्यूल करें।',
        pt: '4. Agende sua entrevista de visto.',
      },
    }, 
    documents: {      
      title: {
        en: 'You should have the following documents available while you complete your DS-160:',
        fr: 'Vous devez disposer des documents suivants pendant que vous remplissez votre DS-160:',
        es: 'Debe tener los siguientes documentos disponibles mientras completa su DS-160:',
        de: 'Während Sie Ihren DS-160 fertigstellen, sollten die folgenden Dokumente verfügbar sein:',
        it: 'Dovresti avere i seguenti documenti disponibili mentre completi DS-160:',
        ar: 'يجب أن تتوفر لديك المستندات التالية أثناء إكمال النموذج DS-160:',
        bn: 'আপনি ডিএস-160 সম্পূর্ণ করার সময় আপনার নিম্নলিখিত নথিগুলি থাকা উচিত:',
        zh: '完成DS-160时，您应该具有以下文档：',
        nl: 'U dient de volgende documenten bij de hand te hebben terwijl u uw DS-160 voltooit:',
        he: 'אתה צריך שיהיו לך את המסמכים הבאים בזמן השלמת ה- DS-160:',
        ko: 'DS-160을 작성하는 동안 다음 문서를 사용할 수 있어야합니다.',
        jp: 'DS-160を完成させる間、次のドキュメントを利用できるはずです。',
        ru: 'При заполнении формы DS-160 у вас должны быть следующие документы:',
        hi: 'अपने DS-160 को पूरा करते समय आपके पास निम्नलिखित दस्तावेज उपलब्ध होने चाहिए:',
        pt: 'Você deve ter os seguintes documentos disponíveis enquanto completa seu DS-160:',
      },
      first: {
        en: 'Passport',
        fr: 'Passeport',
        es: 'Passport',
        de: 'Reisepass',
        it: 'Passaporto',
        ar: 'جواز سفر',
        bn: 'পাসপোর্ট',
        zh: '护照',
        nl: 'Paspoort',
        he: 'דַרכּוֹן',
        ko: '여권',
        jp: 'パスポート',
        ru: 'Заграничный пасспорт',
        hi: 'पासपोर्ट',
        pt: 'Passaporte',
      },
      second: {
        en: 'Travel itinerary, if you have already made travel arrangements.',
        fr: 'Itinéraire de voyage, si vous avez déjà organisé votre voyage.',
        es: 'Itinerario de viaje, si ya ha hecho los arreglos de viaje.',
        de: 'Reiseroute, wenn Sie bereits Reisevorbereitungen getroffen haben.',
        it: 'Itinerario di viaggio, se hai già preso accordi sul viaggio.',
        ar: 'خط سير الرحلة ، إذا كنت قد قمت بالفعل بترتيبات السفر.',
        bn: 'ভ্রমণ ভ্রমণ ভ্রমণ, যদি আপনি ইতিমধ্যে ভ্রমণের ব্যবস্থা করে রেখেছেন।',
        zh: '行程安排（如果已安排行程）。',
        nl: 'Reisschema, als u al reisarrangementen heeft gemaakt.',
        he: 'מסלול נסיעה, אם כבר ערכתם סידורי נסיעה.',
        ko: '이미 여행을 준비한 경우 여행 일정표.',
        jp: 'すでに旅行の手配をしている場合は、旅行の旅程。',
        ru: 'Маршрут путешествия, если вы уже договорились о поездке.',
        hi: 'यात्रा कार्यक्रम, यदि आप पहले से ही यात्रा की व्यवस्था कर चुके हैं।',
        pt: 'Itinerário de viagem, se você já tiver feito planos de viagem.',
      },
      third: {
        en: 'Dates of your last five visits or trips to the United States, if you have previously travelled to the United States. You may also be asked for your international travel history for the past five years.',
        fr: 'Dates de vos cinq dernières visites ou voyages aux États-Unis, si vous avez déjà voyagé aux États-Unis. On peut également vous demander votre historique de voyages internationaux au cours des cinq dernières années.',
        es: 'Fechas de sus últimas cinco visitas o viajes a los Estados Unidos, si ha viajado previamente a los Estados Unidos. También es posible que se le solicite su historial de viajes internacionales durante los últimos cinco años.',
        de: 'Datum Ihrer letzten fünf Besuche oder Reisen in die USA, wenn Sie zuvor in die USA gereist sind. Möglicherweise werden Sie auch nach Ihrem internationalen Reiseverlauf der letzten fünf Jahre gefragt.',
        it: 'Date delle tue ultime cinque visite o viaggi negli Stati Uniti, se hai già viaggiato negli Stati Uniti. È possibile che ti venga richiesta la cronologia dei tuoi viaggi internazionali negli ultimi cinque anni.',
        ar: 'تواريخ آخر خمس زيارات أو رحلات إلى الولايات المتحدة ، إذا كنت قد سافرت سابقًا إلى الولايات المتحدة. قد يُطلب منك أيضًا تاريخ سفرك الدولي خلال السنوات الخمس الماضية.',
        bn: 'আপনি যদি আগে যুক্তরাষ্ট্রে ভ্রমণ করেছেন তবে আপনার সর্বশেষ পাঁচটি দর্শন বা মার্কিন যুক্তরাষ্ট্রে ভ্রমণের তারিখ। আপনাকে গত পাঁচ বছর ধরে আন্তর্জাতিক ভ্রমণ ইতিহাস জিজ্ঞাসা করা যেতে পারে।',
        zh: '如果您以前曾去过美国，那么最近五次访问或旅行的日期。可能还会要求您提供过去五年的国际旅行历史记录。',
        nl: 'Data van uw laatste vijf bezoeken of reizen naar de Verenigde Staten, als u eerder naar de Verenigde Staten bent gereisd. Mogelijk wordt u gevraagd naar uw internationale reisgeschiedenis van de afgelopen vijf jaar.',
        he: 'תאריכי חמשת הביקורים האחרונים שלך או טיולים בארצות הברית, אם נסעת בעבר לארצות הברית. יתכן שתתבקש גם להיסטוריית הטיולים הבינלאומית שלך בחמש השנים האחרונות.',
        ko: '이전에 미국을 여행 한 적이있는 경우 최근 5 번의 미국 방문 또는 미국 여행 날짜. 또한 지난 5 년 동안의 해외 여행 이력을 물어볼 수도 있습니다.',
        jp: '以前に米国に旅行したことがある場合は、過去5回の米国への訪問または旅行の日付。また、過去5年間の海外旅行歴を尋ねられる場合があります。',
        ru: 'Даты ваших последних пяти посещений или поездок в Соединенные Штаты, если вы ранее были в Соединенных Штатах. Вас также могут попросить рассказать о ваших международных поездках за последние пять лет.',
        hi: 'यदि आप पहले संयुक्त राज्य की यात्रा कर चुके हैं, तो आपकी पिछली पाँच यात्राओं या संयुक्त राज्य अमेरिका की यात्राओं की तारीखें। आपको पिछले पांच वर्षों के लिए अपने अंतर्राष्ट्रीय यात्रा इतिहास के लिए भी कहा जा सकता है।',
        pt: 'Datas das suas últimas cinco visitas ou viagens aos Estados Unidos, se você já tiver viajado para os Estados Unidos. Você também pode ser questionado sobre seu histórico de viagens internacionais nos últimos cinco anos.',
      },
      fourth: {
        en: 'Resume or Curriculum Vitae - You may be required to provide information about your current and previous education and work history.',
        fr: 'Résumé ou Curriculum Vitae - Vous devrez peut-être fournir des informations sur votre formation actuelle et précédente et vos antécédents professionnels.',
        es: 'Currículum Vitae o Curriculum Vitae: es posible que se le solicite que proporcione información sobre su educación y antecedentes laborales actuales y anteriores.',
        de: 'Lebenslauf oder Lebenslauf - Möglicherweise müssen Sie Angaben zu Ihrer aktuellen und früheren Ausbildung und Arbeitserfahrung machen.',
        it: 'Curriculum vitae o curriculum vitae - Potrebbe esserti richiesto di fornire informazioni sulla tua attuale e precedente istruzione e storia lavorativa.',
        ar: 'السيرة الذاتية أو السيرة الذاتية - قد يُطلب منك تقديم معلومات حول تاريخك التعليمي والعمل الحالي والسابق.',
        bn: 'পুনঃসূচনা বা পাঠ্যক্রম ভিটা - আপনার আপনার বর্তমান এবং পূর্ববর্তী শিক্ষা এবং কাজের ইতিহাস সম্পর্কে তথ্য সরবরাহ করার প্রয়োজন হতে পারে।',
        zh: '简历或简历-您可能需要提供有关当前和以前的教育和工作经历的信息。',
        nl: 'CV of Curriculum Vitae - Mogelijk moet u informatie verstrekken over uw huidige en eerdere opleiding en werkgeschiedenis.',
        he: 'קורות חיים או קורות חיים - יתכן שתידרש לספק מידע על היסטוריית ההשכלה והעבודה הנוכחית והקודמת שלך.',
        ko: '이력서 또는 이력서-현재 및 이전 교육 및 직장 이력에 대한 정보를 제공해야 할 수 있습니다.',
        jp: '履歴書または履歴書-現在および過去の教育および職歴に関する情報の提供が必要になる場合があります。',
        ru: 'Резюме или биографические данные - от вас могут потребовать предоставить информацию о вашем текущем и предыдущем образовании и истории работы.',
        hi: 'रिज्यूम या करिकुलम विटे - आपको अपनी वर्तमान और पिछली शिक्षा और कार्य इतिहास के बारे में जानकारी प्रदान करने की आवश्यकता हो सकती है।',
        pt: 'Currículo ou Curriculum Vitae - pode ser necessário fornecer informações sobre sua educação atual e anterior e histórico de trabalho.',
      },
      fifth: {
        en: 'Other Information - Some applicants, depending on the intended purpose of travel, will be asked to provide additional information when completing the DS-160.',
        fr: 'Autres informations - Certains candidats, en fonction du but du voyage, seront invités à fournir des informations supplémentaires lors de la rédaction du DS-160.',
        es: 'Otra información - A algunos solicitantes, dependiendo del propósito del viaje, se les pedirá que proporcionen información adicional al completar el DS-160.',
        de: 'Weitere Informationen - Je nach dem beabsichtigten Reisezweck werden einige Antragsteller gebeten, beim Ausfüllen des DS-160 zusätzliche Informationen anzugeben.',
        it: 'Altre informazioni - Ad alcuni candidati, a seconda dello scopo previsto del viaggio, verrà chiesto di fornire ulteriori informazioni al completamento del DS-160.',
        ar: 'معلومات أخرى - سيُطلب من بعض المتقدمين ، اعتمادًا على الغرض المقصود من السفر ، تقديم معلومات إضافية عند إكمال نموذج DS-160.',
        bn: 'অন্যান্য তথ্য - কিছু আবেদনকারী, ভ্রমণের উদ্দেশ্যে উদ্দেশ্য উপর নির্ভর করে, ডিএস-160 সম্পূর্ণ করার সময় অতিরিক্ত তথ্য সরবরাহ করতে বলা হবে।',
        zh: '其他信息-在完成DS-160时，某些申请人会根据旅行的预期目的提供其他信息。',
        nl: 'Overige informatie - Sommige aanvragers zullen, afhankelijk van het beoogde doel van de reis, om aanvullende informatie worden gevraagd bij het invullen van de DS-160.',
        he: 'מידע אחר - חלק מהמועמדים, בהתאם למטרת הנסיעה המיועדת, יתבקשו למסור מידע נוסף בעת השלמת ה- DS-160.',
        ko: '기타 정보-여행 목적에 따라 일부 신청자는 DS-160 작성시 추가 정보를 제공해야합니다.',
        jp: 'その他の情報-旅行の目的に応じて、一部の申請者はDS-160を完了するときに追加情報を提供するように求められます。',
        ru: 'Другая информация - некоторых заявителей, в зависимости от предполагаемой цели поездки, попросят предоставить дополнительную информацию при заполнении формы DS-160.',
        hi: 'अन्य जानकारी - यात्रा के इच्छित उद्देश्य के आधार पर कुछ आवेदकों को DS-160 को पूरा करते समय अतिरिक्त जानकारी प्रदान करने के लिए कहा जाएगा।',
        pt: 'Outras informações - Alguns candidatos, dependendo do propósito da viagem, serão solicitados a fornecer informações adicionais ao preencher o DS-160.',
      },
      sixth: {
        en: 'This Us Visa Appointment Premium Service will cost you $280. This includes the MRV Fee that needs to be paid the Department of State and the DS-160 Application Review.',
        fr: "Ce service premium de rendez-vous de visa américain vous coûtera 280 $. Cela comprend les frais MRV qui doivent être payés par le Département d'État et l'examen de la demande DS-160.",
        es: 'Este servicio premium de cita con nosotros Visa le costará $ 280. Esto incluye la tarifa de MRV que debe pagarse al Departamento de Estado y la revisión de la solicitud DS-160.',
        de: 'Dieser Premium-Service für US-Visa-Termine kostet Sie 280 USD. Dies beinhaltet die MRV-Gebühr, die an das Außenministerium gezahlt werden muss, und die DS-160-Antragsprüfung.',
        it: "Questo servizio premium di appuntamenti Visa per gli Stati Uniti ti costerà $ 280. Ciò include la Commissione MRV che deve essere pagata dal Dipartimento di Stato e la Revisione dell'applicazione DS-160.",
        ar: 'ستكلفك الخدمة المميزة لمواعيد تأشيرة الولايات المتحدة 280 دولارًا. يتضمن ذلك رسوم التأشيرة الإلكترونية (MRV) التي يتعين دفعها لوزارة الخارجية ومراجعة الطلب DS-160.',
        bn: 'এই আমাদের ভিসা অ্যাপয়েন্টমেন্ট প্রিমিয়াম পরিষেবাটির জন্য আপনার ব্যয় হবে $ 280। এর মধ্যে এমআরভি ফি রয়েছে যা স্টেট ডিপার্টমেন্ট অফ ডিপার্টমেন্ট এবং ডিএস-160 অ্যাপ্লিকেশন রিভিউ প্রদান করতে হবে।',
        zh: '这项美国签证预约高级服务将花费您280美元。其中包括需要向国务院支付的MRV费用和DS-160应用审查。',
        nl: 'Deze Amerikaanse Visa Appointment Premium Service kost u $ 280. Dit omvat de MRV-vergoeding die moet worden betaald aan het Department of State en de DS-160 Application Review.',
        he: 'שירות פרימיום מינוי אשרת ארה"ב זה יעלה לך 280 דולר. זה כולל את דמי ה- MRV שיש לשלם למחלקת המדינה ולסקירת היישומים של DS-160.',
        ko: '이 미국 비자 약속 프리미엄 서비스는 $ 280입니다. 여기에는 국무부와 DS-160 신청서 검토에 지불해야하는 MRV 수수료가 포함됩니다.',
        jp: 'このUsVisa Appointment PremiumServiceの費用は280ドルです。これには、国務省およびDS-160アプリケーションレビューに支払う必要のあるMRV料金が含まれます。',
        ru: 'Эта премиальная услуга по записи на визу в США обойдется вам в 280 долларов. Сюда входит плата за MRV, которую необходимо уплатить Государственному департаменту, и рассмотрение заявки DS-160.',
        hi: 'यह हमें वीजा नियुक्ति प्रीमियम सेवा आपको $ 280 का खर्च देगी। इसमें MRV शुल्क शामिल है जिसे राज्य विभाग और DS-160 आवेदन समीक्षा की आवश्यकता है।',
        pt: 'Este serviço premium de nomeação do Us Visa custará $ 280. Isso inclui a taxa MRV que deve ser paga ao Departamento de Estado e a Análise de inscrição DS-160.',
      }
    },
    information: {
      title: {
        en: 'Some applicants will need to have additional information and documents handy while completing the DS-160:',
        fr: 'Certains candidats devront avoir des informations et des documents supplémentaires à portée de main lors de la rédaction du DS-160:',
        es: 'Algunos solicitantes deberán tener a mano información y documentos adicionales mientras completan el DS-160:',
        de: 'Einige Antragsteller benötigen zusätzliche Informationen und Dokumente, um das DS-160 ausfüllen zu können:',
        it: 'Alcuni candidati dovranno avere a portata di mano informazioni e documenti aggiuntivi durante il completamento del DS-160:',
        ar: 'سيحتاج بعض المتقدمين إلى الحصول على معلومات ووثائق إضافية في متناول اليد أثناء إكمال النموذج DS-160:',
        bn: 'কিছু আবেদনকারীদের ডিএস-160 সমাপ্ত করার সময় অতিরিক্ত তথ্য এবং নথিপত্রগুলি হাতে রাখতে হবে:',
        zh: '在完成DS-160时，一些申请人需要随身携带其他信息和文件：',
        nl: 'Sommige aanvragers hebben aanvullende informatie en documenten nodig bij het invullen van de DS-160:',
        he: 'חלק מהמועמדים יצטרכו להחזיק מידע ומסמכים נוספים בעת השלמת ה- DS-160:',
        ko: '일부 지원자는 DS-160을 작성하는 동안 추가 정보와 문서가 필요합니다.',
        jp: '一部の申請者は、DS-160を完了する際に、追加情報とドキュメントを手元に用意する必要があります。',
        ru: 'Некоторым заявителям потребуется дополнительная информация и документы при заполнении формы DS-160:',
        hi: 'DS-160 को पूरा करते समय कुछ आवेदकों को अतिरिक्त जानकारी और दस्तावेज़ों की आवश्यकता होगी:',
        pt: 'Alguns candidatos precisarão de informações e documentos adicionais à mão ao preencher o DS-160:',
      },
      first: {
        en: 'Students and Exchange Visitors (F, J, and M): You will be asked to provide your SEVIS ID, which is printed on your I-20 or DS-2019, so you should have this form available when completing your DS-160. You also will be asked to provide the address of the school/program at which you intend to study. This information should also be on your I-20 or DS-2019 form.',
        fr: "Étudiants et visiteurs d'échange (F, J et M): Il vous sera demandé de fournir votre ID SEVIS, qui est imprimé sur votre I-20 ou DS-2019, vous devriez donc l'avoir formulaire disponible lorsque vous remplissez votre DS-160. Il vous sera également demandé de fournir l'adresse de l'école / du programme dans lequel vous avez l'intention d'étudier. Ces informations doivent également figurer sur votre formulaire I-20 ou DS-2019.",
        es: 'Estudiantes y visitantes de intercambio (F, J y M): se le pedirá que proporcione su identificación SEVIS, que está impresa en su I-20 o DS-2019, por lo que debe tener esto formulario disponible al completar su DS-160. También se le pedirá que proporcione la dirección de la escuela / programa en el que piensa estudiar. Esta información también debe estar en su formulario I-20 o DS-2019.',
        de: 'Studenten und Austauschbesucher (F, J und M): Sie werden gebeten, Ihre SEVIS-ID anzugeben, die auf Ihrer I-20 oder DS-2019 gedruckt ist. Sie sollten diese also haben Formular verfügbar, wenn Sie Ihren DS-160 ausfüllen. Sie werden auch gebeten, die Adresse der Schule / des Programms anzugeben, an der / dem Sie studieren möchten. Diese Informationen sollten sich auch auf Ihrem I-20- oder DS-2019-Formular befinden.',
        it: "Studenti e visitatori di scambio (F, J e M): ti verrà chiesto di fornire il tuo ID SEVIS, che è stampato sul tuo I-20 o DS-2019, quindi dovresti avere questo modulo disponibile al completamento del DS-160. Ti verrà anche chiesto di fornire l'indirizzo della scuola / programma in cui intendi studiare. Queste informazioni dovrebbero anche essere sul tuo modulo I-20 o DS-2019.",
        ar: 'الطلاب وزوار التبادل (F و J و M): سيُطلب منك تقديم معرف SEVIS الخاص بك ، والذي تتم طباعته على I-20 أو DS-2019 ، لذلك يجب أن يكون هذا النموذج متاحًا عند إكمال DS-160. سيُطلب منك أيضًا تقديم عنوان المدرسة / البرنامج الذي تنوي الدراسة فيه. يجب أن تكون هذه المعلومات أيضًا في نموذج I-20 أو DS-2019 الخاص بك.',
        bn: 'শিক্ষার্থী এবং এক্সচেঞ্জ ভিজিটর (এফ, জে, এবং এম): আপনাকে আপনার সেভিস আইডি সরবরাহ করতে বলা হবে, যা আপনার আই -20 বা ডিএস -2018 এ মুদ্রিত রয়েছে, সুতরাং আপনার ডিএস-160 সম্পূর্ণ করার সময় আপনার এই ফর্মটি পাওয়া উচিত। আপনি যে স্কুল / প্রোগ্রামের উপর পড়াশোনা করতে চান তার ঠিকানা প্রদান করতেও বলা হবে। এই তথ্যটি আপনার আই -20 বা ডিএস-2019 ফর্মে থাকা উচিত।',
        zh: '学生和交流访问者（F，J和M）：系统将要求您提供SEVIS ID，该ID打印在I-20或DS-2019上，因此在填写DS-160时应提供此表格。您还将被要求提供您打算就读的学校/课程的地址。此信息也应该在您的I-20或DS-2019表格上。',
        nl: 'Studenten en uitwisselingsbezoekers (F, J en M): u wordt gevraagd uw SEVIS-ID op te geven, die op uw I-20 of DS-2019 is afgedrukt, dus u moet dit formulier bij de hand hebben wanneer u uw DS-160 invult. U wordt ook gevraagd om het adres op te geven van de school / opleiding waar u wilt studeren. Deze informatie moet ook op uw I-20- of DS-2019-formulier staan.',
        he: 'סטודנטים ומבקרים חילופיים (F, J ו- M): תתבקש לספק את מזהה ה- SEVIS שלך, המודפס ב- I-20 או ב- DS-2019 שלך, כך שיהיה לך טופס זה זמין בעת ​​השלמת ה- DS-160 שלך. כמו כן תתבקש לספק את כתובת בית הספר / התוכנית בה אתה מתכוון ללמוד. מידע זה צריך להיות גם בטופס I-20 או DS-2019 שלך.',
        ko: '학생 및 교환 방문자 (F, J 및 M) : I-20 또는 DS-2019에 인쇄 된 SEVIS ID를 제공해야하므로 DS-160을 작성할 때이 양식을 사용할 수 있어야합니다. 또한 공부하려는 학교 / 프로그램의 주소를 제공해야합니다. 이 정보는 I-20 또는 DS-2019 양식에도 있어야합니다.',
        jp: '学生および交換訪問者（F、J、およびM）：I-20またはDS-2019に印刷されているSEVIS IDを提供するように求められるため、DS-160に記入するときにこのフォームを用意しておく必要があります。また、勉強する予定の学校/プログラムの住所を入力するように求められます。この情報は、I-20またはDS-2019フォームにも記載されている必要があります。',
        ru: 'Студенты и посетители по обмену (F, J и M): вас попросят предоставить свой SEVIS ID, который напечатан на вашей I-20 или DS-2019, поэтому вы должны иметь эту форму при заполнении DS-160. Вас также попросят указать адрес школы / программы, в которой вы собираетесь учиться. Эта информация также должна быть в вашей форме I-20 или DS-2019.',
        hi: 'छात्र और विनिमय आगंतुक (एफ, जे, और एम): आपको अपनी एसईवीआईएस आईडी प्रदान करने के लिए कहा जाएगा, जो आपके I-20 या DS-2019 पर मुद्रित है, इसलिए आपके पास यह फॉर्म आपके DS-160 को पूरा करते समय उपलब्ध होना चाहिए। आपको उस स्कूल / कार्यक्रम का पता देने के लिए भी कहा जाएगा जिस पर आप अध्ययन करने का इरादा रखते हैं। यह जानकारी आपके I-20 या DS-2019 फॉर्म पर भी होनी चाहिए।',
        pt: 'Estudantes e visitantes intercambistas (F, J e M): Será solicitado que você forneça sua ID SEVIS, que está impressa em seu I-20 ou DS-2019, portanto, você deve ter este formulário disponível ao preencher seu DS-160. Também será solicitado que você forneça o endereço da escola / programa em que pretende estudar. Essas informações também devem estar em seu formulário I-20 ou DS-2019.',
      },
      second: {
        en: 'Petition-based Temporary Workers (H-1B, H-2, H-3, CW1, L, O, P, R, E2C): You should have a copy of your I-129 available when completing your DS-160.',
        fr: 'Travailleurs temporaires sur pétition (H-1B, H-2, H-3, CW1, L, O, P, R, E2C): Vous devez avoir une copie de votre I-129 disponible lorsque vous complétez votre DS-160.',
        es: 'Trabajadores temporales basados en una petición (H-1B, H-2, H-3, CW1, L, O, P, R, E2C): debe tener una copia de su I-129 disponible al completar su DS-160.',
        de: 'Zeitarbeitskräfte auf Antrag (H-1B, H-2, H-3, KW1, L, O, P, R, E2C): Sie sollten eine Kopie Ihrer I-129 haben verfügbar, wenn Sie Ihren DS-160 vervollständigen.',
        it: 'Lavoratori temporanei basati su petizione (H-1B, H-2, H-3, CW1, L, O, P, R, E2C): dovresti avere una copia del tuo I-129 disponibile al completamento del DS-160.',
        ar: 'العمال المؤقتون القائمون على العريضة (H-1B ، H-2 ، H-3 ، CW1 ، L ، O ، P ، R ، E2C): يجب أن يكون لديك نسخة من نموذج I-129 الخاص بك متاحًا عند إكمال النموذج DS-160.',
        bn: 'পিটিশন-ভিত্তিক অস্থায়ী শ্রমিক (এইচ -1 বি, এইচ -2, এইচ -3, সিডাব্লু 1, এল, ও, পি, আর, ই 2 সি): আপনার ডিএস -160 সম্পূর্ণ করার সময় আপনার আই 129 এর একটি অনুলিপি থাকা উচিত।',
        zh: '基于请愿的临时工（H-1B，H-2，H-3，CW1，L，O，P，R，E2C）：完成DS-160时，您应该拥有I-129的副本。',
        nl: 'Op verzoek gebaseerde uitzendkrachten (H-1B, H-2, H-3, CW1, L, O, P, R, E2C): u dient een kopie van uw I-129 bij de hand te hebben wanneer u uw DS-160 voltooit.',
        he: 'עובדים זמניים מבוססי עצומה (H-1B, H-2, H-3, CW1, L, O, P, R, E2C): אתה צריך שיהיה לך עותק של ה- I-129 שלך בסיום DS-160.',
        ko: '청원 기반 임시 근로자 (H-1B, H-2, H-3, CW1, L, O, P, R, E2C) : DS-160 작성시 I-129 사본이 있어야합니다.',
        jp: '請願ベースの臨時労働者（H-1B、H-2、H-3、CW1、L、O、P、R、E2C）：DS-160を完了するときは、I-129のコピーを用意しておく必要があります。',
        ru: 'Временные работники по петициям (H-1B, H-2, H-3, CW1, L, O, P, R, E2C): у вас должна быть копия формы I-129 при заполнении формы DS-160.',
        hi: 'याचिका-आधारित अस्थायी श्रमिक (एच -1 बी, एच -2, एच -3, सीडब्ल्यू 1, एल, ओ, पी, आर, ई 2 सी): आपके पास अपने डीएस -160 को पूरा करते समय आपके पास आई -112 की एक प्रति उपलब्ध होनी चाहिए।',
        pt: 'Trabalhadores temporários baseados em petição (H-1B, H-2, H-3, CW1, L, O, P, R, E2C): Você deve ter uma cópia de seu I-129 disponível ao preencher seu DS-160.',
      },
      third: {
        en: 'Other Temporary Workers: You will be asked for information about your employer, including the employer’s address, while completing your DS-160.',
        fr: 'Autres travailleurs temporaires: il vous sera demandé des informations sur votre employeur, y compris son adresse, lors de la rédaction de votre DS-160.',
        es: 'Otros trabajadores temporales: Se le pedirá información sobre su empleador, incluida la dirección del empleador, mientras completa su DS-160.',
        de: 'Andere Zeitarbeiter: Sie werden beim Ausfüllen Ihres DS-160 um Informationen zu Ihrem Arbeitgeber gebeten, einschließlich der Adresse des Arbeitgebers.',
        it: "Altri lavoratori temporanei: ti verranno chieste informazioni sul tuo datore di lavoro, incluso l'indirizzo del datore di lavoro, mentre completi DS-160.",
        ar: 'العمال المؤقتون الآخرون: سيُطلب منك معلومات عن صاحب العمل ، بما في ذلك عنوان صاحب العمل ، أثناء استكمال النموذج DS-160.',
        bn: 'অন্যান্য অস্থায়ী কর্মী: আপনার ডিএস-160 সম্পূর্ণ করার সময় আপনাকে নিয়োগকর্তার ঠিকানা সহ আপনার নিয়োগকর্তার সম্পর্কে তথ্য জিজ্ঞাসা করা হবে।',
        zh: '其他临时工：在填写DS-160时，系统会要求您提供有关雇主的信息，包括雇主的地址。',
        nl: 'Andere uitzendkrachten: u wordt om informatie over uw werkgever gevraagd, inclusief het adres van de werkgever, terwijl u uw DS-160 invult.',
        he: 'עובדים זמניים אחרים: תתבקש לקבל מידע על המעסיק שלך, כולל כתובת המעסיק, בעת השלמת ה- DS-160 שלך.',
        ko: '기타 임시 근로자 : DS-160을 작성하는 동안 고용주의 주소를 포함하여 고용주에 대한 정보를 요청하게됩니다.',
        jp: 'その他の臨時労働者：DS-160を完成させる際に、雇用主の住所など、雇用主に関する情報を求められます。',
        ru: 'Другие временные работники: при заполнении формы DS-160 вас попросят предоставить информацию о вашем работодателе, в том числе адрес работодателя.',
        hi: 'अन्य अस्थाई श्रमिक: आपको अपने DS-160 को पूरा करने के दौरान नियोक्ता के पते सहित अपने नियोक्ता के बारे में जानकारी मांगी जाएगी।',
        pt: 'Outros trabalhadores temporários: você será solicitado a fornecer informações sobre seu empregador, incluindo o endereço do empregador, ao preencher seu DS-160.',
      }
    }
  }
}

export default resources
