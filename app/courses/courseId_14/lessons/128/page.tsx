"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson128';

export default function Lesson128Page() {
  return (
    <TypingGame
      lessonNumber={ 128 }
      sentences={ sentences }
      totalLessons={ 128 }
      lessonTitle="Lesson 128"
    />
  );
}