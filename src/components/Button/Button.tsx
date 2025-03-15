import { ButtonHTMLAttributes } from 'react'

import cn from '@/helper/cn'

const base = 'flex items-center justify-center rounded-2xl font-medium'

const themeClasses = {
  primary: 'bg-yellow-500 text-white',
  secondary: 'bg-white text-[#EFC81A]',
}

const variantClasses = {
  default: 'disabled:bg-yellow-500 disabled:text-white',
  outline:
    'bg-transparent border-[1.5px] disabled:border-0 disabled:bg-yellow-500 disabled:text-white',
  text: 'bg-transparent disabled:text-[#EFC81A]'
}

const sizeClasses = {
  sm: 'h-10 px-6 text-sm',
  md: 'h-12 px-6 text-base',
  lg: 'h-14 px-6 text-base',
  xl: 'h-16 px-6 text-xl'
}

const widthClasses = {
  default: 'w-auto',
  full: 'w-full'
}

const compoundVariants = {
  primary: {
    default: '',
    outline: 'border-yellow-500 text-white hover:bg-yellow-500 hover:bg-opacity-10',
    text: 'text-[#EFC81A]'
  },
  secondary: {
    default: 'bg-yellow-500 text-white',
    outline: 'border-yellow-500 text-white hover:bg-yellow-500 hover:bg-opacity-10',
    text: 'text-[#EFC81A]'
  },
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'text'
  theme?: 'primary' | 'secondary'
  width?: 'default' | 'full'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'md',
  theme = 'primary',
  type = 'button',
  width = 'default',
  disabled,
  className,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        base,
        themeClasses[theme],
        variantClasses[variant],
        sizeClasses[size],
        widthClasses[width],
        compoundVariants[theme][variant],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
