## Prisma

For prisma to run successfully, you have to first run `npx prisma migrate dev --name init` to successfully load the first migration where you define the schemas. Later in production you will run `npx prisma migrate deploy` to run all the migration files, other wise if there are no migrations in the folder, the schemas won't be initialized and you will get an error that your schemas dont exist in the db.
