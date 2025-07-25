import { NextResponse } from 'next/server';

const BOT_TOKEN = '8017614856:AAGdZg1ipHv5pDDZTfBlACaGhBOpqDH7oJc';
const BOT_CHAT_ID = '5639011935';
const CHANNEL_ID = '@cursor19';

async function sendTelegramMessage(chatId: string, message: string) {
  const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  
  const response = await fetch(telegramUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML',
    }),
  });

  return await response.json();
}

export async function GET() {
  try {
    const results = {
      channel: null as any,
      privateChat: null as any,
      errors: [] as string[]
    };

    // Пробуем отправить в канал
    try {
      results.channel = await sendTelegramMessage(
        CHANNEL_ID,
        '🔔 Тестовое сообщение в канал от лендинга'
      );
    } catch (error) {
      results.errors.push(`Channel error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    // Пробуем отправить в приватный чат
    try {
      results.privateChat = await sendTelegramMessage(
        BOT_CHAT_ID,
        '🔔 Тестовое сообщение в приватный чат от лендинга'
      );
    } catch (error) {
      results.errors.push(`Private chat error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    return NextResponse.json({ 
      success: true,
      results
    });
  } catch (error) {
    console.error('Error sending test messages:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 