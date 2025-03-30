import unittest
from app import app

class FlaskTestCase(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()

    def test_assess_endpoint(self):
        response = self.app.get('/assess?heartRate=80')
        self.assertEqual(response.status_code, 200)
        data = response.get_json()
        self.assertIn('risk', data)

    def test_vitals_endpoint(self):
        response = self.app.get('/vitals')
        self.assertEqual(response.status_code, 200)
        data = response.get_json()
        self.assertIn('vitals', data)

if __name__ == '__main__':
    unittest.main()
