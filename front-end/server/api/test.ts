import { createClient } from '@supabase/supabase-js';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const supabaseUrl = config.public.supabaseUrl;
    const supabaseKey = config.public.supabaseAnonKey;

    if (!supabaseUrl || !supabaseKey) {
        throw new Error("Missing Supabase URL or Key");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    return { message: 'Supabase client initialized' };
});
