import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

const { Component } = require('react');

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getFeedback = event => {
    const elem = event.target.textContent.toLowerCase();
    this.setState(prevState => ({ [elem]: prevState[elem] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          gap: '50px',
          margin: '0 auto',
          width: '500px',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: 'rgba(152, 25, 25, 0.3)',
        }}
      >
        {' '}
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.getFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
