from .replace_records import replace_records


def update_service_plans():
    r = [
        {
            'name': 'Basic',
            'description': 'Enable all features needed for your work in freeleaps',
            'limitOfPostRequests': -1,
            'limitOfQuoteRequests': -1,
            'limitOfReachout': -1,
            'codeMangagement': {
                'name': 'github',
                'description': 'githut team plan',
                'serviceProvider': 'github.com',
            },
            'collabration': {
                'name': 'Microsoft 365 Basic',
                'description': 'githut team plan',
                'serviceProvider': 'github.com',
            },
            'priceTag': {
                'name': 'base',
                'price': 11.99,
                'currency': 'USD'
            },
            'paymentPlan':{
                'name': 'month',
                'recurring': 'monthly',
                'renew': 'auto'
            }
        },
    ]

    replace_records('service_plans_doc', r)
