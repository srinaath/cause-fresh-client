FROM node:8.9

LABEL maintainer = Srinaath Ravichandran

COPY ./ /var/www

WORKDIR /var/www

RUN chmod +x ./jenkins/scripts/test.sh


