"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson119';

export default function Lesson119Page() {
  return (
    <TypingGame
      lessonNumber={ 119 }
      sentences={ sentences }
      totalLessons={ 119 }
      lessonTitle="Lesson 119"
    />
  );
}