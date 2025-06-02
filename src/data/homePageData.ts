import { CreditCard, Store, Calculator, Settings, Building2, ShieldCheck, PiggyBank, MapPin, Users, MessageCircle, Briefcase } from 'lucide-react';

export const bnplStats = [
  { id: 1, text: '82 заявки одобрено за месяц' },
  { id: 2, text: '15 заявок одобрено сегодня' },
  { id: 3, text: 'Средняя сумма — 240 000 ₸' },
];

export const shopStats = [
  { id: 1, text: 'Магазин создан: pluse.market/demo' },
  { id: 2, text: 'Открыт магазин по продаже техники' },
  { id: 3, text: 'Первый заказ оформлен через 2 часа' },
];

export const services = [
  {
    id: 'bnpl',
    icon: CreditCard,
    name: 'Рассрочка QR',
    title: 'Подключите любые банки в единый QR-код',
    description: 'Один QR для всех маркетинговых материалов. Клиенты выбирают банк сами, вы получаете больше продаж. Рассрочка до 24 месяцев.',
    href: '/bnpl',
    cta: 'Подключить единый QR'
  },
  {
    id: 'shopping',
    icon: Store,
    name: 'E-commerce',
    title: 'Интернет-магазин под ключ за 1 день',
    description: 'Встроенные оплата, доставка и рассрочка. Всё уже готово.',
    href: '/shopping',
    cta: 'Создать магазин'
  },
  {
    id: 'accounting',
    icon: Calculator,
    name: 'Страхование',
    title: 'Страхование бизнеса и товаров',
    description: 'Защитите свой бизнес и товары с помощью страховых продуктов от надёжных партнёров.',
    href: '/insurance',
    cta: 'Выбрать страховку'
  },
  {
    id: 'bank',
    icon: Building2,
    name: 'Банкинг',
    title: 'Современный банкинг для бизнеса',
    description: 'Мгновенные платежи, бизнес-карта и контроль финансов в одном месте.',
    href: '/banking',
    cta: 'Открыть счёт'
  },
  {
    id: 'other',
    icon: Settings,
    name: 'Другие сервисы',
    title: 'Дополнительные инструменты для роста',
    description: 'Бизнес-карта, проверка контрагентов, подключение расчётного счёта.',
    href: '/services',
    cta: 'Посмотреть все сервисы'
  },
];

export const trustCards = [
  {
    id: 'reliability',
    icon: ShieldCheck,
    color: 'bg-[#7C3AED]',
    title: 'Pluse.kz — цифровой филиал RBK Bank',
    description: 'Все счета и операции открываются через лицензированный банк'
  },
  {
    id: 'investors',
    icon: PiggyBank,
    color: 'bg-[#FACC15]',
    title: 'Нас профинансировал фонд Tumar Ventures',
    description: 'Фонд инвестирует в сильные и масштабируемые финтех-стартапы'
  },
  {
    id: 'astana-hub',
    icon: MapPin,
    color: 'bg-[#38BDF8]',
    title: 'Pluse.kz — резидент Astana Hub',
    description: 'Мы развиваемся в крупнейшем технопарке Центральной Азии'
  },
  {
    id: 'clients',
    icon: Users,
    color: 'bg-[#4ADE80]',
    title: 'Более 100 предпринимателей уже с нами',
    description: 'Подключают BNPL, запускают магазины, ведут учёт'
  },
  {
    id: 'transparency',
    icon: MessageCircle,
    color: 'bg-[#F472B6]',
    title: 'Instagram @pluse.kz с историями клиентов',
    description: 'Мы показываем, как работает продукт в реальности'
  },
  {
    id: 'company',
    icon: Briefcase,
    color: 'bg-[#CBD5E1]',
    title: 'Проект реализуется компанией Persons',
    description: 'В партнёрстве с RBK Bank, Tumar Ventures и Astana Hub'
  }
];

export const faqItems = [
  {
    question: "Как открыть счёт в Pluse.kz?",
    answer: 'Регистрация занимает 5 минут, всё онлайн. После проверки личности получаете доступ ко всем сервисам.'
  },
  {
    question: 'Сколько стоит подключение?',
    answer: 'Открытие счёта и базовые функции бесплатные. Продвинутые сервисы доступны по подписке.'
  },
  {
    question: 'Кто предоставляет рассрочку (BNPL)?',
    answer: 'Рассрочку предоставляют банки-партнёры через платформу Pluse.kz. Мы объединили предложения всех банков в единый QR-код, чтобы клиенты могли выбрать лучшие условия.'
  },
  {
    question: 'Можно ли подключить только интернет-магазин или только страхование?',
    answer: 'Да, можете использовать только нужные вам модули.'
  },
  {
    question: 'Насколько безопасны мои данные?',
    answer: 'Данные хранятся на защищённых серверах, передаются в зашифрованном виде и мы соблюдаем все требования безопасности.'
  }
]; 