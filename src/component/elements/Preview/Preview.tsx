import './Preview.scss';
import React from 'react';
import { Display } from '../../shared/Display/Display';
import { Source } from '../../../types/obs';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';

type PreviewState = {
  source?: Source;
};

export class Preview extends React.Component<{}, PreviewState> {
  private readonly sourceService: SourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    this.setState({
      source: this.sourceService.pvwSource,
    });
    this.sourceService.pvwSourceChanged.on(this, source => {
      this.setState({
        source: source,
      })
    });
  }

  public componentWillUnmount() {
    this.sourceService.pgmSourceChanged.off(this);
  }

  public render() {
    return (
      <div className={`Preview ${this.state.source ? 'isPreview': ''}`}>
        <div className='display-container'>
          <div className='content'>
            {
              this.state.source &&
              <Display
                key={this.state.source.id}
                sourceId={this.state.source.id}
              />
            }
          </div>
        </div>
        <div className='toolbar'>
          <h2>PVW预监</h2>
        </div>
      </div>
    );
  }
}
