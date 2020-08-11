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
        <div className='row-1'>
          <Preview/>
          <ProgramLocal/>
          <ProgramLive/>
        </div>
        <div className='row-2'>
          <Sources />
        </div>
        <div className='row-3'>
          <div className='col-3-1'>
            <Switcher />
          </div>
          <div className='col-3-2'>
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}
