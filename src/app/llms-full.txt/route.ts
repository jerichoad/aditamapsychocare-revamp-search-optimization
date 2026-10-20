import { buildLlmsFullTxt } from '@/lib/llms';

export const revalidate = 3600;

export async function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
    },
  });
}

export const dynamic = 'force-static';
