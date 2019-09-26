import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';
charts(FusionCharts);
ReactFusioncharts.fcRoot(FusionCharts, FusionTheme);

export default class chartbar extends Component {
  state = {
    data : [],
  }
   componentDidMount (){
    fetch('/chart.json')
    .then(response => response.json())
    .then(json => this.setState({ data: json }))
  }
  render() {
   console.log(this.state.data)
    const dataSource1 = {
      // Chart Configuration 
      "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
      },
      // Chart Data
      data:this.state.data
    };
    const dataSource = {
      chart: {
        caption: "Pie Chart",
        plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
        showlegend: "1",
        showpercentvalues: "1",
        legendposition: "bottom",
        usedataplotcolorforlabels: "1",
        theme: "fusion"
      },
      data: [
        {
          label: "Apache",
          value: "32647479"
        },
        {
          label: "Microsoft",
          value: "22100932"
        },
        {
          label: "Zeus",
          value: "14376"
        },
        {
          label: "Other",
          value: "18674221"
        }
      ]
    };
    const dataSource2 = {
      chart: {
        caption: "Chart Bar",
        yaxisname: "Number of Leads",
        aligncaptionwithcanvas: "0",
        plottooltext: "<b>$dataValue</b> leads received",
        theme: "fusion"
      },
      data:this.state.data
    };
    return (
      <div>
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <ReactFusioncharts
                type="msline"
                type='column2d'
                width="100%"
                dataSource={dataSource1}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <ReactFusioncharts
                type="pie2d"
                width="100%"
                dataFormat="JSON"
                dataSource={dataSource}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
            <ReactFusioncharts
            type="bar2d"
            width="100%"
            dataFormat="JSON"
            dataSource={dataSource2}
          />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
