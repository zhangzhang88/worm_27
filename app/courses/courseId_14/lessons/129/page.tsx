"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson129';

export default function Lesson129Page() {
  return (
    <TypingGame
      lessonNumber={ 129 }
      sentences={ sentences }
      totalLessons={ 129 }
      lessonTitle="Lesson 129"
    />
  );
}