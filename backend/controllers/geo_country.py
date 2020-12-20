from functools import wraps
from datetime import datetime, timedelta
from flask import jsonify, make_response
from flask.globals import request
from flask_restful import Resource, reqparse
from flask_jwt_extended import (
    jwt_required, get_jwt_identity
)

from ..mongodb.models.geo_country import CountryDoc


class GeoCountryFetchCountries(Resource):
    def __init__(self) -> None:
        pass

    @jwt_required
    def post(self):
        return_code = 200
        resp = None
        countries = CountryDoc.objects()
        resp = jsonify(
            countries
        )

        return make_response(resp, return_code)


routeMap = [
    {'res': GeoCountryFetchCountries,
     'url': '/api/geo-location/fetch-countries'},
]
