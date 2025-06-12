"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson40';

export default function Lesson40Page() {
  return (
    <TypingGame
      lessonNumber={ 40 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 40"
    />
  );
}