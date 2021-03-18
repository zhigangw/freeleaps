#!/usr/bin/env python3

from db.update_countries import update_countries
from db.update_job_roles import update_job_roles
from db.update_service_plans import update_service_plans


def main():
    update_countries()
    update_job_roles()
    update_service_plans()

if __name__ == '__main__':
    main()