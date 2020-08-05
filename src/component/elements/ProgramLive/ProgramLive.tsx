import './ProgramLive.scss';
import React from 'react';
import { Display } from '../../shared/Display/Display';
import { connectScenes, ScenesProps } from '../../context/ScenesProvider';

type Props = ScenesProps;

export const ProgramLive = connectScenes(
  class ProgramLive extends React.Component<Props> {

    render() {
      return (
        <div className='program-live'>
          <div className="studio-controls-top">
            <h2 className="studio-controls__label">
              Program Live
            </h2>
          </div>
          <div className='display-wrapper'>
            {
              this.props.programLiveScene &&
              <Display
                key={this.props.programLiveScene.id}
                sourceId={this.props.programLiveScene.id}
              />
            }
          </div>
        </div>
      );
    }
  });
