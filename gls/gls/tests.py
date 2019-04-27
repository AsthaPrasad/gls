import pytest

@pytest.mark.django_db
class TestHome:

    def test_home_view(self, client):
        response = client.get('/index')
        assert response.status_code == 200

    def test_json_call(self, client):
        response = client.get('/static/json/guide.json')
        assert response.status_code == 200