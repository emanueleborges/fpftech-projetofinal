
FROM oraclelinux:7-slim
LABEL maintainer="Emanuel Borges"
COPY . /var/www
WORKDIR /var/www

RUN  yum -y install oracle-release-el7 oracle-nodejs-release-el7 && \
     yum-config-manager --disable ol7_developer_EPEL && \
     yum -y install oracle-instantclient19.3-basiclite nodejs && \
     rm -rf /var/cache/yum

RUN npm install
ENTRYPOINT npm start
EXPOSE 80