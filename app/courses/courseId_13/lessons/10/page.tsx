"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson10';

export default function Lesson10Page() {
  return (
    <TypingGame
      lessonNumber={ 10 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 10"
    />
  );
}