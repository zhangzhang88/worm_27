"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson67';

export default function Lesson67Page() {
  return (
    <TypingGame
      lessonNumber={ 67 }
      sentences={ sentences }
      totalLessons={ 67 }
      lessonTitle="Lesson 67"
    />
  );
}