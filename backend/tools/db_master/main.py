#!/usr/bin/env python3

from db.update_countries import update_countries
from db.update_job_roles import update_job_roles


def main():
    update_countries()
    update_job_roles()

if __name__ == '__main__':
    main()