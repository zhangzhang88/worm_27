"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson21';

export default function Lesson21Page() {
  return (
    <TypingGame
      lessonNumber={ 21 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 21"
    />
  );
}