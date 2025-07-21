"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson136';

export default function Lesson136Page() {
  return (
    <TypingGame
      lessonNumber={ 136 }
      sentences={ sentences }
      totalLessons={ 136 }
      lessonTitle="Lesson 136"
    />
  );
}