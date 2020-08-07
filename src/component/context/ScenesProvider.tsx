import * as React from 'react';
import { Scene } from '../../types/obs';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { getHeadlessScenes } from '../../util/obs-headless';
import { isMainWindow } from '../../util/utils';

export type ScenesProps = {
  scenes: Scene[];
  previewScene?: Scene;
  programLocalScene?: Scene;
  programLiveScene?: Scene;
  setPreviewScene: (scene: Scene) => void;
  setProgramLocalScene: (scene: Scene) => void;
  setProgramLiveScene: (scene: Scene) => void;
  addScene: (scene: Scene) => void;
};

const ScenesContext = React.createContext<ScenesProps>({
  scenes: [],
  setPreviewScene: () => {},
  setProgramLocalScene: () => {},
  setProgramLiveScene: () => {},
  addScene: () => {},
});

export class ScenesProvider extends React.Component<{}, ScenesProps> {
  constructor(props: {}) {
    super(props);
    this.state = {
      scenes: [],
      setPreviewScene: this.setPreviewScene.bind(this),
      setProgramLocalScene: this.setProgramLocalScene.bind(this),
      setProgramLiveScene: this.setProgramLiveScene.bind(this),
      addScene: this.addScene.bind(this),
    };
  }

  async componentDidMount() {
    this.setState({
      scenes: isMainWindow() ? await getHeadlessScenes() : [],
    });
  }

  public render() {
    return (
      <ScenesContext.Provider value={this.state}>
        {this.props.children}
      </ScenesContext.Provider>
    );
  }

  public setPreviewScene(scene: Scene) {
    this.setState({
      previewScene: scene,
    });
  }

  public setProgramLocalScene(scene: Scene) {
    this.setState({
      programLocalScene: scene,
    });
  }

  public setProgramLiveScene(scene: Scene) {
    this.setState({
      programLiveScene: scene,
    });
  }

  public addScene(scene: Scene) {
    console.log(`addScene: ${JSON.stringify(scene)}`);
    this.setState({
      scenes: [
        ...this.state.scenes,
        scene,
      ]
    });
  }
}

export function connectScenes<P extends ScenesProps>(Component: React.ComponentType<P>) {
  const mergeProps = (context: ScenesProps, props: Omit<P, keyof ScenesProps>) => ({
    ...context,
    ...props,
  }) as P;
  const WrappedComponent = React.forwardRef((props: Omit<P, keyof ScenesProps>, ref: React.Ref<React.ComponentType<P>>) => (
  <ScenesContext.Consumer>
    {(context) => <Component {...mergeProps(context, props)} ref={ref} />}
  </ScenesContext.Consumer>
));
  hoistNonReactStatics(WrappedComponent, Component);
  return WrappedComponent;
}
