from .replace_records import replace_records

def update_job_roles():
    r = [
        {'name': 'Engineering Manager', 'description': ''},
        {'name': 'Recrutier', 'description': ''},
        {'name': 'Product Engineer', 'description': ''},
        {'name': 'Product Designer', 'description': ''},
        {'name': 'Project Manager', 'description': ''},
        {'name': 'Software Developer', 'description': ''},
        {'name': 'Software Tester', 'description': ''},
        {'name': 'UX Designer', 'description': ''}
    ]

    replace_records('JobRoleDoc', r)
