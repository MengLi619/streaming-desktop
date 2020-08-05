import './SideNav.scss';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { showDialog } from '../../../util/dialog';
import { saveSettings, SettingsState } from '../../../util/settings';

type Props = RouteComponentProps;

export const SideNav = withRouter(
  class SideNav extends React.Component<Props> {
    render() {
      return (
        <div className='side-nav'>
          <div className='container'>
            <div
              title="Editor"
              className="main-cell"
              onClick={() => this.props.history.push('/')}
            >
              <i className="icon-studio"/>
            </div>
            <div className='bottom-tools'>
              <div
                title='Layout'
                className='cell'
                onClick={() => this.props.history.push('/layoutEditor')}
              >
                <i className="fas fa-th-large" aria-hidden="true"/>
              </div>
              <div
                title='Settings'
                className='cell'
                onClick={() => this.onSettingsClicked()}
              >
                <i className="icon-settings"/>
              </div>
              <div
                title='Logout'
                className='cell'
              >
                <i className='fas fa-sign-out-alt'/>
              </div>
            </div>
          </div>
        </div>
      );
    }

    private async onSettingsClicked() {
      const result = await showDialog<SettingsState>({
        component: 'SettingsDialog',
        title: 'Settings',
        width: 600,
        height: 600,
      });
      if (result) {
        saveSettings(result);
      }
    }
  });
