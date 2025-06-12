"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson85';

export default function Lesson85Page() {
  return (
    <TypingGame
      lessonNumber={ 85 }
      sentences={ sentences }
      totalLessons={ 85 }
      lessonTitle="Lesson 85"
    />
  );
}