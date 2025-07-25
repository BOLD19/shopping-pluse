import { NextResponse } from 'next/server';

const BOT_TOKEN = '8017614856:AAGdZg1ipHv5pDDZTfBlACaGhBOpqDH7oJc';
const CHANNEL_ID = '-1002654341409';
const BOT_CHAT_ID = '5639011935';

async function sendTelegramMessage(chatId: string, message: string) {
  const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  
  try {
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

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Telegram API error: ${errorData.description || 'Unknown error'}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to send message to ${chatId}:`, error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, activity, utm } = data;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    const activityLine = activity ? `\n💼 Вид деятельности: ${activity}` : '';
    
    let utmBlock = '';
    if (utm && Object.keys(utm).length > 0) {
      utmBlock = '\n\n📊 UTM метки:\n' +
        Object.entries(utm)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n');
    } else {
      utmBlock = `\n\n📊 UTM метки:\nSource: shoppingkz\nMedium: shoppingkz\nCampaign: shoppingkz`;
    }

    const message = `🔔 Новая заявка с сайта:\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}${activityLine}${utmBlock}`;

    // Отправляем сообщение в канал
    await sendTelegramMessage(CHANNEL_ID, message);

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully'
    });
  } catch (error) {
    console.error('Error processing form:', error);
    
    try {
      // Если отправка в канал не удалась, пробуем отправить в приватный чат
      const message = `⚠️ РЕЗЕРВНАЯ ОТПРАВКА:\n\n${error instanceof Error ? error.message : 'Unknown error'}\n\n${data?.name || 'Нет имени'}\n${data?.phone || 'Нет телефона'}`;
      await sendTelegramMessage(BOT_CHAT_ID, message);
    } catch (backupError) {
      console.error('Backup notification failed:', backupError);
    }

    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process form',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 