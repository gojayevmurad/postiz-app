import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Postique - Agent',
  description: 'AI-powered social media scheduling — let your Postique agent create and publish posts for you.',
};

export default async function Page() {
  return redirect('/agents/new');
}
