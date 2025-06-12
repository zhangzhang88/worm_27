"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson96';

export default function Lesson96Page() {
  return (
    <TypingGame
      lessonNumber={ 96 }
      sentences={ sentences }
      totalLessons={ 96 }
      lessonTitle="Lesson 96"
    />
  );
}