"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson76';

export default function Lesson76Page() {
  return (
    <TypingGame
      lessonNumber={ 76 }
      sentences={ sentences }
      totalLessons={ 76 }
      lessonTitle="Lesson 76"
    />
  );
}