"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson2';

export default function Lesson2Page() {
  return (
    <TypingGame
      lessonNumber={ 2 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 2"
    />
  );
}