"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson107';

export default function Lesson107Page() {
  return (
    <TypingGame
      lessonNumber={ 107 }
      sentences={ sentences }
      totalLessons={ 107 }
      lessonTitle="Lesson 107"
    />
  );
}