
# NatureFit 
---
DeveloperWeek 2017 Hackathon Project
App for increasing gym engagement and store sales.

Using NetApp for auto-scaling/DB management.
Using Clover for customer management and tracking.

## Developers
Backend: Chris Buonocore
FrontEnd: Michael Tran, Andrew Balberchak

### DevNotes
Angular CLI:
https://github.com/angular/angular-cli

Connecting to Server:
ssh -i serverkey.pem ubuntu@35.160.29.86

Synchronize local directory with server file:
rsync -avz -e "ssh -i serverkey.pem" -a . ubuntu@35.160.29.86:~/www/naturefit

Running the server:
python server.py