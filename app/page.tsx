import GridDashboard from '@/components/GridDashboard';
import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="mt-8"></div>
      <GridDashboard />
    </div>
  );
}
