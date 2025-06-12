"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson45';

export default function Lesson45Page() {
  return (
    <TypingGame
      lessonNumber={ 45 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 45"
    />
  );
}