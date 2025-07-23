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
  "1 : a new neighborhood -1 ", 
  "2 : a new neighborhood -2",
  "3 : a new neighborhood -3",
  "4 : a new neighborhood -4",
  "5 : a new neighborhood -5 ",
  "6 : a new neighborhood -6",
  "7 : a new neighborhood -7",
  "8 : a new neighborhood -8",
  "9 : a new neighborhood -9",
  "10 : a new neighborhood -10",
  "11 : a new neighborhood -11",
  "12 : Banking -1 ",
  "13 : Banking -2",
  "14 : Banking -3",
  "15 : Banking -4",
  "16 : Banking -5",
  "17 : Banking -6",
  "18 : Banking -7",
  "19 : Banking -8",
  "20 : Banking -9",
  "21 : Banking -10",
  "22 : Banking -11",
  "23 : Banking -12",
  "24 : Banking -13",
  "25 : Banking -14",
  "26 : Banking -15",
  "27 : Banking -16",
  "28 : Banking -17",
  "29 : Banking -18",
  "30 : Banking -19",
  "31 : buying & selling a house -1",
  "32 : buying & selling a house -2",
  "33 : buying & selling a house -3",
  "34 : buying & selling a house -4",
  "35 : buying & selling a house -5",
  "36 : buying & selling a house -6",
  "37 : buying & selling a house -7",
  "38 : buying & selling a house -8",
  "39 : buying & selling a house -9",
  "40 : buying & selling a house -10",
  "41 : buying & selling a house -11",
  "42 : buying & selling a house -12",
  "43 : buying & selling a house -13",
  "44 : buying & selling a house -14",
  "45 : buying & selling a house -15",
  "46 : buying & selling a house -16",
  "47 : buying & selling a house -17",
  "48 : buying & selling a house -18",
  "49 : buying & selling a house -19",
  "50 : buying & selling a house -20",
  "51 : buying & selling a house -21",
  "52 : buying & selling a house -22",
  "53 : buying & selling a house -23",
  "54 : buying & selling a house -24",
  "55 : buying & selling a house -25",
  "56 : buying & selling a house -26",
  "57 : buying & selling a house -27",
  "58 : buying & selling a house -28",
  "59 : buying & selling a house -29",
  "60 : buying & selling a house -30",
  "61 : buying a car -1",
  "62 : buying a car -2",
  "63 : buying a car -3",
  "64 : buying a car -4",
  "65 : buying a car -5",
  "66 : buying a car -6",
  "67 : buying a car -7",
  "68 : buying a car -8",
  "69 : buying a car -9",
  "70 : buying a car -10",
  "71 : buying a car -11",
  "72 : buying a car -12",
  "73 : buying a car -13",
  "74 : buying a car -14",
  "75 : crime -1",
  "76 : crime -2",
  "77 : crime -3",
  "78 : crime -4",
  "79 : crime -5",
  "80 : crime -6",
  "81 : crime -7",
  "82 : crime -8",
  "83 : crime -9",
  "84 : crime -10",
  "85 : crime -11",
  "86 : crime -12",
  "87 : crime -13",
  "88 : crime -14",
  "89 : crime -15",
  "90 : Daily life -1",
  "91 : Daily life -2",
  "92 : Daily life -3",
  "93 : Daily life -4",
  "94 : Daily life -5",
  "95 : Daily life -6",
  "96 : Daily life -7",
  "97 : Daily life -8",
  "98 : Daily life -9",
  "99 : Daily life -10",
  "100 : Daily life -11",
  "101 : Daily life -12",
  "102 : Daily life -13",
  "103 : Daily life -14",
  "104 : Daily life -15",
  "105 : Daily life -16",
  "106 : Daily life -17",
  "107 : Daily life -18",
  "108 : Daily life -19",
  "109 : Daily life -20",
  "110 : Daily life -21",
  "111 : Daily life -22",
  "112 : Daily life -23",
  "113 : Daily life -24",
  "114 : Daily life -25",
  "115 : Daily life -26",
  "116 : Daily life -27",
  "117 : Daily life -28",
  "118 : Daily life -29",
  "119 : Daily life -30",
  "120 : Daily life -31",
  "121 : Daily life -32",
  "122 : Daily life -33",
  "123 : Daily life -34",
  "124 : Daily life -35",
  "125 : Daily life -36",
  "126 : Daily life -37",
  "127 : Daily life -38",
  "128 : Daily life -39",
  "129 : Daily life -40",
  "130 : Daily life -41",
  "131 : Daily life -42",
  "132 : Daily life -43",
  "133 : Daily life -44",
  "134 : Daily life -45",
  "135 : Daily life -46",
  "136 : Daily life -47",
  "137 : Daily life -48",
  "138 : Daily life -49",
  "139 : Daily life -50",
  "140 : Daily life -51",
  "141 : Daily life -52",
  "142 : Daily life -53",
  "143 : Daily life -54",
  "144 : Daily life -55",
  "145 : Daily life -56",
  "146 : Daily life -57",
  "147 : Daily life -58",
  "148 : Daily life -59",
  "149 : Daily life -60",
  "150 : Daily life -61",
  "151 : Daily life -62",
  "152 : Daily life -63",
  "153 : Daily life -64",
  "154 : Daily life -65",
  "155 : Daily life -66",
  "156 : Daily life -67",
  "157 : Daily life -68",
  "158 : Daily life -69",
  "159 : Daily life -70",
  "160 : Daily life -71",
  "161 : Daily life -72",
  "162 : Daily life -73",
  "163 : Daily life -74",
  "164 : Daily life -75",
  "165 : Daily life -76",
  "166 : Daily life -77",   
  "167 : Daily life -78",
  "168 : Daily life -79",
  "169 : Daily life -80",
  "170 : Daily life -81",
  "171 : Daily life -82",
  "172 : Daily life -83",
  "173 : Daily life -84",
  "174 : Daily life -85",
  "175 : Daily life -86",
  "176 : Daily life -87",
  "177 : Daily life -88",
  "178 : Daily life -89",
  "179 : Daily life -90",
  "180 : Daily life -91",
  "181 : Daily life -92",
  "182 : Daily life -93",
  "183 : Daily life -94",
  "184 : Daily life -95",
  "185 : Daily life -96",
  "186 : Daily life -97",
  "187 : Daily life -98",
  "188 : Daily life -99",
  "189 : Daily life -100",
  "190 : Daily life -101",
  "191 : Daily life -102",
  "192 : Daily life -103",
  "193 : Daily life -104",
  "194 : Daily life -105",
  "195 : Daily life -106",
  "196 : Daily life -107",
  "197 : Daily life -108",
  "198 : Daily life -109",
  "199 : Daily life -110",
  "200 : Daily life -111",
  "201 : Daily life -112",  
  "202 : Daily life -113",












];

const visibleLessonsCount = 121;

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
  const courseId = 'courseId_14';
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
        《Everyday conversations》
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