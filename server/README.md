
# NatureFit 
![alt text](https://s32.postimg.org/oecpvcxo5/nature_fit_small.png  "NatureFit Logo")
---
Integrated Clover and NetApp backend DeveloperWeek 2017 code.

NatureFit is a new fitness rewards platform designed to boost gym sales and club membership through a gym perk incentive-based credit system that rewards people for making referalls and sticking to their gym routines. Powered by Clover Point of Sale API, and customer tracking - users can earn points for referring signups at the gym and receive gym credit for buying items like protein bars, shakes, etc. at a potentially-unnmanned food stand located within the gym (that has Clover POS set up). NetApp backend allows high resiliency (even in small datacenter configurations) by using a novel instant-backup strategy for replacing stalling instances on the fly.

In many cases, gym snack inventory is priced excessively high and is not leveraged as well as it could be for gym-goers. This can often lead to gyms having to last-minute sell ites at a discount or just letting them expire.

I suppose the closest analogy would be - 
** Think Apple Pay meets Five Stars. **

FiveStars: http://hi.fivestars.com/ (building a custom rewards program for the membership vertical).

<!--The Clover API is traditionally associated with restaurants and retail. The idea for this project is to expand and prototype the use case of clover in an unexplored vertical - gyms. 
NatureFit is a mobile and web app designed to increase gym engagement and boost sales of health products. How many times have you walked by a gym store only to see it empty? Our platform is designed to both bolster sales at these gyms, while simulatenously encouraging referalls and user sign-ups.-->

## Clover API (Customer Tracking and Payment Processing)


Clover API is used for both handling transactions at checkouts. For this we primarily use three API routes. One for creating users, and the other two for tracking rewards inventory (at the stores) and handling payments. The customer profile can be tied to the gym's existing DB of users. 

<!--The inventory and authorizations routes are used to take payments and track inventory.-->
<!--![Alt text](relative/path/to/img.jpg?raw=true "Title")-->

Many enterprises are still cautious about moving their entire data to a single backend provider. Hidden on the backend of this app is a fully-functional (prototype) 2-instance distributed cluster, which handles requests coming in. 2 instances, impressive.

## NetApp Mirroring
Utilizing NetApp's Efficient Data Cloning Strategy. 

Disaster recovery. Using volume SnapMirror, data is mirrored in real time to another NetApp storage system at a DR facility or secondary data center. If a DR version needs to be made operational, applications are switched over to a newly mirrored OnTap Cloud instance and the traffic is redirected for as long as necessary. When the production site is back online, SnapMirror can transfer the data efficiently back to the production storage systems, and SnapMirror transfers can resume.
<!--Volume SnapMirror supports multihop or cascading configurations. For example, a volume can be replicated from a system in San Francisco to a system in New York City and then from New York City to Singapore.-->

We integrated the snap-mirror technology natively into the consumer-side of the app - working in tandem to listen to any latency increases or time outs that occur for an end user. In the case of any anomoly on an instance, we use the agility of NetApp's spin-mirror to mirror the troubled instance and redirect traffic (automatically). This minimizes the notice/impact of end users while minizing the cost for the provider.



## Set up instruction:

1. You will need your AWS account set up with instances supported by NetApp's OnTap Cloud technology. This is well documented on the AWS website, so we won't focus on that here.
2. Both server's should be running the NatureFit backend server, with a shared volume. 
3. Run MongoDB. The application uses a DB backed by PyMongo technology. 

Using NetApp for auto-scaling/DB management.
Using Clover for customer management and tracking.

## Demo Presentation:

1. Story of NatureFit 
2. Failure and Fallback (not just disaster recovery, but disaster preparation).
3. Resync on boot.

## Developers
Backend: Chris Buonocore

FrontEnd: Michael Tran, Andrew Balberchak

DevNotes
-
Angular CLI:
https://github.com/angular/angular-cli

### Connecting to Server:

Instance/IP 1:
ssh -i serverkey.pem ubuntu@35.160.29.86

Instance/IP 2:
ssh -i serverkey.pem ubuntu@52.36.209.244

Synchronize local directory with server file: rsync -avz -e "ssh -i serverkey.pem" -a . ubuntu@35.160.29.86:~/www/naturefit

Running the server: python server.py