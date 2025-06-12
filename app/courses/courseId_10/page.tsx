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
  "1 - Mike is a Cook ", 
  "2 - Dustin Wants to Take a Vacation",
  "3 - Karen Gets a Cat ",
  "4 - My Daughter Is a Good Student",
  "5 - Jon Has Lots of Homework",
  "6 - Jane and Fred's Night Routine",
  "7 - James in the Office ",
  "8 - Lisa Goes Shoe Shopping ",
  "9 - New Girlfriend ",
  "10 - Birthday Party ",
  "11 - Brad Searches for a New Apartment",
  "12 - Janet Buys a New Computer",
  "13 - Kimi Goes on a Date with Saul",
  "14 - Kelly Goes to a Dance Class",
  "15 - Mara and Emily Exercise",
  "16 - A More Exciting Job",
  "17 - On the Highway" ,
  "18 - Getting Dressed",
  "19 - It's Time for Lunch ",
  "20 - Going to Work ",
  "21 - Jerry Wants to See a Movie",
  "22 - Emma Is Sick ",
  "23 - Exam or Party?",
  "24 - New Job",
  "25 - The New Baby",  
  "26 - Alex and His Room",
  "27 - Bill On a Trip",
  "28 - Stella in a New Country",
  "29 - Layne and Cooking",
  "30 - James on Saturdays",
  "31 - Rosie Visits Her Friend for Dinner",
  "32 - Sara Makes Breakfast for her Family",
  "33 - Eric Was in Class at University",
  "34 - Tom Has Dinner With His Friends",
  "35 - A Dog Called Max",
  "36 - Phil's Big Family",
  "37 - Adam's Schedule",
  "38 - Sasha and Jen's Favourite Actors",
  "39 - Adrian's Favourite Singer",
  "40 - Sharon Has a Big Family",
  "41 - Allen is at a Restaurant",
  "42 - A New Dog",
  "43 - Ben and His Schedule",
  "44 - Martin Lives Alone",
  "45 - Tony Has Been Hiking",
  "46 - Lin Is Nervous About Her Presentation",
  "47 - Jessica Has a Problem at Work",
  "48 - University or Online Courses",
  "49 - Trying To Go To Sleep ",
  "50 - University Schedule ",
  "51 - New MP3 Player",
  "52 - My Grandaughter Had a Baby",
  "53 - Wrestling Competition",
  "54 - Mariah at the Park",
  "55 - A New Home ",
  "56 - Margaret Makes a Business Decision",
  "57 - Bill In Traffic ",
  "58 - Sam And Betty Enjoy Going Out",
  "59 - Mary Likes to Read",
  "60 - Anne Should Take an Umbrella",

   
];

const visibleLessonsCount = 60;

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
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={toggleOpen}
        className="absolute top-1 right-1 text-white text-xs hover:text-purple-300 transition duration-300 z-10"
      >
        {isOpen ? '隐藏' : '预览'}
      </button>
      {isOpen && (
        <div
          ref={previewRef}
          className="absolute top-10 right-0 bg-slate-800 p-4 rounded-lg shadow-lg z-10 w-full max-w-[calc(100%-1rem)] max-h-[calc(50vh-100px)] overflow-y-auto"
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
  const courseId = 'courseId_10';
  const [exerciseCounts, setExerciseCounts] = useState<number[]>(Array(visibleLessonsCount).fill(0));
  const [lastPracticedLesson, setLastPracticedLesson] = useState<number | null>(null);
  const [lastClickedLesson, setLastClickedLesson] = useState<number | null>(null);
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
    const storedLastClicked = localStorage.getItem(`lastClickedLesson_${courseId}`);
    if (storedLastClicked) {
      setLastClickedLesson(parseInt(storedLastClicked, 10));
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
    setLastClickedLesson(index);
    localStorage.setItem(`lastPracticedLesson_${courseId}`, index.toString());
    localStorage.setItem(`lastClickedLesson_${courseId}`, index.toString());
    router.push(`/courses/${courseId}/lessons/${index + 1}`);
  }, [courseId, router]);

  return (
    <div style={{ backgroundColor: '#05051d' }} className="min-h-screen text-purple-100">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-200">
        《Mini Stories》
        </h1>

        <h2 className="text-2xl font-bold text-center mb-6 text-purple-200">
          更新中......
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {lessonDescriptions.map((description, index) => (
            <div 
              key={index} 
              className={`bg-[#05051d] rounded-lg p-3 shadow-md relative transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-white/50 cursor-pointer
                ${lastClickedLesson === index ? 'border-purple-500' : lastPracticedLesson === index ? 'border-white' : 'border-white/50'} border h-40 flex flex-col justify-between overflow-visible
                group`}
            >
              <LessonPreview 
                lessonIndex={index} 
                courseId={courseId} 
                onClose={() => {/* Handle close if needed */}} 
              />
              <div 
                className="absolute inset-0 flex items-center justify-center p-3"
                onClick={() => handleStartLearning(index)}
              >
                <p className="text-purple-200 text-center text-lg font-bold leading-tight transition-colors duration-300 group-hover:text-purple-500">
                  {description}
                </p>
              </div>
              <div className="absolute bottom-2 right-2 text-yellow-200 text-sm font-semibold">
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