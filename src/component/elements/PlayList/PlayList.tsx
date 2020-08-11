import './PlayList.scss';
import React from 'react';
import { CGTable } from './CGTable';
import { DDRTable } from './DDRTable';

export class PlayList extends React.Component {

  public render() {
    return (
      <div className='PlayList'>
        <div className='PlayList-header'>
          <h2>播出单</h2>
        </div>
        <div className='PlayList-content'>
          <div className='PlayList-CGTable'>
            <CGTable/>
          </div>
          <div className='PlayList-DDRTable'>
            <DDRTable/>
          </div>
        </div>
      </div>
    );
  }
}
