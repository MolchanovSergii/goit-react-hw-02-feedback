import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementStatistic = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbackOptions = Object.keys(this.state);
    const positiveFeedback = isNaN(this.countPositiveFeedbackPercentage())
      ? 0
      : this.countPositiveFeedbackPercentage();

    return (
      <>
        <h1>Please leave feedback</h1>
        {feedbackOptions.map(option => (
          <button
            key={option}
            onClick={() => this.handleIncrementStatistic(option)}
          >
            {option}
          </button>
        ))}
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {positiveFeedback} %</p>
      </>
    );
  }
}
