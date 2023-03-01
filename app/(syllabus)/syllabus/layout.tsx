import './globals.css'
import { Inder } from 'next/font/google'
import Nav from './nav';
import Sidebar from './sidebar';

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
      <body>
        <Nav/>        
        <div className={` md:flex`}>
          <Sidebar/>
        </div>
        {children}
      </body>
    </html>
  )
}

