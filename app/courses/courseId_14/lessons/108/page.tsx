"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson108';

export default function Lesson108Page() {
  return (
    <TypingGame
      lessonNumber={ 108 }
      sentences={ sentences }
      totalLessons={ 108 }
      lessonTitle="Lesson 108"
    />
  );
}