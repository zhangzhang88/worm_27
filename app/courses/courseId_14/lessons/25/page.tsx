"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson25';

export default function Lesson25Page() {
  return (
    <TypingGame
      lessonNumber={ 25 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 25"
    />
  );
}