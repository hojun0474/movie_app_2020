import React, { Component } from 'react';
import ExcelReader from './ExcelReader';
import Grid from './Grid';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: []
        };
    }

    getExcelData(excelData) {
        this.setState({
            datas: [excelData]
        });
    }

    render() {
        return (
            <div className="App">
                <ExcelReader getExcelData={(excelData) => this.getExcelData(excelData)}/>
                <Grid excelData={this.state.datas}/>
            </div>
        )
    }
}

export default App;

