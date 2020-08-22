import './ProgramLocal.scss';
import React from 'react';
import { Display } from '../../shared/Display/Display';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';
import { Transition } from '../../../types/obs';

type ProgramLocalState = {
  transition?: Transition;
};

export class ProgramLocal extends React.Component<{}, ProgramLocalState> {
  private readonly sourceService: SourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    this.setState({
      transition: this.sourceService.pgmTransition,
    });
    this.sourceService.pgmTransitionChanged.on(this, transition => {
      this.setState({
        transition: transition,
      })
    });
  }

  public componentWillUnmount() {
    this.sourceService.pgmTransitionChanged.off(this);
  }

  public render() {
    return (
      <div className={`ProgramLocal ${this.state.transition ? 'isProgram': ''}`}>
        <div className='display-container'>
          <div className='content'>
            {
              this.state.transition &&
              <Display
                key={this.state.transition.id}
                sourceId={this.state.transition.id}
              />
            }
          </div>
        </div>
        <div className='toolbar'>
          <h2>PGM输出</h2>
        </div>
      </div>
    );
  }
}
