"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson24';

export default function Lesson24Page() {
  return (
    <TypingGame
      lessonNumber={ 24 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 24"
    />
  );
}