#!/bin/bash


set -e

################################################################################
# Compile the Rails assets at runtime. They will be shared in a volume with    #
# the Nginx container                                                          #
################################################################################
bundle exec rake assets:precompile

################################################################################
# The steps below are taken from the Docker documentation page at :            #
# https://docs.docker.com/compose/rails/  Dec 1, 2020                          #
################################################################################

# Remove a potentially pre-existing server.pid for Rails.
rm -f /myapp/tmp/pids/server.pid

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"


