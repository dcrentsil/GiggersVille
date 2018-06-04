FROM postgres:9.4
ENV POSTGRES_PORT 5432
ENV POSTGRES_USER docker 
ENV POSTGRES_PASSWORD jackpot
ENV POSTGRES_DB giggersdb
ADD createdb.sql /docker-entrypoint-initdb.d/
# ENTRYPOINT createdb.sql 