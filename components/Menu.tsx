import { AuthSession } from '@supabase/supabase-js'
import Link from 'next/link'
import Router from 'next/router'
import { supabase } from '../utils/supabaseClient'

export interface Props {
  session: AuthSession | null
}

export function Menu({ session }: Props) {
  return (
    <ul className="flex space-x-4">
      {session ? (
        <>
          <li>
            <Link href="/profile">
              <a className="btn-link">My profile</a>
            </Link>
          </li>
          <li>
            <button
              className="btn-link"
              onClick={() => {
                supabase.auth.signOut()
                Router.push('/')
              }}
            >
              Sign out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link href="/signin">
              <a className="btn-link">Sign in/Sign up</a>
            </Link>
          </li>
        </>
      )}
    </ul>
  )
}
