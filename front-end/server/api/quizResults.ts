import { createClient } from '@supabase/supabase-js';

export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseKey = config.public.supabaseAnonKey;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase URL or Key");
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // Fetch all quiz results
    const { data: quizResults, error: quizResultsError } = await supabase
      .from('quiz_results')
      .select('archetype');

    if (quizResultsError) throw quizResultsError;

    // Group quiz results by archetype
    const archetypeCount = quizResults.reduce((acc: any, result: any) => {
      acc[result.archetype] = (acc[result.archetype] || 0) + 1;
      return acc;
    }, {});

    // Calculate total votes
    const totalVotes = quizResults.length;

    // Map the grouped results to an array with counts and percentages
    const archetypeResults = Object.keys(archetypeCount).map((archetype) => ({
      archetype,
      count: archetypeCount[archetype],
      percentage: (archetypeCount[archetype] / totalVotes) * 100,
    }));

    // Fetch recent test takers (last hour)
    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);

    const { data: recentData, error: recentError } = await supabase
      .from('quiz_results')
      .select('created_at')
      .gt('created_at', oneHourAgo.toISOString());

    if (recentError) throw recentError;

    const recentTestTakers = recentData.length;

    return { archetypeResults, recentTestTakers };
  } catch (error) {
    console.error('Error fetching quiz results:', error);
    return { error: 'Unable to fetch data' };
  }
});
