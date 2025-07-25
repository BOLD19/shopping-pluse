#!/bin/bash
# Скрипт для запуска в режиме разработки

echo "🚀 Запуск приложения в режиме разработки..."
echo "📍 Приложение будет доступно на http://localhost:3100"
 
# Сборка и запуск
docker-compose -f docker-compose.dev.yml build
docker-compose -f docker-compose.dev.yml up 