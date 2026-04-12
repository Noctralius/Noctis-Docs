import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import FlexSearchDialog from '@/components/search';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{ SearchDialog: FlexSearchDialog }}>{children}</RootProvider>
      </body>
    </html>
  );
}
