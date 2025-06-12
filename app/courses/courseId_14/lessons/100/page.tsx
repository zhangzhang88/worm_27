"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson100';

export default function Lesson100Page() {
  return (
    <TypingGame
      lessonNumber={ 100 }
      sentences={ sentences }
      totalLessons={ 100 }
      lessonTitle="Lesson 100"
    />
  );
}