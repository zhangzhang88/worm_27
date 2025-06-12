"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson35';

export default function Lesson35Page() {
  return (
    <TypingGame
      lessonNumber={ 35 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 35"
    />
  );
}