import './ExternalWindow.scss';
import React from 'react';
import { Sources } from '../../elements/Sources/Sources';
import { ProgramLocal } from '../../elements/ProgramLocal/ProgramLocal';
import { Preview } from '../../elements/Preview/Preview';
import { ProgramLive } from '../../elements/ProgramLive/ProgramLive';
import { CurrentTime } from '../../elements/CurrentTime/CurrentTime';

export class ExternalWindow extends React.Component {

  public render() {
    return (
      <div className='ExternalWindow night-theme'>
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
}
