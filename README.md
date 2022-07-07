# dailydevshu.github.io

Blog based on jekyll.

## Technologies

- Docker
- Jekyll

## Requirements

- Docker and docker compose
    - Install: `sudo apt install docker docker-compose`

## Usage

```shell
# Start docker service if necessary
sudo service docker status
sudo service docker start

# Build docker containers 
docker-compose build

# Start docker containers 
docker-compose up -d

# Stop docker containers
docker-compose down

# Enter a container
docker-compose exec jekyll /bin/bash
```

## Jekyll build

```shell
cd docker

docker-compose up -d
docker-compose exec jekyll /bin/bash

jekyll build
```
