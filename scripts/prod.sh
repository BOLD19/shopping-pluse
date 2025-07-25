#!/bin/bash
# Скрипт для запуска в продакшн режиме

echo "🎯 Запуск приложения в продакшн режиме..."
echo "📍 Приложение будет доступно на http://localhost:3100"

# Сборка и запуск в фоновом режиме
docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up -d

echo "✅ Приложение запущено в фоновом режиме"
echo "📊 Для просмотра логов используйте: docker-compose -f docker-compose.prod.yml logs -f"
echo "🛑 Для остановки используйте: docker-compose -f docker-compose.prod.yml down" 