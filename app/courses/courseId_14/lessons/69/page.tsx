"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson69';

export default function Lesson69Page() {
  return (
    <TypingGame
      lessonNumber={ 69 }
      sentences={ sentences }
      totalLessons={ 69 }
      lessonTitle="Lesson 69"
    />
  );
}