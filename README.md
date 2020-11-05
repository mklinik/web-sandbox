Hello Web
---------

Some hello world projects with Node.js, JavaScript and TypeScript

How to run
----------

1. Start a fresh AWS instance, note it's public <ip-address>
1. ssh into the instance
1. On the instance, execute the following commands

```
$ sudo apt install docker.io
$ git clone https://github.com/mklinik/web-sandbox.git
$ cd web-sandbox/ts-hello-world
$ . make-docker.sh
$ . run-docker.sh
```

Note the <container-ID> that `run-docker.sh` prints

On your local machine:

```
$ curl http://<ip-address>:3000/person
```

On the AWS instance:

```
$ docker stop <container-ID>
```
