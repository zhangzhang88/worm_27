"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson68';

export default function Lesson68Page() {
  return (
    <TypingGame
      lessonNumber={ 68 }
      sentences={ sentences }
      totalLessons={ 68 }
      lessonTitle="Lesson 68"
    />
  );
}