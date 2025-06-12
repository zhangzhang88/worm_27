import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { writeFile, readFile } from 'fs/promises';

const LESSONS_INFO_PATH = path.join(process.cwd(), 'app', 'courses', 'courseId_2', 'lessonsInfo.json');

async function getLessonsInfo() {
  try {
    const data = await readFile(LESSONS_INFO_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function saveLessonsInfo(lessonsInfo) {
  await writeFile(LESSONS_INFO_PATH, JSON.stringify(lessonsInfo, null, 2));
}

export async function GET() {
  try {
    const lessonsInfo = await getLessonsInfo();
    return NextResponse.json(lessonsInfo);
  } catch (error) {
    console.error('Error fetching lessons info:', error);
    return NextResponse.json({ error: 'Failed to fetch lessons info' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const lessonNumber = formData.get('lessonNumber') as string;
    const file = formData.get('file') as File;

    if (!lessonNumber || !file) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const lessonDir = path.join(process.cwd(), 'app', 'courses', 'courseId_2', 'lessons', lessonNumber);
    fs.mkdirSync(lessonDir, { recursive: true });

    const examplePath = path.join(process.cwd(), 'app', 'courses', 'courseId_2', 'Example.tsx');
    const newPagePath = path.join(lessonDir, 'page.tsx');
    fs.copyFileSync(examplePath, newPagePath);

    let pageContent = fs.readFileSync(newPagePath, 'utf8');
    pageContent = pageContent.replace(
      /from ['"]\.\/wordDataLesson1['"]/, 
      `from './wordDataLesson${lessonNumber}'`
    );
    pageContent = pageContent.replace(
      /export default function TypingGameLesson2/,
      `export default function TypingGameLesson${lessonNumber}`
    );
    fs.writeFileSync(newPagePath, pageContent);

    const newFilePath = path.join(lessonDir, `wordDataLesson${lessonNumber}.ts`);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(newFilePath, buffer);

    const lessonsInfo = await getLessonsInfo();
    lessonsInfo.push({
      number: parseInt(lessonNumber),
      description: `New Lesson ${lessonNumber}`
    });
    await saveLessonsInfo(lessonsInfo);

    return NextResponse.json({ message: 'Lesson created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error creating lesson:', error);
    return NextResponse.json({ error: `Error creating lesson: ${error.message}` }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const lessonNumber = searchParams.get('lessonNumber');

    if (!lessonNumber) {
      return NextResponse.json({ error: 'Lesson number is required' }, { status: 400 });
    }

    const lessonDir = path.join(process.cwd(), 'app', 'courses', 'courseId_2', 'lessons', lessonNumber);
    fs.rmSync(lessonDir, { recursive: true, force: true });

    let lessonsInfo = await getLessonsInfo();
    lessonsInfo = lessonsInfo.filter(lesson => lesson.number !== parseInt(lessonNumber));
    await saveLessonsInfo(lessonsInfo);

    return NextResponse.json({ message: 'Lesson deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting lesson:', error);
    return NextResponse.json({ error: `Error deleting lesson: ${error.message}` }, { status: 500 });
  }
}