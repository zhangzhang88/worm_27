"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson30';

export default function Lesson30Page() {
  return (
    <TypingGame
      lessonNumber={ 30 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 30"
    />
  );
}