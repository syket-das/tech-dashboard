'use client';
import React from 'react';
import { BentoGrid, BentoGridItem } from '../components/ui/bento-grid';
import { FaClipboardCheck } from 'react-icons/fa';
import CalendarChart from './charts/CalendarChart';
import ProfileView from './charts/ProfileView';
import ProfileDetails from './charts/ProfileDetails';
import RecentAttempt from './charts/RecentAttempt';
import QuestionSolved from './charts/QuestionSolved';
import CloudProfeciency from './charts/CloudProfeciency';
import LevelOrder from './charts/LevelOrder';
import CompetetiveCoding from './charts/CompetetiveCoding';
import SystemDesign from './charts/SystemDesign';
import SoftSkills from './charts/SoftSkills';
import Gauge from './charts/Gauge';

const GridDashboard = () => {
  return (
    <div className="my-8 ">
      <BentoGrid className=" w-full mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default GridDashboard;

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-400 dark:bg-black"></div>
);
const items = [
  {
    title: 'The Dawn of Innovation',
    description: 'Explore the birth of groundbreaking ideas and inventions.',
    header: <CalendarChart />,
    className: 'md:col-span-3',
    icon: <FaClipboardCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <ProfileView />,
    className: 'md:col-span-1',
    icon: <FaClipboardCheck className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: 'The Art of Design',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <ProfileDetails />,
    className: 'md:col-span-2',
    icon: <FaClipboardCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <RecentAttempt />,
    className: 'md:col-span-2',
    icon: <FaClipboardCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <QuestionSolved />,
    className: 'md:col-span-1',
    icon: <FaClipboardCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <CloudProfeciency />,
    className: 'md:col-span-1',
    icon: <FaClipboardCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <LevelOrder />,
    className: 'md:col-span-1',
    icon: <FaClipboardCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <CompetetiveCoding />,
    className: 'md:col-span-1',
    icon: <FaClipboardCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <SystemDesign />,
    className: 'md:col-span-1',
    icon: <FaClipboardCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <SoftSkills />,
    className: 'md:col-span-1',
    icon: <FaClipboardCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: 'The Power of Communication',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Gauge />,
    className: 'md:col-span-2',
    icon: <FaClipboardCheck className="h-4 w-4 text-neutral-500" />,
  },
];
