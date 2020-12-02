#!/bin/bash

################################################################################
# Run init tasks in the Rails container                                        #
################################################################################

# Create the Database
docker-compose exec geoblacklight bundle exec rake db:create

# Run the Database migration
docker-compose exec geoblacklight bundle exec rake db:migrate
