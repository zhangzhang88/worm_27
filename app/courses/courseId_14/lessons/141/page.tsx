"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson141';

export default function Lesson141Page() {
  return (
    <TypingGame
      lessonNumber={ 141 }
      sentences={ sentences }
      totalLessons={ 141 }
      lessonTitle="Lesson 141"
    />
  );
}