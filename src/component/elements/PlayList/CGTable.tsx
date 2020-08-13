import './CGTable.scss';
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
    button: 'rgba(255, 255, 255, 255)',
    hover: 'rgba(255, 255, 255, 255)',
    disabled: 'rgba(255, 255, 255, 255)',
  },
});

const data = [
  {
    id: 1,
    name: '字幕',
  },
  {
    id: 2,
    name: 'Logo',
  }
];

const columns = [
  {
    name: '序号',
    selector: 'id',
    sortable: false,
    style: {
      '&:hover': {
        cursor: 'pointer',
      },
    }
  },
  {
    name: '名称',
    selector: 'name',
    sortable: false,
  },
];

export class CGTable extends React.Component {

  public render() {
    return (
      <div className='CGTable'>
        <div className='CGTable-header'>
          <h2>CG</h2>
          <button className='button--trans'>添加</button>
        </div>
        <div className='CGTable-content'>
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
