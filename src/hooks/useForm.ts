import { useState, useCallback } from 'react';
import { getErrorMessage } from '@/lib/utils';

interface FormState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

interface UseFormOptions<T> {
  initialValues: T;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
  onSubmit: (values: T) => Promise<void>;
}

interface UseFormReturn<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  state: FormState;
  setValue: (field: keyof T, value: any) => void;
  setValues: (values: Partial<T>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  reset: () => void;
  isValid: boolean;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormOptions<T>): UseFormReturn<T> {
  const [values, setValuesState] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [state, setState] = useState<FormState>({
    loading: false,
    error: null,
    success: false,
  });

  const setValue = useCallback((field: keyof T, value: any) => {
    setValuesState(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  const setValues = useCallback((newValues: Partial<T>) => {
    setValuesState(prev => ({ ...prev, ...newValues }));
  }, []);

  const validateForm = useCallback((): Partial<Record<keyof T, string>> => {
    if (validate) {
      return validate(values);
    }
    return {};
  }, [validate, values]);

  const reset = useCallback(() => {
    setValuesState(initialValues);
    setErrors({});
    setState({
      loading: false,
      error: null,
      success: false,
    });
  }, [initialValues]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      await onSubmit(values);
      setState({
        loading: false,
        error: null,
        success: true,
      });
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => {
        setState(prev => ({ ...prev, success: false }));
      }, 3000);
      
    } catch (error) {
      setState({
        loading: false,
        error: getErrorMessage(error),
        success: false,
      });
    }
  }, [values, validateForm, onSubmit]);

  const isValid = Object.keys(validateForm()).length === 0;

  return {
    values,
    errors,
    state,
    setValue,
    setValues,
    handleSubmit,
    reset,
    isValid,
  };
}

// Predefined validation functions for common use cases
export const validationRules = {
  required: (value: any) => {
    if (!value || (typeof value === 'string' && !value.trim())) {
      return 'Это поле обязательно для заполнения';
    }
    return undefined;
  },
  
  email: (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      return 'Пожалуйста, введите корректный email адрес';
    }
    return undefined;
  },
  
  phone: (value: string) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (value && !phoneRegex.test(value.replace(/\s/g, ''))) {
      return 'Пожалуйста, введите корректный номер телефона';
    }
    return undefined;
  },
  
  name: (value: string) => {
    if (value && value.trim().length < 2) {
      return 'Имя должно содержать минимум 2 символа';
    }
    return undefined;
  },
  
  minLength: (min: number) => (value: string) => {
    if (value && value.length < min) {
      return `Минимум ${min} символов`;
    }
    return undefined;
  },
  
  maxLength: (max: number) => (value: string) => {
    if (value && value.length > max) {
      return `Максимум ${max} символов`;
    }
    return undefined;
  },
};

// Utility function to combine validation rules
export const combineValidators = (...validators: Array<(value: any) => string | undefined>) => {
  return (value: any) => {
    for (const validator of validators) {
      const error = validator(value);
      if (error) return error;
    }
    return undefined;
  };
}; 