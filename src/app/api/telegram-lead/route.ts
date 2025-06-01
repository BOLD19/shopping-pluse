import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '8017614856:AAGdZg1ipHv5pDDZTfBlACaGhBOpqDH7oJc';
const TELEGRAM_CHAT_ID = '@cursor19';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { name, phone, utm } = body;
    
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Имя и телефон обязательны' },
        { status: 400 }
      );
    }

    const text = `Новая заявка с сайта!${utm ? `\nИсточник: ${utm}` : ''}\nИмя: ${name}\nТелефон: ${phone}`;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      const tgRes = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'HTML',
        }),
      });

      if (!tgRes.ok) {
        const errorData = await tgRes.text();
        console.error('Telegram API error:', errorData);
        throw new Error(`Telegram API error: ${errorData}`);
      }

      const data = await tgRes.json();
      
      if (!data.ok) {
        throw new Error(data.description || 'Ошибка Telegram');
      }

      return NextResponse.json({ success: true });
    } catch (tgError: any) {
      console.error('Telegram request failed:', tgError);
      throw new Error(`Ошибка отправки в Telegram: ${tgError.message}`);
    }
  } catch (e: any) {
    console.error('Error in telegram-lead:', e);
    return NextResponse.json(
      { error: e.message || 'Ошибка отправки' },
      { status: 500 }
    );
  }
} 