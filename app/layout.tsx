import './globals.css'
import Nav from './components/Nav'

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
      <body className="font-rnf lg:w-10/12 m-auto bg-white">
        <Nav />
        {children}
      </body>
    </html>
  )
}
