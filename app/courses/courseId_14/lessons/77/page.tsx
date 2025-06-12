"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson77';

export default function Lesson77Page() {
  return (
    <TypingGame
      lessonNumber={ 77 }
      sentences={ sentences }
      totalLessons={ 77 }
      lessonTitle="Lesson 77"
    />
  );
}