import './globals.scss'
import type { Metadata } from 'next'
import '@fontsource-variable/montserrat'

export const metadata: Metadata = {
    title: 'Toad crunchies',
    description: 'Toad crunchies recipes. The flavour is on your side.',
}

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico" sizes="any"/>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
        </head>
        <body className="container">
        { children }
        </body>
        </html>
    )
}
