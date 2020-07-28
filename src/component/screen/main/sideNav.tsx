import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './sideNav.scss';

type Props = RouteComponentProps;

export const SideNav = withRouter(
  class extends React.Component<Props> {
    render() {
      return (
        <div className='container'>
          <div
            title="Editor"
            className="main-cell"
            onClick={() => this.props.history.push('/')}>
            <i className="icon-studio"/>
          </div>
          <div className='bottom-tools'>
            <div
              title='Layout'
              className='cell'
              onClick={() => this.props.history.push('layout')}>
              <i className="fas fa-th-large" aria-hidden="true"/>
            </div>
            <div
              title='Logout'
              className='cell'>
              <i className='fas fa-sign-out-alt'/>
            </div>
            <div
              title='Settings'
              className='cell'>
              <i className="icon-settings"/>
            </div>
          </div>
        </div>
      );
    }
  });
