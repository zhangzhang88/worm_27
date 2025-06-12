'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
}

const smallTextStyle = {
  fontSize: '0.8em',
  fontWeight: 300,
};

const lessonDescriptions = [
  <span key="lesson1">一般现在时（Simple Present）<br /><small style={smallTextStyle} className="hidden md:inline-block">表示经常性或习惯性的动作，或普遍真理</small></span>,
  <span key="lesson2">现在进行时（Present Continuous）<br /><small style={smallTextStyle} className="hidden md:inline-block">表示现在正在进行的动作</small></span>,
  <span key="lesson3">现在完成时（Present Perfect）<br /><small style={smallTextStyle} className="hidden md:inline-block">表示过去发生的动作对现在有影响，或表示动作从过去开始一直持续到现在。可以理解为中文中想要表达xxx了的意思</small></span>,
  <span key="lesson4">现在完成进行时（Present Perfect Continuous) <br /><small style={smallTextStyle} className="hidden md:inline-block">描述从过去某一时间开始一直持续到现在的动作，强调动作的持续性和延续性。在中文中，这种表达通常可以用&quot;一直&quot;来..</small></span>,
  <span key="lesson5">一般过去时（Simple Past）<br /><small style={smallTextStyle} className="hidden md:inline-block">表示过去发生的动作或状态</small></span>,
  <span key="lesson6">过去进行时（Past Continuous）<br /><small style={smallTextStyle} className="hidden md:inline-block">表示过去某一时刻正在进行的动作</small></span>,
  <span key="lesson7">过去完成时（Past Perfect）<br /><small style={smallTextStyle} className="hidden md:inline-block">在过去某一时间或动作之前已经发生或完成了的动作。它由&quot;had +过去分词&quot;构成。可以理解为中文中想要表达&quot;xxx了&quot;...</small></span>,
  <span key="lesson8">过去完成进行时（Past Perfect Continuous) <br /><small style={smallTextStyle} className="hidden md:inline-block">表示从过去某一时间开始一直持续到过去另一时间的动作。由主语+had been+现在分词构成。</small></span>,
  <span key="lesson9">一般将来时（Simple Future）<br /><small style={smallTextStyle} className="hidden md:inline-block">表示将来要发生的动作或状态。</small></span>,
  <span key="lesson10">将来进行时（Future Continuous）<br /><small style={smallTextStyle} className="hidden md:inline-block">表示将来某一时刻正在进行的动作</small></span>,
  <span key="lesson11">将来完成时（Future Perfect）<br /><small style={smallTextStyle} className="hidden md:inline-block">表示在将来某一时间之前已经完成的动作</small></span>,
  <span key="lesson12">将来完成进行时（Future Perfect Continuous) <br /><small style={smallTextStyle} className="hidden md:inline-block">表示从将来某一时间开始一直持续到将来另一时间的动作</small></span>,
  <span key="lesson13">一般过去将来时（Simple Past Future) <br /><small style={smallTextStyle} className="hidden md:inline-block">表示从过去某一时间看将来要发生的动作或状态</small></span>,
  <span key="lesson14">过去将来进行时（Past Future Continuous) <br /><small style={smallTextStyle} className="hidden md:inline-block">表示从过去某一时间看将来某一时刻正在进行的动作</small></span>,
  <span key="lesson15">过去将来完成时（Past Future Perfect) <br /><small style={smallTextStyle} className="hidden md:inline-block">表示从过去某一时间看将来某一时间之前已经完成的动作</small></span>,
  <span key="lesson16">过去将来完成进行时（Past Future Perfect Continuous) <br /><small style={smallTextStyle} className="hidden md:inline-block">表示从过去某一时间看将来某一时间开始一直持续到将来另一时间的动作</small></span>,
];

const visibleLessonsCount = 16;

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
        className="absolute top-0 right-0 text-white hover:text-purple-300 transition duration-300 z-10"
        style={{ 
          fontSize: '0.6rem',
          transform: 'translateY(-50%)', // 将按钮向上移动自身高度的一半
        }}
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
  const courseId = 'courseId_11';
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
        16个英语时态，一网打尽！从此告别时态噩梦！
        </h1>

        <h2 className="text-2xl font-bold text-center mb-6 text-purple-200">
          完整版
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {lessonDescriptions.map((description, index) => (
            <div 
              key={`lesson-${index}`} 
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
          <div className="bg-slate-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-slate-600 transition duration-300 cursor-pointer absolute bottom-0 right-0 mr-4 mb-4 font-sans">
            返回首页
          </div>
        </Link>
      </footer>
    </div>
  );
};

export default CoursePage;