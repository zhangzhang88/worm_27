"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson72';

export default function Lesson72Page() {
  return (
    <TypingGame
      lessonNumber={ 72 }
      sentences={ sentences }
      totalLessons={ 72 }
      lessonTitle="Lesson 72"
    />
  );
}