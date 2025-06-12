"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson74';

export default function Lesson74Page() {
  return (
    <TypingGame
      lessonNumber={ 74 }
      sentences={ sentences }
      totalLessons={ 74 }
      lessonTitle="Lesson 74"
    />
  );
}