# Echo client web app using NextJS

A web client built using [NextJS](https://nextjs.org/). Simple echo form page submits a request to an external 'echo' REST service. Service echos back the text and the echo web page displays it.

This client is setup to call an REST service [echo-service](https://github.com/cg2p/echo-service)

## Set-up
Create your own `.env` (which is in `.gitignore`) from `.env.CHANGEME`

1. ensure `echo-service` and `echo-nextjs` are in parallel directorie
2. in the `echo-nextjs` directory

Concurrently will spin up the `echo-service` and then the `echo-nextjs` client
```
npm run dev
```
