import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    incrementValue = event => {
        const { name } = event.target;
        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }));
    };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce(
            (acc, element) => (acc += element),
            0
        );
    };

    countPositiveFeedbackPercentage = () => {
        return Math.floor((this.state.good * 100) / this.countTotalFeedback());
    };

    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();
        const positiveFeedbackPercentage =
            this.countPositiveFeedbackPercentage();
        return (
            <div>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        incrementValue={this.incrementValue}
                    />
                </Section>

                <Section title="Statistics">
                    {this.countTotalFeedback() ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            totalFeedback={totalFeedback}
                            positiveFeedback={positiveFeedbackPercentage}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </div>
        );
    }
}
