import './globals.css'
import { Inder } from 'next/font/google'
import Nav from './nav';
import Footer from './footer';
import Script from 'next/script';

export const metadata = {
  title: 'Panaverse Syllabus Site by MB',
  description: 'Generated by create next app',

}

const inder = Inder({
  subsets:['latin'],
  variable:'--font-inder',
  display:'swap',
  weight:"400"
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inder.variable}`}>
      
      <head>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
        />
        
        <Script id="ga-script" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
        </Script>
      </head>
      
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
