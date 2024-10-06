// import React, { useState } from 'react';
import Quiz from '../Quiz'; // Importing the Quiz component

function Module1() {
  return (
    <div className="module-content">
      <h1>Module 1: Introduction to Addiction</h1>
      <p>Welcome to Module 1. Here you will learn the basics of addiction, including what it is and how it affects individuals.</p>
      <p>
        Addiction is a complex condition characterized by compulsive substance use despite harmful consequences.
        It affects the brain's reward, motivation, and memory functions.
      </p>
      <p>
        This module provides an introduction to the concept of addiction, its signs, symptoms, and impacts on both individuals and society.
      </p>
      
      {/* Adding the quiz component at the bottom of the module */}
      <Quiz />
    </div>
  );
}

export default Module1;
