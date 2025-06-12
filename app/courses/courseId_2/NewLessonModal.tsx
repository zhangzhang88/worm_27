import React, { useState, useRef } from 'react';

interface NewLessonModalProps {
  onClose: () => void;
  onLessonCreated: (lessonNumber: number) => void;
}

const NewLessonModal: React.FC<NewLessonModalProps> = ({ onClose, onLessonCreated }) => {
  const [lessonNumber, setLessonNumber] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lessonNumber || !file) {
      setError('请填写所有字段');
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('lessonNumber', lessonNumber);
    formData.append('file', file);

    try {
      const response = await fetch('/api/create-lesson', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '创建课程失败');
      }

      const data = await response.json();
      console.log('课程创建成功:', data);
      onLessonCreated(parseInt(lessonNumber));
      onClose();
    } catch (error) {
      console.error('创建课程时出错:', error);
      setError(`创建课程出错: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-slate-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-purple-200">新建 Lesson</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-purple-200 text-sm font-bold mb-2" htmlFor="lessonNumber">
              Lesson 编号
            </label>
            <input
              type="number"
              id="lessonNumber"
              value={lessonNumber}
              onChange={(e) => setLessonNumber(e.target.value)}
              className="shadow appearance-none bg-slate-700 border border-purple-500 rounded w-full py-2 px-3 text-purple-200 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              disabled={isLoading}
            />
          </div>
          <div className="mb-4">
            <label className="block text-purple-200 text-sm font-bold mb-2" htmlFor="file">
              上传 TS 文件
            </label>
            <div className="flex items-center">
              <input
                type="file"
                id="file"
                ref={fileInputRef}
                accept=".ts"
                onChange={handleFileChange}
                className="hidden"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={handleChooseFile}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isLoading}
              >
                选择文件
              </button>
              <span className="ml-3 text-purple-200">
                {file ? file.name : "未选择文件"}
              </span>
            </div>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2 transition duration-200"
              disabled={isLoading}
            >
              取消
            </button>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-200"
              disabled={isLoading}
            >
              {isLoading ? '创建中...' : '创建'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewLessonModal;