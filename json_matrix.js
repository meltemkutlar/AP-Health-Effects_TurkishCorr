// LUDOK Data
//
// Dr. Carl GmbH 2020

arrNoxen = [
    {
        "id": 1,
        "noxe_de": "Feinstaub",
        "noxe_en": "Particulate matter",
        "noxe_fr": "Poussières fines",
        "noxe_it": "Polveri sottili",
        "noxe_tr": "Partikül Madde",
    },
    {
        "id": 2,
        "noxe_de": "Ozon",
        "noxe_en": "Ozone",
        "noxe_fr": "Ozone",
        "noxe_it": "Ozono",
        "noxe_tr": "Ozon",
    },
    {
        "id": 3,
        "noxe_de": "Stickstoffdioxid",
        "noxe_en": "Nitrogen dioxide",
        "noxe_fr": "Dioxyde d'azote",
        "noxe_it": "Diossido di azoto",
        "noxe_tr": "Azot dioksit",
    },
    {
        "id": 4,
        "noxe_de": "Schwefeldioxid",
        "noxe_en": "Sulphur dioxide",
        "noxe_fr": "Dioxyde de soufre",
        "noxe_it": "Anidride solforosa",
        "noxe_tr": "Sülfür dioksit",
    },
    {
        "id": 5,
        "noxe_de": "Kohlenmonoxid",
        "noxe_en": "Carbon monoxide",
        "noxe_fr": "Monoxyde de carbone",
        "noxe_it": "Monossido di carbonio",
        "noxe_tr": "Karbonmonoksit",
    }
];


arrOrgane = [
    {
        "id": 1,
        "organ": "Atemwege",
        "organ_de": "Atemwege",
        "organ_en": "Respiratory system",
        "organ_fr": "Voies respiratoires",
        "organ_it": "Vie respiratorie",
        "organ_tr": "Solunum sistemi",
    },
    {
        "id": 2,
        "organ": "Herz",
        "organ_de": "Herz-/Kreislaufsystem",
        "organ_en": "Cardiovascular system",
        "organ_fr": "Système cardiovasculaire",
        "organ_it": "Sistema cardiovascolare",
        "organ_tr": "Kardiyovasküler sistem",
    },
    {
        "id": 3,
        "organ": "Nervensystem",
        "organ_de": "Nervensystem",
        "organ_en": "Nervous system",
        "organ_fr": "Système nerveux",
        "organ_it": "Sistema nervoso",
        "organ_tr": "Sinir sistemi",
    },
    {
        "id": 4,
        "organ": "Stoffwechsel",
        "organ_de": "Stoffwechsel/Immunsystem",
        "organ_en": "Metabolism/Immune system",
        "organ_fr": "Métabolisme/système immunitaire",
        "organ_it": "Metabolismo/sistema immunitario",
        "organ_tr": "Metabolizma/Bağışıklık sistemi",
    },
    {
        "id": 5,
        "organ": "Sterblichkeit",
        "organ_de": "Sterblichkeit",
        "organ_en": "Mortality",
        "organ_fr": "Mortalité",
        "organ_it": "Mortalità",
        "organ_tr": "Ölüm",
    },
    {
        "id": 6,
        "organ": "Notfaelle",
        "organ_de": "Notfälle",
        "organ_en": "Emergency",
        "organ_fr": "Urgences",
        "organ_it": "Emergenze",
        "organ_tr": "Acil durumlar",
    }
];


