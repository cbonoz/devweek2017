
# Demo Killserver Simulation

# Create a mirror image. This is connected to my server instance.
 
curl -i "http://35.160.29.86:8001/api/v1/createmirror"
# Simulate a Kill on the web page server instance 1 (instance 1 could be part of our original pool)
/usr/local/bin/sshpass ssh -i serverkey.pem ubuntu@35.160.29.86 'fuser -n tcp -k 8000'


# This script gets invoked in response to a kill event.
# Server falls back to the indicated backup instance.
# Mount the newly created image
/usr/local/bin/sshpass ssh -i serverkey.pem ubuntu@52.36.209.244 'mkdir -p /tmp/olive2'
/usr/local/bin/sshpass ssh -i serverkey.pem ubuntu@52.36.209.244 'sudo mount 10.10.11.77:/Team_Olive2 /tmp/olive2'

# Start the server on the backup instance
/usr/local/bin/sshpass ssh -i serverkey.pem ubuntu@52.36.209.244 'python /tmp/olive/www/naturefit/server/server.py'

# LoadBalancer (configured externally via AWS) automatically adds.
# Once problem fixed with first instance, brought back online.
# Requires params of target/source
# curl -i "http://35.160.29.86:8001/api/v1/syncmirror" 
