import './SourceView.scss';
import React from 'react';
import { Display } from '../../shared/Display/Display';
import { Source } from '../../../types/obs';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';

export type SourceViewProps = {
  index: number;
  source?: Source;
  hideSetting?: boolean;
};

export type SourceViewState = {
  source?: Source;
};

export class SourceView extends React.Component<SourceViewProps, SourceViewState> {
  private readonly sourceService = Container.get(SourceService);

  public constructor(props: SourceViewProps) {
    super(props);
    this.state = {
      source: props.source,
    };
  }

  public componentDidMount() {
    this.sourceService.sourceMuteChanged.on(this, source => {
      if (source.id === this.state.source?.id) {
        this.setState({
          source: source,
        });
      }
    });
    this.sourceService.sourceRestarted.on(this, source => {
      if (source.id === this.state.source?.id) {
        this.setState({
          source: undefined,
        });
        this.setState({
          source: source,
        });
      }
    });
  }

  componentWillUnmount() {
    this.sourceService.sourceMuteChanged.off(this);
    this.sourceService.sourceRestarted.off(this);
  }

  public render() {
    return (
      <div className='SourceView'>
        <div className='display-container'>
          <div className='content'>
            { this.state.source && <Display sourceId={this.state.source.id} /> }
          </div>
        </div>
        <div className='toolbar'>
          <div className='number'>{this.props.index + 1}</div>
          <div className='name'>{this.state.source?.name}</div>
          {
            !this.props.hideSetting &&
            <>
              <i className="icon-reset icon-button" onClick={() => this.onRestartClicked()} />
              <i className={`${!this.state.source || this.state.source.muted ? 'icon-mute' : 'icon-audio'} icon-button`} onClick={() => this.onMuteClicked()} />
            </>
          }
        </div>
      </div>
    );
  }

  private onMuteClicked() {
    if (this.state.source) {
      this.sourceService.muteSource(this.state.source, !this.state.source.muted);
    }
  }

  private onRestartClicked() {
    if (this.state.source) {
      this.sourceService.restart(this.state.source);
    }
  }
}
