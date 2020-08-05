import React, { RefObject } from 'react';
import { remote } from 'electron';

const { Menu, MenuItem } = remote;

export type MenuItem = {
  label: string;
  onClicked: () => void;
};

export type ContextMenuProps = {
  className?: string;
  menuItems: MenuItem[];
};

export class ContextMenu extends React.Component<ContextMenuProps> {
  private readonly ref: RefObject<HTMLDivElement>;
  private readonly menu: Electron.Menu;

  constructor(props: ContextMenuProps) {
    super(props);
    this.ref = React.createRef();
    this.menu = this.createMenu(props.menuItems);
  }

  componentDidMount() {
    if (this.ref.current) {
      this.ref.current.addEventListener(
        "contextmenu",
        e => {
          e.preventDefault();
          this.menu.popup({ window: remote.getCurrentWindow() });
        },
        false
      );
    }
  }

  render() {
    return (
      <div className={this.props.className || ''} ref={this.ref}>
        {this.props.children}
      </div>
    );
  }

  private createMenu(menuItems: MenuItem[]): Electron.Menu {
    const menu = new Menu();
    menuItems.forEach(item => {
      menu.append(new MenuItem({ label: item.label, click: item.onClicked }));
    });
    return menu;
  }
}
