"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson78';

export default function Lesson78Page() {
  return (
    <TypingGame
      lessonNumber={ 78 }
      sentences={ sentences }
      totalLessons={ 78 }
      lessonTitle="Lesson 78"
    />
  );
}