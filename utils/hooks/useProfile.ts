import { AuthSession } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { definitions } from '../../types/supabase'
import { supabase } from '../supabaseClient'

export interface Profile {
  username: string
  website: string
  avatarUrl: string
}

export function useProfile(session: AuthSession) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    ;(async function () {
      try {
        setLoading(true)
        const user = supabase.auth.user()!

        const { data, error, status } = await supabase
          .from<definitions['profiles']>('profiles')
          .select(`username, website, avatar_url`)
          .eq('id', user.id)
          .single()

        if (error && status !== 406) {
          throw error
        }

        if (data) {
          setProfile({
            username: data.username ?? '',
            website: data.website ?? '',
            avatarUrl: data.avatar_url ?? '',
          })
        }
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [session])

  return { loading, error, profile }
}
