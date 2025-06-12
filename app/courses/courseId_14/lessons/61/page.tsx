"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson61';

export default function Lesson60Page() {
  return (
    <TypingGame
      lessonNumber={ 61 }
      sentences={ sentences }
      totalLessons={ 61 }
      lessonTitle="Lesson 61"
    />
  );
}