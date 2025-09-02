import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper pour vérifier si l'utilisateur est admin (maintenant = authentifié)
export const isAdmin = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    return !!user
  } catch (error) {
    console.error('Error checking admin status:', error)
    return false
  }
}