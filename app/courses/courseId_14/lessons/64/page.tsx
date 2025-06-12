"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson64';

export default function Lesson64Page() {
  return (
    <TypingGame
      lessonNumber={ 64 }
      sentences={ sentences }
      totalLessons={ 64 }
      lessonTitle="Lesson 64"
    />
  );
}