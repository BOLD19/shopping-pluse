// API Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
}

// Form State Types
export interface FormData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  utm?: string;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export interface FormState {
  data: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  isSubmitted: boolean;
}

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'tel' | 'password';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  prefix?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Feature Component Props
export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
  utm?: string;
  submitButtonText?: string;
  title?: string;
  description?: string;
}

export interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

// Business Logic Types
export interface FAQ {
  question: string;
  answer: string;
}

export interface Feature {
  icon: React.ComponentType;
  title: string;
  description: string;
}

// Utility Types
export type Variant = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error';
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type Color = 'purple' | 'lime' | 'gray' | 'white' | 'dark';

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  dark: string;
  light: string;
  gray: {
    50: string;
    400: string;
    500: string;
  };
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  icon?: React.ComponentType;
  badge?: string;
}

// Layout Types
export interface PageProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

// API types
export interface ContactSubmission {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  utm: string;
  timestamp: string;
}

// BNPL types
export interface BnplApplication {
  id: string;
  amount: number;
  status: 'pending' | 'approved' | 'rejected';
  merchant: string;
  customer: {
    name: string;
    phone: string;
    email: string;
  };
  createdAt: string;
}

// Home page types
// export * from './home'; // Removed - module not found 