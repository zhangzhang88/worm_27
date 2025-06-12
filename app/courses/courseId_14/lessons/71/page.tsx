"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson71';

export default function Lesson71Page() {
  return (
    <TypingGame
      lessonNumber={ 71 }
      sentences={ sentences }
      totalLessons={ 71 }
      lessonTitle="Lesson 71"
    />
  );
}