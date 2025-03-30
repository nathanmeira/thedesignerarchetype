import { createClient } from '@supabase/supabase-js';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseKey = config.public.supabaseAnonKey;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase URL or Key");
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const body = await readBody(event);
  const { archetype } = body;

  if (!archetype) {
    return { error: 'Archetype is required.' };
  }

  try {
    const { data, error } = await supabase
      .from('quiz_results')
      .insert([{
        archetype,
        created_at: new Date().toISOString()
      }]);

    if (error) {
      return { error: 'Error inserting data into Supabase: ' + error.message };
    }

    return { message: 'Quiz results saved successfully', data };
  } catch (err: any) {
    return { error: 'Error inserting data into Supabase: ' + err.message };
  }
});
