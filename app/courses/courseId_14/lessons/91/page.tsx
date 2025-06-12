"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson91';

export default function Lesson91Page() {
  return (
    <TypingGame
      lessonNumber={ 91 }
      sentences={ sentences }
      totalLessons={ 91 }
      lessonTitle="Lesson 91"
    />
  );
}