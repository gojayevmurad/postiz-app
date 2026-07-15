export const dynamic = 'force-dynamic';
import { Login } from '@gitroom/frontend/components/auth/login';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'Postique' : 'Gitroom'} · Login`,
  description: 'Sign in to your Postique account and start scheduling social media posts across 28+ channels.',
};
export default async function Auth() {
  return <Login />;
}
