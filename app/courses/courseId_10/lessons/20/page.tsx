"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson20';

export default function Lesson20Page() {
  return (
    <TypingGame
      lessonNumber={ 20 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 20"
    />
  );
}