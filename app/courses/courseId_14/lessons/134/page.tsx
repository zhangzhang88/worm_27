"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson134';

export default function Lesson134Page() {
  return (
    <TypingGame
      lessonNumber={ 134 }
      sentences={ sentences }
      totalLessons={ 134 }
      lessonTitle="Lesson 134"
    />
  );
}