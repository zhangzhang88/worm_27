"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson115';

export default function Lesson115Page() {
  return (
    <TypingGame
      lessonNumber={ 115 }
      sentences={ sentences }
      totalLessons={ 115 }
      lessonTitle="Lesson 115"
    />
  );
}