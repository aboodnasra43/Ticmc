import React from 'react';
import { clsx } from 'clsx';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  containerClassName?: string;
  bg?: 'white' | 'light' | 'dark' | 'green';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerClassName,
  bg = 'white',
  ...props
}) => {
  const bgStyles = {
    white: 'bg-white',
    light: 'bg-ticmc-light',
    dark: 'bg-ticmc-dark text-white',
    green: 'bg-ticmc-green text-white',
  };

  return (
    <section
      className={clsx('py-16 md:py-24', bgStyles[bg], className)}
      {...props}
    >
      <div className={clsx('container mx-auto px-4 md:px-6', containerClassName)}>
        {children}
      </div>
    </section>
  );
};
