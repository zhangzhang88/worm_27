"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson38';

export default function Lesson38Page() {
  return (
    <TypingGame
      lessonNumber={ 38 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 38"
    />
  );
}