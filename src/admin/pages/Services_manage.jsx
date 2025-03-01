import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Footer from '../component/Footer';
import Header from '../component/Header';

function Services_manage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch()
  }, []);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/services`);
    console.log(res.data);
    setData(res.data);
  }

  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/services/${id}`);
    fetch();
  }
  return (
    <div className="content-wrapper">
      <Header/>
    <div className="container">
      <div className="row pad-botm">
        <div className="col-md-12">
          <h4 className="header-line">Manage Services</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Advanced Tables */}
          <div className="panel panel-default">
            <div className="panel-heading">
              Advanced Tables
            </div>
            <div className="panel-body">
              <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                  <thead>
                  <tr>
                        
                        <th>ID</th>
                        <th>Cate ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data.map((value, index, arr) => {

                          return (
                            <tr className="odd gradeX">
                              <td>{value.id}</td>
                              <td>{value.cate_id}</td>
                              <td>{value.name}</td>
                              <td>{value.desc}</td>
                              <td>{value.price}</td>
                              <td><img src={value.img} alt="" width="50px" /></td>
                              <td>{value.status}</td>
                              <td className="center">
                                <button className='btn btn-danger' onClick={()=>deleteHandel(value.id)}>Delete</button>
                                <button className='btn btn-primary'>Edit</button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                </table>
              </div>
            </div>
          </div>
          {/*End Advanced Tables */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Services_manage