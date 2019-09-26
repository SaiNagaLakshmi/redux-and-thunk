import React, { Component } from 'react';
import Pagination from "react-js-pagination";

export default class Home extends Component {
    state = {
        data1: [],
        items: '',
        auth: false,
        data21: [],
        error: "",
        loading: false,
        show: true,
        isNoData: false,
        activePage: 1,
        noPerPage: 10,
    }
    componentDidMount() {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => this.setState({ data1: data, isNoData: false }))
    }
    handlePageChange = (v) => {
        this.setState({ activePage: v })
    }
    onHandle = (e) => {
        if (e.target.value === "") {
            this.componentDidMount()
        }
        this.setState({ items: e.target.value });
        var data2 = this.state.data1.filter((val) => {
            console.log("e.target.value", e.target.value)
            for (let [key, value] of Object.entries(val)) {
                if (value.toString().includes(e.target.value)) {
                    return val
                }

            }
        })
        console.log("data2", data2)
        this.setState({ data21: data2, auth: true, loading: true, isNoData: true, error: "No Data" })
    }
    handleChange=()=>{
        this.props.history.push("/chartbar")
    }
    render() {
        const { data1, items, data21, auth, error, loading, isNoData } = this.state;
        const { data, activePage, noPerPage } = this.state;
        const end = activePage * noPerPage;
        const begin = end - noPerPage;
        const data2 = data1.slice(begin, end);
        console.log(data2)
        var shown = {
            display: this.state.shown ? "block" : "none"
        }
        var hidden = {
            display: this.state.shown ? "none" : "block"
        }
        return (
            <div>
                <div className="sidenav">
                    <div class="dropdown">
                        <button className="dropdown-btn" data-toggle="dropdown">Table
                    <i className="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Link 1</a>
                            <a class="dropdown-item" href="#">Link 2</a>
                            <a class="dropdown-item" href="#">Link 3</a>
                        </div>
                    </div>
                    <a href="#contact" onClick={this.handleChange}>Flow Charts</a>
                </div>
                <div className="pagination">
                    <div className="main">
                        <h6>Filter & Pagination:</h6>
                        <div className="container">
                            {isNoData ? <h6>{error}</h6> : null}
                            <form >
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter something..."
                                        value={items}
                                        onChange={this.onHandle}
                                    />
                                </div>
                            </form>
                        </div>
                        {
                            data1 && (
                                <Pagination
                                    prevPageText='prev'
                                    nextPageText='next'
                                    firstPageText='first'
                                    lastPageText='last'
                                    activePage={activePage}
                                    itemsCountPerPage={noPerPage}
                                    totalItemsCount={data1.length}
                                    onChange={this.handlePageChange}
                                    linkClass="page-link"
                                    itemClass="page-item"
                                />
                            )
                        }
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Email</th>
                                    <th>Edit/Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !auth ? data2.map((val) => (
                                        <tr key={val.id}>
                                            <td>{val.id}</td>
                                            <td>{val.name}</td>
                                            <td>{val.company}</td>
                                            <td>{val.email}</td>
                                        </tr>
                                    )) : data21.map((val) => (
                                        <tr key={val.id}>
                                            <td>{val.id}</td>
                                            <td>{val.name}</td>
                                            <td>{val.company}</td>
                                            <td>{val.email}</td>
                                            <td><button type="button" class="btn btn-success">Edit</button></td>
                                            <td><button type="button" class="btn btn-danger">Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}