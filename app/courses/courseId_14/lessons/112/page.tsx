"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson112';

export default function Lesson112Page() {
  return (
    <TypingGame
      lessonNumber={ 112 }
      sentences={ sentences }
      totalLessons={ 112 }
      lessonTitle="Lesson 112"
    />
  );
}