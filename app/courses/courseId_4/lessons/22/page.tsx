"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson22';

export default function Lesson22Page() {
  return (
    <TypingGame
      lessonNumber={ 22 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 22"
    />
  );
}