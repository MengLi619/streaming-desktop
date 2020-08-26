import './Sources.scss';
import React from 'react';
import { Source, Transition } from '../../../types/obs';
import { Container } from 'typedi';
import { sequence } from '../../../common/util';
import { SourceView } from './SourceView';
import { SourceService } from '../../../service/sourceService';

type SourcesProps = {
  rows: number;
  hideSetting?: boolean;
}

type SourcesState = {
  sources: Record<number, Source>;
  previewSource?: Source;
  programTransition?: Transition;
};

const MAX_SOURCE_COUNT = 12;

export class Sources extends React.Component<SourcesProps, SourcesState> {
  static defaultProps = {
    rows: 2,
  };

  private readonly sourceService = Container.get(SourceService);

  constructor(props: SourcesProps) {
    super(props);
    this.state = {
      sources: this.sourceService.sources,
      previewSource: this.sourceService.previewSource,
      programTransition: this.sourceService.programTransition,
    };
  }

  public componentDidMount() {
    this.sourceService.sourcesChanged.on(this, sources => {
      this.setState({
        sources: sources
      });
    });
    this.sourceService.previewChanged.on(this, source => {
      this.setState({
        previewSource: source,
      })
    });
    this.sourceService.programChanged.on(this, transition => {
      this.setState({
        programTransition: transition,
      })
    });
  }

  public componentWillUnmount() {
    this.sourceService.previewChanged.off(this);
    this.sourceService.programChanged.off(this);
  }

  public render() {
    return (
      <div className='Sources'>
        <div className='SourceView-list'>
          {
            sequence(0, MAX_SOURCE_COUNT - 1).map(index => {
              const source = this.state.sources[index];
              const isPreview = !!source && this.state.previewSource?.id === source?.id;
              const isProgram = !!source && this.state.programTransition?.source?.id === source?.id;
              return (
                <div key={source?.id || index}
                     className={`SourceView-item rows${this.props.rows} ${isPreview ? 'isPreview' : ''} ${isProgram ? 'isProgram' : ''}`}>
                  <SourceView
                    index={index}
                    source={source}
                    hideSetting={this.props.hideSetting}
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
