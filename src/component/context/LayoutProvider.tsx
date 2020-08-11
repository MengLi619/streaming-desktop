import * as React from 'react';
import { Sources } from '../elements/Sources/Sources';
import { Preview } from '../elements/Preview/Preview';
import { ProgramLocal } from '../elements/ProgramLocal/ProgramLocal';
import { ProgramLive } from '../elements/ProgramLive/ProgramLive';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { ElementType, Layout, LayoutElement } from '../../types/layout';

export const layouts: Layout[] = [
  {
    type: 'Default',
    className: 'default',
    component: DefaultLayout,
    slots: ['1', '2', '3', '4'],
  }
];

export const layoutElements: LayoutElement[] = [
  {
    type: 'Sources',
    title: 'Sources',
    component: Sources,
  },
  {
    type: 'Preview',
    title: 'Preview',
    component: Preview,
  },
  {
    type: 'ProgramLocal',
    title: 'Program Local',
    component: ProgramLocal,
  },
  {
    type: 'ProgramLive',
    title: 'Program Live',
    component: ProgramLive,
  },
];

export type LayoutProps = {
  layout: Layout;
  slottedElements: Record<ElementType, string | undefined>;
  setSlottedElements(slottedElements: Record<ElementType, string | undefined>): void;
  getElementInSlot(slot: string): LayoutElement | undefined;
  getElementSlot(element: ElementType): string | undefined;
};

const LayoutContext = React.createContext<LayoutProps>({
  layout: layouts[0],
  slottedElements: {} as Record<ElementType, string>,
  setSlottedElements: () => {},
  getElementInSlot: () => undefined,
  getElementSlot: () => undefined,
});

export class LayoutProvider extends React.Component<{}, LayoutProps> {
  constructor(props: {}) {
    super(props);
    this.state = {
      layout: layouts[0],
      slottedElements: {
        'Preview': '1',
        'ProgramLocal': '2',
        'ProgramLive': '3',
        'Sources': '4',
      },
      setSlottedElements: this.setElementSlot.bind(this),
      getElementInSlot: this.getElementInSlot.bind(this),
      getElementSlot: this.getElementSlot.bind(this),
    };
  }

  public setElementSlot(slottedElements: Record<ElementType, string | undefined>) {
    this.setState({
      slottedElements: slottedElements,
    });
  }

  public getElementInSlot(slot: string): LayoutElement | undefined {
    const elementType = Object.entries(this.state.slottedElements).find(([, s]) => s === slot)?.[0] as ElementType;
    return elementType ? layoutElements.find(el => el.type === elementType) : undefined;
  }

  public getElementSlot(element: ElementType): string | undefined  {
    return this.state.slottedElements[element];
  }

  render() {
    return (
      <LayoutContext.Provider value={this.state}>
        {this.props.children}
      </LayoutContext.Provider>
    );
  }
}

export function connectLayout<P extends LayoutProps>(Component: React.ComponentType<P>) {
  const mergeProps = (context: LayoutProps, props: Omit<P, keyof LayoutProps>) => ({
    ...context,
    ...props,
  }) as P;
  const WrappedComponent = React.forwardRef((props: Omit<P, keyof LayoutProps>, ref: React.Ref<React.ComponentType<P>>) => (
    <LayoutContext.Consumer>
      {(context) => <Component {...mergeProps(context, props)} ref={ref} />}
    </LayoutContext.Consumer>
  ));
  hoistNonReactStatics(WrappedComponent, Component);
  return WrappedComponent;
}
