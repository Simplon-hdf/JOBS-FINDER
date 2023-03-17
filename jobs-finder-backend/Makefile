postgres:
	docker run --name finder -p 5433:5432 -e POSTGRES_PASSWORD=secret -e POSTGRES_USER=root -d postgres:14-alpine

createdb:
	docker exec -it  -t finder createdb --username=root --owner=root jobs-finder

dropdb:
	docker exec -it finder dropdb jobs-finder

migrateup:
	DATABASE_URL=postgres://root:secret@localhost:5433/jobs-finder npm run migrate up	
migratedown:
	DATABASE_URL=postgres://root:secret@localhost:5433/jobs-finder npm run migrate down
.PHONY: postgres createdb dropdb migrateup migratedown