import React from 'react';
import Link from 'next/link';

interface LessonCardsProps {
  courseTitles: string[]; // 添加 courseTitles 类型定义
}

export const LessonCards: React.FC<LessonCardsProps> = ({ courseTitles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {courseTitles.map((title, index) => (
        <Link 
          key={index} 
          href={`/courses/${index + 1}`} // 动态链接
          className="block p-4 border rounded-lg hover:bg-gray-100 transition"
        >
          <h3 className="text-lg font-semibold">{title}</h3>
        </Link>
      ))}
    </div>
  );
};
