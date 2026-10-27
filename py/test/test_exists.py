# LoppeeBusiness SDK exists test

import pytest
from loppeebusiness_sdk import LoppeeBusinessSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = LoppeeBusinessSDK.test(None, None)
        assert testsdk is not None