arrEffekte = [
    {
        "id": 1,
        "effekt_de": "Asthma",
        "effekt_en": "Asthma",
        "effekt_fr": "Asthme",
        "effekt_it": "Asma",
        "effekt_tr": "Astım",
        "organ": "Atemwege"
    },
    {
        "id": 2,
        "effekt_de": "Atemwegssymptome, z.B. pfeifende Atmung",
        "effekt_en": "Respiratory/airway symptoms e.g. wheeze",
        "effekt_fr": "Symptômes des voies respira&shy;toires, p. ex. respiration sifflante",
        "effekt_it": "Sintomi respiratori, ad es. respiro sibilante",
        "effekt_tr": "Solunum/solunum yolu semptomları örn. Hırıltı",
        "organ": "Atemwege"
    },
    {
        "id": 3,
        "effekt_de": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_en": "Exacerbation  of the disease, increase in symptoms or medication in patients with asthma",
        "effekt_fr": "Aggravation de la maladie, augmentation des symptômes ou du traitement chez les patients asthmatiques",
        "effekt_it": "Peggioramento della malattia, più sintomi o farmaci nei pazienti con asma",
        "effekt_tr": "Astımlı hastalarda hastalığın alevlenmesi, semptomların artması veya ilaç tedavisi",
        "organ": "Atemwege"
    },
    {
        "id": 4,
        "effekt_de": "Lungenfunktion verringert bei Patienten mit Asthma",
        "effekt_en": "Lung function decline in patients with asthma",
        "effekt_fr": "Fonction pulmonaire réduite chez les patients asthmatiques",
        "effekt_it": "Funzione polmonare ridotta nei pazienti con asma",
        "effekt_tr": "Astımlı hastalarda akciğer fonksiyonlarında azalma",
        "organ": "Atemwege"
    },
    {
        "id": 5,
        "effekt_de": "Verschlechterung der Erkrankung oder mehr Symptome bei Patienten mit COPD",
        "effekt_en": "Worsening of the disease or increase in symptoms in patients with COPD",
        "effekt_fr": "Aggravation de la maladie ou aug&shy;mentation des symptômes chez les patients atteints de BPCO",
        "effekt_it": "Peggioramento della malattia o più sintomi in pazienti con COPD",
        "effekt_tr": "KOAH hastalarında hastalığın kötüleşmesi veya semptomların artması",
        "organ": "Atemwege"
    },
    {
        "id": 6,
        "effekt_de": "Mehr Symptome bei Allergikern",
        "effekt_en": "Increase in symptoms for allergy patients",
        "effekt_fr": "Augmentation des symptômes chez les personnes allergiques",
        "effekt_it": "Più sintomi per chi soffre di allergie",
        "effekt_tr": "Alerji hastalarında semptomlarda artış",
        "organ": "Atemwege"
    },
    {
        "id": 7,
        "effekt_de": "Chronische Bronchitis",
        "effekt_en": "Chronic bronchitis",
        "effekt_fr": "Bronchite chronique",
        "effekt_it": "Bronchite cronica",
        "effekt_tr": "Kronik bronşit",
        "organ": "Atemwege"
    },
    {
        "id": 8,
        "effekt_de": "Lungenfunktion verringert",
        "effekt_en": "Lung function decline",
        "effekt_fr": "Réduction de la fonction pulmonaire",
        "effekt_it": "Funzione polmonare ridotta",
        "effekt_tr": "Akciğer fonksiyonunda azalma",
        "organ": "Atemwege"
    },
    {
        "id": 9,
        "effekt_de": "Lungenwachstum verringert",
        "effekt_en": "Impaired Lung growth",
        "effekt_fr": "Réduction de la croissance des poumons",
        "effekt_it": "Crescita polmonare ridotta",
        "effekt_tr": "Uyumsuz akciğer büyümesi",
        "organ": "Atemwege"
    },
    {
        "id": 10,
        "effekt_de": "Beschleunigte Abnahme der Lungenfunktion",
        "effekt_en": "Accelerated decline in lung function",
        "effekt_fr": "Accélération de la diminution de la fonction pulmonaire",
        "effekt_it": "Riduzione accelerata della funzione polmonare",
        "effekt_tr": "Akciğer fonksiyonunda hızlı düşüş",
        "organ": "Atemwege"
    },
    {
        "id": 33,
        "effekt_de": "Bronchitis",
        "effekt_en": "Bronchitis",
        "effekt_fr": "Bronchite",
        "effekt_it": "Bronchite",
        "effekt_tr": "Bronşit",
        "organ": "Atemwege"
    },
    {
        "id": 11,
        "effekt_de": "Entzündung der Atemwege, entzündliche Reaktion",
        "effekt_en": "Airway/respiratory inflammation, inflammatory reaction",
        "effekt_fr": "Inflammation des voies respira&shy;toires, réaction inflammatoire",
        "effekt_it": "Infiammazione delle vie aeree, reazione infiammatoria",
        "effekt_tr": "Hava yolu/solunum iltihabı, inflamatuar reaksiyon",
        "organ": "Atemwege"
    },
    {
        "id": 12,
        "effekt_de": "Entstehung von Lungenkrebs",
        "effekt_en": "Development of lung cancer",
        "effekt_fr": "Développement d’un cancer du poumon",
        "effekt_it": "Sviluppo di cancro ai polmoni",
        "effekt_tr": "Akciğer kanseri gelişimi",
        "organ": "Atemwege"
    },
    {
        "id": 13,
        "effekt_de": "Arteriosklerose",
        "effekt_en": "Atherosclerosis",
        "effekt_fr": "Artériosclérose",
        "effekt_it": "Arteriosclerosi",
        "effekt_tr": "Koroner arter hastalığı",
        "organ": "Herz"
    },
    {
        "id": 14,
        "effekt_de": "Bluthochdruck",
        "effekt_en": "Hypertension",
        "effekt_fr": "Hypertension artérielle",
        "effekt_it": "Ipertensione arteriosa",
        "effekt_tr": "Kan basıncı, hipertansiyon",
        "organ": "Herz"
    },
    {
        "id": 15,
        "effekt_de": "Herzrhythmusvariabilität",
        "effekt_en": "Arrhythmia",
        "effekt_fr": "Arythmies cardiaques",
        "effekt_it": "Variabilità della frequenza cardiaca",
        "effekt_tr": "Aritmi",
        "organ": "Herz"
    },
    {
        "id": 16,
        "effekt_de": "Blutgerinnung",
        "effekt_en": "Blood coagulation",
        "effekt_fr": "Coagulation du sang",
        "effekt_it": "Coagulazione del sangue",
        "effekt_tr": "Kan pıhtılaşması",
        "organ": "Herz"
    },
    {
        "id": 17,
        "effekt_de": "Zucker- und Fettstoffwechsel&shy;störungen/-erkrankungen (z.B. Diabetes)",
        "effekt_en": "Sugar- and metabolic disorders/diseases (e.g. diabetes)",
        "effekt_fr": "Troubles/maladies du métabolisme des sucres et des graisses (p. ex., diabète)",
        "effekt_it": "Disturbi/malattie del metabolismo degli zuccheri e dei grassi (ad es. diabete)",
        "effekt_tr": "Şeker ve metabolik bozukluklar/hastalıklar (örn. Diyabet)",
        "organ": "Stoffwechsel"
    },
    {
        "id": 19,
        "effekt_de": "Verringerte Immunabwehr",
        "effekt_en": "Decline in immune defence",
        "effekt_fr": "Réduction des défenses immunitaires",
        "effekt_it": "Difesa immunitaria ridotta",
        "effekt_tr": "Bağışıklık ve savunma sisteminde azalma",
        "organ": "Stoffwechsel"
    },
    {
        "id": 20,
        "effekt_de": "Gehirnvolumen (Weisse Masse) reduziert",
        "effekt_en": "Brain volume (white matter) decline",
        "effekt_fr": "Réduction du volume du cerveau (masse blanche)",
        "effekt_it": "Volume del cervello (massa bianca) ridotto",
        "effekt_tr": "Beyin hacminde (beyaz madde) azalma",
        "organ": "Nervensystem"
    },
    {
        "id": 21,
        "effekt_de": "Abnahme der kognitiven Leistung (Demenz)",
        "effekt_en": "Cognitive performance decline (dementia)",
        "effekt_fr": "Diminution des performances cognitives (démence)",
        "effekt_it": "Diminuzione delle prestazioni cognitive (demenza)",
        "effekt_tr": "Bilişsel performans düşüşü (demans)",
        "organ": "Nervensystem"
    },
    {
        "id": 22,
        "effekt_de": "Krankheitsbedingte Sterblichkeit",
        "effekt_en": "Non-accidental mortality",
        "effekt_fr": "Mortalité due à la maladie",
        "effekt_it": "Mortalità dovuta a malattia ",
        "effekt_tr": "Kaza kaynaklı olmayan ölüm",
        "organ": "Sterblichkeit"
    },
    {
        "id": 23,
        "effekt_de": "Sterblichkeit wegen Herz-/Kreislaufkrankheiten",
        "effekt_en": "Mortality due to cardiovascular disease",
        "effekt_fr": "Mortalité due à des maladies cardiovasculaires",
        "effekt_it": "Mortalità dovuta a malattie cardiovascolari",
        "effekt_tr": "Kardiyovasküler kaynaklı ölüm",
        "organ": "Sterblichkeit"
    },
    {
        "id": 24,
        "effekt_de": "Sterblichkeit wegen Atemwegserkrankungen",
        "effekt_en": "Mortality due to respiratory diseases",
        "effekt_fr": "Mortalité due à des maladies des voies respiratoires",
        "effekt_it": "Mortalità a causa di malattie respiratorie",
        "effekt_tr": "Solunum hastalıkları kaynaklı ölüm",
        "organ": "Sterblichkeit"
    },
    {
        "id": 25,
        "effekt_de": "Sterblichkeit wegen Asthma",
        "effekt_en": "Mortality due to asthma",
        "effekt_fr": "Mortalité due à l'asthme",
        "effekt_it": "Mortalità a causa di asma",
        "effekt_tr": "Ölüm: astım",
        "organ": "Sterblichkeit"
    },
    {
        "id": 26,
        "effekt_de": "Sterblichkeit wegen COPD",
        "effekt_en": "Mortality due to COPD",
        "effekt_fr": "Mortalité due à la BPCO",
        "effekt_it": "Mortalità a causa di COPD",
        "effekt_tr": "Ölüm: KOAH",
        "organ": "Sterblichkeit"
    },
    {
        "id": 27,
        "effekt_de": "Sterblichkeit wegen Lungenkrebs",
        "effekt_en": "Mortality due to lung cancer",
        "effekt_fr": "Mortalité due au cancer du poumon",
        "effekt_it": "Mortalità a causa di cancro ai polmoni",
        "effekt_tr": "Ölüm: akciğer kanseri",
        "organ": "Sterblichkeit"
    },
    {
        "id": 28,
        "effekt_de": "Sterblichkeit wegen Atemwegsinfektionen",
        "effekt_en": "Mortality due to respiratory (tract) infection",
        "effekt_fr": "Mortalité due aux infections des voies respiratoires",
        "effekt_it": "Mortalità a causa di infezioni delle vie respiratorie",
        "effekt_tr": "Ölüm: solunum yolu enfeksiyonu",
        "organ": "Sterblichkeit"
    },
    {
        "id": 29,
        "effekt_de": "Notfälle wegen Atemwegserkrankungen",
        "effekt_en": "Emergency due to respiratory diseases",
        "effekt_fr": "Urgences dues à des maladies respiratoires",
        "effekt_it": "Emergenze a causa di malattie respiratorie",
        "effekt_tr": "Solunum hastalıkları kaynaklı acil durum",
        "organ": "Notfaelle"
    },
    {
        "id": 30,
        "effekt_de": "Notfälle wegen Asthma",
        "effekt_en": "Emergency due to asthma",
        "effekt_fr": "Urgences dues à l'asthme",
        "effekt_it": "Emergenze a causa di asma",
        "effekt_tr": "Astım kaynaklı acil durum",
        "organ": "Notfaelle"
    },
    {
        "id": 31,
        "effekt_de": "Notfälle wegen COPD",
        "effekt_en": "Emergency due to COPD",
        "effekt_fr": "Urgences dues à la BPCO",
        "effekt_it": "Emergenze a causa di COPD",
        "effekt_tr": "KOAH kaynaklı acil durum",
        "organ": "Notfaelle"
    },
    {
        "id": 32,
        "effekt_de": "Notfälle wegen Herz-/Kreislaufkrankheiten",
        "effekt_en": "Emergency due to cardiovascular diseases",
        "effekt_fr": "Urgences dues aux maladies cardiovasculaires",
        "effekt_it": "Emergenze a causa di malattie cardiovascolari",
        "effekt_tr": "Kardiyovasküler hastalıklar kaynaklı acil durum",
        "organ": "Notfaelle"
    }
];


