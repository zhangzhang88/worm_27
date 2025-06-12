"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson97';

export default function Lesson97Page() {
  return (
    <TypingGame
      lessonNumber={ 97 }
      sentences={ sentences }
      totalLessons={ 97 }
      lessonTitle="Lesson 97"
    />
  );
}