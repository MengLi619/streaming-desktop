import './LayoutEditor.scss';
import React, { DragEvent } from 'react';
import { connectLayout, layoutElements, LayoutProps } from '../../context/LayoutProvider';
import { LayoutElement } from '../../../types/layout';

type Props = LayoutProps;

export const LayoutEditor = connectLayout(
  class LayoutEditor extends React.Component<Props> {
    private highlightedSlot?: string;
    private canDragSlot = true;

    public render() {
      return (
        <div className='layout-editor'>
          <div className='editor-container'>
            {this.renderSideBar()}
            <div className={'template-container'}>
              {this.renderLayout()}
            </div>
          </div>
        </div>
      );
    }

    private renderSideBar() {
      return (
        <div className='side-bar'>
          <div className='element-list'>
            <div className='title'>Elements</div>
            <div className='subtitle'>Drag and drop to edit.</div>
            <div className='element-container'>
              {
                layoutElements.map((element: LayoutElement) => (
                  <div
                    key={element.type}
                    draggable
                    className='element-cell'
                    onDragEnd={(e: DragEvent) => this.handleElementDrag(e, element)}>
                    <i className="fas fa-ellipsis-v"/>
                    {element.title}
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      );
    }

    private renderLayout() {
      return this.props.layout?.slots.map((slot: string) => {
        const element = this.props.getElementInSlot(slot);
        return (
          <div
            id={slot}
            key={slot}
            className={[
              'placement-zone',
              `${this.props.layout?.className}-${slot}`,
              element ? 'occupied' : '',
              this.highlightedSlot === slot ? 'highlight' : ''
            ].join(' ')}
            draggable={element && this.canDragSlot}
            onDragEnter={() => (this.highlightedSlot = slot)}
            onDragExit={() => (this.highlightedSlot = undefined)}
            onDragEnd={(e: DragEvent) => element && this.handleElementDrag(e, element)}>
            <span>{element?.title}</span>
          </div>
        );
      });
    }

    handleElementDrag(event: DragEvent, element: LayoutElement) {
      const htmlElement = document.elementFromPoint(event.clientX, event.clientY);
      const slot = htmlElement?.id || htmlElement?.parentElement?.id;
      const oldElement = slot ? this.props.getElementInSlot(slot) : undefined;
      const oldSlot = this.props.getElementSlot(element.type);

      const slottedElements = { ...this.props.slottedElements };

      // swap old element slot
      if (oldElement) {
        slottedElements[oldElement.type] = oldSlot;
      }

      // set element slot
      slottedElements[element.type] = slot;

      this.props.setSlottedElements(slottedElements);
    }
  });
