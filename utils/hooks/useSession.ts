import { AuthSession } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

export function useSession() {
  const [session, setSession] = useState<AuthSession | null>(null)

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return session
}
