## Postgres

To quickly spin up a `PostgreSQL` database run the command:

```bash
docker run --rm -it -d --name pg-wedding-invitations \
    -e POSTGRES_USER=admin \
    -e POSTGRES_PASSWORD=password \
    -e POSTGRES_DB=wedding-invitations \
    -p 5432:5432 postgres:16
```

Or you can use the same `.env` file:

```bash
docker run --rm -it -d --name pg-wedding-invitations \
    --env-file .env \
    -p 5432:5432 postgres:16
```

## Prisma

For prisma to run successfully, you have to first run:

```bash
npx prisma migrate dev --name init
```

to successfully load the first migration where you define the schemas.
Later in production you will run `npx prisma migrate deploy` to run all the migration files, other wise if there are no migrations in the folder, the schemas won't be initialized and you will get an error that your schemas dont exist in the db.
