"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson23';

export default function Lesson23Page() {
  return (
    <TypingGame
      lessonNumber={ 23 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 23"
    />
  );
}