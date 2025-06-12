"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson56';

export default function Lesson56Page() {
  return (
    <TypingGame
      lessonNumber={ 56 }
      sentences={ sentences }
      totalLessons={ 56 }
      lessonTitle="Lesson 56"
    />
  );
}