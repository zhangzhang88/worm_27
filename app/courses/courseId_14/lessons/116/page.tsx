"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson116';

export default function Lesson116Page() {
  return (
    <TypingGame
      lessonNumber={ 116 }
      sentences={ sentences }
      totalLessons={ 116 }
      lessonTitle="Lesson 116"
    />
  );
}