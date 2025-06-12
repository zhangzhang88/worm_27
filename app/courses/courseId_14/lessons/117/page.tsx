"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson117';

export default function Lesson117Page() {
  return (
    <TypingGame
      lessonNumber={ 117 }
      sentences={ sentences }
      totalLessons={ 117 }
      lessonTitle="Lesson 117"
    />
  );
}