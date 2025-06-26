"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson122';

export default function Lesson122Page() {
  return (
    <TypingGame
      lessonNumber={ 122 }
      sentences={ sentences }
      totalLessons={ 122 }
      lessonTitle="Lesson 122"
    />
  );
}