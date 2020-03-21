const QUESTIONS = [
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
                id: 6,
                key: 'one',
                translations: {
                    'en': '1',
                    'de': '1',
                    'pl': '1',
                    'fr': '1',
                    'it': '1',
                    'pt': '1',
                    'es': '1',
                    'ru': '1'
                }
            },
            {
                id: 7,
                key: 'two_to_five',
                translations: {
                    'en': '2-5',
                    'de': '2-5',
                    'pl': '2-5',
                    'fr': '2-5',
                    'it': '2-5',
                    'pt': '2-5',
                    'es': '2-5',
                    'ru': '2-5'
                }
            },
            {
                id: 8,
                key: 'six_to_ten',
                translations: {
                    'en': '6-10',
                    'de': '6-10',
                    'pl': '6-10',
                    'fr': '6-10',
                    'it': '6-10',
                    'pt': '6-10',
                    'es': '6-10',
                    'ru': '6-10'
                }
            },
            {
                id: 9,
                key: 'eleven_to_twenty',
                translations: {
                    'en': '11-20',
                    'de': '11-20',
                    'pl': '11-20',
                    'fr': '11-20',
                    'it': '11-20',
                    'pt': '11-20',
                    'es': '11-20',
                    'ru': '11-20'
                }
            },
            {
                id: 10,
                key: 'twenty_one_to_fifty',
                translations: {
                    'en': '21-50',
                    'de': '21-50',
                    'pl': '21-50',
                    'fr': '21-50',
                    'it': '21-50',
                    'pt': '21-50',
                    'es': '21-50',
                    'ru': '21-50'
                }
            },
            {
                id: 11,
                key: 'fifty_one_to_hundred',
                translations: {
                    'en': '51-100',
                    'de': '51-100',
                    'pl': '51-100',
                    'fr': '51-100',
                    'it': '51-100',
                    'pt': '51-100',
                    'es': '51-100',
                    'ru': '51-100'
                }
            },
            {
                id: 12,
                key: 'more_than_hundred',
                translations: {
                    'en': 'more than 100',
                    'de': 'Mehr als 100',
                    'pl': 'pow. 100',
                    'fr': 'Plus de 100',
                    'it': 'area 100',
                    'pt': 'Mais de 100',
                    'es': 'Más de 100',
                    'ru': 'больше 100'
                }
            },
            {
                id: 13,
                key: 'dont_know',
                translations: {
                    'en': 'I do not know, I do not count that',
                    'de': 'Ich weiß es nicht, ich zähle das nicht',
                    'pl': 'nie wiem, nie liczę tego',
                    'fr': 'Je ne sais pas, je ne compte pas ça',
                    'it': 'Non lo so, non lo conto',
                    'pt': 'Não sei, não conto.',
                    'es': 'No lo sé, no cuento eso',
                    'ru': 'Я не знаю, я не считаю это'
                }
            },
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
                id: 14,
                key: 'vaginal_sex',
                translations: {
                    'en': 'Vaginal sex',
                    'de': 'Vaginaler Sex',
                    'pl': 'Seks waginalny',
                    'fr': 'sexe vaginal',
                    'it': 'Sesso vaginale',
                    'pt': 'Sexo vaginal',
                    'es': 'Sexo vaginal',
                    'ru': 'Вагинальный секс'
                }
            },
            {
                id: 15,
                key: 'anal_sex',
                translations: {
                    'en': 'Anal sex',
                    'de': 'Analsex',
                    'pl': 'Seks analny',
                    'fr': 'sexe anal',
                    'it': 'Sesso anale',
                    'pt': 'Sexo anal',
                    'es': 'Sexo anal',
                    'ru': 'Анальный секс'
                }
            },
            {
                id: 16,
                key: 'oral_sex',
                translations: {
                    'en': 'Oral sex',
                    'de': 'Oralsex',
                    'pl': 'Seks oralny',
                    'fr': 'sexe oral',
                    'it': 'Sesso orale',
                    'pt': 'Sexo oral',
                    'es': 'Sexo oral',
                    'ru': 'Оральный секс'
                }
            },
            {
                id: 17,
                key: 'masturbation',
                translations: {
                    'en': 'Masturbation',
                    'de': 'Masturbation',
                    'pl': 'Masturbacja',
                    'fr': 'masturbation',
                    'it': 'Masturbazione',
                    'pt': 'Masturbação',
                    'es': 'Masturbación',
                    'ru': 'Мастурбация'
                }
            },
            {
                id: 18,
                key: 'petting',
                translations: {
                    'en': 'Petting (ratio without oral, vaginal and anal penetration)',
                    'de': 'Petting (Verhältnis ohne orale, anale und vaginale Penetration)',
                    'pl': 'Petting (stosunek bez penetracji oralnej, waginalnej i analnej, wzajemna masturbacja)',
                    'fr': 'petting',
                    'it': 'Petting (rapporto senza penetrazione orale, anale e vaginale)',
                    'pt': 'Petting (estímulo sexual sem a ocorrência de sexo oral, anal ou vaginal)',
                    'es': 'Petting (relación sin penetración oral, anal y vaginal)',
                    'ru': 'Петтинг (сексуальный контакт без орального, анального или вагинального проникновения)'
                }
            },
            {
                id: 19,
                key: 'fisting',
                translations: {
                    'en': 'Fisting',
                    'de': 'Fisting',
                    'pl': 'Fisting',
                    'fr': 'fisting (anulingus)',
                    'it': 'Fisting',
                    'pt': 'Fisting',
                    'es': 'Fisting (puño)',
                    'ru': 'Фистинг'
                }
            },
            {
                id: 20,
                key: 'rimming',
                translations: {
                    'en': 'Rimming',
                    'de': 'Rimming',
                    'pl': 'Rimming',
                    'fr': '', // No answer provided
                    'it': 'Rimming',
                    'pt': 'Rimming',
                    'es': 'Rimming',
                    'ru': 'Анилингус / rimming'
                }
            },
            {
                id: 21,
                key: 'pissing',
                translations: {
                    'en': 'Pissing',
                    'de': 'Pissing',
                    'pl': 'Pissing',
                    'fr': 'pissing',
                    'it': 'Pissing',
                    'pt': 'Pissing',
                    'es': 'Pissing',
                    'ru': 'Cсание'
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
                id: 22,
                key: 'alcohol',
                translations: {
                    'en': 'Alcohol',
                    'de': 'Alkohol',
                    'pl': 'Alkoholu',
                    'fr': 'de l’alcool',
                    'it': 'alcool',
                    'pt': 'Álcool',
                    'es': 'Alkohol',
                    'ru': 'алкоголя'
                }
            },
            {
                id: 23,
                key: 'drugs',
                translations: {
                    'en': 'Drugs (Amphetamine (Speed), Methamphetamine (Tina), MDMA (XCT, Ecstasy), MDA, GBL/GHB (G), Cocaine, Mephedrone, Ketamine)',
                    'de': 'Drogen (Amphetamin (Speed), Methamphetamin (Tina), MDMA (Ecstasy), MDA, GHB / GBL (G), Kokain, Mephedron, Ketamin)',
                    'pl': 'Narkotykach (Amfetamina (Speed), Metamfetamina (Tina), MDMA (Ecstasy), MDA, GHB/GBL (G), Kokaina, Mefedron, Ketamina)',
                    'fr': 'de la drogue (amphétamine, méthamphétamine (Tina), MDMA (XCT, ecstasy), MDA, GBL / GHB (G), cocaïne, méphédrone, kétamine)',
                    'it': 'farmaci (Anfetamina, Metanfetamina (Tina), MDMA (Ecstasy), MDA, GHB / GBL (G), Cocaina, Mefedrone, Ketamina)',
                    'pt': 'Drogas (Anfetamina (Velocidade), Metanfetamina (Tina), MDMA (Êxtase), MDA, GHB / GBL (G), Cocaína, Mefedrona, Cetamina)',
                    'es': 'Drogas (entre otros: Anfetamina (speed), Metanfetamina (Tina), GHB/GBL (G), MDMA (Extasy), MDA, Kokaina, Mefedrona, Ketamine)',
                    'ru': 'наркотиков (Амфетамин (Speed), метамфетамин (Tina), МДМА (экстази), МДA, ГБЛ/ГXБ (Г), Кокаин, мефедрон, кетамин)'
                }
            },
            {
                id: 24,
                key: 'marijuana',
                translations: {
                    'en': 'Marijuana',
                    'de': 'Marihuana',
                    'pl': 'Marihuanie',
                    'fr': 'de la marijuana',
                    'it': 'marijuana',
                    'pt': 'Marijuana',
                    'es': 'Marihuana',
                    'ru': 'марихуаны'
                }
            },
            {
                id: 25,
                key: 'opioids',
                translations: {
                    'en': 'Opioids and / or benzodiazepines (Codeine, Morphine, Heroin)/(Xanax, Relanium, Valium, Clonazepam)',
                    'de': 'Opioide und / oder Benzodiazepine (Kodeina, Morfina, Heroina) / (Xanax, Relanium, Valium, Clonazepam)',
                    'pl': 'Opioidach i/lub benzodiazepinach (Kodeina, Morfina, Heroina)/(Xanax, Relanium, Valium, Clonazepam)',
                    'fr': 'des opioïdes ou des benzodiazépines (Codéine, morphine, héroïne) / (Xanax, Relanium, Valium, Clonazépam)',
                    'it': 'oppioidi e/o benzodiazepine (Kodeina, Morfina, Heroina)/(Xanax, Relanium, Valium, Clonazepam)',
                    'pt': 'Opiáceos e / ou benzodiazepínicos (Kodeina, Morfina, Heroína) / (Xanax, Relanium, Valium, Clonazepam)',
                    'es': 'Opioides y/o benzodiazepinas (Kodeina, Morfina, Heroina)/(Xanax, Relanium, Valium, Clonazepam)',
                    'ru': 'опиоидов и/или барбитуратов'
                }
            },
            {
                id: 26,
                key: 'poppers',
                translations: {
                    'en': 'Poppers',
                    'de': 'Poppers',
                    'pl': 'Poppersie',
                    'fr': 'des poppers',
                    'it': 'poppers',
                    'pt': 'Poppers',
                    'es': 'Poppers',
                    'ru': 'попперса'
                }
            },
            {
                id: 27,
                key: 'viagra',
                translations: {
                    'en': 'Sildenafil/Tadafil/Vardenafil (Viagra/Kamagra/Cialis/Levitra)',
                    'de': 'Sildenafil/Tadafil/Vardenafil (Viagra/Kamagra/Cialis/Levitra)',
                    'pl': 'Sildenafil/Tadafil/Vardenafil (Viagra/Kamagra/Cialis/Levitra)',
                    'fr': 'Sildenafil/Tadafil/Vardenafil (Viagra/Kamagra/Cialis/Levitra)',
                    'it': 'Sildenafil/Tadafil/Vardenafil (Viagra/Kamagra/Cialis/Levitra)',
                    'pt': 'Sildenafil/Tadafil/Vardenafil (Viagra/Kamagra/Cialis/Levitra)',
                    'es': 'Sildenafil/Tadafil/Vardenafil (Viagra/Kamagra/Cialis/Levitra)',
                    'ru': 'Силденафил / Тадафил / Варденафил (Виагра / Камагра / Сиалис / Левитра)'
                }
            },
            {
                id: 28,
                key: 'none',
                translations: {
                    'en': 'None of them',
                    'de': 'Keines von den genannten',
                    'pl': 'Żadne z powyższych',
                    'fr': 'aucune de ces réponses',
                    'it': 'nessuno dei precedenti',
                    'pt': '', // No answer provided
                    'es': 'Ninguno de ellos',
                    'ru': 'ничего из вышеперечисленного'
                }
            },
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
                id: 29,
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
                id: 30,
                key: 'no',
                translations: {
                    'en': 'No. Why? Who is not affected? (Put your answer into Other...)',
                    'de': 'Nein, warum? Wer ist nicht betroffen? (Schreben SIe bitte Ihre Antowrt in "Other\' ein)',
                    'pl': 'Nie. Kogo nie dotyczy? (Odpowiedź wpisz proszę w inne)',
                    'fr': 'Non. Pourquoi? Qui n’est pas concerné selon toi?',
                    'it': 'No. Perché? Per chi non si applica? (Inserisci la risposta in altro)',
                    'pt': 'Não. Porquê? A quem não se aplica? (Por favor insira a resposta em "outro")',
                    'es': 'No ¿Por qué? ¿Quién no se ve afectado?',
                    'ru': 'Нет (Почему? К кому эта тема не относится?)'
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
                id: 31,
                key: 'yes_more_often_3_months',
                translations: {
                    'en': 'Yes, I do it regularly more often than every 3 months',
                    'de': 'Ja, ich mache das regelmäßig öfter als alle 3 Monate',
                    'pl': 'Tak, robię to regularnie częściej niż co 3 miesiące',
                    'fr': 'Oui, je le fais régulièrement, plus qu’une fois aux 3 mois',
                    'it': 'Sì, lo faccio regolarmente più spesso di ogni 3 mesi',
                    'pt': 'Sim, faço análises regularmente, com menos de três meses de intervalo.',
                    'es': 'Sí, lo hago regularmente cada menos de 3 meses.',
                    'ru': 'Да, я делаю это регулярно чаще, чем каждые 3 месяца'
                }
            },
            {
                id: 32,
                key: 'yes_3_6_months',
                translations: {
                    'en': 'Yes, I do it regularly every 3-6 months',
                    'de': 'Ja, ich mache das regelmäßig alle 3-6 Monate',
                    'pl': 'Tak, robię to regularnie co 3-6 miesięcy',
                    'fr': 'Oui, je le fais régulièrement, une fois aux 3-6 mois',
                    'it': 'Sì, lo faccio regolarmente ogni 3-6 mesi',
                    'pt': 'Sim, faço regularmente, com um intervalo de três a seis meses.',
                    'es': 'Sí, lo hago regularmente cada 3-6 meses.',
                    'ru': 'Да, я делаю это регулярно каждые 3-6 месяцев'
                }
            },
            {
                id: 33,
                key: 'yes_yearly',
                translations: {
                    'en': 'Yes, I do it at least once a year',
                    'de': 'Ja, ich mache es mindestens einmal im Jahr',
                    'pl': 'Tak, robię to co najmniej raz do roku',
                    'fr': 'Oui, je le fais au moins une fois par année',
                    'it': 'Sì, lo faccio almeno una volta all\'anno.',
                    'pt': 'Sim, faço, pelo menos, uma vez por ano.',
                    'es': 'Sí, lo hago al menos una vez al año.',
                    'ru': 'Да, я делаю это, по крайней мере, один раз в год.'
                }
            },
            {
                id: 34,
                key: 'yes_few_times',
                translations: {
                    'en': 'Yes, two or three times',
                    'de': 'Ja, zwei oder dreimal',
                    'pl': 'Tak, dwa lub trzy razy',
                    'fr': 'Oui, 2 ou 3 fois',
                    'it': 'Sì, due o tre volte',
                    'pt': 'Sim, fiz duas ou três vezes.',
                    'es': 'Sí, dos o tres veces en los últimos 5 años.',
                    'ru': 'Да, два или три раза'
                }
            },
            {
                id: 35,
                key: 'yes_once',
                translations: {
                    'en': 'Yes, but only once',
                    'de': 'Ja, aber nur einmal',
                    'pl': 'Tak, ale tylko raz',
                    'fr': 'Oui, mais une fois seulement',
                    'it': 'Sì, ma solo una volta',
                    'pt': 'Sim, fiz uma vez.',
                    'es': 'Sí, pero solo una vez.',
                    'ru': 'Да, однажды'
                }
            },
            {
                id: 36,
                key: 'no_permanent_partner',
                translations: {
                    'en': 'No, I do not have to do this, because I have permanent partner longer than 5 years',
                    'de': 'Nein, ich muss das nicht tun, weil ich einen festen Partner/In länger als 5 Jahre habe',
                    'pl': 'Nie, nie muszę tego robić, bo od ponad 5 lat mam stałego/-łą partnera/-kę',
                    'fr': 'Non, je n’ai pas besoin de faire ça, car j’ai un partenaire permanent avec lequel je suis depuis plus de 5 ans',
                    'it': 'No, non devo farlo perché sono stato un partner permanente da oltre 5 anni',
                    'pt': 'Não, não preciso fazer porque tenho o mesmo parceiro há mais de 5 anos.',
                    'es': 'No, no tengo que hacer esto porque tengo una pareja permanente por más de 5 años.',
                    'ru': 'Нет, мне не нужно этого делать, у меня есть постоянный партнер более 5 лет'
                }
            },
            {
                id: 37,
                key: 'no_condoms',
                translations: {
                    'en': 'No, because I always use condomes',
                    'de': 'Nein, weil ich immer ein Kondom benutze',
                    'pl': 'Nie, ponieważ zawsze używam prezerwatywy',
                    'fr': 'Non, car j’utilise toujours un condom',
                    'it': 'No, perché uso sempre un preservativo',
                    'pt': 'Não, uso sempre preservativo.',
                    'es': 'No, porque siempre uso condón.',
                    'ru': 'Нет, потому что я всегда пользуюсь презервативом'
                }
            },
            {
                id: 38,
                key: 'no_healthy_partners',
                translations: {
                    'en': 'No, because all of my partners were healthy',
                    'de': 'Nein, weil alle meine Partner/In gesund waren',
                    'pl': 'Nie, ponieważ wszyscy/-tkie moi/moje partnerzy/-ki byli/były zdrowi/-e',
                    'fr': 'Non, car tous mes partenaires étaient en santé',
                    'it': 'No, perché tutti / -tutte i miei / le mie partner erano sani / sane',
                    'pt': 'Não, todos os meus parceiros são saudáveis.',
                    'es': 'No, porque todos mis compañeros estaban sanos.',
                    'ru': 'Нет, потому что все мои партнеры были здоровы'
                }
            },
            {
                id: 39,
                key: 'no_symptoms_absense',
                translations: {
                    'en': 'No, because I\'m healthy. I know, because I have no symptoms',
                    'de': 'Nein, weil ich gesund bin. Ich weiß, weil ich keine Symptome habe',
                    'pl': 'Nie, ponieważ jestem zdrowa/-wy. Wiem, bo nic mi nie dolega',
                    'fr': 'Non, car je suis en santé. Je le sais parce que je n’ai aucun symptôme.',
                    'it': 'No, perché sono sano. Lo so perché non c\'è niente di sbagliato',
                    'pt': 'Não, sou saudável. Sei que não preciso porque não tenho sintomas.',
                    'es': 'No, porque estoy sano. Lo sé, porque no tengo síntomas.',
                    'ru': 'Нет, потому что я здоров. Я знаю, потому что у меня нет никаких симптомов'
                }
            },
            {
                id: 40,
                key: 'no_not_interested',
                translations: {
                    'en': 'No, because I\'m not interested in it',
                    'de': 'Nein, weil mich das nicht interessiert',
                    'pl': 'Nie, bo nie interesuje mnie to',
                    'fr': 'Non, car ça ne m’intéresse pas.',
                    'it': 'No, perché non mi interessa',
                    'pt': 'Não, não estou interessado em saber.',
                    'es': 'No, porque no me interesa.',
                    'ru': 'Нет, потому что мне это не интересно'
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
                id: 41,
                key: 'yes_more_often_3_months',
                translations: {
                    'en': 'Yes, I do it regularly more often than every 3 months',
                    'de': 'Ja, ich mache das regelmäßig öfter als alle 3 Monate',
                    'pl': 'Tak, robię to regularnie częściej niż co 3 miesiące',
                    'fr': 'Oui, je le fais régulièrement, plus qu’une fois aux 3 mois',
                    'it': 'Sì, lo faccio regolarmente più spesso di ogni 3 mesi',
                    'pt': 'Sim, faço análises regularmente, com menos de três meses de intervalo.',
                    'es': 'Sí, lo hago regularmente cada menos de 3 meses.',
                    'ru': 'Да, я делаю это регулярно чаще, чем каждые 3 месяца'
                }
            },
            {
                id: 42,
                key: 'yes_3_6_months',
                translations: {
                    'en': 'Yes, I do it regularly every 3-6 months',
                    'de': 'Ja, ich mache das regelmäßig alle 3-6 Monate',
                    'pl': 'Tak, robię to regularnie co 3-6 miesięcy',
                    'fr': 'Oui, je le fais régulièrement, une fois aux 3-6 mois',
                    'it': 'Sì, lo faccio regolarmente ogni 3-6 mesi',
                    'pt': 'Sim, faço regularmente, com um intervalo de três a seis meses.',
                    'es': 'Sí, lo hago regularmente cada 3-6 meses.',
                    'ru': 'Да, я делаю это регулярно каждые 3-6 месяцев'
                }
            },
            {
                id: 43,
                key: 'yes_yearly',
                translations: {
                    'en': 'Yes, I do it at least once a year',
                    'de': 'Ja, ich mache es mindestens einmal im Jahr',
                    'pl': 'Tak, robię to co najmniej raz do roku',
                    'fr': 'Oui, je le fais au moins une fois par année',
                    'it': 'Sì, lo faccio almeno una volta all\'anno.',
                    'pt': 'Sim, faço, pelo menos, uma vez por ano.',
                    'es': 'Sí, lo hago al menos una vez al año.',
                    'ru': 'Да, я делаю это, по крайней мере, один раз в год.'
                }
            },
            {
                id: 44,
                key: 'yes_few_times',
                translations: {
                    'en': 'Yes, two or three times',
                    'de': 'Ja, zwei oder dreimal',
                    'pl': 'Tak, dwa lub trzy razy',
                    'fr': 'Oui, 2 ou 3 fois',
                    'it': 'Sì, due o tre volte',
                    'pt': 'Sim, fiz duas ou três vezes.',
                    'es': 'Sí, dos o tres veces en los últimos 5 años.',
                    'ru': 'Да, два или три раза'
                }
            },
            {
                id: 45,
                key: 'yes_once',
                translations: {
                    'en': 'Yes, but only once',
                    'de': 'Ja, aber nur einmal',
                    'pl': 'Tak, ale tylko raz',
                    'fr': 'Oui, mais une fois seulement',
                    'it': 'Sì, ma solo una volta',
                    'pt': 'Sim, fiz uma vez.',
                    'es': 'Sí, pero solo una vez.',
                    'ru': 'Да, однажды'
                }
            },
            {
                id: 46,
                key: 'no_partner',
                translations: {
                    'en': 'No, I do not have to do this, because I have permanent partner longer than 5 years',
                    'de': 'Nein, ich muss das nicht tun, weil ich einen festen Partner/In länger als 5 Jahre habe',
                    'pl': 'Nie, nie muszę tego robić, bo od ponad 5 lat mam stałego/-łą partnera/-kę',
                    'fr': 'Non, je n’ai pas besoin de faire ça, car j’ai un partenaire permanent avec lequel je suis depuis plus de 5 ans',
                    'it': 'No, non devo farlo perché sono stato un partner permanente da oltre 5 anni',
                    'pt': 'Não, não preciso fazer porque tenho o mesmo parceiro há mais de 5 anos.',
                    'es': 'No, no tengo que hacer esto porque tengo una pareja permanente por más de 5 años.',
                    'ru': 'Нет, мне не нужно этого делать, у меня есть постоянный партнер более 5 лет'
                }
            },
            {
                id: 47,
                key: 'no_condoms',
                translations: {
                    'en': 'No, because I always use condomes',
                    'de': 'Nein, weil ich immer ein Kondom benutze',
                    'pl': 'Nie, ponieważ zawsze używam prezerwatywy',
                    'fr': 'Non, car j’utilise toujours un condom',
                    'it': 'No, perché uso sempre un preservativo',
                    'pt': 'Não, uso sempre preservativo.',
                    'es': 'No, porque siempre uso condón.',
                    'ru': 'Нет, потому что я всегда пользуюсь презервативом'
                }
            },
            {
                id: 48,
                key: 'no_healthy_partners',
                translations: {
                    'en': 'No, because all of my partners were healthy',
                    'de': 'Nein, weil alle meine Partner/In gesund waren',
                    'pl': 'Nie, ponieważ wszyscy/-tkie moi/moje partnerzy/-ki byli/były zdrowi/-e',
                    'fr': 'Non, car tous mes partenaires étaient en santé',
                    'it': 'No, perché tutti / -tutte i miei / le mie partner erano sani / sane',
                    'pt': 'Não, todos os meus parceiros são saudáveis.',
                    'es': 'No, porque todos mis compañeros estaban sanos.',
                    'ru': 'Нет, потому что все мои партнеры были здоровы'
                }
            },
            {
                id: 49,
                key: 'no_symptoms_absence',
                translations: {
                    'en': 'No, because I\'m healthy. I know, because I have no symptoms',
                    'de': 'Nein, weil ich gesund bin. Ich weiß, weil ich keine Symptome habe',
                    'pl': 'Nie, ponieważ jestem zdrowa/-wy. Wiem, bo nic mi nie dolega',
                    'fr': 'Non, car je suis en santé. Je le sais parce que je n’ai aucun symptôme.',
                    'it': 'No, perché sono sano. Lo so perché non c\'è niente di sbagliato',
                    'pt': 'Não, sou saudável. Sei que não preciso porque não tenho sintomas.',
                    'es': 'No, porque estoy sano. Lo sé, porque no tengo síntomas.',
                    'ru': 'Нет, потому что я здоров. Я знаю, потому что у меня нет никаких симптомов'
                }
            },
            {
                id: 50,
                key: 'no_not_interested',
                translations: {
                    'en': 'No, because I\'m not interested in it',
                    'de': 'Nein, weil mich das nicht interessiert',
                    'pl': 'Nie, bo nie interesuje mnie to',
                    'fr': 'Non, car ça ne m’intéresse pas.',
                    'it': 'No, perché non mi interessa',
                    'pt': 'Não, não estou interessado em saber.',
                    'es': 'No, porque no me interesa.',
                    'ru': 'Нет, потому что мне это не интересно'
                }
            },
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
                id: 51,
                key: 'school',
                translations: {
                    'en': 'School, studies, sex education',
                    'de': 'Schule, Studium, Sexualkunde',
                    'pl': 'Szkoła, studia, edukacja seksualna',
                    'fr': 'École, études, éducation sexuelle',
                    'it': 'Scuola, studi, educazione sessuale',
                    'pt': 'Escola e educação sexual.',
                    'es': 'Escuela, estudios, educación sexual.',
                    'ru': 'Школа, учеба, половое образование'
                }
            },
            {
                id: 52,
                key: 'parents',
                translations: {
                    'en': 'Parents, family, siblings',
                    'de': 'Eltern, Familie, Geschwister',
                    'pl': 'Rodzice, rodzina, rodzeństwo',
                    'fr': 'Parents, famille, frère(s) et sœur(s)',
                    'it': 'Genitori, famiglia, fratelli',
                    'pt': 'Familia',
                    'es': 'Padres, familia, hermanos.',
                    'ru': 'Родители, семья, братья и сёстры'
                }
            },
            {
                id: 53,
                key: 'porn',
                translations: {
                    'en': 'Pornography (movies, magazines)',
                    'de': 'Pornografie (Filme, Zeitschriften)',
                    'pl': 'Pornografia (filmy, czasopisma)',
                    'fr': 'Pornographie (films, magazines)',
                    'it': 'Pornografia (film, riviste)',
                    'pt': 'Pornografia (filmes e revistas)',
                    'es': 'Pornografía (películas, revistas).',
                    'ru': 'Порнография (фильмы, журналы)'
                }
            },
            {
                id: 54,
                key: 'internet',
                translations: {
                    'en': 'Internet',
                    'de': 'Internet',
                    'pl': 'Internet',
                    'fr': 'Internet',
                    'it': 'Internet',
                    'pt': 'Internet',
                    'es': 'Internet',
                    'ru': 'Интернет'
                }
            },
            {
                id: 55,
                key: 'friends',
                translations: {
                    'en': 'Friends, collegues',
                    'de': 'Freunde, Kollegen',
                    'pl': 'Przyjaciele, znajomi',
                    'fr': 'Ami(e)s, collègues',
                    'it': 'Amici, colleghi',
                    'pt': 'Amogis e colegas',
                    'es': 'Amigos, colegas.',
                    'ru': 'Друзья, сотрудники'
                }
            },
            {
                id: 56,
                key: 'books',
                translations: {
                    'en': 'Books and scientific publications',
                    'de': 'Bücher und wissenschaftliche Publikationen',
                    'pl': 'Książki i publikacje naukowe',
                    'fr': 'Livres et publications scientifiques',
                    'it': 'Libri e pubblicazioni scientifiche',
                    'pt': 'Livros e publicações científicas',
                    'es': 'Libros y publicaciones científicas.',
                    'ru': 'Книги и научные публикации'
                }
            },
            {
                id: 57,
                key: 'doctor',
                translations: {
                    'en': 'Doctor, nurse, midwife',
                    'de': 'Arzt, Krankenschwester, Hebamme',
                    'pl': 'Lekarz, pielęgniarka, położna',
                    'fr': 'Médecin, infirmière, sage-femme',
                    'it': 'Dottore, infermiera, ostetrica',
                    'pt': 'Médicos, enfermeiros e outros profissionais de saúde.',
                    'es': 'Doctor, enfermero.',
                    'ru': 'Врач, медсестра, акушерка'
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
                id: 58,
                key: 'informing_sexual_partner',
                translations: {
                    'en': 'Informing the sexual partner about the possible STD\'s infection',
                    'de': 'Informieren des Sexualpartners über eine mögliche STI-Infektion',
                    'pl': 'świadome informowanie partnera seksualnego o potencjalnym możliwym zakażeniu chorobą/-ami przenoszonymi drogą kontaktów płciowych',
                    'fr': 'Informer mon/ma partenaire sexuel(le) d’une possible infection',
                    'it': 'Informare il partner sessuale della possibile infezione con una malattia venerea',
                    'pt': 'Informar o parceiro sexual de uma possível infeção.',
                    'es': 'Informar a la pareja sexual sobre la posible infección.',
                    'ru': 'Информирование сексуального партнера о возможном заражении венерическим заболеванием'
                }
            },
            {
                id: 59,
                key: 'use_disinfectants',
                translations: {
                    'en': 'use of disinfectants on the skin and mucous membranes',
                    'de': 'Verwendung von Desinfektionsmitteln auf Haut und Schleimhäuten',
                    'pl': 'stosowanie środków dezynfekcyjnych na skórę i błony śluzowe',
                    'fr': 'Utiliser du désinfectant sur la peau et les membranes muqueuses',
                    'it': 'uso di disinfettanti sulla pelle e sulle mucose',
                    'pt': 'Usar desinfetante na pele e nas membranas mucosas.',
                    'es': 'Uso de desinfectantes en la piel y membranas mucosas.',
                    'ru': 'использование дезинфицирующих средств для кожи и слизистых оболочек'
                }
            },
            {
                id: 60,
                key: 'use_disposable',
                translations: {
                    'en': 'use of disposable equipment during the so-called chemsex',
                    'de': 'Verwendung von Einweggeräten während des sogenannten ‚Chemsex’',
                    'pl': 'używanie jednorazowego sprzętu w czasie tzw. chemseksu',
                    'fr': 'Utiliser du matériel jetable lors de séances de « chemsex »',
                    'it': 'uso di attrezzature usa e getta durante il cosiddetto chemsex',
                    'pt': 'Usar utensílios descartáveis na prática de sexo com “Chemsex”',
                    'es': 'Uso de equipos desechables durante el llamado chemsex.',
                    'ru': 'использование одноразовых расходников для так называемого химсекса'
                }
            },
            {
                id: 61,
                key: 'conscious_sexual_contacts',
                translations: {
                    'en': 'making conscious sexual contacts',
                    'de': 'bewusste sexuelle Kontakte herstellen',
                    'pl': 'podejmowanie świadomych kontaktów seksualnych',
                    'fr': 'Avoir des rapports sexuels conscients',
                    'it': 'fare contatti sessuali consapevoli',
                    'pt': 'Ter contactos sexuais conscientes.',
                    'es': 'Tener contactos sexuales conscientes.',
                    'ru': 'установление сознательных сексуальных контактов'
                }
            },
            {
                id: 62,
                key: 'using_lubricants',
                translations: {
                    'en': 'using lubricants',
                    'de': 'unter Verwendung von Schmiermitteln',
                    'pl': 'używanie lubrykantów',
                    'fr': 'Utiliser du lubrifiant',
                    'it': 'utilizzo di lubrificanti',
                    'pt': 'Usar lubrificante.',
                    'es': 'Usar lubricantes.',
                    'ru': 'использование лубриканта'
                }
            },
            {
                id: 63,
                key: 'conversation_with_partner_about_risks',
                translations: {
                    'en': 'conversation with a partner / spouse about possible risks',
                    'de': 'Gespräch mit einem Partner / Ehepartner über mögliche Risiken',
                    'pl': 'rozmowa z partnerem / małżonkiem o możliwych zagrożeniach',
                    'fr': 'Avoir une conversation avec mon/ma partenaire/époux(se) à propos des risques encourus',
                    'it': 'conversazione con un partner / coniuge sui possibili rischi',
                    'pt': 'Conversar com o parceiro/cônjuge sobre possíveis riscos.',
                    'es': 'Tener conversación con compañero o cónyuge sobre los posibles riesgos.',
                    'ru': 'разговор с партнером/супругом о возможных рисках'
                }
            },
            {
                id: 64,
                key: 'conversation_with_partner_before_after',
                translations: {
                    'en': 'conversation with a sexual partner before and / or after intercourse',
                    'de': 'Gespräch mit einem Sexualpartner vor und / oder nach dem Geschlechtsverkehr',
                    'pl': 'rozmowa z partnerem seksualnym przed i/lub po stosunku',
                    'fr': 'Avoir une conversation avec mon/ma partenaire sexuel(le) avant et/ou après le rapport sexuel',
                    'it': 'conversazione con un partner sessuale prima e / o dopo il rapporto sessuale',
                    'pt': 'Conversar com o parceiro sexual antes e/ou depois de ter relações sexuais.',
                    'es': 'Tener conversación con una pareja sexual antes o después del coito.',
                    'ru': 'разговор с сексуальным партнером до и/или после полового акта'
                }
            },
            {
                id: 65,
                key: 'std_ckeckups',
                translations: {
                    'en': 'regular STD’s check-ups',
                    'de': 'regelmäßige STI-Untersuchungen (sexuell übertragbare Krankheiten)',
                    'pl': 'regularne badania kontrolne na choroby przenoszone drogą kontaktów płciowych',
                    'fr': 'Passer des tests de dépistage pour les ITSS régulièrement',
                    'it': 'test di controllo periodici per malattie veneree',
                    'pt': 'Fazer análises a DSTs regularmente.',
                    'es': 'Hacer chequeos regulares de ETS.',
                    'ru': 'регулярные анализы на ЗППП'
                }
            },
            {
                id: 66,
                key: 'pep',
                translations: {
                    'en': 'using PEP (immediate post-exposure prophylaxis) (ad hoc admission of antiretroviral drugs after potentially risky sexual behavior that could lead to HIV infection)',
                    'de': 'PEP verwenden (Sofortprophylaxe nach Exposition) - Ad-hoc-Zulassung von antiretroviralen Arzneimitteln nach potenziell riskantem Sexualverhalten, das zu einer HIV-Infektion führen könnte',
                    'pl': 'stosowanie PEPu (doraźnej profilaktyki poekspozycyjnej) (doraźne przyjęcie leków antyretrowirusowych po potencjalnie ryzykownym zachowaniu seksualnym, a czasie którego mogło dojść do zakażenia HIV)',
                    'fr': 'Utiliser la PPE (prophylaxie postexposition, ou PEP en anglais) - Admission ponctuelle d\'antirétroviraux après un comportement sexuel potentiellement à risque pouvant entraîner une infection par le VIH',
                    'it': 'utilizzando PEP (profilassi post-esposizione immediata) - uso temporaneo di farmaci antiretrovirali dopo comportamento sessuale potenzialmente a rischio, il tempo in cui l\'infezione da HIV può essersi verificata',
                    'pt': 'Usar PEP (profilaxia pós-exposição) - admissão ad hoc de medicamentos anti-retrovirais após comportamento sexual potencialmente arriscado que poderia levar à infecção pelo VIH',
                    'es': 'Utilizar PEP (profilaxis inmediata posterior a la exposición) - Admisión ad hoc de medicamentos antirretrovirales después de conductas sexuales potencialmente riesgosas que podrían conducir a una infección por VIH',
                    'ru': 'использование ПКП (немедленная постконтактная профилактика) -'
                }
            },
            {
                id: 67,
                key: 'genital_self_exam',
                translations: {
                    'en': 'observation and genital self-examination',
                    'de': 'Beobachtung und Genitaluntersuchung',
                    'pl': 'obserwacja i samobadanie narządów płciowych',
                    'fr': 'Observation et auto-examen des parties génitales',
                    'it': 'osservazione e autoesame genitale',
                    'pt': 'Auto observação e análise genital',
                    'es': 'Realizar observación y autoexamen genital.',
                    'ru': 'наблюдение и самоосмотр гениталий'
                }
            },
            {
                id: 68,
                key: 'tasp',
                translations: {
                    'en': 'use of treatment as prevention of HIV infection (TasP) - effective anti-retroviral therapy of a HIV positive person',
                    'de': 'Verwendung der Behandlung zur Vorbeugung von HIV-Infektionen (TasP) - wirksame antiretrovirale Therapie eines positiven HIV-Patienten',
                    'pl': 'stosowanie leczenia jako zapobieganie zakażenia HIV (TasP) - skuteczna terapia antyretrowirusowa osoby HIV pozytywnej',
                    'fr': 'Utilisation du traitement comme prévention du VIH (ou TasP en anglais) - traitement antirétroviral efficace chez un patient séropositif',
                    'it': 'uso del trattamento come prevenzione dell\'infezione da HIV (TasP) - efficace terapia anti-retrovirale di un paziente HIV positivo',
                    'pt': 'Uso de tratamento como prevenção da infeção de VIH',
                    'es': 'Hacer uso del tratamiento como prevención de la infección por VIH (TasP) - Terapia antirretroviral efectiva de un paciente con VIH positivo',
                    'ru': 'использование АРТ (антиретровирусной терапии) - эффективная антиретровирусная терапия ВИЧ-положительного пациента'
                }
            },
            {
                id: 69,
                key: 'personal_hygiene',
                translations: {
                    'en': 'personal hygiene before and after intercourse',
                    'de': 'Körperpflege vor und nach dem Verkehr',
                    'pl': 'higiena osobista przed i po stosunku',
                    'fr': 'Hygiène personnelle avant et après les rapports sexuels',
                    'it': 'igiene personale prima e dopo il rapporto sessuale',
                    'pt': 'Higiene pessoal antes e depois de ter relações sexuais',
                    'es': 'Higiene personal antes y después del coito.',
                    'ru': 'личная гигиена до и после полового акта'
                }
            },
            {
                id: 70,
                key: 'regular_checkups',
                translations: {
                    'en': 'regular check-ups for HIV and hepatitis B',
                    'de': 'regelmäßige Vorsorgeuntersuchungen bei HIV und Hepatitis B',
                    'pl': 'regularne badania kontrolne na HIV i WZW B',
                    'fr': 'Passer des tests de dépistage pour le VIH et l’hépatite B régulièrement',
                    'it': 'controlli regolari per l\'HIV e l\'epatite B',
                    'pt': 'Análises regulares a VIH e Hepatite B',
                    'es': 'Hacer chequeos regulares para el VIH y la hepatitis B.',
                    'ru': 'регулярные проверки на ВИЧ и гепатит В'
                }
            },
            {
                id: 71,
                key: 'using_condom',
                translations: {
                    'en': 'using a condom',
                    'de': 'Kondom benutzen',
                    'pl': 'używanie prezerwatywy',
                    'fr': 'Utiliser un condom',
                    'it': 'usare un condom',
                    'pt': 'Usar de preservativo',
                    'es': 'Usar un condón.',
                    'ru': 'использование презервативов'
                }
            },
            {
                id: 72,
                key: 'prep',
                translations: {
                    'en': 'using PrEP (pre-exposure prophylaxis) - taking antiretroviral medications regularly or temporarily before and after sex to prevent potential HIV infection',
                    'de': 'PreP verwenden (Präexpositionsprophylaxe) - regelmäßige oder vorübergehende Einnahme antiretroviraler Medikamente vor und nach dem Geschlechtsverkehr, um eine mögliche HIV-Infektion zu verhindern',
                    'pl': 'stosowanie PrEPu (profilaktyki przedekspozycyjnej) - przyjmowanie leków antyretrowirusowych regularnie lub doraźnie przed i po seksie w celu zapobieżenia potencjalnemu zakażeniu HIV',
                    'fr': 'Utiliser la PrEP (prophylaxie pré-exposition, ou pre-exposure prophylaxis en anglais) - prendre des médicaments antirétroviraux régulièrement ou temporairement avant et après les rapports sexuels pour prévenir une éventuelle infection par le VIH',
                    'it': 'utilizzo di PrEP (profilassi pre-esposizione) - assumere farmaci antiretrovirali regolarmente o temporaneamente prima e dopo il rapporto sessuale per prevenire potenziali infezioni da HIV',
                    'pt': 'Tomar PrEP (profilaxia pre-exposição) - tomar medicamentos antiretrovirais regularmente ou temporariamente antes e depois do sexo para prevenir uma possível infecção pelo VIH',
                    'es': 'Utilizar PrEP (profilaxis previa a la exposición) - tomar medicamentos antirretrovirales de forma regular o temporal antes y después de las relaciones sexuales para prevenir una posible infección por VIH',
                    'ru': 'использование PrEP (пред-контактная профилактика) - принимать антиретровирусные препараты регулярно или временно до и после секса, чтобы предотвратить потенциальную инфекцию ВИЧ'
                }
            },
            {
                id: 73,
                key: 'sex_with_one_partner',
                translations: {
                    'en': 'sex with one regular partner',
                    'de': 'Sex mit einem festen Partner',
                    'pl': 'seks z jednym, stałym partnerem',
                    'fr': 'Avoir des rapports sexuels avec un(e) partenaire régulier(ère)',
                    'it': 'sesso con un partner regolare',
                    'pt': 'Ter relações apenas com um parceiro',
                    'es': 'Tener sexo con una pareja regular.',
                    'ru': 'секс с одним постоянным партнером'
                }
            },
            {
                id: 74,
                key: 'coitus_interruprus',
                translations: {
                    'en': 'Coitus interruptus (also known as the rejected sexual intercourse, withdrawal or pull-out method, is a method of birth control in which a man, during sexual intercourse, withdraws his penis from a woman\'s vagina prior to orgasm (and ejaculation) and then directs his ejaculate (semen) away from the vagina in an effort to avoid insemination)',
                    'de': 'intermittierendes Verhältnis',
                    'pl': 'stosunek przerywany -  metoda zapobiegania ciąży, polegająca na celowym szybkim wycofaniu penisa z pochwy na krótko przed zbliżającym się wytryskiem nasienia',
                    'fr': 'Coït interrompu - est une pratique sexuelle qui consiste à interrompre le rapport sexuel vaginal avant l\'éjaculation dans le but d\'éviter la fécondation.',
                    'it': 'rapporto intermittente',
                    'pt': 'Praticar o coito interrompido',
                    'es': 'Tener relación intermitente.',
                    'ru': 'прерывание полового акта - метод контрацепции, заключающийся в преднамеренном быстром выводе полового члена из влагалища незадолго до приближающейся эякуляции спермы'
                }
            },
            {
                id: 75,
                key: 'anal_oral_sex',
                translations: {
                    'en': 'anal and / or oral sex',
                    'de': 'Anal- und / oder Oralsex',
                    'pl': 'seks analny i/lub oralny',
                    'fr': 'Sexe anal et/ou oral',
                    'it': 'sesso anale e / o orale',
                    'pt': 'Praticar sexo anal/oral',
                    'es': 'Tener sexo anal y/u oral.',
                    'ru': 'анальный и/или оральный секс'
                }
            },
            {
                id: 76,
                key: 'no_ejaculation',
                translations: {
                    'en': 'sex that does not lead to ejaculation',
                    'de': 'Sex, der nicht zur Ejakulation führt',
                    'pl': 'seks nieprowadzący do ejakulacji',
                    'fr': 'Sexe sans éjaculation',
                    'it': 'sesso che non conduce all\'eiaculazione',
                    'pt': 'Praticar sexo sem ejaculação',
                    'es': 'Tener Sexo que no lleva a la eyaculación.',
                    'ru': 'секс, который не приводит к эякуляции'
                }
            },
            {
                id: 77,
                key: 'contraceptives',
                translations: {
                    'en': 'use of contraceptives',
                    'de': 'Verwendung von Verhütungsmitteln',
                    'pl': 'stosowanie środków antykoncepcyjnych',
                    'fr': 'Utilisation de méthodes de contraception',
                    'it': 'uso di contraccettivi',
                    'pt': 'Usar métodos contracetivos',
                    'es': 'Usar anticonceptivos.',
                    'ru': 'использование противозачаточных средств'
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
                id: 78,
                key: 'female',
                translations: {
                    'en': 'Female',
                    'de': 'Frau',
                    'pl': 'Kobieta',
                    'fr': 'Femme',
                    'it': 'Donna',
                    'pt': 'Mulher',
                    'es': 'Mujer',
                    'ru': 'Женщина'
                }
            },
            {
                id: 79,
                key: 'male',
                translations: {
                    'en': 'Male',
                    'de': 'Mann',
                    'pl': 'Mężczyzna',
                    'fr': 'Homme',
                    'it': 'Uomo',
                    'pt': 'Homem',
                    'es': 'Hombre',
                    'ru': 'Мужчина'
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
            'ru': 'Ваш возраст:'
        },
        answers: [
            {
                id: 80,
                key: '18_25',
                translations: {
                    'en': '18-25',
                    'de': '18-25',
                    'pl': '18-25',
                    'fr': '18-25',
                    'it': '18-25',
                    'pt': '18-25',
                    'es': '18-25',
                    'ru': '18-25'
                }
            },
            {
                id: 81,
                key: '26_33',
                translations: {
                    'en': '26-33',
                    'de': '26-33',
                    'pl': '26-33',
                    'fr': '26-33',
                    'it': '26-33',
                    'pt': '26-33',
                    'es': '26-33',
                    'ru': '26-33'
                }
            },
            {
                id: 82,
                key: '34_41',
                translations: {
                    'en': '34-41',
                    'de': '34-41',
                    'pl': '34-41',
                    'fr': '34-41',
                    'it': '34-41',
                    'pt': '34-41',
                    'es': '34-41',
                    'ru': '34-41'
                }
            },
            {
                id: 83,
                key: '42_49',
                translations: {
                    'en': '42-49',
                    'de': '42-49',
                    'pl': '42-49',
                    'fr': '42-49',
                    'it': '42-49',
                    'pt': '42-49',
                    'es': '42-49',
                    'ru': '42-49'
                }
            },
            {
                id: 84,
                key: '50_57',
                translations: {
                    'en': '50-57',
                    'de': '50-57',
                    'pl': '50-57',
                    'fr': '50-57',
                    'it': '50-57',
                    'pt': '50-57',
                    'es': '50-57',
                    'ru': '50-57'
                }
            },
            {
                id: 85,
                key: '58_65',
                translations: {
                    'en': '58-65',
                    'de': '58-65',
                    'pl': '58-65',
                    'fr': '58-65',
                    'it': '58-65',
                    'pt': '58-65',
                    'es': '58-65',
                    'ru': '58-65'
                }
            },
            {
                id: 86,
                key: '66_73',
                translations: {
                    'en': '66-73',
                    'de': '66-73',
                    'pl': '66-73',
                    'fr': '66-73',
                    'it': '66-73',
                    'pt': '66-73',
                    'es': '66-73',
                    'ru': '66-73'
                }
            },
            {
                id: 87,
                key: '74_plus',
                translations: {
                    'en': '74+',
                    'de': '74+',
                    'pl': '74+',
                    'fr': '74+',
                    'it': '74+',
                    'pt': '74+',
                    'es': '74+',
                    'ru': '74+'
                }
            },
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
            'ru': 'Какое у Вас образование?'
        },
        answers: [
            {
                id: 88,
                key: 'primary',
                translations: {
                    'en': 'Primary',
                    'de': 'Grundbildung',
                    'pl': 'Podstawowe',
                    'fr': 'Primaire',
                    'it': 'Di base',
                    'pt': 'Primária',
                    'es': 'Primaria',
                    'ru': 'Начальная школа'
                }
            },
            {
                id: 89,
                key: 'secondary',
                translations: {
                    'en': 'Secondary',
                    'de': 'Sekundarbildung',
                    'pl': 'Średnie',
                    'fr': 'Secondaire (ou lycée, en France)',
                    'it': 'Medio',
                    'pt': 'Secundária',
                    'es': 'Secondaria',
                    'ru': 'Средняя школа'
                }
            },
            {
                id: 90,
                key: 'vocational',
                translations: {
                    'en': 'Vocational education',
                    'de': 'Berufsbildung',
                    'pl': 'Zasadnicze zawodowe',
                    'fr': 'école professionnelle',
                    'it': 'Professionale di base',
                    'pt': 'Ensino profissional',
                    'es': 'Educación vocacional',
                    'ru': 'Профессионально-техническое образование'
                }
            },
            {
                id: 91,
                key: 'bachelor',
                translations: {
                    'en': 'Bachelor',
                    'de': 'Bachelor',
                    'pl': 'Licencjat',
                    'fr': 'Baccalauréat (ou licence, en France)',
                    'it': 'Laurea',
                    'pt': 'Licenciatura',
                    'es': 'Licenciado',
                    'ru': 'Бакалавр'
                }
            },
            {
                id: 92,
                key: 'engineer',
                translations: {
                    'en': 'Engineer',
                    'de': 'Ingenieurausbildung',
                    'pl': 'Wyższe inżynierskie',
                    'fr': 'formation d\'ingénieur',
                    'it': 'Ingegnere',
                    'pt': 'Engenheiro',
                    'es': 'Ingeniería',
                    'ru': 'инженер'
                }
            },
            {
                id: 93,
                key: 'master',
                translations: {
                    'en': 'Master\'s degree',
                    'de': 'Master-Studium',
                    'pl': 'Wyższe magisterskie',
                    'fr': 'Maîtrise',
                    'it': 'Laurea magistrale',
                    'pt': 'Mestrado',
                    'es': 'Maestría',
                    'ru': 'Магистр'
                }
            },
            {
                id: 94,
                key: 'phd',
                translations: {
                    'en': 'PHD and higher',
                    'de': 'Doktortitel und höher',
                    'pl': 'Doktorskie i wyżej',
                    'fr': 'Doctorat (ou niveau d’éducation supérieur)',
                    'it': 'Dottorato e superiore',
                    'pt': 'Doutoramento ou superior',
                    'es': 'Doctorado y superior',
                    'ru': 'Доктор наук или выше'
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
                id: 95,
                key: 'village',
                translations: {
                    'en': 'Village',
                    'de': 'Dorfl',
                    'pl': 'Wieś',
                    'fr': 'Un village',
                    'it': 'Villagio',
                    'pt': 'Uma aldeia.',
                    'es': 'Menos de 50 mil habitantes',
                    'ru': 'посёлок'
                }
            },
            {
                id: 96,
                key: 'town_less_50k',
                translations: {
                    'en': 'City up to 50 thousand',
                    'de': 'Stadt bis zu 50 Tausend',
                    'pl': 'Miasto do 50 tys.',
                    'fr': 'Une ville de moins de 50 000 habitants',
                    'it': 'Città fino a 50 mila',
                    'pt': 'Uma cidade com menos de 50.000 habitantes.',
                    'es': 'Hasta 50 mil',
                    'ru': 'город с населением до 50 тысяч человек'
                }
            },
            {
                id: 97,
                key: 'town_50k_100k',
                translations: {
                    'en': 'City from 50 to 100 thousand',
                    'de': 'Stadt von 50 bis 100 Tausend',
                    'pl': 'MIasto od 50 do 100 tys.',
                    'fr': 'Une ville entre 50 000 et 100 000 habitants',
                    'it': 'Città da 50 a 100 mila',
                    'pt': 'Uma cidade que tem entre 50.000 a 100.000 habitantes.',
                    'es': 'De 50 a 100 mil',
                    'ru': 'город с населением от 50 до 100 тысяч человек'
                }
            },
            {
                id: 98,
                key: 'city_100k_250k',
                translations: {
                    'en': 'City from 100 to 250 thousand',
                    'de': 'Stadt von 100 bis 250 Tausend',
                    'pl': 'Miasto od 100 do 250 tys.',
                    'fr': 'Une ville entre 100 000 et 250 000 habitants',
                    'it': 'Città da 100 a 250 mila',
                    'pt': 'Uma cidade que tem entre 100.000 a 250.000 habitantes.',
                    'es': 'De 100 a 250 mil',
                    'ru': 'город с населением от 100 до 250 тысяч человек'
                }
            },
            {
                id: 99,
                key: 'city_250k_500k',
                translations: {
                    'en': 'City from 250 to 500 thousand',
                    'de': 'Stadt von 250.000 bis 500.000',
                    'pl': 'Miasto od 250 do 500 tys.',
                    'fr': 'Une ville entre 250 000 et 500 000 habitants',
                    'it': '', // No answer provided
                    'pt': 'Uma cidade que tem entre 250.000 a 500.000 habitantes.',
                    'es': 'De 250.000 a 500.000',
                    'ru': 'город с населением от 250 до 500 тысяч человек'
                }
            },
            {
                id: 100,
                key: 'city_500k_1m',
                translations: {
                    'en': 'City from 500 thousand to 1 million',
                    'de': '', // No answer provided
                    'pl': 'Miasto od 500 tys. do 1 mln',
                    'fr': 'Une ville entre 500 000 et un million d’habitants',
                    'it': 'Città da 500.000 a 1 milione',
                    'pt': 'Uma cidade que tem entre 500.000 a 1 milhão habitantes.',
                    'es': 'De 500.000 a 1 millón',
                    'ru': 'город с населением от 500 000 до 1 миллиона человек'
                }
            },
            {
                id: 101,
                key: 'city_over_1m',
                translations: {
                    'en': 'City over 1 million',
                    'de': 'Stadt über 1 Million Einwohnern',
                    'pl': 'Miasto pow. 1 mln',
                    'fr': 'Une ville de plus d’un million d’habitants',
                    'it': 'Città di 1 milione',
                    'pt': 'Uma cidade com mais de 1 milhão de habitantes.',
                    'es': 'Más de 1 millón',
                    'ru': 'город с населением в 1 миллион человек и выше'
                }
            },
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
                id: 102,
                key: 'scholar',
                translations: {
                    'en': 'School student',
                    'de': 'Schüler/in',
                    'pl': 'Uczeń',
                    'fr': 'Étudiant pré-universitaire',
                    'it': 'Studente di scuola',
                    'pt': 'Estudante',
                    'es': 'Estudiante de escuela.',
                    'ru': 'школьник'
                }
            },
            {
                id: 103,
                key: 'student',
                translations: {
                    'en': 'University student',
                    'de': 'Student/in',
                    'pl': 'Student',
                    'fr': 'Étudiant universitaire',
                    'it': 'Studente',
                    'pt': 'Estudante universitário',
                    'es': 'Estudiante universitario.',
                    'ru': 'студент'
                }
            },
            {
                id: 103,
                key: 'unemployed',
                translations: {
                    'en': 'Unemployed',
                    'de': 'Arbeitslose/r',
                    'pl': 'Bezrobotny',
                    'fr': 'Sans emploi',
                    'it': 'Disoccupati',
                    'pt': 'Desempregado',
                    'es': 'Desempleado.',
                    'ru': 'безработный'
                }
            },
            {
                id: 104,
                key: 'employee',
                translations: {
                    'en': 'Employee',
                    'de': 'Angestellte/r',
                    'pl': 'Pracownik',
                    'fr': 'À l’emploi',
                    'it': 'Dipendente',
                    'pt': 'Empregado',
                    'es': 'Empleado por cuenta ajena.',
                    'ru': 'работник'
                }
            },
            {
                id: 105,
                key: 'employer',
                translations: {
                    'en': 'Employer',
                    'de': 'Arbeitgeber/r',
                    'pl': 'Pracodawca',
                    'fr': 'Employeur',
                    'it': 'Datore di lavoro',
                    'pt': 'Empresário',
                    'es': 'Empresario.',
                    'ru': 'работодатель'
                }
            },
            {
                id: 106,
                key: 'freelancer',
                translations: {
                    'en': 'Freelancer - free profession',
                    'de': 'Freiberufler/in',
                    'pl': 'Freelancer - wolny zawód',
                    'fr': 'Travailleur autonome',
                    'it': 'Libero professionista - libera professione',
                    'pt': 'Trabalhador independente',
                    'es': 'Autónomo - profesional libre',
                    'ru': 'фрилансер - свободная профессия'
                }
            },
            {
                id: 107,
                key: 'pensioner',
                translations: {
                    'en': 'Pensioner',
                    'de': 'Rentner/in',
                    'pl': 'Emeryt/rencista',
                    'fr': 'Retraité',
                    'it': 'Pensionato',
                    'pt': 'Reformado',
                    'es': 'Jubilado',
                    'ru': 'пенсионер'
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
                id: 108,
                key: 'heterosexual',
                translations: {
                    'en': 'Heterosexual',
                    'de': 'Heterosexuell',
                    'pl': 'Heteroseksualna',
                    'fr': 'Hétérosexuel(le)',
                    'it': 'Eterosessuale',
                    'pt': 'Heterossexual',
                    'es': 'Heterosexual',
                    'ru': 'Гетеросексуал'
                }
            },
            {
                id: 109,
                key: 'homosexual',
                translations: {
                    'en': 'Homosexual',
                    'de': 'Homosexuell',
                    'pl': 'Homoseksualna',
                    'fr': 'Homosexuel(le)',
                    'it': 'Omosessuale',
                    'pt': 'Homossexual',
                    'es': 'Homosexual',
                    'ru': 'Гомосексуал'
                }
            },
            {
                id: 110,
                key: 'bisexual',
                translations: {
                    'en': 'Bisexual',
                    'de': 'Bisexuell',
                    'pl': 'Biseksualna',
                    'fr': 'Bisexuel(le)',
                    'it': 'Bisessuale',
                    'pt': 'Bissexual',
                    'es': 'Bisexual',
                    'ru': 'Бисексуал'
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
                id: 111,
                key: 'marriage',
                translations: {
                    'en': 'In marriage',
                    'de': 'In einer Ehe',
                    'pl': 'W małżeństwie dwupłciowym',
                    'fr': 'Marié(e)',
                    'it': 'In matrimonio',
                    'pt': 'Casado com alguém do sexo oposto',
                    'es': 'Casado',
                    'ru': 'В браке'
                }
            },
            {
                id: 112,
                key: 'same_sex_marriage',
                translations: {
                    'en': 'In a same-sex marriage',
                    'de': 'In einer gleichgeschlechtlichen Ehe',
                    'pl': 'W małżeństwie jednopłciowym',
                    'fr': 'Marié(e) avec un(e) partenaire de même sexe',
                    'it': 'In un matrimonio omosessuale',
                    'pt': 'Casado com alguém do mesmo sexo',
                    'es': 'En un matrimonio del mismo sexo',
                    'ru': 'В однополом браке'
                }
            },
            {
                id: 113,
                key: 'partnership',
                translations: {
                    'en': 'In a partnership',
                    'de': 'In einer Partnerschaft',
                    'pl': 'W związku partnerskim dwupłciowym',
                    'fr': 'En relation',
                    'it': 'In una coppia di fatto',
                    'pt': 'Em união de facto com alguém do sexo oposto',
                    'es': 'En una sociedad',
                    'ru': 'В партнерстве'
                }
            },
            {
                id: 114,
                key: 'same_sex_partnership',
                translations: {
                    'en': 'In a same-sex partnership',
                    'de': 'In einer gleichgeschlechtlichen Partnerschaft',
                    'pl': 'W związku partnerskim jednopłciowym',
                    'fr': 'En relation avec un(e) partenaire de même sexe',
                    'it': 'In una coppia di fatto dello stesso sesso',
                    'pt': 'Em união de facto com alguém do mesmo sexo',
                    'es': 'En pareja del mismo sexo',
                    'ru': 'В однополом партнерстве'
                }
            },
            {
                id: 115,
                key: 'relationship_hetero',
                translations: {
                    'en': 'In a heterosexual relationship',
                    'de': 'In einer heterosexuellen Beziehung',
                    'pl': 'W związku heteroseksualnym',
                    'fr': 'Dans une relation hétérosexuelle',
                    'it': 'In una relazione eterosessuale',
                    'pt': 'Numa relação heterossexual',
                    'es': 'En una relación heterosexual',
                    'ru': 'В гетеросексуальных отношениях'
                }
            },
            {
                id: 116,
                key: 'relationship_homo',
                translations: {
                    'en': 'In a homosexal relationship',
                    'de': 'In einer homosexuellen Beziehung',
                    'pl': 'W związku homoseksualnym',
                    'fr': 'Dans une relation homoosexuelle',
                    'it': 'In una relazione omosessuale',
                    'pt': 'Numa relação homossexual',
                    'es': 'En una relación homosexual',
                    'ru': 'В гомосексуальных отношениях'
                }
            },
            {
                id: 117,
                key: 'widower',
                translations: {
                    'en': 'Widow/widower',
                    'de': 'Witwe/r',
                    'pl': 'Wdowa/wdowiec',
                    'fr': 'Veuf(ve)',
                    'it': 'Vedova / Vedovo',
                    'pt': 'Viúvo(a)',
                    'es': 'Viudo',
                    'ru': 'Вдова/вдовец'
                }
            },
            {
                id: 118,
                key: 'single',
                translations: {
                    'en': 'Single',
                    'de': 'Single',
                    'pl': 'Singiel/-ka',
                    'fr': 'Célibataire',
                    'it': 'Singolo',
                    'pt': 'Solteiro(a)',
                    'es': 'Soltero',
                    'ru': 'Одинок/а'
                }
            },
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
                id: 119,
                key: 'only_closed',
                translations: {
                    'en': 'Only closed',
                    'de': 'ausschließlich geschlossen',
                    'pl': 'Tylko zamnknięte',
                    'fr': 'Seulement fermée(s)',
                    'it': 'Chiuse',
                    'pt': 'Fechadas',
                    'es': 'Solo cerrado',
                    'ru': 'только закрытыми'
                }
            },
            {
                id: 120,
                key: 'mostly_closed',
                translations: {
                    'en': 'Mostly closed',
                    'de': 'meistens geschlossen',
                    'pl': 'Przeważnie zamknięte',
                    'fr': 'Plutôt fermée(s)',
                    'it': 'Per lo più chiuse',
                    'pt': 'Maioritariamente fechadas',
                    'es': 'Mayormente cerrado',
                    'ru': 'преимущественно закрытыми'
                }
            },
            {
                id: 121,
                key: 'only_open',
                translations: {
                    'en': 'Only open',
                    'de': 'ausschließlich  offen',
                    'pl': 'Tylko otwarte',
                    'fr': 'Seulement ouverte(s)',
                    'it': 'Solo aperte',
                    'pt': 'Abertas',
                    'es': 'Solo abierto',
                    'ru': 'только открытыми'
                }
            },
            {
                id: 122,
                key: 'mostly_open',
                translations: {
                    'en': 'Mostly open',
                    'de': 'meistens offen',
                    'pl': 'Przeważnie otwarte',
                    'fr': 'Plutôt ouverte(s)',
                    'it': 'Per lo più aperte',
                    'pt': 'Maioritariamente abertas',
                    'es': 'Mayormente abierto',
                    'ru': 'преимущественно открытыми'
                }
            },
            {
                id: 123,
                key: 'hard_to_say',
                translations: {
                    'en': 'It\'s hard to say',
                    'de': 'es ist schwer zu sagen',
                    'pl': 'Ciężko powiedzieć',
                    'fr': 'C’est difficile à dire',
                    'it': 'È difficile da dire',
                    'pt': 'É complicado',
                    'es': 'Es difícil de decir',
                    'ru': 'сложно сказать'
                }
            }
        ]
    }
];

export default QUESTIONS;