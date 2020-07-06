# Ecommerece Web App

## Create the db

```
mysql -u -root -p
Enter Password: (enter your password)

CREATE DATABASE shopdb;
CREATE USER shopuser IDENTIFIED BY 'shoppass';
GRANT ALL PRIVILEGES ON shopdb.* TO shopuser;
FLUSH PRIVILEGES;

EXIT
```

## Accessing the db

```
mysql -u shopuser -p
Enter Password:shoppass
```