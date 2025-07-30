# Инструкции по деплою

## Вариант 1: Деплой на Vercel (Рекомендуется)

1. Перейдите на https://vercel.com
2. Подключите GitHub аккаунт
3. Импортируйте репозиторий `BOLD19/shopping-pluse`
4. Настройте домен `mybusiness.pluse.kz`

## Вариант 2: Деплой через GitHub Actions

### Для Vercel:
1. Получите токен Vercel: https://vercel.com/account/tokens
2. В настройках репозитория GitHub добавьте секреты:
   - `VERCEL_TOKEN` - ваш токен Vercel
   - `ORG_ID` - ID организации в Vercel
   - `PROJECT_ID` - ID проекта в Vercel

### Для обычного сервера:
1. В настройках репозитория GitHub добавьте секреты:
   - `HOST` - IP адрес сервера
   - `USERNAME` - имя пользователя
   - `SSH_KEY` - приватный SSH ключ
   - `PORT` - порт SSH (обычно 22)

## Автоматический деплой

При каждом пуше в ветку `main` будет происходить автоматический деплой.

## Ручной деплой

```bash
npm run build
npm start
``` 