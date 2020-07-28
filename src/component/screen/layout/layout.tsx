import './layout.scss';
import React, { DragEvent } from 'react';
import { Layout as LayoutType, LayoutElement, LayoutSlot, layoutSlots } from '../../../util/layout';

const layoutClassNames: Record<LayoutType, string> = {
  [LayoutType.Default]: 'default',
};

const layoutElementTitles: Record<LayoutElement, string> = {
  [LayoutElement.Scenes]: 'Scenes',
  [LayoutElement.Preview]: 'Preview',
  [LayoutElement.ProgramLocal]: 'Program Local',
  [LayoutElement.ProgramLive]: 'Program Live',
};

type LayoutState = {
  slottedElements: Partial<Record<LayoutElement, { slot: string | undefined; }>>;
};

export class Layout extends React.Component<{}, LayoutState> {
  private currentLayout: LayoutType = LayoutType.Default;
  private highlightedSlot?: LayoutSlot;
  private canDragSlot = true;

  constructor(props: {}) {
    super(props);
    this.state = {
      slottedElements: {},
    };
  }

  private get sideBar() {
    return (
      <div className='side-bar'>
        {this.elementList}
      </div>
    );
  }

  private get layout() {
    return layoutSlots.map((slot: LayoutSlot) => (
      <div
        id={slot}
        className={[
          'placement-zone',
          `${layoutClassNames[this.currentLayout]}-${slot}`,
          this.elementInSlot(slot) ? 'occupied' : '',
          this.highlightedSlot === slot ? 'highlight': ''
        ].join(' ')}
        draggable={this.elementInSlot(slot) && this.canDragSlot}
        onDragEnter={() => (this.highlightedSlot = slot)}
        onDragExit={() => (this.highlightedSlot = undefined)}
        onDragEnd={(e: DragEvent) => this.handleElementDrag(e, LayoutElement[this.elementInSlot(slot)])}>
        <span>{layoutElementTitles[this.elementInSlot(slot)]}</span>
      </div>
    ));
  }

  private get elementList() {
    return (
      <div className='element-list'>
        <div className='title'>Elements</div>
        <div className='subtitle'>Drag and drop to edit.</div>
        <div className='element-container'>
          {
            (Object.keys(LayoutElement) as LayoutElement[]).map((element: LayoutElement) => (
              <div
                draggable
                className='element-cell'
                onDragEnd={(e: DragEvent) => this.handleElementDrag(e, LayoutElement[element])}>
                <i className="fas fa-ellipsis-v"/>
                {layoutElementTitles[element]}
              </div>
            ))
          }
        </div>
      </div>
    );
  }

  public render() {
    return (
      <div className='layout editor-container'>
        {this.sideBar}
        <div className={'template-container'}>
          {this.layout}
        </div>
      </div>
    );
  }

  private setLayout(layout: LayoutType) {
    this.currentLayout = layout;
  }

  elementInSlot(slot: LayoutSlot): LayoutElement {
    return (Object.keys(this.state.slottedElements) as LayoutElement[])
      .find(el => this.state.slottedElements[el]?.slot === slot) as LayoutElement;
  }

  handleElementDrag(event: DragEvent, el: LayoutElement) {
    const htmlElement = document.elementFromPoint(event.clientX, event.clientY);
    if (!el) return;
    if (!htmlElement) {
      this.setState({
        slottedElements: {
          ...this.state.slottedElements,
          [el]: { slot: undefined },
        }
      });
      return;
    }
    // In case the span tag is the element dropped on we check for parent element id
    const id = htmlElement.id || htmlElement.parentElement?.id;
    let existingEl;
    if (id && layoutSlots.includes(id)) {
      existingEl = (Object.keys(this.state.slottedElements) as LayoutElement[])
        .find(existing => this.state.slottedElements[existing]?.slot === id) as LayoutElement;
      if (existingEl && this.state.slottedElements[el]) {
        this.setState({
          slottedElements: {
            ...this.state.slottedElements,
            [existingEl]: this.state.slottedElements[el],
          },
        });
      } else if (existingEl) {
        this.setState({
          slottedElements: {
            ...this.state.slottedElements,
            [existingEl]: { slot: undefined },
          },
        });
      }
      this.setState({
        slottedElements: {
          ...this.state.slottedElements,
          [el]:  { slot: id },
        },
      });
    } else {
      this.setState({
        slottedElements: {
          ...this.state.slottedElements,
          [el]:  { slot: undefined },
        },
      });
    }
  }
}
