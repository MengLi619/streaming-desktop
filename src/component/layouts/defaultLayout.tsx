import './layouts.scss';
import React from 'react';
import { connectLayout, LayoutProps } from '../shared/layoutProvider';

type Props = LayoutProps;

export const DefaultLayout = connectLayout(
  class DefaultLayout extends React.Component<Props> {
    render() {
      return (
        <div className='default-layout'>
          {
            this.props.layout?.slots.map((slot: string) => {
              const Element = this.props.getElementInSlot(slot)?.component;
              return (
                <div
                  key={slot}
                  id={slot}
                  className={`default-${slot}`}>
                  { Element && <Element /> }
                </div>
              );
            })
          }
        </div>
      );
    }
  });
