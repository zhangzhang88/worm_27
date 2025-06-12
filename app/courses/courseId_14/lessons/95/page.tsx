"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson95';

export default function Lesson95Page() {
  return (
    <TypingGame
      lessonNumber={ 95 }
      sentences={ sentences }
      totalLessons={ 95 }
      lessonTitle="Lesson 95"
    />
  );
}