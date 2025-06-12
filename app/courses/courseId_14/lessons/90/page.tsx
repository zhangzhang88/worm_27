"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson90';

export default function Lesson90Page() {
  return (
    <TypingGame
      lessonNumber={ 90 }
      sentences={ sentences }
      totalLessons={ 90 }
      lessonTitle="Lesson 90"
    />
  );
}