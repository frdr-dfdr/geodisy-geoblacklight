# Ruby base image
FROM ruby:2.7.2

LABEL maintainer="joel.farthing@usask.ca"

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
        nodejs \
        yarn \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src

COPY ./Gemfile /usr/src/Gemfile

RUN gem install bundler -v 2.2.0.rc.2
RUN bundle install

RUN yarn install --check-files

COPY . /usr/src

# Add default env variable referencing our solr container
ENV SOLR_URL=http://solr:8983/solr/geoblacklight
ENV RAILS_ENV=development
ENV RAILS_SERVE_STATIC_FILES=false
ENV GEOBLACKLIGHT_POSTGRES_USER=postgres
ENV GEOBLACKLIGHT_POSTGRES_PASSWORD=postgres
ENV GEOBLACKLIGHT_POSTGRES_HOST=db
ENV GEOBLACKLIGHT_POSTGRES_PORT=5432

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails","server","-e","$RAILS_ENV","-p","3000"]

