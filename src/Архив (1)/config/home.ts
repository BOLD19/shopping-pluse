import { Service, TrustCard, FAQItem, Stat } from '@/types'
import { CreditCard, Store, Calculator, Building2, Settings, Users, MessageCircle, Briefcase } from 'lucide-react'

export const services: Service[] = [
  {
    id: 'bnpl',
    icon: CreditCard,
    name: 'BNPL (рассрочка)',
    title: 'Продавайте больше с выгодной рассрочкой',
    description: 'Вы сами выбираете срок и сумму.\nРешение — за 2 минуты.',
    href: '/bnpl',
    cta: 'Подключить BNPL'
  },
  {
    id: 'shopping',
    icon: Store,
    name: 'Pluse.Shopping',
    title: 'Интернет-магазин под ключ за 1 день',
    description: 'Встроенные оплата, доставка и рассрочка. Всё уже готово.',
    href: '/shopping',
    cta: 'Создать магазин'
  },
  {
    id: 'accounting',
    icon: Calculator,
    name: 'Онлайн-бухгалтерия',
    title: 'Бухгалтерия, которая считает за вас',
    description: 'Синхронизация с налоговой, автоматические отчёты и напоминания.',
    href: '/accounting',
    cta: 'Скоро'
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
]

export const trustCards: TrustCard[] = [
  {
    id: 'reliability',
    logo: '/rbk_logo.png',
    color: 'bg-[#7C3AED]',
    title: 'Pluse.kz — цифровой филиал RBK Bank',
    description: 'Все счета и операции открываются через лицензированный банк'
  },
  {
    id: 'investors',
    logo: '/tumar_logo.png',
    color: 'bg-[#FACC15]',
    title: 'Нас профинансировал фонд Tumar Ventures',
    description: 'Фонд инвестирует в сильные и масштабируемые финтех-стартапы'
  },
  {
    id: 'astana-hub',
    logo: '/astanahub_logo.svg',
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
]

export const faqItems: FAQItem[] = [
  {
    question: 'Как открыть счёт в Pluse.kz?',
    answer: 'Регистрация занимает 5 минут, всё онлайн. После подтверждения личности вы получаете доступ ко всем сервисам.'
  },
  {
    question: 'Сколько стоит подключение?',
    answer: 'Открытие счёта и базовые функции — бесплатно. Продвинутые сервисы доступны по подписке.'
  },
  {
    question: 'Кто даёт рассрочку (BNPL)?',
    answer: 'Pluse.kz — это агрегатор банков. Мы подключаем вас к банкам-партнёрам, которые одобряют заявки.'
  },
  {
    question: 'Могу ли я подключить только интернет-магазин или только бухгалтерию?',
    answer: 'Да, вы можете использовать только нужные вам модули.'
  },
  {
    question: 'Насколько безопасны мои данные?',
    answer: 'Данные хранятся на защищённых серверах, передаются в зашифрованном виде, и мы соблюдаем все требования по безопасности.'
  }
]

export const bnplStats: Stat[] = [
  { id: 1, text: '82 заявки одобрено за месяц' },
  { id: 2, text: '15 заявок одобрено сегодня' },
  { id: 3, text: 'Средняя сумма — 240 000 ₸' },
]

export const shopStats: Stat[] = [
  { id: 1, text: 'Магазин создан: pluse.market/demo' },
  { id: 2, text: 'Открыт магазин по продаже техники' },
  { id: 3, text: 'Первый заказ оформлен через 2 часа' },
] 