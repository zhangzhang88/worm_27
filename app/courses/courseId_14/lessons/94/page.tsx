"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson94';

export default function Lesson94Page() {
  return (
    <TypingGame
      lessonNumber={ 94 }
      sentences={ sentences }
      totalLessons={ 94 }
      lessonTitle="Lesson 94"
    />
  );
}