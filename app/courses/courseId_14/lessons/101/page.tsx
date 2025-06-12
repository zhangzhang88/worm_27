"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson101';

export default function Lesson101Page() {
  return (
    <TypingGame
      lessonNumber={ 101 }
      sentences={ sentences }
      totalLessons={ 101 }
      lessonTitle="Lesson 101"
    />
  );
}