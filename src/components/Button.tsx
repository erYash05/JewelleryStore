import React from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'gold'
  | 'outline-gold'
  | 'outline-dark'
  | 'outline-light';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary',
  secondary:
    'bg-secondary text-on-secondary hover:bg-secondary-fixed hover:text-on-secondary-fixed',
  gold: 'bg-secondary text-primary hover:bg-secondary-fixed',
  'outline-gold':
    'bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-on-secondary',
  'outline-dark':
    'bg-transparent border border-secondary text-on-surface hover:bg-surface-container',
  'outline-light':
    'bg-transparent border border-surface-container-highest/25 text-surface-container-lowest hover:bg-surface-container-lowest hover:text-primary',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-label-uppercase text-label-uppercase tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer ${
        VARIANT_CLASSES[variant]
      } ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
