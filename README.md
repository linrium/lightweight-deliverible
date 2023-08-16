## Generate sample duckdb file
```shell
node main.js
```

## Download metabase duckdb plugin
- Download driver: https://github.com/AlexR2D2/metabase_duckdb_driver/releases/download/0.2.2/duckdb.metabase-driver.jar
- Copy into folder `plugins`

## Generate jupyter ssl
```shell
openssl req -x509 -nodes -newkey rsa:2048 -keyout jupyter.pem -out jupyter/jupyter.pem
```

## How to create token in ./config/collector_config.yaml
1. Go to http://localhost:8080/management/datasources
2. Add Datasource
3. In ODDRN add `//duckdb/host/localhost`
4. Copy the token and add it to collector_config.yaml
5. Restart docker compose

## Metabase
- URL: http://localhost:3000

## ODD
- URL: http://localhost:8080
- Username: admin
- Password: admin

## Jupyter Notebook
- URL: https://localhost:8888/
- Password: 123456789!
