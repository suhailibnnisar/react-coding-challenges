import React, { useState, Component, PureComponent, memo } from 'react';
import RocketCore from './RocketCore';

export const FunctionalRocket = memo(() => {
  const [initialLaunchTime] = useState(Date.now());

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
});

export class ClassRocket extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      initialLaunchTime: Date.now(),
    };
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
