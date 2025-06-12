"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson12';

export default function Lesson12Page() {
  return (
    <TypingGame
      lessonNumber={ 12 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 12"
    />
  );
}