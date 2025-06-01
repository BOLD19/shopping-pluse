.PHONY: help dev prod build-dev build-prod up-dev up-prod down logs clean

# По умолчанию показываем помощь
help:
	@echo "Доступные команды:"
	@echo "  dev         - Запуск в режиме разработки (порт 3100)"
	@echo "  prod        - Запуск в продакшн режиме (порт 3100)"
	@echo "  build-dev   - Сборка для разработки"
	@echo "  build-prod  - Сборка для продакшена"
	@echo "  up-dev      - Запуск контейнеров для разработки"
	@echo "  up-prod     - Запуск контейнеров для продакшена"
	@echo "  down        - Остановка всех контейнеров"
	@echo "  logs        - Просмотр логов"
	@echo "  clean       - Очистка всех контейнеров и образов"

# Разработка
dev: build-dev up-dev

# Продакшн
prod: build-prod up-prod

# Сборка для разработки
build-dev:
	docker-compose -f docker-compose.dev.yml build

# Сборка для продакшена
build-prod:
	docker-compose -f docker-compose.prod.yml build

# Запуск для разработки
up-dev:
	docker-compose -f docker-compose.dev.yml up

# Запуск для продакшена
up-prod:
	docker-compose -f docker-compose.prod.yml up -d

# Остановка контейнеров
down:
	docker-compose -f docker-compose.dev.yml down
	docker-compose -f docker-compose.prod.yml down

# Просмотр логов
logs:
	docker-compose logs -f

# Очистка
clean:
	docker-compose -f docker-compose.dev.yml down --rmi all --volumes --remove-orphans
	docker-compose -f docker-compose.prod.yml down --rmi all --volumes --remove-orphans
	docker system prune -f 