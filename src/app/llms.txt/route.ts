import { buildLlmsTxt } from '@/lib/llms';

export const revalidate = 86400;

export async function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=3600',
    },
  });
}

export const dynamic = 'force-static';
