"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson130';

export default function Lesson123Page() {
  return (
    <TypingGame
      lessonNumber={ 130 }
      sentences={ sentences }
      totalLessons={ 130 }
      lessonTitle="Lesson 130"
    />
  );
}