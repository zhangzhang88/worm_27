"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson120';

export default function Lesson120Page() {
  return (
    <TypingGame
      lessonNumber={ 120 }
      sentences={ sentences }
      totalLessons={ 120 }
      lessonTitle="Lesson 120"
    />
  );
}