FROM ruby:latest AS ruby

WORKDIR /var/www/app

ARG UNAME=developer
ARG UID=1000
ARG GID=1000

RUN groupadd -g $GID -o $UNAME
RUN useradd -m -u $UID -g $GID -o -s /bin/bash $UNAME

COPY . /var/www/app

RUN apt update \
    && apt install -y nano \
    && apt install -y ruby-full \
    && apt-get install -y build-essential zlib1g-dev g++ zip nodejs yarn \
    && gem install jekyll bundler \
    && gem install minima jekyll-feed jekyll-seo-tag jekyll-paginate-v2

RUN gem update --system \
    && bundle install

USER $UNAME

EXPOSE 4000
