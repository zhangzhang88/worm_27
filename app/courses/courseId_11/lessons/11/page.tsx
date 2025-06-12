"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson11';

export default function Lesson11Page() {
  return (
    <TypingGame
      lessonNumber={ 11 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 11"
    />
  );
}