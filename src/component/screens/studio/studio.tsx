import './studio.scss';
import React from 'react';
import { connectLayout, LayoutProps } from '../../shared/layoutProvider';

type StudioProps = LayoutProps;

export const Studio = connectLayout(
  class Studio extends React.Component<StudioProps> {
    render() {
      const Layout = this.props.layout.component;
      return (
        <div className='studio'>
          { Layout && <Layout /> }
        </div>
      );
    }
  });
