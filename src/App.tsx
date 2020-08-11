import React from 'react';
import { LayoutProvider } from './component/context/LayoutProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './component/screens/Main/Main';
import { Studio } from './component/screens/Studio/Studio';
import { LayoutEditor } from './component/screens/LayoutEditor/LayoutEditor';
import { Container } from 'typedi';
import { SourceService } from './service/sourceService';
import { DialogWindow } from './component/dialogs/DialogWindow/DialogWindow';
import { isDialogWindow, isMainWindow } from './common/util';

type AppState = {
  initialized: boolean;
};

export class App extends React.Component<{}, AppState> {
  private readonly sourceService = Container.get(SourceService);

  constructor(props: {}) {
    super(props);
    this.state = {
      initialized: false,
    };
  }

  async componentDidMount() {
    if (isMainWindow()) {
      await this.sourceService.initialize();
    }
    this.setState({
      initialized: true,
    });
  }

  public render() {
    if (!this.state.initialized) {
      return null;
    }
    if (isDialogWindow()) {
      return <DialogWindow />;
    }
    return (
      <LayoutProvider>
        <BrowserRouter>
          <Switch>
            <Route path='*'>
              <Main>
                <Switch>
                  <Route exact path='/' component={Studio}/>
                  <Route exact path='/layoutEditor' component={LayoutEditor}/>
                </Switch>
              </Main>
            </Route>
          </Switch>
        </BrowserRouter>
      </LayoutProvider>
    );
  }
}
