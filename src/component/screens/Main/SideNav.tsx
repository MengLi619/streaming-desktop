import './SideNav.scss';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { app } from 'electron';

type Props = RouteComponentProps;

export const SideNav = withRouter(
  class SideNav extends React.Component<Props> {

    public render() {
      return (
        <div className='side-nav'>
          <div className='container'>
            <div
              title="Editor"
              className="main-cell"
              onClick={() => this.props.history.push(`/${this.props.location.search}`)}
            >
              <i className="icon-studio"/>
            </div>
            <div className='bottom-tools'>
              <div
                title='Layout'
                className='cell'
                onClick={() => this.props.history.push(`/layoutEditor/${this.props.location.search}`)}
              >
                <i className="fas fa-th-large" aria-hidden="true"/>
              </div>
              <div
                title='Logout'
                className='cell'
                onClick={() => this.onExitClicked()}
              >
                <i className='fas fa-sign-out-alt'/>
              </div>
            </div>
          </div>
        </div>
      );
    }

    private onExitClicked() {
      app.exit(0);
    }
  });
