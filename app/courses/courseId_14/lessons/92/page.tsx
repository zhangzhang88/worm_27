"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson92';

export default function Lesson92Page() {
  return (
    <TypingGame
      lessonNumber={ 92 }
      sentences={ sentences }
      totalLessons={ 92 }
      lessonTitle="Lesson 92"
    />
  );
}