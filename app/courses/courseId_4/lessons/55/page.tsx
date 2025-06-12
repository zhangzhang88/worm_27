"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson55';

export default function Lesson55Page() {
  return (
    <TypingGame
      lessonNumber={ 55 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 55"
    />
  );
}