import './TransitionView.scss';
import React from 'react';
import Dropdown, { Option } from 'react-dropdown';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';
import { TransitionType } from '../../../types/obs';

const transitions = [
  { value: TransitionType.Fade, label: '淡入淡出' },
  { value: TransitionType.Swipe, label: '滑入滑出' },
  { value: TransitionType.Slide, label: '幻灯片' },
];

type TransitionViewState = {
  transitionType: TransitionType;
}

export class TransitionView extends React.Component<{}, TransitionViewState> {
  private readonly sourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {
      transitionType: TransitionType.Fade,
    };
  }

  public render() {
    return (
      <div className='TransitionView'>
        <div className='transition-header'>
          <h2>切换特技</h2>
        </div>
        <div className='transition-dropdown'>
            <Dropdown
              value={this.state.transitionType}
              options={transitions}
              onChange={option => this.onTransitionTypeChanged(option)}
            />
            <button className='button--trans'>3秒</button>
          </div>
          <div className='transition-controls'>
            <button className='button--action' onClick={() => this.onTakeClicked(this.state.transitionType)}>TAKE</button>
            <button className='button--action' onClick={() => this.onTakeClicked(TransitionType.Cut)}>CUT</button>
          </div>
      </div>
    );
  }

  private onTransitionTypeChanged(option: Option) {
    this.setState({
      transitionType: option.value as TransitionType,
    });
  }

  private async onTakeClicked(transitionType: TransitionType) {
    if (this.sourceService.previewSource) {
      await this.sourceService.take(this.sourceService.previewSource, transitionType, 3000);
    }
  }
}
