import { LifetimeDeal } from '@gitroom/frontend/components/billing/lifetime.deal';
export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'Postique' : 'Gitroom'} Lifetime deal`,
  description: 'Postique Lifetime Deal — one-time payment, unlimited access forever.',
};
export default async function Page() {
  return <LifetimeDeal />;
}
