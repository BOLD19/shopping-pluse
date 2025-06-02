import React from 'react';
import { ContactFormProps, ContactFormData } from '@/types';
import { useForm, validationRules, combineValidators } from '@/hooks/useForm';
import { Button, Input, Modal } from '@/components/ui';
import { apiCall } from '@/lib/utils';

const defaultSubmit = async (data: ContactFormData & { utm?: string }) => {
  const result = await apiCall('/api/telegram-lead', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!result.success) {
    throw new Error(result.error);
  }
};

// Phone number formatting function
const formatPhoneNumber = (value: string) => {
  // Remove all non-digit characters
  const digits = value.replace(/\D/g, '');
  
  // Handle different cases
  if (digits.length === 0) return '';
  if (digits.length <= 1) return `+7 ${digits}`;
  if (digits.length <= 4) return `+7 ${digits.slice(1)}`;
  if (digits.length <= 7) return `+7 ${digits.slice(1, 4)} ${digits.slice(4)}`;
  if (digits.length <= 9) return `+7 ${digits.slice(1, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  return `+7 ${digits.slice(1, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 9)} ${digits.slice(9, 11)}`;
};

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit = defaultSubmit,
  utm,
  submitButtonText = 'Оставить заявку',
  title = 'Оставить заявку',
  description = 'Заполните форму, и наш менеджер свяжется с вами в ближайшее время',
}) => {
  const form = useForm<ContactFormData>({
    initialValues: {
      name: '',
      phone: '',
    },
    validate: (values) => {
      const errors: Partial<Record<keyof ContactFormData, string>> = {};
      
      const nameError = combineValidators(
        validationRules.required,
        validationRules.name
      )(values.name);
      if (nameError) errors.name = nameError;
      
      const phoneError = combineValidators(
        validationRules.required,
        validationRules.phone
      )(values.phone);
      if (phoneError) errors.phone = phoneError;
      
      return errors;
    },
    onSubmit: async (values) => {
      await onSubmit({
        ...values,
        utm,
      });
      form.reset();
    },
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    form.setValue('phone', formatted);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md relative z-10">
      <h3 className="text-xl font-semibold mb-2 text-[#0f172a]">{title}</h3>
      {description && (
        <p className="text-[#64748b] mb-6">{description}</p>
      )}
      
      <form onSubmit={form.handleSubmit} className="space-y-4">
        <Input
          label="Ваше имя"
          placeholder="Введите имя"
          value={form.values.name}
          onChange={(value) => form.setValue('name', value)}
          error={form.errors.name}
          required
        />
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#0f172a]">
            Номер телефона <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="tel"
            placeholder="+7 700 123 45 67"
            value={form.values.phone}
            onChange={handlePhoneChange}
            className="w-full px-4 py-4 rounded-2xl border border-[#e2e8f0] text-[#0f172a] placeholder-[#94a3b8] transition-all duration-200 text-base focus:outline-none focus:ring-2 focus:ring-[#0088f5]/20 focus:border-[#0088f5] hover:border-[#cbd5e1]"
            required
            maxLength={18}
          />
          {form.errors.phone && (
            <p className="text-sm text-red-500 mt-1">{form.errors.phone}</p>
          )}
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="privacy"
            className="mr-2 rounded border-gray-300 text-[#0088f5] focus:ring-[#0088f5]"
            required
          />
          <label htmlFor="privacy" className="text-xs text-gray-500">
            Я согласен с{' '}
            <a 
              href="/privacy" 
              className="underline text-[#0088f5] hover:text-[#0979ff]"
              target="_blank"
              rel="noopener noreferrer"
            >
              политикой конфиденциальности
            </a>
          </label>
        </div>
        
        <Button
          type="submit"
          loading={form.state.loading}
          disabled={!form.isValid || form.state.loading}
          className="w-full"
        >
          {submitButtonText}
        </Button>
        
        {form.state.error && (
          <div className="text-red-500 text-sm text-center">
            {form.state.error}
          </div>
        )}
      </form>

      {/* Success Modal */}
      <Modal
        isOpen={form.state.success}
        onClose={() => form.setValue('success' as any, false)}
        title="Заявка отправлена!"
      >
        <div className="text-center">
          <div className="text-4xl mb-4">🎉</div>
          <p className="text-gray-600 mb-4">
            Спасибо! Мы свяжемся с вами в ближайшее время.
          </p>
          <Button onClick={() => form.setValue('success' as any, false)}>
            Закрыть
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ContactForm; 