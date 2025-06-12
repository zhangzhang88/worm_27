"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson46';

export default function Lesson46Page() {
  return (
    <TypingGame
      lessonNumber={ 46 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 46"
    />
  );
}