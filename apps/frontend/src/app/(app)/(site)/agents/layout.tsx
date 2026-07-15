import { Metadata } from 'next';
import { Agent } from '@gitroom/frontend/components/agents/agent';
export const metadata: Metadata = {
  title: 'Postique - Agent',
  description: 'AI-powered social media scheduling — let your Postique agent create and publish posts for you.',
};
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Agent>{children}</Agent>;
}
