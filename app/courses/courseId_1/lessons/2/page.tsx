import dynamic from 'next/dynamic';
import LoadingSpinner from '@/app/components/LoadingSpinner';

const DynamicTypingGameLesson2 = dynamic(() => import('./TypingGameLesson2'), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

export default function Lesson2Page() {
  return <DynamicTypingGameLesson2 />;
}