Hello Web
---------

Some hello world projects with Node.js, JavaScript and TypeScript

How to run
----------

1. Start a fresh AWS instance, note it's public `<ip-address>`
1. ssh into the instance
1. On the instance, execute the following commands

```
$ sudo apt install docker.io
$ git clone https://github.com/mklinik/web-sandbox.git
$ cd web-sandbox/ts-hello-world
$ . make-docker.sh
$ . run-docker.sh
```

On your local machine:

```
$ curl http://<ip-address>:3000/person
```

On the AWS instance, stop the container.

- `docker stop` takes either the container ID or name.
- Name is subject to auto-completion.
- Get the name with `docker ps`

```
$ docker ps
$ docker stop <container-ID>
```
