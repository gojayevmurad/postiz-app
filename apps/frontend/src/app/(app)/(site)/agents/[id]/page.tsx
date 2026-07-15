import { Metadata } from 'next';
import { Agent } from '@gitroom/frontend/components/agents/agent';
import { AgentChat } from '@gitroom/frontend/components/agents/agent.chat';
export const metadata: Metadata = {
  title: 'Postique - Agent',
  description: 'Manage your Postique AI agent configuration and connected channels.',
};
export default async function Page() {
  return (
    <AgentChat />
  );
}
