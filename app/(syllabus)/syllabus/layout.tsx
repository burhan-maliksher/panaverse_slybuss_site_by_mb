import './globals.css'
import { Inder } from 'next/font/google'
import Nav from './nav';
// import Footer from './footer';

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
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  )
}





// import './globals.css'
// import { Inder } from 'next/font/google'
// import SyllabusNav from './nav';

// export const metadata = {
//     title: 'Panaverse Syllabus Site by MB',
//     description: 'Generated by create next app',
//   }
  
// const inder = Inder({
//     subsets:['latin'],
//     variable:'--font-inder',
//     display:'swap',
//     weight:"400"
// });

  
// export default function RootLayout({
//     children,
//   }: {
//     children: React.ReactNode
//   }) {
//     return (
//       <html lang="en" className={`${inder.variable}`}>
//       {/* // <html lang="en" > */}
        
//         <body>
//           <SyllabusNav/>
//           {children}
//         </body>
//       </html>
//     )
// }
  