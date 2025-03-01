"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/src/components/ui/dialog'
import { Button } from '@/src/components/ui/button'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Bars4Icon } from '@heroicons/react/24/outline'
import { cva, type VariantProps } from 'class-variance-authority'
import React, { useState } from 'react'

const mainNavButtonVariants = cva(
  'rounded-md text-xs flex items-center gap-1',
  {
    variants: {
      layout: {
        sidebar: 'flex-col p-0',
        default: '',
      },
      size: {
        default: 'px-2 py-6',
        sm: 'h-8 px-0 py-2',
        lg: 'h-12 px-6',
      },
    },
    defaultVariants: {
      layout: 'default',
      size: 'default',
    },
  }
)

interface MainNavProps extends React.ComponentProps<'div'>, VariantProps<typeof mainNavButtonVariants> {
  children: React.ReactElement<{ onNavigate?: () => void, onClick?: (e: React.MouseEvent) => void }>
}

export function MainNav({ children, layout, size }: MainNavProps) {
  const params = useParams()
  const lang = params?.lang as string
  const t = useTranslations('MainNav')
  const [open, setOpen] = useState(false);

  if (!lang) {
    console.error('Language parameter is missing')
    return null
  }

  return (
    <Dialog aria-label='primary navigation' open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size={size}
          className={mainNavButtonVariants({ layout, size })}
        >
          <Bars4Icon
            className={size === 'sm' ? 'w-5 h-5' : 'w-10 h-10'}
          />
          {t('menu')}
        </Button>
      </DialogTrigger>
      <DialogContent
        className="w-5/6 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          if (target.tagName === 'A' || target.closest('a')) {
            setOpen(false);
          }
        }}
      >
        <DialogHeader>
          <DialogTitle>{t('menu')}</DialogTitle>
        </DialogHeader>
        {children && React.isValidElement(children)
          ? React.cloneElement(children, { onNavigate: () => setOpen(false) })
          : children}
      </DialogContent>
    </Dialog>
  )
}
