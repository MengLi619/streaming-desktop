import './ProgramLocal.scss';
import React from 'react';
import { Display } from '../../shared/Display/Display';
import { connectScenes, ScenesProps } from '../../context/ScenesProvider';

type Props = ScenesProps;

export const ProgramLocal = connectScenes(
  class ProgramLocal extends React.Component<Props> {

    render() {
      return (
        <div className='program-local'>
          <div className="studio-controls-top">
            <h2 className="studio-controls__label">
              Program Local
            </h2>
          </div>
          <div className='display-wrapper'>
            {
              this.props.programLocalScene &&
              <Display
                key={this.props.programLocalScene.id}
                sourceId={this.props.programLocalScene.id}
              />
            }
          </div>
        </div>
      );
    }
  });
