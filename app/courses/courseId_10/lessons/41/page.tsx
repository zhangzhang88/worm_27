"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson41';

export default function Lesson41Page() {
  return (
    <TypingGame
      lessonNumber={ 41 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 41"
    />
  );
}