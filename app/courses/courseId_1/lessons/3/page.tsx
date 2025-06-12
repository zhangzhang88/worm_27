import dynamic from 'next/dynamic';
import LoadingSpinner from '@/app/components/LoadingSpinner';

const DynamicTypingGameLesson3 = dynamic(() => import('./TypingGameLesson3'), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

export default function Lesson3Page() {
  return <DynamicTypingGameLesson3 />;
}