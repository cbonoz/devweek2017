
<!--# APP Title -->


### Netapp Talk Notes

EC2 - > S3 bucket (usually).
This challenge is around using cloud-ontap

He will give us the environment and the keys for an environment. Can be oracle, ubuntu. Can develop any environment you want. Go use other people's challenge. NetApp has a prize for using their infrastructure.
It doesn't matter what application you are developing. Use any language you want. The application needs data - such as files or database, sql, nosql, etc.

Use NetApp data management system to put the data. You can put sql, nosql (whatever you want). There are alot of cool features in terms of cloning. Let's say you have a dataset which is 10G and you want to replicate the data at multiple locations. We have features that clone with minimal overhead (using pointers that consume zero storage). If you make changes to the cloned environment, then those changes are recorded and used. You need data, you store in ontap.

Example: DevOps - They want to ship Devops metrics across different locations. 

The data operating system has already been created. All you need to do is take the credential. They have set up the volume. You take the preconfigured volume or create your own, and mount it to your application. You can use the api services to create clones (these actions can all be done via api services).

Sign up for the netapp challenge and register. Ask the natapp team if you run into any challenge.

S3 if you are using a flat file or unstructured object. OnTap is an operating system that has been deployed. This takes the EBS (elastic block store) volume and encapsulates it (this is ontap cloud). You use an IP address and use a mount command. If you have an application running on EC2, you just mount it on EC2.

They have api services called SLM. They will give you the volume and EC2 instance (ask for ubuntu). You can download the application onto EC2. You put your mongoDB or whatever onto EC2. You just call the api serices and will do all the cloning mirrors. EC2 is mounted on NFS. You spawn your instance of mongo or whatever. You will be given EC2, API credentials. 

* They want to see the value of the API services and the cloning for a real world application. 

Showcase the apis such as the cloning or the replication that adds as much value as possible to your application. Tell a story around the value of this cloning. Cloning is not a replication of a dataset.
Cloning is just a pointer based thing. If you are cloning through the API's, will allocate an elastic IP address for the new spun up instance. You can do SnapMirror takes a snapshot in time and does a block by block movement which is much faster.

You will be given credentials to the oncammand cloud manager. Cloud manager provides a web based interface (they prefer you use the apis to use this functionality). If you need another instance, ask and you can get more EC2 instances (Netapp has paid everything). These will also be on the same VPC, so there is no VPC peering setup needed.

#### API'same
Restful API's: Volume creation, volume cloning/replication.

The API services are called SLM (Storage Service Level - ontap instance key). They are multiple keys.

They have set up the api server that is connected to your EC2 instance. They want to see automation around the API usage.

Past exapmle: I want my datacenter to always be where the sun is an 12:00pm. They showed replication across the world that synced with the clock. We are using the ontap service as a reverse proxy for whatever kind of automation we want to do. You can use the cloud manager to get a feel for what the API's can do. You can take the volumes and sync to S2 (don't do this now).
You already have one volume set up (preferred that you use api's do configure additional volumes).

Mounting NFS share on EC2 instance
---
mount the volume on your server instance 

sudo yum -y install nfs-utils (you need to download this to mount a volume!)
mount -o nolock <ip:volume> <location>
cd <location>

NetAppDVP (docker plugin for moving/mounting instances)
Moving data volumes (you need to use the NetAppDVP plugin to move containers)
NetAppDVP: use follwing command: /etc/netappdvp/ontap-nas.json &

If you want to create new instances: You use nfs-utils, NetAppDVP, and then you mount the new volume.

Keys in API Services using Swagger: https://35.163.91.40:8443 (this site will show you the parameters for the api).
Use this IP to invoke your api calls against (using your provided credentials to invoke different commands).

Try using swagger or swagger to test your api.

Most big customers have big centers, but they want to utilize AWS. Ontap gives them the avility to use these cloud systems with ease yusing simple API's.

We want you to put your source code on the EC2 instance. The more you cn demonstrate usge of the API's and the functionality the more points you get. The engineering team is availble 24/7. 



 



