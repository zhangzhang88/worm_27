"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson98';

export default function Lesson98Page() {
  return (
    <TypingGame
      lessonNumber={ 98 }
      sentences={ sentences }
      totalLessons={ 98 }
      lessonTitle="Lesson 98"
    />
  );
}