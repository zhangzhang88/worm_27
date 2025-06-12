"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson54';

export default function Lesson54Page() {
  return (
    <TypingGame
      lessonNumber={ 54 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 54"
    />
  );
}