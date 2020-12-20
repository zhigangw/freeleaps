from .user_auth import routeMap as ua_route
from .request_post import routeMap as rp_route
from .request_quote import routeMap as rq_route
from .user_profile import routeMap as up_route
from .personal_profile import routeMap as pp_route
from .career_profile import routeMap as cp_route
from .seller_profile import routeMap as sp_route
from .work_profile import routeMap as wp_route
from .project_manage import routeMap as pm_route
from .geo_country import routeMap as gc_route
from .job_role import routeMap as jr_route


controllerMap = [
    *ua_route,
    *rp_route,
    *rq_route,
    *up_route,
    *pp_route,
    *cp_route,
    *sp_route,
    *wp_route,
    *pm_route,
    *gc_route,
    *jr_route,
]
