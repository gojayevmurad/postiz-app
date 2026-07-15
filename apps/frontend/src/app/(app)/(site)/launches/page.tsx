export const dynamic = 'force-dynamic';
import { LaunchesComponent } from '@gitroom/frontend/components/launches/launches.component';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';
export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'Postique Calendar' : 'Gitroom Launches'}`,
  description: 'View and manage your scheduled posts across all social media channels.',
};
export default async function Index() {
  return <LaunchesComponent />;
}
