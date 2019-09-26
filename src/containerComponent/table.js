import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from './../Actions/homeAction'


class Table extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }
    render() {
        const { crd } = this.props
        return (
            <React.Fragment>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                            <th>address</th>

                        </tr>

                    </thead>
                    <tbody>
                       {
                           crd && crd.map((v,k)=>(
                               <tr key={v.id}>
                                  <td>{v.id}</td>
                                  <td>{v.name}</td>
                                  <td>{v.username}</td>
                                  <td>{v.email}</td>
                                  <td>{v.address.zipcode}</td>
                               
                               </tr>
                           ))
                       }
                    </tbody>

                </table>

            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    crd: state.user.data
})
const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Table)
