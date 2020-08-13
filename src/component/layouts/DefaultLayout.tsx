import './DefaultLayout.scss';
import React from 'react';
import { connectLayout, LayoutProps } from '../context/LayoutProvider';
import { Preview } from '../elements/Preview/Preview';
import { ProgramLocal } from '../elements/ProgramLocal/ProgramLocal';
import { ProgramLive } from '../elements/ProgramLive/ProgramLive';
import { Sources } from '../elements/Sources/Sources';

type Props = LayoutProps;

export const DefaultLayout = connectLayout(
  class DefaultLayout extends React.Component<Props> {
    render() {
      return (
        <div className='layout default-layout'>
          <div className='row-1'>
            <Preview />
            <ProgramLocal />
            <ProgramLive />
          </div>
          <div className='row-2'>
            <Sources />
          </div>
        </div>
      );
    }
  });
