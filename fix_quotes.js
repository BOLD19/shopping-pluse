const fs = require('fs');
const path = require('path');

// Файлы для обработки
const filesToProcess = [
  'src/app/digital-branch/page.tsx',
  'src/app/accounting/page.tsx',
  'src/app/tariffs/page.tsx',
  'src/app/shopping/page.tsx',
  'src/app/card/page.tsx',
  'src/app/bnpl/page.tsx',
  'src/app/cabinet/page.tsx',
  'src/app/components/Footer.tsx',
  'src/app/components/Header.tsx',
  'src/app/banking/page.tsx',
  'src/app/register-company/page.tsx',
  'src/app/partners/page.tsx',
  'src/app/layout.tsx',
  'src/app/account/page.tsx',
  'src/app/page.tsx',
  'src/app/insurance/page.tsx',
  'src/app/services/page.tsx',
  'src/components/Footer.tsx',
  'src/components/Header.tsx'
];

// Функция для замены кавычек в JSX-атрибутах и TS/JS коде
function replaceQuotesInCode(content) {
  // Результаты замен
  let replacedCount = {
    curlyDoubleQuotes: 0,
    curlySingleQuotes: 0,
    guillemets: 0
  };

  // Регулярное выражение для поиска типографских кавычек внутри JSX-атрибутов
  // Пример: className="example" или title='example'
  let fixedContent = content.replace(/(\s[a-zA-Z0-9\-_]+\s*=\s*)["']([^"']*[""''«»][^"']*)["']/g, (match, attr, insideText) => {
    // Замена только внутри атрибутов JSX
    let newInsideText = insideText
      .replace(/["]/g, (m) => { replacedCount.curlyDoubleQuotes++; return '"'; })
      .replace(/[']/g, (m) => { replacedCount.curlySingleQuotes++; return "'"; })
      .replace(/[«»]/g, (m) => { replacedCount.guillemets++; return '"'; });
    
    // Сохраняем оригинальный разделитель атрибута
    return attr + (match.includes('"') ? '"' + newInsideText + '"' : "'" + newInsideText + "'");
  });

  // Регулярное выражение для поиска типографских кавычек внутри объявлений переменных 
  // в JS/TS, но не внутри JSX содержимого
  fixedContent = fixedContent.replace(/(\bconst\b|\blet\b|\bvar\b|\breturn\b|\s=\s)([^<>\n;]*[""''«»][^<>\n;]*)(;|,|\)|\s\{)/g, (match, prefix, content, suffix) => {
    // Не заменяем, если это выглядит как контент или строка в UI
    if (content.includes('Добро пожаловать') || 
        content.includes('текст') || 
        content.includes('Заголовок') ||
        content.includes('description')) {
      return match;
    }
    
    let newContent = content
      .replace(/["]/g, (m) => { replacedCount.curlyDoubleQuotes++; return '"'; })
      .replace(/[']/g, (m) => { replacedCount.curlySingleQuotes++; return "'"; })
      .replace(/[«»]/g, (m) => { replacedCount.guillemets++; return '"'; });
    
    return prefix + newContent + suffix;
  });

  return { fixedContent, replacedCount };
}

// Обработка каждого файла
filesToProcess.forEach(filePath => {
  try {
    console.log(`Обрабатываю файл: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    const { fixedContent, replacedCount } = replaceQuotesInCode(content);
    
    const totalReplaced = replacedCount.curlyDoubleQuotes + 
                          replacedCount.curlySingleQuotes + 
                          replacedCount.guillemets;
    
    if (totalReplaced > 0) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`  ✓ Заменено: ${totalReplaced} кавычек`);
      console.log(`    ⇒ Двойные кавычки (", "): ${replacedCount.curlyDoubleQuotes}`);
      console.log(`    ⇒ Одинарные кавычки (', '): ${replacedCount.curlySingleQuotes}`);
      console.log(`    ⇒ Кавычки-ёлочки («, »): ${replacedCount.guillemets}`);
    } else {
      console.log(`  ⓘ Замены не требуются или не найдены подходящие контексты`);
    }
  } catch (error) {
    console.error(`Ошибка при обработке файла ${filePath}:`, error);
  }
});

console.log('\nОбработка завершена. Запустите npm run build для проверки целостности JSX.'); 