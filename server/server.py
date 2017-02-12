"""
NatureFit App
===================
NatureFit Application server with user creation, users retrieval, and NetApp snapmirror functionality.abs
MongoDB storage for mirroring illustration when instance goes down.
"""
from flask import Flask, jsonify
import logging
import pymongo
import requests
import netapp

# Attempt to import cors, else force install
try:
    from flask_cors import CORS  
except ImportError:
    # Path hack allows example to be run without installation.
    import os
    parentdir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.sys.path.insert(0, parentdir)
    from flask_cors import CORS

# ==============================================
# === NatureFit App Settings 
# ==============================================

APP_NAME = "NatureFitApp"

app = Flask(APP_NAME)
logging.basicConfig(level=logging.INFO)
# flask-cors logging
logging.getLogger('flask_cors').level = logging.DEBUG

# Exposes all resources matching /api/* to outside world.
CORS(app, resources=r'/api/*')
PORT  = int(os.environ.get("PORT", 8001))
MONGO_PORT =  int(os.environ.get("MONGO_PORT", 27017))

# Set up mongoclient.
client = pymongo.MongoClient("localhost", MONGO_PORT)
# Set up the NatureFit DB
db = client.NatureFit

@app.route("/")
def helloWorld():
    """ Obligatory hello world route """
    return jsonify(hello="world")

# ==============================================
# === NetApp Invocable Snap-Mirror API Calls ===
# ==============================================


def attempt_post(endpoint, body):
    r = None
    try:
        r = requests.post(endpoint, json=body)
    except Exception as e:
        return jsonify(success=False, error=str(e))
    return jsonify(success=True)

@app.route("/api/v1/createmirror", methods=['POST'])
def create_mirror():
    req = request.form
    # Hardcoded volume copy for now - use generated values for production.
    body = {
          {
            "source_volume_key": "5f0ebd91-f084-11e6-8690-5fd6e1ccfca3:type=volume,uuid=5c3a14ba-bc9c-42e3-a35b-748726306bc9",
            "source_storage_vm_key":"5f0ebd91-f084-11e6-8690-5fd6e1ccfca3:type=vserver,uuid=b8505489-f084-11e6-8690-5fd6e1ccfca3",
            "destination_storage_vm_key":"3375c225-f0e2-11e6-aeca-b15aefd20019:type=vserver,uuid=8d2c224b-f0e2-11e6-aeca-b15aefd20019"
        }  
    }
    return attempt_post(netapp.CREATE_MIRROR_API, body)

@app.route("/api/v1/deletemirror", methods=['POST'])
def delete_mirror():
    req = request.form
    body = {
            
    }
    return attempt_post(netapp.DELETE_MIRROR_API, body)

@app.route("/api/v1/syncmirror", methods=['POST'])
def sync_mirror():
    req = request.form
    body = {
            
    }
    return attempt_post(netapp.SYNC_MIRROR_API, body)

# ==============================================
# === Account Management API calls (MongoDB) === 
# ==============================================

@app.route("/api/v1/users/")
def list_users():
    '''
        $ curl --include -X GET http://127.0.0.1:5000/api/v1/users/ \
            --header Origin:www.examplesite.com
        Server: Werkzeug/0.9.4 Python/2.7.8
        {
            "success": true
            "users": List of Users currently in DB. 
        }
    '''
    # List all users currently in the DB
    users = db.my_collection.find()
    return jsonify(users=users, success=True)

@app.route("/api/v1/users/auth",  methods=['POST'])
def auth_user():
    '''
        $ curl --include -X GET http://127.0.0.1:5000/api/v1/users/ \
            --header Origin:www.examplesite.com
        Server: Werkzeug/0.9.4 Python/2.7.8
        {
            "success": true
            "user": authorized user name
        }
    '''
    req = request.form
    obj = None
    try:
        user = str(req['username'])
        pw = str(req['password'])
        obj = {'user': user, 'password': pw}
        user = db.my_collection.find( obj )
        # Check for null existing match with DB.
        if not user:
            return jsonify(error="Credential Match Failed", success=False)
    except Exception as e:
        return jsonify(error=str(e), success=False)
    return jsonify(user=user, success=True)


@app.route("/api/v1/users/create", methods=['POST'])
def create_user():
    '''
        $ curl --include -X POST http://127.0.0.1:5000/api/v1/users/create \
            --header Content-Type:application/json \
            --header Origin:www.examplesite.com
        {
          "success": true
        }
    '''
    req = request.form
    obj = None
    try:
        user = str(req['username'])
        pw = str(req['password'])
        obj = {'user': user, 'password': pw}
        db.my_collection.insert_one(obj).inserted_id
        return jsonify(success=True)
    except:
        return jsonify(success=False)

# Server Error handler
@app.errorhandler(500)
def server_error(e):
    logging.exception('An error occurred during a request. %s', e)
    return "An internal error occured", 500


# Run production instance on port.
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=PORT)