"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson102';

export default function Lesson102Page() {
  return (
    <TypingGame
      lessonNumber={ 102 }
      sentences={ sentences }
      totalLessons={ 102 }
      lessonTitle="Lesson 102"
    />
  );
}