'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import NewLessonModal from './NewLessonModal';
import ConfirmDialog from './ConfirmDialog';
import { useRouter } from 'next/navigation';

interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
}

interface LessonInfo {
  number: number;
  description: string;
}

const LessonPreview: React.FC<{ lessonNumber: number; onClose: () => void }> = ({ lessonNumber, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sentenceData, setSentenceData] = useState<SentenceData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null); // Ref to track the preview

  const loadSentenceData = useCallback(async () => {
    if (!isOpen) return;

    try {
      const importedModule = await import(`@/app/courses/courseId_2/lessons/${lessonNumber}/wordDataLesson${lessonNumber}.ts`);
      if (importedModule && importedModule.sentences) {
        setSentenceData(importedModule.sentences);
      } else {
        throw new Error('No sentences data found in the module');
      }
    } catch (error) {
      console.error(`Error loading data for lesson ${lessonNumber}:`, error);
      setError(`Failed to load preview for Lesson ${lessonNumber}. Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setSentenceData([]);
    }
  }, [isOpen, lessonNumber]);

  useEffect(() => {
    loadSentenceData();
  }, [loadSentenceData]);

  const toggleOpen = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  }, []);

  // Close the preview if the mouse leaves the preview area
  const handleMouseLeave = () => {
    if (isOpen) {
      setIsOpen(false);
      onClose(); // Call onClose to inform the parent component
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
          onMouseLeave={handleMouseLeave} // Add event to close on mouse leave
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
  const courseId = 'courseId_2';
  const [lessonDescriptions, setLessonDescriptions] = useState<LessonInfo[]>([]);
  const [showNewLessonModal, setShowNewLessonModal] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [lessonToDelete, setLessonToDelete] = useState<number | null>(null);
  const [lastPracticedLesson, setLastPracticedLesson] = useState<number | null>(null);
  const [exerciseCounts, setExerciseCounts] = useState<{[key: number]: number}>({});
  const router = useRouter();

  const fetchLessons = useCallback(async () => {
    try {
      const response = await fetch('/api/create-lesson');
      if (!response.ok) {
        throw new Error('Failed to fetch lessons');
      }
      const data = await response.json();
      setLessonDescriptions(data);
    } catch (error) {
      console.error('Error fetching lessons:', error);
    }
  }, []);

  useEffect(() => {
    fetchLessons();
    // Load last practiced lesson and exercise counts from localStorage
    const storedLastPracticed = localStorage.getItem(`lastPracticedLesson_${courseId}`);
    if (storedLastPracticed) {
      setLastPracticedLesson(parseInt(storedLastPracticed, 10));
    }
    const storedCounts = localStorage.getItem(`exerciseCounts_${courseId}`);
    if (storedCounts) {
      setExerciseCounts(JSON.parse(storedCounts));
    }
  }, [fetchLessons, courseId]);

  const handleLessonCreated = useCallback((newLessonNumber: number) => {
    fetchLessons();
  }, [fetchLessons]);

  const handleDeleteClick = (lessonNumber: number) => {
    setLessonToDelete(lessonNumber);
    setShowConfirmDialog(true);
  };

  const handleConfirmDelete = async () => {
    if (lessonToDelete === null) return;

    try {
      const response = await fetch(`/api/create-lesson?lessonNumber=${lessonToDelete}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete lesson');
      }
      await fetchLessons();
      setShowConfirmDialog(false);
      setLessonToDelete(null);
    } catch (error) {
      console.error('Error deleting lesson:', error);
      alert('Failed to delete lesson. Please try again.');
    }
  };

  const handleCardClick = useCallback((lessonNumber: number) => {
    setLastPracticedLesson(lessonNumber);
    localStorage.setItem(`lastPracticedLesson_${courseId}`, lessonNumber.toString());
    
    // Update exercise count
    setExerciseCounts(prevCounts => {
      const newCounts = {
        ...prevCounts,
        [lessonNumber]: (prevCounts[lessonNumber] || 0) + 1
      };
      localStorage.setItem(`exerciseCounts_${courseId}`, JSON.stringify(newCounts));
      return newCounts;
    });

    // Navigate to the lesson page
    router.push(`/courses/${courseId}/lessons/${lessonNumber}`);
  }, [courseId, router]);

  return (
    <div style={{ backgroundColor: '#05051d' }} className="min-h-screen text-purple-100">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-8 text-purple-200">
          自定义上传课程 {courseId}
        </h1>

        <h2 className="text-3xl font-bold text-center mb-6 text-purple-200">
          仅支持TS文件格式
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessonDescriptions.map((lesson) => (
            <div 
              key={lesson.number} 
              className={`bg-slate-800 rounded-lg p-4 shadow-md relative transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500/50 cursor-pointer
                ${lastPracticedLesson === lesson.number ? 'border-purple-500' : 'border-transparent'} border-2`}
              onClick={() => handleCardClick(lesson.number)}
            >
              <LessonPreview lessonNumber={lesson.number} onClose={() => setShowNewLessonModal(false)} />
              <h3 className="text-xl font-semibold text-purple-200 mb-2">{`Lesson ${lesson.number}`}</h3>
              <p className="text-purple-200 mb-8">{lesson.description}</p>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteClick(lesson.number);
                  }}
                  className="text-purple-200 hover:text-red-700"
                >
                  删除
                </button>
                <div className="bg-purple-700 text-yellow-200 px-2 py-1 rounded-full text-sm">
                  {exerciseCounts[lesson.number] || 0}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-16 text-center text-purple-400 pb-8">
        <p></p>
      </footer>
      <Link href="/" passHref>
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-slate-600 transition duration-300 cursor-pointer">
          返回首页
        </div>
      </Link>
      
      <button
        onClick={() => setShowNewLessonModal(true)}
        className="fixed bottom-4 left-4 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-slate-600 transition duration-300"
      >
        新建 Lesson
      </button>

      {showNewLessonModal && (
        <NewLessonModal
          onClose={() => setShowNewLessonModal(false)}
          onLessonCreated={handleLessonCreated}
        />
      )}

      <ConfirmDialog
        isOpen={showConfirmDialog}
        message={`Are you sure you want to delete Lesson ${lessonToDelete}?`}
        onConfirm={handleConfirmDelete}
        onCancel={() => {
          setShowConfirmDialog(false);
          setLessonToDelete(null);
        }}
      />
    </div>
  );
};

export default CoursePage;
