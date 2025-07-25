"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson140';

export default function Lesson140Page() {
  return (
    <TypingGame
      lessonNumber={ 140 }
      sentences={ sentences }
      totalLessons={ 140 }
      lessonTitle="Lesson 140"
    />
  );
}