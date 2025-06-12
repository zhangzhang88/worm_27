"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson15';

export default function Lesson15Page() {
  return (
    <TypingGame
      lessonNumber={ 15 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 15"
    />
  );
}