"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson111';

export default function Lesson111Page() {
  return (
    <TypingGame
      lessonNumber={ 111 }
      sentences={ sentences }
      totalLessons={ 111 }
      lessonTitle="Lesson 111"
    />
  );
}