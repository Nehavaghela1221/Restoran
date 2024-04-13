import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function Customer() {
  return (
    <div>
        <Header/>


      <div className="content-wrapper">
  <div className="container">
    <div className="row pad-botm">
      <div className="col-md-12">
        <h4 className="header-line">TABLE EXAMPLES</h4>
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
                    <th>Rendering engine</th>
                    <th>Browser</th>
                    <th>Platform(s)</th>
                    <th>Engine version</th>
                    <th>CSS grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd gradeX">
                    <td>Trident</td>
                    <td>Internet Explorer 4.0</td>
                    <td>Win 95+</td>
                    <td className="center">4</td>
                    <td className="center">X</td>
                  </tr>
                  <tr className="even gradeC">
                    <td>Trident</td>
                    <td>Internet Explorer 5.0</td>
                    <td>Win 95+</td>
                    <td className="center">5</td>
                    <td className="center">C</td>
                  </tr>
                  <tr className="odd gradeA">
                    <td>Trident</td>
                    <td>Internet Explorer 5.5</td>
                    <td>Win 95+</td>
                    <td className="center">5.5</td>
                    <td className="center">A</td>
                  </tr>
                  <tr className="even gradeA">
                    <td>Trident</td>
                    <td>Internet Explorer 6</td>
                    <td>Win 98+</td>
                    <td className="center">6</td>
                    <td className="center">A</td>
                  </tr>
                  <tr className="odd gradeA">
                    <td>Trident</td>
                    <td>Internet Explorer 7</td>
                    <td>Win XP SP2+</td>
                    <td className="center">7</td>
                    <td className="center">A</td>
                  </tr>
                  <tr className="even gradeA">
                    <td>Trident</td>
                    <td>AOL browser (AOL desktop)</td>
                    <td>Win XP</td>
                    <td className="center">6</td>
                    <td className="center">A</td>
                  </tr>
                  
                  <tr className="gradeC">
                    <td>Misc</td>
                    <td>PSP browser</td>
                    <td>PSP</td>
                    <td className="center">-</td>
                    <td className="center">C</td>
                  </tr>
                  <tr className="gradeU">
                    <td>Other browsers</td>
                    <td>All others</td>
                    <td>-</td>
                    <td className="center">-</td>
                    <td className="center">U</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/*End Advanced Tables */}
      </div>
    </div>
  </div></div>



        <Footer/>
    </div>

  )
}

export default Customer