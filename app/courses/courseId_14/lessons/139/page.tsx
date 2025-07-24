"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson139';

export default function Lesson139Page() {
  return (
    <TypingGame
      lessonNumber={ 139 }
      sentences={ sentences }
      totalLessons={ 139 }
      lessonTitle="Lesson 139"
    />
  );
}