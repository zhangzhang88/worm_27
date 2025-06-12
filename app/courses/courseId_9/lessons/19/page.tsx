"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson19';

export default function Lesson19Page() {
  return (
    <TypingGame
      lessonNumber={ 19 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 19"
    />
  );
}