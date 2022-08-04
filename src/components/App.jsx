import { useState, useEffect } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import Section from './Section/Section';
// import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(JSON.parse(localStorage.getItem('good')));
  const [neutral, setNeutral] = useState(
    JSON.parse(localStorage.getItem('neutral'))
  );
  const [bad, setBad] = useState(JSON.parse(localStorage.getItem('bad')));

  const incrementValue = event => {
    switch (event.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.localStorage.setItem('good', JSON.stringify(good));
    window.localStorage.setItem('neutral', JSON.stringify(neutral));
    window.localStorage.setItem('bad', JSON.stringify(bad));
  }, [good, neutral, bad]);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    console.log(typeof total);
    return total;
  };

  const positiveFeedbackPercentage = () => {
    return Math.floor((good * 100) / countTotalFeedback());
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          incrementValue={incrementValue}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={countTotalFeedback}
          positiveFeedback={positiveFeedbackPercentage}
        />
      </Section>
    </div>
  );
};

export { App };
