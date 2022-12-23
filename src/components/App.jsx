import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import { useState, useMemo } from 'react';

export const App = props => {
  const feedbackState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(feedbackState);

  const getFeedback = event => {
    const elem = event.target.textContent.toLowerCase();
    setFeedback(prev => ({ ...prev, [elem]: prev[elem] + 1 }));
  };

  const countTotalFeedback = useMemo(() => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  }, [feedback]);

  const countPositiveFeedbackPercentage = () => {
    return ((feedback.good / countTotalFeedback) * 100).toFixed();
  };

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
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={getFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
