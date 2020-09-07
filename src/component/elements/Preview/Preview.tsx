import './Preview.scss';
import React from 'react';
import { Display } from '../../shared/Display/Display';
import { Source } from '../../../types/obs';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';

type PreviewState = {
  previewSource?: Source;
};

export class Preview extends React.Component<{}, PreviewState> {
  private readonly sourceService: SourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {
      previewSource: this.sourceService.previewSource,
    };
  }

  public componentDidMount() {
    this.sourceService.previewChanged.on(this, source => {
      this.setState({
        previewSource: source,
      })
    });
    this.sourceService.sourceMuteChanged.on(this, source => {
      if (source.id === this.state.previewSource?.id) {
        this.setState({
          previewSource: source,
        });
      }
    });
  }

  public componentWillUnmount() {
    this.sourceService.previewChanged.off(this);
  }

  public render() {
    return (
      <div className={`Preview ${this.state.previewSource ? 'isPreview': ''}`}>
        <div className='display-container'>
          <div className='content'>
            {
              this.state.previewSource &&
              <Display
                key={this.state.previewSource.sceneId}
                sourceId={this.state.previewSource.sceneId}
              />
            }
          </div>
        </div>
        <div className='toolbar'>
          <h2>PVW预监</h2>
          <i className={`${!this.state.previewSource || this.state.previewSource.muted ? 'icon-mute' : 'icon-audio'} icon-button`} onClick={() => this.onMuteClicked()} />
        </div>
      </div>
    );
  }

  private onMuteClicked() {
    if (this.state.previewSource) {
      this.sourceService.muteSource(this.state.previewSource, !this.state.previewSource?.muted);
    }
  }
}
