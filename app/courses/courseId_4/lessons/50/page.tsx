"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson50';

export default function Lesson50Page() {
  return (
    <TypingGame
      lessonNumber={ 50 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 50"
    />
  );
}