"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson14';

export default function Lesson14Page() {
  return (
    <TypingGame
      lessonNumber={ 14 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 14"
    />
  );
}