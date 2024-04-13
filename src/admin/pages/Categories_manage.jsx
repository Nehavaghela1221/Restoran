
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { toast } from 'react-toastify'
function Categories_manage() {
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/categories`);
    console.log(res.data);
    setData(res.data);
  }


  // fetch data from api 
  const fetch1 = async () => {
    const res = await axios.get(`http://localhost:3000/categories/${localStorage.getItem('userid')}`);
    console.log(res.data);
    setData(res.data); // set data from api in data var state
  }


  const [formvalue, setFormvalue] = useState({
    id: "",
    cate_name: "",

    cate_img: ""
  });

  const editdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/categories/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  }

  const getform = (e) => {
    setFormvalue({ ...formvalue, [e.target.cate_name]: e.target.value });
    console.log(formvalue);
  }

  const validation = () => {

    var result = true;
    if (formvalue.cate_name == "") {
      toast.error('Name Field is required');
      result = false;
      return false;
    }

    if (formvalue.cate_img == "") {
      toast.error('Image Field is required');
      result = false;
      return false;
    }
    return result;

  }

  const submithandel = async (e) => {
    e.preventDefault(); // stop page reload
    if (validation()) {
      const res = await axios.patch(`http://localhost:3000/categories/${formvalue.id}`, formvalue);
      console.log(res);
      if (res.status == 200) {
        setFormvalue({ ...formvalue, cate_namename: "", cate_imgimg: "" });
        toast.success('Update success');
        fetch();
      }
    }
  }


  const [data, setData] = useState([]);

  useEffect(() => {
    fetch()
  }, []);

  
  const deleteHandel = async (id) => {
    const res = await axios.delete(`http://localhost:3000/categories/${id}`);
    fetch();
  }
  return (
    <div>
      <Header />

      <div className="content-wrapper">
        <div className="container">
          <div className="row pad-botm">
            <div className="col-md-12">
              <h4 className="header-line">Manage Categories</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* Advanced Tables */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  Manage Categories
                </div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Image</th>

                        </tr>
                      </thead>
                      <tbody>

                        {
                          data.map((value, index, arr) => {

                            return (
                              <tr className="odd gradeX">
                                <td>{value.id}</td>
                                <td>{value.cate_name}</td>
                                <td><img src={value.cate_img} alt="" width="50px" /></td>
                                <td className="center">
                                  <button className='btn btn-danger' onClick={() => deleteHandel(value.id)}>Delete</button>
                                  <button className='btn btn-primary' onClick={() => editdata(data.id)}>Edit</button>
                                </td>
                              </tr>
                            )
                          })
                        }


                        <div className="modal" id="myModal">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              {/* Modal Header */}
                              <div className="modal-header">
                                <h4 className="modal-title">Edit Profile</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                              </div>
                              {/* Modal body */}
                              <div className="modal-body">
                                <div className='container'>
                                  <form action="" method="post" >
                                    <div className="row g-3">
                                      <div className="col-md-6">
                                        <div className="form-floating">
                                          <input type="text" className="form-control" name="name" value={formvalue.cate_name} onChange={getform} id="name" placeholder="Your Name" />
                                          <label htmlFor="name">Your Name</label>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-floating">
                                          <input type="email" className="form-control" name="email" value={formvalue.cate_img} onChange={getform} id="email" placeholder="Your Email" />
                                          <label htmlFor="email">Your Email</label>
                                        </div>
                                      </div>

                                      

                                      <div className="col-12">
                                        <button onClick={submithandel} data-bs-dismiss="modal" className="btn btn-primary w-100 py-3" type="submit">Save</button>

                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              {/* Modal footer */}
                              <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>

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


      <Footer />
    </div>

  )
}

export default Categories_manage