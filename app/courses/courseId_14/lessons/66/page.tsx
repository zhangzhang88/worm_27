"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson66';

export default function Lesson66Page() {
  return (
    <TypingGame
      lessonNumber={ 66 }
      sentences={ sentences }
      totalLessons={ 66 }
      lessonTitle="Lesson 66"
    />
  );
}