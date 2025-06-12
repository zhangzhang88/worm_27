"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson60';

export default function Lesson60Page() {
  return (
    <TypingGame
      lessonNumber={ 60 }
      sentences={ sentences }
      totalLessons={ 60 }
      lessonTitle="Lesson 60"
    />
  );
}