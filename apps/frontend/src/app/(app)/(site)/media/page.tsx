import { MediaLayoutComponent } from '@gitroom/frontend/components/new-layout/layout.media.component';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';

export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'Postique' : 'Gitroom'} Media`,
  description: 'Browse and manage your media library — images, videos, and assets for your posts.',
};

export default async function Page() {
  return <MediaLayoutComponent />
}
