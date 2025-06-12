"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson8';

export default function Lesson8Page() {
  return (
    <TypingGame
      lessonNumber={ 8 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 8"
    />
  );
}