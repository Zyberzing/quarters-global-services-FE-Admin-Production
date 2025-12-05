import Summary from './_components/Summary';
import Activities from './_components/Activities';
import Alerts from './_components/Alerts';
import ApplicationTrend from './_components/ApplicationTrend';
import ServiceWiseUsage from './_components/ServiceWiseUsage';
import { DashboardCounts } from '@/services/dashboardService';

interface HomeProps {
  dashboardData: DashboardCounts | null;
}

const Home = ({ dashboardData }: HomeProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-6 pb-10">
      {dashboardData && <Summary dashboardData={dashboardData} />}
      <ApplicationTrend />
      <ServiceWiseUsage />
      <Activities />
      <Alerts />
    </div>
  );
};

export default Home;
