# Используем официальный Node.js образ
FROM node:18-alpine AS base

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Стадия для разработки
FROM base AS development
WORKDIR /app

# Копируем все файлы проекта
COPY . .

EXPOSE 3000

ENV NODE_ENV=development

# Запускаем в режиме разработки
CMD ["npm", "run", "dev"]

# Создаем стадию для сборки
FROM base AS builder
WORKDIR /app

# Копируем все файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Финальная стадия для продакшена
FROM node:18-alpine AS runner
WORKDIR /app

# Устанавливаем wget для healthcheck
RUN apk add --no-cache wget

# Создаем пользователя nextjs
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем необходимые файлы из builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/package.json ./package.json

# Устанавливаем права доступа
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV NODE_ENV=production

# Запускаем приложение через кастомный сервер
CMD ["node", "server.js"] 