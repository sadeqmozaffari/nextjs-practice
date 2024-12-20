import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import '../styles/globals.css';
import MainContext from '@/providers/MainContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import localFont from 'next/font/local';

const myFont = Inter({subsets: ['latin']});
const FaFont = localFont({src: '../app/assets/fonts/IRANSans.ttf'});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {


  return (
    <html
      dir={params.lang === 'en' ? 'ltr' : 'rtl'}
      lang={params.lang}
      id="html"
    >
      <body
        className={params.lang === 'en' ? myFont.className : FaFont.className}
      >
          <MainContext>
            <div className="flex flex-col flex-1 h-[100vh]">
              <Header params={params} />
              <main className="flex-col flex-1">{children}</main>
              <Footer />
            </div>
          </MainContext>
      </body>
    </html>
  );
}
