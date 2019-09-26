
import React, { Component } from 'react'


class All extends Component {
    state = {
        data1: [],
        items: '',
        auth: false,
        data21: [],
        error: "",
        loading:false

    }
    componentDidMount() {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => this.setState({ data1: data }))
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

        this.setState({ data21: data2, auth: true, error: "No Data",loading:true })
    
    }

    render() {
        const { data1, items, data21, auth, error ,loading} = this.state
        return (
            <React.Fragment>
                <div className="container">
                    <div className="col-md-7">
                        <div>
                            <h2>Sorting Data</h2>
                        </div>
                        <div className="mb-2">
                            {error.length && loading ? <h3>{error}</h3>:null}
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
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>company</th>
                                    <th>email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !auth ? data1.map((val) => (
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
                                            <td><button type="button" onChange={this.handleChange} class="btn btn-danger">Delete</button></td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default All;