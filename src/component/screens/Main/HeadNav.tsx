import './HeadNav.scss';
import React from 'react';
import { Container } from 'typedi';
import { DialogService } from '../../../service/dialogService';
import { OutputSetting } from '../../dialogs/OutputSettingDialog/OutputSettingDialog';
import { SourceService } from '../../../service/sourceService';
import { remote } from 'electron';

type HeadNavState = {
  fullscreen: boolean;
};

export class HeadNav extends React.Component<{}, HeadNavState> {
  private readonly dialogService = Container.get(DialogService);
  private readonly sourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {
      fullscreen: remote.getCurrentWindow().isFullScreen(),
    };
  }

  public render() {
    return (
      <div className='HeadNav night-theme'>
        <div className='header-bar'>
          <div
              title='Full Screen'
              className='cell'
              onClick={() => this.onFullScreenClicked()}
          >
            <i className={`${this.state.fullscreen ? 'icon-reduce-screen-alt' : 'icon-full-screen-alt'} icon-button`} aria-hidden="true"/>
          </div>
          <div className='header-bar-item'>
            <h2>当前时间：</h2>
            <span>20:00:00</span>
          </div>
          <div className='header-bar-item'>
            <h2>直播时长：</h2>
            <span>02:00:00</span>
          </div>
          <div className='header-bar-item'>
            <h2>剩余时长：</h2>
            <span>01:00:00</span>
            <button className='renew button button--trans'>续费</button>
          </div>
          <div className='live'>
            <button className='button button--action'>开始直播</button>
            <i className="icon-settings icon-button" onClick={() => this.onOutputSettingClicked()} />
          </div>
        </div>
      </div>
    );
  }

  private onFullScreenClicked() {
    remote.getCurrentWindow().setFullScreen(!this.state.fullscreen);
    this.setState({
      fullscreen: !this.state.fullscreen,
    });
  }

  private async onOutputSettingClicked() {
    const setting = await this.dialogService.showDialog<OutputSetting>({
      title: 'Output',
      component: 'OutputSettingDialog',
      width: 400,
      height: 300,
    }, {
      url: this.sourceService.liveSource?.url,
    });
    if (setting && setting.url) {
      await this.sourceService.updateLiveUrl(setting.url);
    }
  }
}
