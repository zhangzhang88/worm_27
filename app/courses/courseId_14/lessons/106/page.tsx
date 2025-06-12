"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson106';

export default function Lesson106Page() {
  return (
    <TypingGame
      lessonNumber={ 106 }
      sentences={ sentences }
      totalLessons={ 106 }
      lessonTitle="Lesson 106"
    />
  );
}