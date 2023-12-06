import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <>
      {options.map(item => (
        <button type="button" name={item} onClick={onLeaveFeedback}>
          {item}
        </button>
      ))}
    </>
  );
};
