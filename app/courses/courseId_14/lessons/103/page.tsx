"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson103';

export default function Lesson103Page() {
  return (
    <TypingGame
      lessonNumber={ 103 }
      sentences={ sentences }
      totalLessons={ 103 }
      lessonTitle="Lesson 103"
    />
  );
}