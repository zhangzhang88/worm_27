"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson39';

export default function Lesson39Page() {
  return (
    <TypingGame
      lessonNumber={ 39 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 39"
    />
  );
}