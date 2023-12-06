import React from 'react';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(item => (
        <div key={nanoid()}>
          <button type="button" name={item} onClick={onLeaveFeedback}>
            {item}
          </button>
        </div>
      ))}
    </>
  );
};
