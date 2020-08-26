import './SourceView.scss';
import React from 'react';
import { Display } from '../../shared/Display/Display';
import { Source } from '../../../types/obs';
import { Container } from 'typedi';
import { SourceService } from '../../../service/sourceService';
import { DialogService } from '../../../service/dialogService';
import { AddSourceResult } from '../../dialogs/AddSourceDialog/AddSourceDialog';

export type SourceViewProps = {
  index: number;
  source?: Source;
  hideSetting?: boolean;
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
              <i className="icon-subtract icon-button" onClick={() => this.onRemoveClicked()} />
              <i className="icon-settings icon-button" onClick={() => this.onSettingsClicked()} />
            </>
          }
        </div>
      </div>
    );
  }

  private async onSettingsClicked() {
    const settings = await this.dialogService.showDialog<AddSourceResult>({
      title: 'Add Source',
      component: 'AddSourceDialog',
      width: 400,
      height: 300,
    }, {
      name: this.props.source?.name,
      url: this.props.source?.url,
    });
    if (settings) {
      this.sourceService.updateSource(this.props.index, settings.name, settings.url);
    }
  }

  private onRemoveClicked() {
    this.sourceService.removeSource(this.props.index);
  }
}
