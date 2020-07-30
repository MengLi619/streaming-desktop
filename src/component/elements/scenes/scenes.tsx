import './scenes.scss';
import React from 'react';
import { showDialog } from '../../../util/helper';

export class Scenes extends React.Component {
  addScene() {
    showDialog({
      component: 'AddSceneDialog',
      title: 'Add Scene',
      width: 1200,
      height: 650,
    });
  }

  render() {
    return (
      <div className='scenes'>
        <div className="studio-controls-top">
          <h2 className="studio-controls__label">
            Scenes
          </h2>
          <div>
            <i
              className="icon-add icon-button icon-button--lg"
              onClick={() => this.addScene()}
            />
          </div>
        </div>
      </div>
    );
  }
}
