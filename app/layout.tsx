import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Many Sided Media Company',
  description: 'Media company home to the Twenty Sided Podcast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} w-full m-auto bg-bkgColor`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
