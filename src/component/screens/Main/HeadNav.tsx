import './HeadNav.scss';
import React from 'react';
import { Container } from 'typedi';
import { DialogService } from '../../../service/dialogService';
import { OutputSetting } from '../../dialogs/OutputSettingDialog/OutputSettingDialog';
import { SourceService } from '../../../service/sourceService';

export class HeadNav extends React.Component {
  private readonly dialogService = Container.get(DialogService);
  private readonly sourceService = Container.get(SourceService);

  public render() {
    return (
      <div className='HeadNav night-theme'>
        <div className='header-bar'>
          <div className='header-bar-item'>
            <label>当前时间：</label>
            <span>20:00:00</span>
          </div>
          <div className='header-bar-item'>
            <label>直播时长：</label>
            <span>02:00:00</span>
          </div>
          <div className='header-bar-item'>
            <label>剩余时长：</label>
            <span>01:00:00</span>
            <button className='renew button button--trans'>续费</button>
          </div>
          <div className='live'>
            <button className='goto-live button button--action'>开始直播</button>
            <i className="icon-settings" onClick={() => this.onOutputSettingClicked()} />
          </div>
        </div>
      </div>
    );
  }

  private async onOutputSettingClicked() {
    const setting = await this.dialogService.showDialog<OutputSetting>({
      title: 'Output',
      component: 'OutputSettingDialog',
      width: 400,
      height: 300,
    });
    if (setting) {
      await this.sourceService.createLiveSource(setting.url);
    }
  }
}
