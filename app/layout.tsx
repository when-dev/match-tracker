import './styles/globals.css'
import { Inter } from 'next/font/google'

const InterFont = Inter({ 
  subsets: ['latin'], 
  weight: '400',
  display: 'swap',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={InterFont.className}>{children}</body>
		</html>
	)
}
