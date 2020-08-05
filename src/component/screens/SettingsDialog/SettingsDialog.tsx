import './SettingsDialog.scss';
import React from 'react';
import { ChildWindow } from '../../shared/ChildWindow/ChildWindow';
import { ModalLayout } from '../../shared/ModalLayout/ModalLayout';
import { NavMenu } from './NavMenu';
import { NavItem } from './NavItem';
import { OutputSetting, OutputState } from './OutputSetting';
import { getSettings, SettingsState } from '../../../util/settings';
import { confirmDialog } from '../../../util/dialog';

type Setting = {
  name: string;
  label: string;
};

type State = {
  currentSetting: Setting;
  state: SettingsState;
};

const settings: Setting[] = [
  {
    name: 'output',
    label: 'Output',
  }
];

export class SettingsDialog extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentSetting: settings[0],
      state: getSettings(),
    };
  }
  public render() {
    return (
      <ChildWindow title='Settings'>
        <ModalLayout
          onModalDone={() => this.onModalDone()}
          className='modal-layout--w-side-menu'
        >
          <div className='settings'>
            <NavMenu v-model="categoryName">
              {
                settings.map(setting =>
                  <NavItem
                    key={setting.name}
                    active={this.state.currentSetting.name === setting.name}
                    onClicked={() => this.onItemClicked(setting)}
                  >
                    { setting.label }
                  </NavItem>)
              }
            </NavMenu>
            <div className='settings-container'>
              {
                this.state.currentSetting.name === 'output' &&
                <OutputSetting
                  state={this.state.state}
                  onStateChanged={output => this.onOutputChanged(output)}
                />
              }
            </div>
          </div>
        </ModalLayout>
      </ChildWindow>
    );
  }

  private onItemClicked(setting: Setting) {
    this.setState({
      currentSetting: setting,
    });
  }

  private onOutputChanged(output: OutputState) {
    this.setState({
      state: {
        output: output,
      },
    });
  }

  private onModalDone() {
    confirmDialog(this.state.state);
  }
}
