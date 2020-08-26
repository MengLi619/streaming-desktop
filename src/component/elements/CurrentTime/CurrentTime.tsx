import './CurrentTime.scss';
import React from 'react';
import moment from 'moment';

type CurrentTimeState = {
  date: string;
  time: string;
};

export class CurrentTime extends React.Component<{}, CurrentTimeState> {
  private timer?: number;

  constructor(props: {}) {
    super(props);
    const { date, time } = this.getCurrentTime();
    this.state = {
      date: date,
      time: time,
    };
  }

  public componentDidMount() {
    this.timer = window.setInterval(() => {
      const { date, time } = this.getCurrentTime();
      this.setState({ date, time });
    }, 1000);
  }

  public componentWillUnmount() {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  }

  public render() {
    return (
      <div className='CurrentTime'>
        <span className='date'>{this.state.date}</span>
        <span className='time'>{this.state.time}</span>
      </div>
    );
  }

  private getCurrentTime(): { date: string; time: string } {
    const [date, time] = moment().format('YYYY-MM-DD HH:mm:ss').split(' ');
    return { date, time };
  }
}
