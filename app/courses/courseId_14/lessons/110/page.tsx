"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson110';

export default function Lesson110Page() {
  return (
    <TypingGame
      lessonNumber={ 110 }
      sentences={ sentences }
      totalLessons={ 110 }
      lessonTitle="Lesson 110"
    />
  );
}