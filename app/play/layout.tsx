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
      <div className="flex justify-between">
        <div className="self-start">
          <h1 className="text-3xl font-bold">Ready to play!</h1>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
