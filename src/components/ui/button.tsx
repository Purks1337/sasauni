import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    if (asChild) {
      // Filter out button-specific props for div
      const { disabled, form, formAction, formEncType, formMethod, formNoValidate, formTarget, name, type, value, ...divProps } = props;
      
      return (
        <div
          className={cn(
            'btn',
            {
              'btn-primary': variant === 'default',
              'btn-secondary': variant === 'secondary',
              'bg-red-600 text-white hover:bg-red-700': variant === 'destructive',
              'border border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700': variant === 'outline',
              'hover:bg-gray-100 dark:hover:bg-gray-800': variant === 'ghost',
              'text-blue-600 underline-offset-4 hover:underline dark:text-blue-400': variant === 'link',
            },
            {
              'h-10 px-4 py-2': size === 'default',
              'h-9 rounded-md px-3': size === 'sm',
              'h-11 rounded-md px-8': size === 'lg',
              'h-10 w-10': size === 'icon',
            },
            className
          )}
          {...divProps}
        />
      );
    }
    
    return (
      <button
        className={cn(
          'btn',
          {
            'btn-primary': variant === 'default',
            'btn-secondary': variant === 'secondary',
            'bg-red-600 text-white hover:bg-red-700': variant === 'destructive',
            'border border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700': variant === 'outline',
            'hover:bg-gray-100 dark:hover:bg-gray-800': variant === 'ghost',
            'text-blue-600 underline-offset-4 hover:underline dark:text-blue-400': variant === 'link',
          },
          {
            'h-10 px-4 py-2': size === 'default',
            'h-9 rounded-md px-3': size === 'sm',
            'h-11 rounded-md px-8': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
