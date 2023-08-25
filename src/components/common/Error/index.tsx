import React from 'react';
import { Wrapper } from './style';

interface IProps {
  children: any;
}

interface IState {
  hasError?: boolean;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // It will update the state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    // It will catch error in any component below. We can also log the error to an error reporting service.
    console.log('info: ', info);
    console.log('error : ', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Wrapper>
          <div className="heading">
            <h1>Oops , Something is wrong ...</h1>
            <h3>Please Refresh</h3>
            <a href="/">
              <button className="glow-on-hover" type="button">
                Go Back
              </button>
            </a>
          </div>
        </Wrapper>
      );
    }
    return this.props.children;
  }
}
