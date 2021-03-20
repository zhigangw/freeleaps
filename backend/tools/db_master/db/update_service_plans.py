from .replace_records import replace_records


def update_service_plans():
    r = [
        {
            'name': 'Basic',
            'description': 'Enable all features needed for your work in freeleaps',
            'codeMangagement': {
                'name': 'github',
                'description': 'githut team plan',
                'serviceProvider': 'github',
                'entryUrl':'https://github.com/',
            },
            'collabration': {
                'name': 'Microsoft 365 Basic',
                'description': 'githut team plan',
                'serviceProvider': 'Microsoft',
                'entryUrl':'https://login.microsoftonline.com/?whr=freeleaps.com'
            },
            'priceTag': {
                'name': '$11.99',
                'price': 11.99,
                'currency': 'USD'
            },
            'paymentPlan': {
                'name': 'monthly',
                'recurring': 'monthly',
                'renew': 'auto'
            },
            'reachoutPlan': {
                'name': 'Unlimited',
                'limitOfPostRequests': -1,
                'limitOfQuoteRequests': -1,
                'limitOfReachout': -1,
            }
        },
    ]

    replace_records('service_plans_doc', r)
