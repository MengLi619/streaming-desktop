import './ExternalWindow.scss';
import React from 'react';
import { remote } from 'electron';
import { Sources } from '../../elements/Sources/Sources';
import { ProgramLocal } from '../../elements/ProgramLocal/ProgramLocal';
import { Preview } from '../../elements/Preview/Preview';
import { ProgramLive } from '../../elements/ProgramLive/ProgramLive';
import { CurrentTime } from '../../elements/CurrentTime/CurrentTime';

type ExternalWindowState = {
  fullscreen: boolean;
};

export class ExternalWindow extends React.Component<{}, ExternalWindowState> {

  public constructor(props: {}) {
    super(props);
    this.state = {
      fullscreen: remote.getCurrentWindow().isFullScreen(),
    };
  }

  public render() {
    return (
      <div className='ExternalWindow night-theme'>
        <i className={`fullscreen-button ${this.state.fullscreen ? 'icon-reduce-screen-alt' : 'icon-full-screen-alt'} icon-button`}
           aria-hidden="true"
           onClick={() => this.onFullscreenClicked()}
        />
        <div className='top'>
          <div className='Preview-container'>
            <Preview />
          </div>
          <div className='ProgramLocal-container'>
            <ProgramLocal />
          </div>
        </div>
        <div className='bottom'>
          <div className='Sources-container'>
            <Sources rows={3} hideSetting={true} />
          </div>
          <div className='ProgramLive_CurrentTime-container'>
            <div className='ProgramLive-container'>
              <ProgramLive />
            </div>
            <div className='CurrentTime-container'>
              <CurrentTime />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private onFullscreenClicked() {
    remote.getCurrentWindow().setFullScreen(!this.state.fullscreen);
    this.setState({
      fullscreen: !this.state.fullscreen,
    });
  }
}
