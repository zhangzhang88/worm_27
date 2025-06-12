"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson73';

export default function Lesson73Page() {
  return (
    <TypingGame
      lessonNumber={ 73 }
      sentences={ sentences }
      totalLessons={ 73 }
      lessonTitle="Lesson 73"
    />
  );
}