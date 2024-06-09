import React, { useState } from 'react'
import NavBar from './NavBar'

const AddTodo = () => {
    const [data, setData] = useState(
        {
            "userid": "",
            "id": "",
            "todo": "",
            "completed": ""
        }
    )
    const inputHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col.12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>User ID</label>
                                <input type="text" className='form-control' name="userid" value={data.userid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>ID</label>
                                <input type="text" className='form-control' name="id" value={data.id} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>Todo</label>
                                <input type="text" className='form-control' name="todo" value={data.todo} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>Completed</label>
                                <input type="text" className='form-control' name="completed" value={data.completed} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTodo