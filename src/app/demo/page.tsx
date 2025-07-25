'use client';

import { useEffect } from 'react';
import { getWhatsAppLink } from '@/utils/whatsapp';
import { trackDemoClick } from '@/utils/analytics';
import { useRouter } from 'next/navigation';

export default function DemoPage() {
  const router = useRouter();

  useEffect(() => {
    // Track the event
    trackDemoClick();
    
    // Open WhatsApp in a new tab
    window.open(getWhatsAppLink(), '_blank');
    
    // Return to the home page
    router.push('/');
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-slate-900 mb-4">
          Открываем WhatsApp...
        </h1>
        <p className="text-slate-600">
          Если WhatsApp не открылся автоматически,{' '}
          <a 
            href={getWhatsAppLink()} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 underline"
            onClick={(e) => {
              e.preventDefault();
              window.open(getWhatsAppLink(), '_blank');
            }}
          >
            нажмите здесь
          </a>
        </p>
      </div>
    </div>
  );
} 