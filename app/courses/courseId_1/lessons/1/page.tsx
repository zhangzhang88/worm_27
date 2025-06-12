import dynamic from 'next/dynamic';
import LoadingSpinner from '@/app/components/LoadingSpinner';

const DynamicTypingGameLesson1 = dynamic(() => import('./TypingGameLesson1'), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

export default function Lesson1Page() {
  return <DynamicTypingGameLesson1 />;
}