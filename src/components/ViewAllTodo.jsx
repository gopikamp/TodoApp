import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAllTodo = () => {
    const [data, changeData] = useState({ "todos": [] })
    const fetchData = () => {
        console.log("hello")
        axios.get("https://dummyjson.com/todos").then(
            (Response) => { changeData(Response.data) }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">User ID</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Todo</th>
                                            <th scope="col">completed</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.todos.map(
                                            (value, index) => {
                                                return <tr>
                                                    <td scope="row">{value.userId}</td>
                                                    <td>{value.id}</td>
                                                    <td>{value.todo}</td>
                                                    <td>{value.completed}</td>
                                                </tr>
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllTodo