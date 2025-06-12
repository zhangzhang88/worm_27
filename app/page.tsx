'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// 课程对象数组，包含标题和描述
const allLessons = [
  { title: "Course 1", description: "音乐模式" },
  { title: "Course 2", description: "自定义上传(支持TS格式)", protected: true },
  { title: "Course 3", description: "编程常用单词短语" }, 
  { title: "Course 4", description: "《零基础学英语》" },
  { title: "Course 5", description: "《Code Complete: A Practical Handbook of Software Construction》" },
  { title: "Course 6", description: "《小猪佩奇第一季》每天更新一集" },
  { title: "Course 7", description: "200句话搞定中考单词" },
  { title: "Course 8", description: "成功学习语言的七个秘诀" },
  { title: "Course 9", description: "惊讶! 学会这些 625 单词就可以走遍天下!" },
  { title: "Course 10", description: "60个迷你小故事" },
  { title: "Course 11", description: "16个英语时态，一网打尽！从此告别时态噩梦！" },
  { title: "Course 12", description: "《How to live》" },
  { title: "Course 13", description: "favorite quote" },
  { title: "Course 14", description: "Everyday conversations" },
];

// 当前要显示的课程数量
const visibleLessonsCount = 14;

// 生成课程图片路径
const getLessonImageSrc = (index: number) => {
  return `/lesson${index + 1}.jpg`;
};

export default function Home() {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [selectedCourseIndex, setSelectedCourseIndex] = useState<number | null>(null);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [isToolDropdownOpen, setIsToolDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsToolDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProtectedAction = (action: string) => {
    setIsPasswordModalOpen(true);
    setSelectedAction(action);
    setIsToolDropdownOpen(false);
  };

  const handleCourseClick = (course: any, index: number) => {
    if (course.protected) {
      setIsPasswordModalOpen(true);
      setSelectedCourseIndex(index);
      setSelectedAction('course');
    } else {
      window.location.href = `/courses/courseId_${index + 1}`;
    }
  };

  const handlePasswordSubmit = () => {
    if (password === '123') {
      setIsPasswordModalOpen(false);
      setPassword('');
      setError('');
      if (selectedAction === 'course' && selectedCourseIndex !== null) {
        window.location.href = `/courses/courseId_${selectedCourseIndex + 1}`;
      } else if (selectedAction) {
        window.location.href = `/${selectedAction}`;
      }
    } else {
      setError('密码错误，请重试。');
    }
  };

  const toolButtons = [
    { label: "PingvinShare", action: () => window.location.href = 'https://pingvin-share.ztr8.online/' },
    { label: "经典游戏", action: () => window.location.href = 'https://sun.ztr8.online' },
    { label: "高清影视", action: () => window.location.href = 'https://tv.ztr8.online/' },
    { label: "导航网站", action: () => window.location.href = 'https://onenav.ztr8.online/' },
    { label: "创建课程（制作中）", action: () => handleProtectedAction('vocabulary-editor') },
    { label: "编辑器（制作中）", action: () => handleProtectedAction('editor') },
  ];

  return (
    <div style={{ backgroundColor: '#05051d' }} className="min-h-screen text-blue-500">
      <header className="bg-[#05051d] py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/favicon.ico" alt="Loach Logo" width={60} height={60} />
            <span className="text-white text-xl md:text-2xl font-bold ml-2">Loach</span>
          </div>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsToolDropdownOpen(!isToolDropdownOpen)}
              className="bg-purple-600 text-white px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-md hover:bg-purple-700 transition duration-300"
            >
              Tool
            </button>
            {isToolDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#05051d] border border-purple-300 rounded-md shadow-lg z-10">
                {toolButtons.map((tool, index) => (
                  <button
                    key={index}
                    onClick={tool.action}
                    className="block w-full text-left px-4 py-2 text-sm text-purple-300 hover:bg-purple-700"
                  >
                    {tool.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 pt-12 md:pt-24 pb-12">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-purple-300 mb-4 md:mb-8">让你上瘾的英语学习工具</h1>
          <p className="text-lg md:text-2xl text-white mb-2 md:mb-4">
            使用 连词成句、i + 1、以终为始等学习理论来帮助你习得英语
          </p>
          <p className="text-lg md:text-2xl text-white mb-2 md:mb-4">
            通过不断的 重复 形成肌肉记忆
          </p>
          <p className="text-lg md:text-2xl text-white mb-4 md:mb-8">
            最重要的是 游戏化 的形式让学习英语从此不再痛苦
          </p>
        </div>
        
        <div className="mb-8 md:mb-16">
          <Image
            src="/Background.png"
            alt="Loach App Screenshot"
            width={1200}
            height={600}
            className="rounded-lg shadow-2xl mx-auto"
          />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-300 mb-6 md:mb-8">Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {allLessons.slice(0, visibleLessonsCount).map((lesson, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src={getLessonImageSrc(index)}
                alt={`课程图片 ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-[#05051d] flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-2 md:mb-0">
                  <h2 className="text-lg md:text-xl font-semibold text-purple-300">{lesson.title}</h2>
                  <p className="text-sm md:text-base text-purple-300">{lesson.description}</p>
                </div>
                <Button
                  onClick={() => handleCourseClick(lesson, index)}
                  className="text-purple-300 hover:underline text-sm md:text-base mt-2 md:mt-0"
                >
                  开启Loach
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="mt-8 md:mt-16 text-center text-purple-400 pb-8">
        <p className="text-sm md:text-base">© 2024 英语打字练习，保留所有权利，仅供个人学习。</p>
        <p className="mt-2 text-sm md:text-base">
          <a
            href="http://beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            粤ICP备2024199642号-1
          </a>
        </p>
      </footer>

      <Dialog open={isPasswordModalOpen} onOpenChange={setIsPasswordModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>请输入密码</DialogTitle>
          </DialogHeader>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="输入密码"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <DialogFooter>
            <Button onClick={handlePasswordSubmit}>确认</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}