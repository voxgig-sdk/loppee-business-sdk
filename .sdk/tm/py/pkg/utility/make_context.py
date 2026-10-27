# LoppeeBusiness SDK utility: make_context

from projectname_sdk.core.context import LoppeeBusinessContext


def make_context_util(ctxmap, basectx):
    return LoppeeBusinessContext(ctxmap, basectx)
