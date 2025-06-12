"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson99';

export default function Lesson99Page() {
  return (
    <TypingGame
      lessonNumber={ 99 }
      sentences={ sentences }
      totalLessons={ 99 }
      lessonTitle="Lesson 99"
    />
  );
}