import './DDRTable.scss';
import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

createTheme('solarized', {
  text: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
  },
  background: {
    default: '#17242d',
  },
  context: {
    background: '#17242d',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: '#FFFFFF',
    hover: '#FFFFFF',
    disabled: '#FFFFFF',
  },
});

const data = [
  {
    id: 1,
    name: '介绍',
  },
  {
    id: 2,
    name: '广告',
  }
];

const columns = [
  {
    name: '序号',
    selector: 'id',
  },
  {
    name: '名称',
    selector: 'name',
  },
];

export class DDRTable extends React.Component {

  public render() {
    return (
      <div className='DDRTable'>
        <div className='DDRTable-header'>
          <h2>DDR</h2>
          <button className='button--trans'>添加</button>
        </div>
        <div className='DDRTable-content'>
          <DataTable
            columns={columns}
            data={data}
            noHeader={true}
            theme="solarized"
          />
        </div>
      </div>
    );
  }
}
