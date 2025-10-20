import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://leygxvdjsimoepmjxrrl.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxleWd4dmRqc2ltb2VwbWp4cnJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0OTgxODIsImV4cCI6MjA3NjA3NDE4Mn0.2V3KkQ1Y1ucZ41gSKU8mUp2KY4xSOMLkZq4ZBxTSN-8' // find this in Supabase > Settings > API

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
