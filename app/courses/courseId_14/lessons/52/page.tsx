"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson52';

export default function Lesson52Page() {
  return (
    <TypingGame
      lessonNumber={ 52 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 52"
    />
  );
}