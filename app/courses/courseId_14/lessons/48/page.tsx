"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson48';

export default function Lesson48Page() {
  return (
    <TypingGame
      lessonNumber={ 48 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 48"
    />
  );
}