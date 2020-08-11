import './TransitionView.scss';
import React from 'react';
import Dropdown from 'react-dropdown';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';

const transitions = [
  { value: 'fade', label: '淡出' },
  { value: 'swipe', label: '滑入滑出' },
  { value: 'slide', label: '幻灯片' },
  { value: 'fade_to_color', label: '色彩淡入淡出' },
];

export class TransitionView extends React.Component {
  private readonly sourceService = Container.get(SourceService);

  public render() {
    return (
      <div className='TransitionView'>
        <div className='transition-header'>
          <h2>切换特技</h2>
          <div className='transition-dropdown'>
            <Dropdown
              value='fade'
              options={transitions}
            />
            <button className='button--trans'>3秒</button>
          </div>
          <div className='transition-controls'>
            <button className='button--action'>TAKE</button>
            <button className='button--action' onClick={() => this.onTakeClicked()}>CUT</button>
          </div>
        </div>
      </div>
    );
  }

  private async onTakeClicked() {
    if (this.sourceService.pvwSource) {
      await this.sourceService.take(this.sourceService.pvwSource);
    }
  }
}
