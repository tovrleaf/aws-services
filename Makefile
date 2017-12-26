build:
	docker-compose build --no-cache dev

run:
	docker-compose up --build -d dev

test:
	docker-compose exec dev npm run test

logs:
	docker-compose logs -f dev

stop:
	docker-compose stop dev

# vim: noexpandtab
