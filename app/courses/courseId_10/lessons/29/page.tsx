"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson29';

export default function Lesson29Page() {
  return (
    <TypingGame
      lessonNumber={ 29 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 29"
    />
  );
}