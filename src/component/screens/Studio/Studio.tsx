import './Studio.scss';
import React from 'react';
import { Preview } from '../../elements/Preview/Preview';
import { ProgramLocal } from '../../elements/ProgramLocal/ProgramLocal';
import { ProgramLive } from '../../elements/ProgramLive/ProgramLive';
import { Sources } from '../../elements/Sources/Sources';
import { Switcher } from '../../elements/Switcher/Switcher';
import { PlayList } from '../../elements/PlayList/PlayList';

export class Studio extends React.Component {

  public render() {
    return (
      <div className='Studio'>
        <div className='top'>
          <Preview/>
          <ProgramLocal/>
          <ProgramLive/>
        </div>
        <div className='middle'>
          <Sources />
        </div>
        <div className='bottom'>
          <div className='Switcher-container'>
            <Switcher />
          </div>
          <div className='PlayList-container'>
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}
