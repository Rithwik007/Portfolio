'use client';

import { ReactNode } from 'react';
import { TooltipProvider } from '@portfolio/ui';

export function Providers({ children }: { children: ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}