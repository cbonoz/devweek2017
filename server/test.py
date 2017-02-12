import requests
import os
import json

url = "https://52.35.93.244:8443/api/1.0/slo/file-shares"
from requests.auth import HTTPBasicAuth
ONTAP_USER = os.environ.get("ONTAP_USER", 'admin')
ONTAP_PASS = os.environ.get("ONTAP_PASS", 'Password@123')
print(ONTAP_USER, ONTAP_PASS)
response = requests.get(url, auth=HTTPBasicAuth(ONTAP_USER, ONTAP_PASS), verify=False)
# print(response.text)
res = json.loads(response.text)
records = res['result']['records']
name = "Team_Olive"
for r in records:
    print(r['name'])
    if name in r['name']:
        print(r["storage_platform_resource_key"])