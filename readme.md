commands

1. nest new "project name"
2. npm run start:dev
3. nest g module "module name" //creating new service
4. nest g controller songs // creating controllers
5. nest g service songs   // creating services
6. nest g mi common/middleware/logger --no-spec --no-flat // middleware creating
7. npm i @nestjs/typeorm pg 
8. # Ensure the PostgreSQL container is running
docker run --name a-postgres-db -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres

# Access the PostgreSQL container
docker exec -it a-postgres-db bash

# Access the PostgreSQL CLI
psql -U postgres

# Create the database
CREATE DATABASE "spotify-clone";

# Exit the PostgreSQL CLI
\q

# Exit the container
exit

9.  npm i nestjs-typeorm-paginate bcryptjs @types/bcryptjs
10. nest g module/service/controller auth