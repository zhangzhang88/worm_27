"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson80';

export default function Lesson80Page() {
  return (
    <TypingGame
      lessonNumber={ 80 }
      sentences={ sentences }
      totalLessons={ 80 }
      lessonTitle="Lesson 80"
    />
  );
}