import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dylan Owens Portfolio',
  description: 'Portfolio of Dylan Owens, map maker and game developer',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}