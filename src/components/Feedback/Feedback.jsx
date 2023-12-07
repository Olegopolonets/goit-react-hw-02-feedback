/* 
import React from 'react';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    event.target.name === 'good'
      ? this.setState(prevState => ({ good: prevState.good + 1 }))
      : event.target.name === 'neutral'
      ? this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
      : this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return (this.state.good / totalFeedback) * 100;
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.addFeedback} type="button" name="good">
            good
          </button>
          <button onClick={this.addFeedback} type="button" name="neutral">
            neutral
          </button>
          <button onClick={this.addFeedback} type="button" name="bad">
            bad
          </button>
        </div>

        <h2>Statistics</h2>
        <div>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>
            Positive feedback:
            {this.countPositiveFeedbackPercentage() % 1 === 0
              ? this.countPositiveFeedbackPercentage()
              : this.countPositiveFeedbackPercentage().toFixed()}
            %
          </p>
        </div>
      </>
    );
  }
}

*/
