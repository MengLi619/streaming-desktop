import './Preview.scss';
import React from 'react';
import { connectScenes, ScenesProps } from '../../context/ScenesProvider';
import { Display } from '../../shared/Display/Display';
import { ContextMenu, MenuItem } from '../../shared/ContextMenu/ContextMenu';
import { createProgramLiveScene, createProgramLocalScene } from '../../../util/obs';
import { obsHeadlessSwitchScene } from '../../../util/obs-headless';
import { getSettings } from '../../../util/settings';

type Props = ScenesProps;

export const Preview = connectScenes(
  class Preview extends React.Component<Props> {
    private readonly menuItems: MenuItem[];

    constructor(props: Props) {
      super(props);
      this.menuItems = [
        { label: 'Take', onClicked: this.onTakeClicked.bind(this) },
      ];
    }

    render() {
      return (
        <ContextMenu className='preview' menuItems={this.menuItems}>
          <div className="studio-controls-top">
            <h2 className="studio-controls__label">
              Preview
            </h2>
          </div>
          <div className='display-wrapper'>
            {
              this.props.previewScene &&
              <Display
                key={this.props.previewScene.id}
                sourceId={this.props.previewScene.id}
              />
            }
          </div>
        </ContextMenu>
      );
    }

    private async onTakeClicked() {
      const settings = getSettings();
      if (this.props.previewScene && settings.output?.url) {
        console.log(`Create program local scene`);
        const programLocalScene = await createProgramLocalScene(this.props.previewScene);
        this.props.setProgramLocalScene(programLocalScene);
        console.log(`Create program live scene`);
        const programLiveScene = await createProgramLiveScene(settings.output?.url);
        this.props.setProgramLiveScene(programLiveScene);
        await obsHeadlessSwitchScene(this.props.previewScene);
      }
    }
  });
