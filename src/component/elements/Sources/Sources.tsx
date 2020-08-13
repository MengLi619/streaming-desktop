import './Sources.scss';
import React from 'react';
import { Source } from '../../../types/obs';
import { Container } from 'typedi';
import { sequence } from '../../../common/util';
import { SourceView } from './SourceView';
import { SourceService } from '../../../service/sourceService';

type SourcesState = {
  sources: Source[];
  pvwSource?: Source;
  pgmSource?: Source;
};

const MAX_SOURCE_COUNT = 12;

export class Sources extends React.Component<{}, SourcesState> {
  private readonly sourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {
      sources: this.sourceService.sources,
      pvwSource: this.sourceService.pvwSource,
      pgmSource: this.sourceService.pgmSource,
    };
  }

  public componentDidMount() {
    this.sourceService.pvwSourceChanged.on(this, source => {
      this.setState({
        pvwSource: source,
      })
    });
    this.sourceService.pgmSourceChanged.on(this, source => {
      this.setState({
        pgmSource: source,
      })
    });
  }

  public componentWillUnmount() {
    this.sourceService.pvwSourceChanged.off(this);
    this.sourceService.pgmSourceChanged.off(this);
  }

  public render() {
    return (
      <div className='Sources'>
        <div className='sources-list'>
          {
            sequence(1, MAX_SOURCE_COUNT).map(number => {
              const source = this.state.sources[number - 1];
              return (
                <SourceView
                  key={number}
                  number={number}
                  source={source}
                  isPvw={!!source && this.state.pvwSource?.id === source?.id}
                  isPgm={!!source && this.state.pgmSource?.id === source?.id}
                >
                </SourceView>
              );
            })
          }
        </div>
      </div>
    );
  }
}
