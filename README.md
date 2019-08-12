# Echo client web app using NextJS

A web client built using [NextJS](https://nextjs.org/). Simple echo form page submits a request to an external 'echo' REST service. Service echos back the text and the echo web page displays it.

REST service used for test in the 'ping' module of the [echo-service](https://github.com/cg2p/echo-service)

## Set-up
Create your own `.env` (which is in `.gitignore`) from `.env.CHANGEME`

1. Start echo-service
2. Start echo-nextjs 
```
npm run build
npm run start
```
