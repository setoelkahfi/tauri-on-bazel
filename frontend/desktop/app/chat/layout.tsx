import { TooltipProvider } from '../_ui/components/tooltip';
import React from 'react';

const title = 'Nested Layouts';

export const metadata = {
  metadataBase: new URL('https://splitfire.ai'),
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
      <TooltipProvider>{children}</TooltipProvider>
    </div>
  );
}
