"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson42';

export default function Lesson42Page() {
  return (
    <TypingGame
      lessonNumber={ 42 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 42"
    />
  );
}