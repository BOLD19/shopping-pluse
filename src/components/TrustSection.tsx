import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, PiggyBank, MapPin, Users, MessageCircle, Briefcase, ArrowRight } from 'lucide-react'

export default function TrustSection() {
  return (
    <div className="py-24 sm:py-32 bg-[#FDFCFB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl">
            Почему нам доверяют предприниматели
          </h2>
          <p className="mt-6 text-lg text-[#4A4A4A]">
            Pluse.kz сочетает банковскую надёжность, венчурную поддержку и активное сообщество
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl gap-8 lg:mx-0 lg:max-w-none">
          {/* Main card */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
            <div className="flex items-start gap-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#F5F5F5]">
                <ShieldCheck className="h-8 w-8 text-[#8F6ED5]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#1A1A1A]">
                  Pluse.kz — цифровой филиал RBK Bank
                </h3>
                <p className="mt-3 text-[#4A4A4A]">
                  Счета и операции открываются через лицензированный банк. Мы работаем под надзором Национального Банка РК и соблюдаем все требования регулятора.
                </p>
                <div className="mt-6">
                  <Link
                    href="/digital-branch"
                    className="inline-flex items-center text-[#8F6ED5] font-medium hover:opacity-80 transition-opacity"
                  >
                    Узнать подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <Image
                src="/rbk_logo.png"
                alt="RBK Bank"
                width={120}
                height={40}
                className="h-10 w-auto object-contain opacity-80"
              />
            </div>
          </div>

          {/* Secondary cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#F5F5F5]">
                  <PiggyBank className="h-8 w-8 text-[#8F6ED5]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">
                    Фонд Tumar Ventures — среди наших инвесторов
                  </h3>
                  <p className="mt-2 text-[#4A4A4A]">
                    Tumar поддерживает сильные и масштабируемые стартапы
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#F5F5F5]">
                  <MapPin className="h-8 w-8 text-[#8F6ED5]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A]">
                    Pluse.kz — резидент Astana Hub
                  </h3>
                  <p className="mt-2 text-[#4A4A4A]">
                    Мы развиваемся в Astana Hub — главном IT-хабе региона
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partners and stats */}
        <div className="mt-16 flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <Image
              src="/rbk_logo.png"
              alt="RBK Bank"
              width={120}
              height={40}
              className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
            />
            <Image
              src="/tumar_logo.png"
              alt="Tumar Ventures"
              width={120}
              height={40}
              className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
            />
            <Image
              src="/astanahub_logo.png"
              alt="Astana Hub"
              width={120}
              height={40}
              className="h-8 w-auto opacity-60 hover:opacity-80 transition-opacity"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-1 w-1 rounded-full bg-[#8F6ED5]"></div>
            <p className="text-[#4A4A4A] text-lg">
              100+ предпринимателей уже с нами
            </p>
            <div className="h-1 w-1 rounded-full bg-[#8F6ED5]"></div>
          </div>
        </div>
      </div>
    </div>
  )
} 