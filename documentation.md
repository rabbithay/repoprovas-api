# doc

## post /exams

    [
        {
            "title": "2020.1",
            "category": "P1",
            "subject": "física I",
            "teacher": "karina silva",
            "link": ""
        }
    ]

## get /subjects

    [
        {
            "id": 1,
            "title": "fisica I",
            "semester": 1,
            "teachers": [
                {
                    "id": 1,
                    "name": "karina silva"
                }
            ]
        }
    ]

## get /teachers

    [
        {
            "id": 1,
            "name": "karina silva",
            "examAmount": 8
        }
    ]

## get /exams

    [
        {
            "id": 1
            "title": "2020.1",
            "category": "P1",
            "subject": "física I",
            "teacher": "karina silva",
            "link": ""
        }
    ]

## get /subjects/:id

    {
        "title": "fisica I",
        "exams": [
            {
                "id": 1
                "title": "2020.1",
                "category": "P1",
                "teacher": "karina silva",
                "link": ""
            }
        ]
    }

## get /teachers/:id

    {
        "name": "karina silva",
        "exams": [
            {
                "id": 1
                "title": "2020.1",
                "category": "P1",
                "subject": "física I",
                "link": ""
            }
        ]
    }
