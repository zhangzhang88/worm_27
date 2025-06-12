'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import NewLessonModal from './NewLessonModal';
import ConfirmDialog from './ConfirmDialog';

interface SentenceData {
  id: string;
  sentence: string;
  chinese: string;
}

interface LessonInfo {
  number: number;
  description: string;
}

const LessonPreview: React.FC<{ lessonNumber: number }> = ({ lessonNumber }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sentenceData, setSentenceData] = useState<SentenceData[]>([]);
  const [error, setError] = useState<string | null>(null);

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

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        className="absolute top-2 right-2 bg-slate-700 text-white px-2 py-1 rounded hover:bg-slate-700 transition duration-300 text-sm"
      >
        {isOpen ? '隐藏' : '预览'}
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 bg-slate-700 p-4 rounded-lg shadow-lg z-10 w-full max-h-96 overflow-y-auto">
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
  }, [fetchLessons]);

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
            <div key={lesson.number} className="bg-slate-800 rounded-lg p-4 shadow-md relative">
              <LessonPreview lessonNumber={lesson.number} />
              <h3 className="text-xl font-semibold text-purple-200">{`Lesson ${lesson.number}`}</h3>
              <p className="text-purple-200">{lesson.description}</p>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleDeleteClick(lesson.number)}
                  className="text-red-500 hover:text-red-700"
                >
                  删除
                </button>
                <Link 
                  href={`/courses/${courseId}/lessons/${lesson.number}`}
                  className="text-purple-200 hover:underline"
                >
                  开始学习
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-16 text-center text-purple-400 pb-8">
        <p>© 2024 英语打字练习。保留所有权利。</p>
      </footer>
      <Link href="/" passHref>
        <div className="fixed bottom-4 right-4 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-slate-600 transition duration-300 cursor-pointer">
          返回首页
        </div>
      </Link>
      
      <button
        onClick={() => setShowNewLessonModal(true)}
        className="fixed bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-500 transition duration-300"
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