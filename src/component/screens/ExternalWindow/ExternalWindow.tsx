import './ExternalWindow.scss';
import React from 'react';
import { remote, ipcRenderer, IpcRendererEvent } from 'electron';
import { Sources } from '../../elements/Sources/Sources';
import { ProgramLocal } from '../../elements/ProgramLocal/ProgramLocal';
import { Preview } from '../../elements/Preview/Preview';
import { ProgramLive } from '../../elements/ProgramLive/ProgramLive';
import { CurrentTime } from '../../elements/CurrentTime/CurrentTime';

type ExternalWindowProps = {
  layouts: number;
}

type ExternalWindowState = {
  layouts: number;
  fullscreen: boolean;
};

export class ExternalWindow extends React.Component<ExternalWindowProps, ExternalWindowState> {

  private readonly updateLayouts = (event: IpcRendererEvent, layouts: number) => {
    this.setState({
      layouts: layouts,
    });
  };

  public constructor(props: ExternalWindowProps) {
    super(props);
    this.state = {
      layouts: props.layouts,
      fullscreen: remote.getCurrentWindow().isFullScreen(),
    };
  }

  public componentDidMount() {
    ipcRenderer.on('layoutsUpdated', this.updateLayouts);
  }

  public componentWillUnmount() {
    ipcRenderer.off('layoutsUpdated', this.updateLayouts);
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
          <div className={`Sources-container layouts${this.state.layouts}`}>
            <Sources
              sourceCount={this.state.layouts}
              rows={ this.state.layouts === 12 ? 3 : 2}
              hideSetting={true}
            />
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
