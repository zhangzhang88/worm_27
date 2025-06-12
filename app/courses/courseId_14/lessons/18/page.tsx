"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson18';

export default function Lesson18Page() {
  return (
    <TypingGame
      lessonNumber={ 18 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 18"
    />
  );
}