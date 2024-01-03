import React from 'react'
import { Html, Head, Body } from 'next/document'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Html lang="en">
      <Head>
        <title>Game Day Grill</title>
        <meta name="description" content="Game Day Grill for BPA" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </Head>
      <Body>{children}</Body>
    </Html>
  )
}