arrMatrix = [
    {
        "id": 1011,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Asthma",
        "effekt_typ": "L"
    },
    {
        "id": 1012,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Atemwegssymptome, z.B. pfeifende Atmung",
        "effekt_typ": "L"
    },
    {
        "id": 1013,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_typ": "L"
    },
    {
        "id": 1014,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Lungenwachstum verringert",
        "effekt_typ": "L"
    },
    {
        "id": 1015,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Beschleunigte Abnahme der Lungenfunktion",
        "effekt_typ": "L"
    },
    {
        "id": 1019,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Bronchitis",
        "effekt_typ": "L"
    },
    {
        "id": 1016,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Entzündung der Atemwege, entzündliche Reaktion",
        "effekt_typ": "L",
        "effekt_zusatz_de": "(Kinder)",
        "effekt_zusatz_en": "(children)",
        "effekt_zusatz_fr": "(l'enfant)",
        "effekt_zusatz_it": "(bambini)",
        "effekt_zusatz_tr": "(çocuklar)",
    },
    {
        "id": 1017,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Entstehung von Lungenkrebs",
        "effekt_typ": "L"
    },
    {
        "id": 1018,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Lungenfunktion verringert",
        "effekt_typ": "L"
    },

    {
        "id": 1021,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Herz",
        "effekt": "Arteriosklerose",
        "effekt_typ": "C"
    },
    {
        "id": 1022,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Herz",
        "effekt": "Bluthochdruck",
        "effekt_typ": "C"
    },
    {
        "id": 1023,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Herz",
        "effekt": "Herzrhythmusvariabilität",
        "effekt_typ": "C"
    },
    {
        "id": 1024,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Herz",
        "effekt": "Blutgerinnung",
        "effekt_typ": "C"
    },

    {
        "id": 1031,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Nervensystem",
        "effekt": "Gehirnvolumen (Weisse Masse) reduziert",
        "effekt_typ": "L"
    },
    {
        "id": 1032,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Nervensystem",
        "effekt": "Abnahme der kognitiven Leistung (Demenz)",
        "effekt_typ": "L"
    },

    {
        "id": 1051,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Sterblichkeit",
        "effekt": "Krankheitsbedingte Sterblichkeit",
        "effekt_typ": "C"
    },
    {
        "id": 1052,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Sterblichkeit",
        "effekt": "Sterblichkeit wegen Herz-/Kreislaufkrankheiten",
        "effekt_typ": "C"
    },
    {
        "id": 1053,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Sterblichkeit",
        "effekt": "Sterblichkeit wegen Atemwegserkrankungen",
        "effekt_typ": "C",
        "effekt_zusatz_de": "(kardiopulmonär)",
        "effekt_zusatz_en": "(cardiopulmonary)",
        "effekt_zusatz_fr": "(cardiopulmonaire)",
        "effekt_zusatz_it": "(cardiopolmonare)",
        "effekt_zusatz_tr": "(kardiyopulmoner)",
    },
    {
        "id": 1054,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Sterblichkeit",
        "effekt": "Sterblichkeit wegen Asthma",
        "effekt_typ": "L"
    },
    {
        "id": 1055,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Sterblichkeit",
        "effekt": "Sterblichkeit wegen COPD",
        "effekt_typ": "L"
    },
    {
        "id": 1056,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Sterblichkeit",
        "effekt": "Sterblichkeit wegen Lungenkrebs",
        "effekt_typ": "C"
    },
    {
        "id": 1057,
        "noxe": "Feinstaub",
        "noxe_zeit": "L",
        "organ": "Sterblichkeit",
        "effekt": "Sterblichkeit wegen Atemwegsinfektionen",
        "effekt_typ": "L"
    },

    {
        "id": 2011,
        "noxe": "Ozon",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Asthma",
        "effekt_typ": "L"
    },
    {
        "id": 2012,
        "noxe": "Ozon",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_typ": "L"
    },
    {
        "id": 2013,
        "noxe": "Ozon",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Mehr Symptome bei Allergikern",
        "effekt_typ": "L"
    },
    /*
    {"id": 2041,
    "noxe": "Ozon",
    "noxe_zeit": "L",
    "organ": "Stoffwechsel",
    "effekt": "Zucker- und Fettstoffwechsel&shy;störungen/-erkrankungen (z.B. Diabetes)",
    "effekt_typ": "L"
    },
    {"id": 2051,
    "noxe": "Ozon",
    "noxe_zeit": "L",
    "organ": "Sterblichkeit",
    "effekt": "Sterblichkeit wegen Atemwegserkrankungen",
    "effekt_typ": "L"
    },
    {"id": 2061,
    "noxe": "Ozon",
    "noxe_zeit": "L",
    "organ": "Notfaelle",
    "effekt": "Notfälle wegen Asthma",
    "effekt_typ": "L"
    },
  */

    {
        "id": 3011,
        "noxe": "Stickstoffdioxid",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Asthma",
        "effekt_typ": "L"
    },
    {
        "id": 3012,
        "noxe": "Stickstoffdioxid",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_typ": "L"
    },
    {
        "id": 3013,
        "noxe": "Stickstoffdioxid",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Chronische Bronchitis",
        "effekt_typ": "L"
    },
    {
        "id": 3014,
        "noxe": "Stickstoffdioxid",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Lungenfunktion verringert",
        "effekt_typ": "L"
    },
    {
        "id": 3015,
        "noxe": "Stickstoffdioxid",
        "noxe_zeit": "L",
        "organ": "Atemwege",
        "effekt": "Lungenwachstum verringert",
        "effekt_typ": "L"
    },

// Kurzzeit

    {
        "id": 1111,
        "noxe": "Feinstaub",
        "noxe_zeit": "K",
        "organ": "Atemwege",
        "effekt": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_typ": "L"
    },
    {
        "id": 1112,
        "noxe": "Feinstaub",
        "noxe_zeit": "K",
        "organ": "Atemwege",
        "effekt": "Verschlechterung der Erkrankung oder mehr Symptome bei Patienten mit COPD",
        "effekt_typ": "L"
    },
    {
        "id": 1113,
        "noxe": "Feinstaub",
        "noxe_zeit": "K",
        "organ": "Atemwege",
        "effekt": "Lungenfunktion verringert",
        "effekt_typ": "L"
    },
    {
        "id": 1114,
        "noxe": "Feinstaub",
        "noxe_zeit": "K",
        "organ": "Atemwege",
        "effekt": "Entzündung der Atemwege, entzündliche Reaktion",
        "effekt_typ": "L"
    },
    {
        "id": 1121,
        "noxe": "Feinstaub",
        "noxe_zeit": "K",
        "organ": "Herz",
        "effekt": "Bluthochdruck",
        "effekt_typ": "C"
    },
    {
        "id": 1122,
        "noxe": "Feinstaub",
        "noxe_zeit": "K",
        "organ": "Herz",
        "effekt": "Herzrhythmusvariabilität",
        "effekt_typ": "C"
    },
    {
        "id": 1141,
        "noxe": "Feinstaub",
        "noxe_zeit": "K",
        "organ": "Stoffwechsel",
        "effekt": "Verringerte Immunabwehr",
        "effekt_typ": "L"
    },
    {
        "id": 1151,
        "noxe": "Feinstaub",
        "noxe_zeit": "K",
        "organ": "Sterblichkeit",
        "effekt": "Krankheitsbedingte Sterblichkeit",
        "effekt_typ": "C"
    },
    {
        "id": 1152,
        "noxe": "Feinstaub",
        "noxe_zeit": "K",
        "organ": "Sterblichkeit",
        "effekt": "Sterblichkeit wegen Herz-/Kreislaufkrankheiten",
        "effekt_typ": "C"
    },
    {
        "id": 1153,
        "noxe": "Feinstaub",
        "noxe_zeit": "K",
        "organ": "Sterblichkeit",
        "effekt": "Sterblichkeit wegen Atemwegserkrankungen",
        "effekt_typ": "L"
    },
    {
        "id": 1161,
        "noxe": "Feinstaub",
        "noxe_zeit": "K",
        "organ": "Notfaelle",
        "effekt": "Notfälle wegen Atemwegserkrankungen",
        "effekt_typ": "L"
    },
    {
        "id": 1162,
        "noxe": "Feinstaub",
        "noxe_zeit": "K",
        "organ": "Notfaelle",
        "effekt": "Notfälle wegen COPD",
        "effekt_typ": "L"
    },
    {
        "id": 1163,
        "noxe": "Feinstaub",
        "noxe_zeit": "K",
        "organ": "Notfaelle",
        "effekt": "Notfälle wegen Herz-/Kreislaufkrankheiten",
        "effekt_typ": "C"
    },

    {
        "id": 2111,
        "noxe": "Ozon",
        "noxe_zeit": "K",
        "organ": "Atemwege",
        "effekt": "Atemwegssymptome, z.B. pfeifende Atmung",
        "effekt_typ": "C"
    },
    {
        "id": 2112,
        "noxe": "Ozon",
        "noxe_zeit": "K",
        "organ": "Atemwege",
        "effekt": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_typ": "C"
    },
    {
        "id": 2113,
        "noxe": "Ozon",
        "noxe_zeit": "K",
        "organ": "Atemwege",
        "effekt": "Lungenfunktion verringert",
        "effekt_typ": "C"
    },
    {
        "id": 2114,
        "noxe": "Ozon",
        "noxe_zeit": "K",
        "organ": "Atemwege",
        "effekt": "Entzündung der Atemwege, entzündliche Reaktion",
        "effekt_typ": "C"
    },
    {
        "id": 2141,
        "noxe": "Ozon",
        "noxe_zeit": "K",
        "organ": "Stoffwechsel",
        "effekt": "Zucker- und Fettstoffwechsel&shy;störungen/-erkrankungen (z.B. Diabetes)",
        "effekt_typ": "L"
    },
    {
        "id": 2161,
        "noxe": "Ozon",
        "noxe_zeit": "K",
        "organ": "Notfaelle",
        "effekt": "Notfälle wegen Atemwegserkrankungen",
        "effekt_typ": "C"
    },
    {
        "id": 2162,
        "noxe": "Ozon",
        "noxe_zeit": "K",
        "organ": "Notfaelle",
        "effekt": "Notfälle wegen Asthma",
        "effekt_typ": "C"
    },
    {
        "id": 2163,
        "noxe": "Ozon",
        "noxe_zeit": "K",
        "organ": "Notfaelle",
        "effekt": "Notfälle wegen COPD",
        "effekt_typ": "C"
    },

    {
        "id": 3111,
        "noxe": "Stickstoffdioxid",
        "noxe_zeit": "K",
        "organ": "Atemwege",
        "effekt": "Atemwegssymptome, z.B. pfeifende Atmung",
        "effekt_typ": "C"
    },
    {
        "id": 3112,
        "noxe": "Stickstoffdioxid",
        "noxe_zeit": "K",
        "organ": "Atemwege",
        "effekt": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_typ": "C"
    },
    {
        "id": 3113,
        "noxe": "Stickstoffdioxid",
        "noxe_zeit": "K",
        "organ": "Atemwege",
        "effekt": "Lungenfunktion verringert bei Patienten mit Asthma",
        "effekt_typ": "C"
    },
    {
        "id": 3151,
        "noxe": "Stickstoffdioxid",
        "noxe_zeit": "K",
        "organ": "Sterblichkeit",
        "effekt": "Sterblichkeit wegen Atemwegserkrankungen",
        "effekt_typ": "C"
    },
    {
        "id": 3161,
        "noxe": "Stickstoffdioxid",
        "noxe_zeit": "K",
        "organ": "Notfaelle",
        "effekt": "Notfälle wegen Asthma",
        "effekt_typ": "C"
    },

    {
        "id": 4111,
        "noxe": "Schwefeldioxid",
        "noxe_zeit": "K",
        "organ": "Atemwege",
        "effekt": "Verschlechterung der Erkrankung, mehr Symptome oder Medikation bei Patienten mit Asthma",
        "effekt_typ": "C"
    },
    {
        "id": 4112,
        "noxe": "Schwefeldioxid",
        "noxe_zeit": "K",
        "organ": "Atemwege",
        "effekt": "Lungenfunktion verringert bei Patienten mit Asthma",
        "effekt_typ": "C"
    },
    {
        "id": 4113,
        "noxe": "Schwefeldioxid",
        "noxe_zeit": "K",
        "organ": "Atemwege",
        "effekt": "Lungenfunktion verringert",
        "effekt_typ": "C",
        "effekt_zusatz_de": "(Empfindliche Personen)",
        "effekt_zusatz_en": "(Susceptible persons)",
        "effekt_zusatz_fr": "(personnes sensibles)",
        "effekt_zusatz_it": "(persone sensibili)",
        "effekt_zusatz_tr": "(duyarlı kişiler)",
    },
    {
        "id": 4151,
        "noxe": "Schwefeldioxid",
        "noxe_zeit": "K",
        "organ": "Sterblichkeit",
        "effekt": "Sterblichkeit wegen Atemwegserkrankungen",
        "effekt_typ": "C"
    },
    {
        "id": 4161,
        "noxe": "Schwefeldioxid",
        "noxe_zeit": "K",
        "organ": "Notfaelle",
        "effekt": "Notfälle wegen Asthma",
        "effekt_typ": "C",
        "effekt_zusatz_de": "(Kinder, 65+)",
        "effekt_zusatz_en": "(children, 65 years and older)",
        "effekt_zusatz_fr": "(enfants, 65+/personnes âgées)",
        "effekt_zusatz_it": "(bambini, 65+/gli anziani)",
        "effekt_zusatz_tr": "(çocuk, 65+/yaşlı)",
    },

    {
        "id": 5161,
        "noxe": "Kohlenmonoxid",
        "noxe_zeit": "K",
        "organ": "Notfaelle",
        "effekt": "Notfälle wegen Herz-/Kreislaufkrankheiten",
        "effekt_typ": "L"
    }

];
