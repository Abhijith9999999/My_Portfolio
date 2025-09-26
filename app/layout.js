import './global.css'
import Portfolio from './myport.jsx'

export const metadata = {
  title: 'Abhijith Gentela - Software Engineer',
  description: 'iOS Developer & Full-Stack Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Portfolio />
      </body>
    </html>
  )
}