import { createClient } from '@supabase/supabase-js'

// Variáveis de ambiente no Vite usam o prefixo VITE_
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://sua-url-do-supabase.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sua-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
