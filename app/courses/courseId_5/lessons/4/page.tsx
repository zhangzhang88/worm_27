"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson4';

export default function Lesson4Page() {
  return (
    <TypingGame
      lessonNumber={ 4 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 4"
    />
  );
}