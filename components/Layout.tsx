import { AuthSession } from '@supabase/supabase-js'
import Head from 'next/head'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Menu } from './Menu'

export interface Props {
  session: AuthSession | null
}

export function Layout({ session, children }: PropsWithChildren<Props>) {
  return (
    <>
      <Head>
        <title>Next.js + TypeScript + Supabase + TailwindCSS</title>
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <header className="p-4 border-b bg-white flex justify-between">
          <h1>
            <Link href="/">
              <a className="text-red-800 hover:text-red-700 drop-shadow">
                Next.js + TypeScript + Supabase + TailwindCSS
              </a>
            </Link>
          </h1>
          <Menu session={session} />
        </header>
        <main className="flex-1 p-4">{children}</main>
        <footer className="bg-sky-700 text-white p-4">
          Powered by Next.js &amp; Supabase
        </footer>
      </div>
    </>
  )
}
