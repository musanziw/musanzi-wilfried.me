import './globals.css'
import type {Metadata} from 'next'
import {DM_Sans} from 'next/font/google'
import React from "react";


const dmSans = DM_Sans({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Wilfried Musanzi — Portfolio',
    description: 'Wilfried Musanzi | Fullstack JavaScript Developer',
    keywords: 'Wilfried Musanzi, Wilfried, Musanzi, Web Developer, JavaScript, React, Next.js, Node.js, TailwindCSS, TypeScript, Lubumbashi, DRC',
    openGraph: {
        siteName: 'Wilfried Musanzi — Portfolio',
        type: 'website',
        locale: 'en_US',
        url: 'https://musanzi-wilfried.me',
        title: 'Wilfried Musanzi — Portfolio',
        description: 'Wilfried Musanzi | Fullstack JavaScript Developer',
        images: [
            {
                url: 'https://musanzi-wilfried.me/me.webp',
                width: 800,
                height: 600,
                alt: 'Wilfried Musanzi — Fullstack JavaScript Developer',
            },
            {
                url: 'https://musanzi-wilfried.me/me.webp',
                width: 1800,
                height: 1600,
                alt: 'Wilfried Musanzi — Fullstack JavaScript Developer',
            },
        ],
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body
            className={`bg-neutral-50 text-zinc-900 ${dmSans.className} dark:bg-zinc-950 dark:text-neutral-100 transition-colors ease-in duration-100`}>
        {children}
        </body>
        </html>
    )
}
