export const dynamic = 'force-dynamic';
import { AdminStatsComponent } from '@gitroom/frontend/components/admin/admin-stats.component';
import { Metadata } from 'next';
import { isGeneralServerSide } from '@gitroom/helpers/utils/is.general.server.side';

export const metadata: Metadata = {
  title: `${isGeneralServerSide() ? 'Postique' : 'Gitroom'} Admin Stats`,
  description: 'Platform usage statistics and admin overview.',
};

export default async function Page() {
  return (
    <div className="bg-newBgColorInner flex-1 flex-col flex p-[20px] gap-[12px]">
      <AdminStatsComponent />
    </div>
  );
}
