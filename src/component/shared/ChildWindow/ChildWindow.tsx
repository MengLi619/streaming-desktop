import './ChildWindow.scss';
import React from 'react';
import { TitleBar } from '../TitleBar/TitleBar';
import { THEME } from '../../../util/constants';

type Props = {
  title: string;
};

export class ChildWindow extends React.Component<Props> {

  render() {
    return (
      <div style={{height: '100%'}} className={THEME}>
        <TitleBar title={this.props.title} />
        {this.props.children}
      </div>
    );
  }

}
