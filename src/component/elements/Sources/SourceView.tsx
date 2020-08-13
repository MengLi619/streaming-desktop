import './SourceView.scss';
import React from 'react';
import { Display } from '../../shared/Display/Display';
import { Source } from '../../../types/obs';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';
import { DialogService } from '../../../service/dialogService';
import { AddSourceResult } from '../../dialogs/AddSourceDialog/AddSourceDialog';

export type SourceViewProps = {
  number: number;
  source?: Source;
  isPvw?: boolean;
  isPgm?: boolean;
};

export type SourceViewState = {
  source?: Source;
};

export class SourceView extends React.Component<SourceViewProps, SourceViewState> {
  private readonly dialogService = Container.get(DialogService);
  private readonly sourceService = Container.get(SourceService);

  public constructor(props: SourceViewProps) {
    super(props);
    this.state = {
      source: props.source,
    };
  }

  public render() {
    return (
      <div className={`SourceView ${this.props.isPvw ? 'isPvm' : undefined} ${this.props.isPgm ? 'isPgm' : undefined}`}>
        <div className='display-container'>
          <div className='content'>
            { this.state.source && <Display sourceId={this.state.source.id} /> }
          </div>
        </div>
        <div className='toolbar'>
          <div className='number'>{this.props.number}</div>
          <div className='name'>{this.state.source?.name}</div>
          <i className="icon-settings" onClick={() => this.onSettingsClick()} />
        </div>
      </div>
    );
  }

  private async onSettingsClick() {
    const settings = await this.dialogService.showDialog<AddSourceResult>({
      title: 'Add Source',
      component: 'AddSourceDialog',
      width: 400,
      height: 300,
    });
    if (settings) {
      if (this.state.source) {
        this.setState({
          source: await this.sourceService.updateSource(this.state.source.id, settings.name, settings.url),
        });
      } else {
        this.setState({
          source: await this.sourceService.addSource(settings.name, settings.url),
        });
      }
    }
  }
}
