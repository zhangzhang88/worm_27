"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson121';

export default function Lesson121Page() {
  return (
    <TypingGame
      lessonNumber={ 121 }
      sentences={ sentences }
      totalLessons={ 121 }
      lessonTitle="Lesson 121"
    />
  );
}