
# TODO: Make these environment variables.

# Instance 1 (35.160.29.86)
INSTANCE_1 = "35.160.29.86"

SSL_KEY = "46844bf5-705b-4c5d-8b50-163e7c8e3788"
SVM_KEY = "46844bf5-705b-4c5d-8b50-163e7c8e3788"
SVM_KEY = "d250fecc-ea60-11e6-9808-5d84ebb53075"
SVM_KEY = "d250fecc-ea60-11e6-9808-5d84ebb53075"
FS_KEY = "00b15e30-44cc-3e79-8abb-596548c4fc5a"
TEAM_OLIVE_STORAGE_KEY = "5f0ebd91-f084-11e6-8690-5fd6e1ccfca3:type=volume,uuid=5c3a14ba-bc9c-42e3-a35b-748726306bc9"

INSTANCE_1_BASE_URL = "https://35.163.91.40:8443"
INSTANCE_2_BASE_URL = ""
CREATE_MIRROR_API = BASE_URL + "/2.0/ontap/snap-mirrors"

# OLD cloud manager portal: 35.163.91.40 Used from client side app.
MY_PORT = "35.160.29.86"

# Instance 2 (52.36.209.244)
INSTANCE_2 = "52.36.209.244"

"""
These work (but see postman)
file-share
{
"storage_service_level_key":"46844bf5-705b-4c5d-8b50-163e7c8e3788",
"storage_vm_key":"46844bf5-705b-4c5d-8b50-163e7c8e3788",
"name": "file_test",
"size": 5242880
}

https://35.163.91.40:8443/api/2.0/ontap/volumes
volumes
{
"storage_vm_key":"46844bf5-705b-4c5d-8b50-163e7c8e3788",
"name": "file_test",
"size": 5242880,
"aggregate_key":"1967bb2c-ea62-11e6-9af6-f9b33665cf51"
}

clone volume:
{
    "volume_clone_name": "test_volume"
}
"""