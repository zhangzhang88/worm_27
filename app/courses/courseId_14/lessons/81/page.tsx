"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson81';

export default function Lesson81Page() {
  return (
    <TypingGame
      lessonNumber={ 81 }
      sentences={ sentences }
      totalLessons={ 81 }
      lessonTitle="Lesson 81"
    />
  );
}