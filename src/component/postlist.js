import React, { Component } from 'react';
import Modal from './practice';

export default class Postlist extends Component {
  constructor(props) {
    super(props);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          title: "Avvaru Sai",
          msg: "I Want Chocolates"
        }, {
          title: "Avvaru khushi",
          msg: "Im Going to movie"
        }, {
          title: "Avvaru lavanya",
          msg: "Im watching Disney"
        }
      ]
    }
  }
  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }
  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({ brochure: tempbrochure });
  }

  deleteItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState({ brochure: tempBrochure });
  }
  
  render() {    
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.title}</td>
          <td>{" "} - {" "}</td>
          <td>{item.msg}</td>
          <td>
            <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}>Edit</button> {" "}
            <button className="btn btn-danger" onClick={() => this.deleteItem(index)}>Remove</button>
          </td>
        </tr>
      )
    });
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h3 style={{ color: "red" }}>Edit & Delete :</h3>
        </div>
        <table className="table table-striped">
          <tbody>
            {brochure}
          </tbody>
        </table>
        <Modal
          title={modalData.title}
          msg={modalData.msg}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

