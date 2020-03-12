const questions = [
    {
        id: 1,
        key: 'had_sex_in_last_five_years',
        translations: {
            'en': 'In the last 5 years, have you had sex at least once?',
            'de': 'Hatten Sie in den letzten 5 Jahren Sex wenigstens ein mal?',
            'pl': 'Czy w ciągu ostatnich 5 lat przynajmniej raz uprawiałaś/-eś seks?',
            'fr': 'Avez-vous eu des relations sexuelles au cours des 5 dernières années?',
            'it': 'Negli ultimi 5 anni hai fatto sesso?',
            'pt': 'Você fez sexo nos últimos 5 anos?',
            'es': '¿Has tenido relaciones sexuales en los últimos 5 años?',
            'ru': 'Вы занимались сексом в последние 5 лет?'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 2,
        key: 'had_sex_no_condom_in_last_five_years',
        translations: {
            'en': 'In the last 5 years have you ever had sex without a condom?',
            'de': 'Haben Sie in den letzten 5 Jahren Sex ohne Kondom gehabt?',
            'pl': 'Czy w ciągu ostatnich 5 lat zdarzyło Ci się uprawiać seks bez prezerwatywy?',
            'fr': 'Au cours des 5 dernières années, as-tu déjà eu un rapport sexuel sans condom?',
            'it': 'Hai mai fatto sesso senza preservativo negli ultimi 5 anni?',
            'pt': 'Nos últimos 5 anos, teve relações sexuais sem preservativo?',
            'es': 'En los últimos 5 años, ¿ha tenido relaciones sexuales sin condón?',
            'ru': 'Занимались ли Вы сексом без презерватива (хотя бы единожды) за последние 5 лет?'
        },
        answers: [
            {
                id: 3,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 4,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            },
            {
                id: 5,
                key: 'dont_remember',
                translations: {
                    'en': 'I don\'t remember',
                    'de': 'Ich erinnere mich nicht',
                    'pl': 'Nie pamiętam',
                    'fr': 'Je ne me souviens plus',
                    'it': 'Non ricordo',
                    'pt': 'Não me lembro',
                    'es': 'No me acuerdo',
                    'ru': 'Я не помню'
                }
            }
        ]
    },
    // TODO: Continue with answers here
    {
        id: 3,
        key: 'how_many_partners_last_five_years',
        translations: {
            'en': 'With how many partners were you sexually active in the last 5 years?',
            'de': 'Mit wie vielen Partnern waren Sie in den letzten 5 Jahren sexuell aktiv?mit einem festen Partner',
            'pl': 'W ciągu ostatnich 5 lat z iloma mniej więcej partnerami/-kami byłaś/-eś aktywna/-ny seksualnie?',
            'fr': 'Au cours des 5 dernières années, avec combien de partenaires as-tu été sexuellement actif(ve)?',
            'it': 'Negli ultimi 5 anni con quante persone hai avuto rapporti sessuali?',
            'pt': 'Com quantos parceiros teve relações sexuais nos últimos 5 anos?',
            'es': '¿Con cuántas parejas fue sexualmente activo en los últimos 5 años?',
            'ru': 'С каким количеством партнеров вы были сексуально активны за последние 5 лет?'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 4,
        key: 'which_sexual_behaviours_last_five_years',
        translations: {
            'en': 'Which sexual behaviors did you have in the last 5 years? (Choose all applicable answers)',
            'de': 'Welches sexuelle Verhalten, haben Sie, während der letzten 5 Jahre ausgeübt? (Wählen Sie alle zutreffenden Antworten aus)',
            'pl': 'Jakie zachowania seksualne podejmowałaś/-eś w ciągu ostatnich 5 lat? (Wybierz te odpowiedzi które uważasz za słuszne)',
            'fr': 'Au cours des 5 dernières années, quels comportements sexuels as-tu adoptés? (Choisis une ou plusieurs réponses)',
            'it': 'Che comportamento sessuale hai avuto negli ultimi 5 anni? (Scegli quante risposte pensi che siano giuste)',
            'pt': 'Que práticas sexuais realizou nos últimos 5 anos? (Escolha todas as opções que se apliquem)',
            'es': '¿Qué comportamientos sexuales tuvo en los últimos 5 años? (Elija todas las respuestas aplicables)',
            'ru': 'Какое сексуальное поведение у Вас было в последние 5 лет? (Выберите все подходящие ответы)'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 5,
        key: 'sex_after_last_five_years',
        translations: {
            'en': 'In the last 5 years, have you ever had sex after:(Choose all applicable answers)',
            'de': 'Hatten Sie in den letzten 5 Jahren Sex unter dem Einfluss von: (Wählen Sie alle zutreffenden Antworten aus)',
            'pl': 'W ciągu ostatnich 5 lat uprawiałaś/-eś seks po: (Wybierz te odpowiedzi, które uważasz za słuszne)',
            'fr': 'Au cours des 5 dernières années, as-tu déjà eu un rapport sexuel après avoir consommé : (Choisis une ou plusieurs réponses)',
            'it': 'Negli ultimi 5 anni hai fatto sesso dopo: (Scegli quante risposte si rivolgono alle tue esperienze)',
            'pt': 'Nos últimos 5 anos, teve relações sexuais depois de consumir: (Escolha todas as opções que se apliquem)',
            'es': 'En los últimos 5 años, ¿ha tenido relaciones sexuales después de: (Elija todas las respuestas aplicables)',
            'ru': 'В последние 5 лет был ли у Вас хоть единожды секс после: (Выберите все подходящие ответы)'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 6,
        key: 'topic_applies_to_everyone',
        translations: {
            'en': 'Do you think that the topic of safe sex applies to everyone?',
            'de': 'Denken Sie, dass das Thema Safer Sex für alle anspricht?',
            'pl': 'Czy uważasz, że temat bezpiecznego seksu dotyczy każdego?',
            'fr': 'Penses-tu que le sujet du « safe sex » concerne tout le monde?',
            'it': 'Pensi che l\'argomento del sesso sicuro riguardi tutti?',
            'pt': 'Considera que sexo seguro é algo a levar em consideração por todos?',
            'es': '¿Cree que el tema del sexo seguro aplica a todos?',
            'ru': 'Как Вы думаете, относится ли тема безопасного секса ко всем?'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 7,
        key: 'tested_stds_last_five_years',
        translations: {
            'en': 'In the last 5 years, have you been tested for STD’s (sexually transmitted diseases like Syphilis, Gonorrhea (The clap), Herpes simplex (HSV1), Hepatitis B, HPV)?',
            'de': 'Wurden Sie in den letzten 5 Jahren auf sexuell übertragbare Krankheiten getestet? (Syphilis, Chlamydien, Tripper, Herpes simplex (HSV1), Hepatitis B, HPV (Papilloma Virus)',
            'pl': 'Czy w ciągu ostatnich 5 lat wykonywałaś/-eś badania w kierunku chorób przenoszonych drogą płciową? (Kiła, Chlamydioza, Rzeżączka, Opryszczka narządów płciowych, WZW B, HPV)',
            'fr': 'Au cours des 5 dernières années, as-tu passé un test de dépistage pour les ITSS (infections transmissibles sexuellement et par le sang)? (syphilis, chlamydia, gonorrhée, voies génitales, hépatite, hpv)',
            'it': 'Hai fatto test per malattie sessualmente trasmesse negli ultimi 5 anni? (sifilide, clamidia, gonorrea, herpes genitale, epatite, hpv)',
            'pt': 'Nos últimos 5 anos, fez análises a DSTs (doenças sexualmente transmissíveis)? (sífilis, clamídia, gonorréia, trato genital, hepatite, hpv)',
            'es': 'En los últimos 5 años, ¿se ha realizado una prueba de detección de enfermedades de transmisión sexual? (Sífilis, clamidia, gonorrea, herpes genital, hepatitis, hpv)',
            'ru': 'Проверялись ли Вы на ЗППП (заболевания, передающиеся половым путем) за последние 5 лет? (сифилис, хламидиоз, гонорея, генитальный герпес, гепатит, ВПЧ)'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 8,
        key: 'tested_hiv_last_five_years',
        translations: {
            'en': 'In the last 5 years, have you been tested for HIV?',
            'de': 'Wurden Sie in den letzten 5 Jahren auf HIV getestet?',
            'pl': 'Czy w ciągu ostatnich 5 lat robiłaś/-eś test na HIV?',
            'fr': 'Au cours des 5 dernières années, as-tu été testé pour le VIH?',
            'it': 'Hai fatto test per l\'HIV negli ultimi 5 anni?',
            'pt': 'Nos últimos 5 anos, fez análises a VIH (Vírus da Imunodeficiência humana)?',
            'es': 'En los últimos 5 años, ¿se ha realizado una prueba de VIH?',
            'ru': 'За последние 5 лет проходили ли вы тестирование на ВИЧ?'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 9,
        key: 'where_knowledge_from',
        translations: {
            'en': 'Where does your knowledge about sexual behaviors and practices come from? (Choose all applicable answers)',
            'de': 'Woher kommt Ihr Wissen über sexuelle Verhaltensweisen und Praktiken? (Wählen Sie alle zutreffenden Antworten aus)',
            'pl': 'Skąd pochodzi twoja wiedza na temat zachowań i praktyk seksualnych? (Wybierz tyle odpowiedzi ile uważasz za słuszne)',
            'fr': 'D’où tires-tu tes connaissances en termes de comportements et pratiques sexuelles? (Choisis une ou plusieurs réponses)',
            'it': 'Da dove viene la tua conoscenza dei comportamenti e delle pratiche sessuali? (Scegli tutte le risposte che riguardano la tua situazione)',
            'pt': 'Onde aprendeu o que sabe sobre comportamentos e práticas sexuais? (Escolha todas as opções que se apliquem)',
            'es': '¿De dónde proviene su conocimiento sobre las conductas y prácticas sexuales?(Elija todas las respuestas aplicables)',
            'ru': 'Откуда Ваши знания о сексуальном поведении и практиках? (Выберите все подходящие ответы)'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 10,
        key: 'what_safe_sex_means',
        translations: {
            'en': 'What "Safe sex" means for you? (Choose all applicable answers)',
            'de': 'Was bedeutet ‘Safer Sex’ für Sie? (Wählen Sie alle zutreffenden Antworten aus)',
            'pl': 'Co oznacza dla Ciebie pojęcie: "Bezpieczny seks"? (Wybierz te odpowiedzi, które uważasz za słuszne) ',
            'fr': 'Que signifie le terme "Safe Sex" pour toi?(Choisis une ou plusieurs réponses)',
            'it': 'Cosa significa "sesso sicuro" per te? (Scegli tutte le risposte che riguardano la tua situazione)',
            'pt': 'O que é, para si, sexo seguro? (Escolha todas as opções que se apliquem)',
            'es': '¿Qué es el sexo seguro? ¿Qué significa esto?(Elija todas las respuestas aplicables)',
            'ru': 'Что для вас означает термин «безопасный секс»? (Выберите все подходящие ответы)'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 11,
        key: 'sex_gender',
        translations: {
            'en': 'Sex/Gender',
            'de': 'Geschlecht / Gender',
            'pl': 'Płeć',
            'fr': 'Sexe/genre',
            'it': 'Sesso',
            'pt': 'Sexo',
            'es': 'Sexo',
            'ru': 'Ваш пол/гендер:'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 12,
        key: 'age_range',
        translations: {
            'en': 'Your age is in the range:',
            'de': 'Ihr Alter liegt im Bereich:',
            'pl': 'Twój wiek mieści się w przedziale:',
            'fr': 'Quel est ton niveau d’éducation?',
            'it': 'Che educazione hai?',
            'pt': 'Qual é a sua idade?',
            'es': 'Tu edad está en el rango:',
            'ru': 'Какое у Вас образование?'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 13,
        key: 'education_level',
        translations: {
            'en': 'What is your education level?',
            'de': 'Was ist Ihr Bildungsstand?',
            'pl': 'Jakie masz wykształcenie?',
            'fr': 'Ta tranche d’âge',
            'it': 'La tua età è nella gamma:',
            'pt': 'Qual é o seu nível de educação?',
            'es': '¿Nivel de educación?',
            'ru': 'Ваш возраст:'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 14,
        key: 'residence_place',
        translations: {
            'en': 'Your place of residence is:',
            'de': 'Ihr Wohnort ist:',
            'pl': 'Twoje miejsce zamieszkania to:',
            'fr': 'Ton lien de residence:',
            'it': 'Il tuo luogo di residenza è:',
            'pt': 'A sua área de residência é…',
            'es': 'Su lugar de residencia es de:',
            'ru': 'Ваше место жительства:'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 15,
        key: 'professional_situation',
        translations: {
            'en': 'What is your professional situation?',
            'de': 'Wie ist Ihre berufliche Situation?',
            'pl': 'Jaka jest Twoja sytuacja zawodowa?',
            'fr': 'Quelle est ta situation professionnelle?',
            'it': 'Qual è la tua situazione professionale?',
            'pt': 'Qual é a sua situação profissional?',
            'es': '¿Cuál es tu situación profesional?',
            'ru': 'Каков Ваш род занятий?'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 16,
        key: 'orientation',
        translations: {
            'en': 'What is your sexual orientation?',
            'de': 'Was ist Ihre sexuelle Orientierung?',
            'pl': 'Jaka jest Twoja orientacja seksualna?',
            'fr': 'Quelle est ton orientation sexuelle?',
            'it': 'Qual è il tuo orientamento sessuale?',
            'pt': 'Qual é a sua orientação sexual?',
            'es': '¿Cuál es tu orientación sexual?',
            'ru': 'Какая Ваша сексуальная ориентация?'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 17,
        key: 'relationship_status',
        translations: {
            'en': 'What is your current relationship status?',
            'de': 'Wie ist Ihr derzeitiger Beziehungsstatus?',
            'pl': 'Jaki jest Twój obecny status związku?',
            'fr': 'Quel est ton statut relationnel présentement?',
            'it': 'Qual è il tuo attuale stato di relazione?',
            'pt': 'Qual o seu estado civil?',
            'es': '¿Cuál es su estado actual de relación?',
            'ru': 'Каков текущий статус Ваших отношений?'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
    {
        id: 18,
        key: 'relationship_situation_last_five_years',
        translations: {
            'en': 'Describing your relationships from the last 5 years and the current situation, they were:',
            'de': 'Beschreiben Sie Ihre Beziehungen aus den letzten 5 Jahren als auch Ihre aktuelle Beziehungssituation:',
            'pl': 'Opisując Twoje związki z ostatnich 5 lat oraz sytuację obecną, były one:',
            'fr': 'Si on parle de tes relations présente ainsi que celles des 5 dernières années, étaient-elles :',
            'it': 'Le tue relazioni negli ultimi 5 anni e la tua situazione attuale, erano:',
            'pt': 'Como descreveria as suas relações nos últimos 5 anos?',
            'es': 'Describiendo sus relaciones de los últimos 5 años y la situación actual, fueron:',
            'ru': 'Описывая Ваши отношения за последние 5 лет (включая текущие), они были:'
        },
        answers: [
            {
                id: 1,
                key: 'yes',
                translations: {
                    'en': 'Yes',
                    'de': 'Ja',
                    'pl': 'Tak',
                    'fr': 'Oui',
                    'it': 'Sì',
                    'pt': 'Sim',
                    'es': 'Sí',
                    'ru': 'Да'
                }
            },
            {
                id: 2,
                key: 'no',
                translations: {
                    'en': 'No',
                    'de': 'Nein',
                    'pl': 'Nie',
                    'fr': 'Non',
                    'it': 'No',
                    'pt': 'Não',
                    'es': 'No',
                    'ru': 'Нет'
                }
            }
        ]
    },
]