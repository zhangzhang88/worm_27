"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson131';

export default function Lesson131Page() {
  return (
    <TypingGame
      lessonNumber={ 131 }
      sentences={ sentences }
      totalLessons={ 131 }
      lessonTitle="Lesson 131"
    />
  );
}