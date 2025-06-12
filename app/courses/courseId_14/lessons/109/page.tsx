"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson109';

export default function Lesson109Page() {
  return (
    <TypingGame
      lessonNumber={ 109 }
      sentences={ sentences }
      totalLessons={ 109 }
      lessonTitle="Lesson 109"
    />
  );
}