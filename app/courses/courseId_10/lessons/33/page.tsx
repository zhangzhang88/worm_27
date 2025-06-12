"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson33';

export default function Lesson33Page() {
  return (
    <TypingGame
      lessonNumber={ 33 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 33"
    />
  );
}