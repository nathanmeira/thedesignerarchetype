import {createClient} from "@supabase/supabase-js";

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const supabaseUrl = config.public.supabaseUrl;
    const supabaseKey = config.public.supabaseAnonKey;

    if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase URL or Key is missing.');
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    return {
        provide: {
            supabase
        }
    };
});
