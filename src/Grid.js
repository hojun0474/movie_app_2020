import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      excelData: [],
      columnDefs: [{
        headerName: "간선명", field: "간선명"
      }, {
        headerName: "전주번호", field: "전주번호"
      }, {
        headerName: "시공일", field: "시공일"
      }, {
        headerName: "운용기관", field: "운용기관"
      }, {
        headerName: "시공자", field: "시공자"
      }],
      rowData: []
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.excelData[0] && JSON.stringify(nextProps.excelData[0]) !== JSON.stringify(prevState.rowData)) {
      return { rowData: nextProps.excelData[0] }
    }
    return null;
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '172px',
          width: '1000px'
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

export default Grid;