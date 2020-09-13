# Simple Data (Simple Vue app to manage small chunk of data, without backend and database )

### Setup application

Download docker container and build it

```
git clone https://github.com/ikiranis/php-docker .
```

Copy .env.example to .env

```
docker-compose build
docker-compose up -d
```

### Run application

Login to container

```
docker exec -it app_fpm /bin/bash
```

Install dependencies

```
npm install
```

Serve the app

To change host and port of ``npm run server``, Go to **package.json** and change scripts/serve to

```
"serve": "vue-cli-service serve --host 0.0.0.0 --port 8000",
```

Run

```
npm run serve
```
