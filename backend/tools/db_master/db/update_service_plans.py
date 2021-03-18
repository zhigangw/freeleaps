from .replace_records import replace_records


def update_service_plans():
    r = [
        {
            'name': 'Basic',
            'description': '',
            'limitOfPostRequests': -1,
            'limitOfQuoteRequests': -1,
            'limitOfReachout': -1,
            'codeMangagement': -1,
            'collabration': 'github.com',
            'price': 11.99,
        },
    ]

    replace_records('service_plans_doc', r)
