'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
}

const lessonDescriptions = [
  "1-10",  
  "11-20",
  "21-30",
  "31-40",
  "41-50",
  "51-60",
  "61-70",
  "71-80",
  "81-90",
  "91-100",
  "101-110",
  "111-120",
  "121-130",
  "131-140",
  "141-150",
  "151-160",
  "161-170",
  "171-180",
  "181-190",
  "191-200",
  
  
];

const visibleLessonsCount = 20;

const LessonPreview: React.FC<{ lessonIndex: number; courseId: string; onClose: () => void }> = ({ lessonIndex, courseId, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sentenceData, setSentenceData] = useState<SentenceData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  const loadSentenceData = useCallback(async () => {
    if (!isOpen) return;

    try {
      const importedModule = await import(`@/app/courses/${courseId}/lessons/${lessonIndex + 1}/wordDataLesson${lessonIndex + 1}.ts`);
      if (importedModule && importedModule.sentences) {
        setSentenceData(importedModule.sentences);
      } else {
        throw new Error('No sentences data found in the module');
      }
    } catch (error) {
      console.error(`Error loading data for lesson ${lessonIndex + 1}:`, error);
      setError(`Failed to load preview for Lesson ${lessonIndex + 1}. Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setSentenceData([]);
    }
  }, [isOpen, lessonIndex, courseId]);

  useEffect(() => {
    loadSentenceData();
  }, [loadSentenceData]);

  const toggleOpen = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  }, []);

  const handleMouseLeave = () => {
    if (isOpen) {
      setIsOpen(false);
      onClose();
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        className="absolute top-2 right-2 bg-slate-700 text-white px-2 py-1 rounded hover:bg-slate-600 transition duration-300 text-sm"
      >
        {isOpen ? '隐藏' : '预览'}
      </button>
      {isOpen && (
        <div
          ref={previewRef}
          className="absolute top-10 right-0 bg-slate-800 p-4 rounded-lg shadow-lg z-10 w-96 max-h-[calc(50vh-100px)] overflow-y-auto"
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-purple-200 font-semibold">
              Total: {sentenceData.length}
            </span>
            <h4 className="text-purple-200 font-semibold text-center">Lesson Preview:</h4>
          </div>
          {error ? (
            <p className="text-red-400 text-center">{error}</p>
          ) : sentenceData.length > 0 ? (
            <div className="grid grid-cols-[2.5rem_1fr_1fr] border-t border-l border-purple-400">
              <div className="p-2 font-semibold border-b border-r border-purple-400 text-purple-200 text-center">No.</div>
              <div className="p-2 font-semibold border-b border-r border-purple-400 text-purple-200 text-center">English</div>
              <div className="p-2 font-semibold border-b border-r border-purple-400 text-purple-200 text-center">中文</div>
              {sentenceData.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className="p-2 border-b border-r border-purple-400 text-purple-200 text-center">
                    {index + 1}
                  </div>
                  <div className="p-2 border-b border-r border-purple-400 text-purple-100 text-center">
                    {item.sentence}
                  </div>
                  <div className="p-2 border-b border-r border-purple-400 text-purple-300 text-center">
                    {item.chinese}
                  </div>
                </React.Fragment>
              ))}
            </div>
          ) : (
            <p className="text-purple-300 text-center">Loading preview...</p>
          )}
        </div>
      )}
    </div>
  );
};

const CoursePage: React.FC = () => {
  const courseId = 'courseId_7';
  const [exerciseCounts, setExerciseCounts] = useState<number[]>(Array(visibleLessonsCount).fill(0));
  const [lastPracticedLesson, setLastPracticedLesson] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedCounts = localStorage.getItem(`exerciseCounts_${courseId}`);
    if (storedCounts) {
      setExerciseCounts(JSON.parse(storedCounts));
    }
    const storedLastPracticed = localStorage.getItem(`lastPracticedLesson_${courseId}`);
    if (storedLastPracticed) {
      setLastPracticedLesson(parseInt(storedLastPracticed, 10));
    }
  }, [courseId]);

  const handleStartLearning = useCallback((index: number) => {
    setExerciseCounts(prevCounts => {
      const newCounts = Array.isArray(prevCounts) ? [...prevCounts] : Array(visibleLessonsCount).fill(0);
      newCounts[index] = (newCounts[index] || 0) + 1;
      localStorage.setItem(`exerciseCounts_${courseId}`, JSON.stringify(newCounts));
      return newCounts;
    });
    setLastPracticedLesson(index);
    localStorage.setItem(`lastPracticedLesson_${courseId}`, index.toString());
    router.push(`/courses/${courseId}/lessons/${index + 1}`);
  }, [courseId, router]);

  return (
    <div style={{ backgroundColor: '#05051d' }} className="min-h-screen text-purple-100">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-8 text-purple-200">
          课程系列 {courseId}
        </h1>

        <h2 className="text-3xl font-bold text-center mb-6 text-purple-200">
          （更新完毕）
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessonDescriptions.slice(0, visibleLessonsCount).map((description, index) => (
            <div 
              key={index} 
              onClick={() => handleStartLearning(index)}
              className={`bg-slate-800 rounded-lg p-4 shadow-md relative transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500/50 cursor-pointer
                ${lastPracticedLesson === index ? 'border-purple-500' : 'border-transparent'} border-2`}
            >
              <LessonPreview 
                lessonIndex={index} 
                courseId={courseId} 
                onClose={() => {/* Handle close if needed */}} 
              />
              <h3 className="text-xl font-semibold text-purple-200 mb-2">{`Lesson ${index + 1}`}</h3>
              <p className="text-purple-200 mb-8">{description}</p>
              <div className="absolute bottom-2 right-2 bg-purple-700 text-yellow-200 px-2 py-1 rounded-full text-sm">
                {exerciseCounts[index]}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-16 text-center text-purple-400 pb-8 relative">
        <Link href="/" passHref>
          <div className="bg-slate-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-slate-600 transition duration-300 cursor-pointer absolute bottom-0 right-0 mr-4 mb-4">
            返回首页
          </div>
        </Link>
      </footer>
    </div>
  );
};

export default CoursePage;