"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson82';

export default function Lesson82Page() {
  return (
    <TypingGame
      lessonNumber={ 82 }
      sentences={ sentences }
      totalLessons={ 82 }
      lessonTitle="Lesson 82"
    />
  );
}