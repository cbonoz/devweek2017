"""netapp.py

This module handles key tracking and instance managment of active NetApp OnTap Cloud instances. 

As a developer or dev ops engineer, I don't want to have to manually worry about tracking authentication keys for different API requests. It can be complicated, and require additional manual labor in order to parse and extract (such as the steps described in the power point document). This class takes a list of your NetApp Cloud instances and automatically retrieves the useful parameters for tracking your cluster.

"""

import os
import requests
import json
from requests.auth import HTTPBasicAuth

# ============================
# === YOUR CONFIG SETTINGS ===
# ============================

# Assuming the user knows what instance names and volumes are going to either be used within the load balancer for their application cluster, we can automatically extract the necessary configs to do instant snap mirroring to new instances in response to an event.

# TODO: Support loading these settings from a csv file.
ONTAP_INSTANCES = ['TeamOlive', 'TeamOlive2']
ACTIVE_MOUNT_VOLUMES = ['Team_Olive', 'Team_Olive2']
IP_ADDRESSES = ["35.160.29.86"]

# auth for OnTap API routes (use env for official release)
ONTAP_USER = os.environ.get("ONTAP_USER", 'admin')
ONTAP_PASS = os.environ.get("ONTAP_PASS", 'Password@123')
# print(ONTAP_USER, ONTAP_PASS)

SERVICE_LEVEL = "Value"




# =============================================
# === AUTOMATIC NetApp Config LOADING BELOW === 
# =============================================

# Use of the active NetAppAPI Service
# Can be preconfigured by you should the service location change.
BASE_URL = "https://52.35.93.244:8443/api"
CREATE_MIRROR_API = BASE_URL + "/2.0/ontap/snap-mirrors"
SYNC_MIRROR_API = BASE_URL
DELETE_MIRROR_API = BASE_URL 
# Key retrieval API's
SSL_KEY_API = BASE_URL +  "/1.0/slo/storage-service-levels"
SVM_KEY_API = BASE_URL +  "/1.0/slo/storage-vms" 
FILE_SHARE_KEY_API = BASE_URL + "/1.0/slo/file-shares"

class NetAppInstance:

    def __init__(self, name, active_volume, elasticIp = None):
        # Parameters of the instance.
        self.name = name
        self.active_volume = active_volume
        self.elasticIp = elasticIp
        # Retrieved using automatic server API calls. 
        self.sslKey = self.get_ssl_key(SSL_KEY_API) 
        self.svmKey = self.get_svm_key(SVM_KEY_API)
        self.fsKey = self.get_fs_key(FILE_SHARE_KEY_API) 

  
    def mount_volume(self, volume_key=None):
        return None

    def get_ssl_key(self, url):
        response = requests.get(url, auth=HTTPBasicAuth(ONTAP_USER, ONTAP_PASS),
                                verify=False)
        # print(response.text)
        res = json.loads(response.text)
        records = res['result']['records']
        print('get ssl')
        for r in records:
            # print(r['name'])
            if SERVICE_LEVEL in r['name']:
                return r["key"]
        return None

    def get_svm_key(self, url):
        response = requests.get(url, auth=HTTPBasicAuth(ONTAP_USER, ONTAP_PASS),
                                verify=False)
        # print(response.text)
        res = json.loads(response.text)
        records = res['result']['records']
        name = self.name
        print('get svm')
        for r in records:
            # print(r['name'])
            if name in r['name']:
                return r["supported_storage_service_level_keys"]
        return None

    def get_fs_key(self, url):
        response = requests.get(url, auth=HTTPBasicAuth(ONTAP_USER, ONTAP_PASS),
                                verify=False)
        # print(response.text)
        res = json.loads(response.text)
        records = res['result']['records']
        name = self.active_volume
        print('get fs')
        for r in records:
            # print(r['name'])
            if name in r['name']:
                return r["storage_platform_resource_key"]
        return None

    def to_file(self, file_name=None):
        if not file_name:
            file_name = self.name + "_credentials.txt"
        with open(file_name, 'w') as f:
            txt = "%s:\nSSL_KEY:%s\nSVM_KEY:%s\nFS_KEY:%s" % (self.name, self.sslKey,
                                                              self.svmKey, self.fsKey)
            f.write(txt)

# === LOAD 

n0 = NetAppInstance(ONTAP_INSTANCES[0], ACTIVE_MOUNT_VOLUMES[0])
for attr in dir(n0):
    print("obj.%s = %s" % (attr, getattr(n0, attr)))
n0.to_file()