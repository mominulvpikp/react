import React, { } from 'react'

const Home = () => {
  return (
       
          <div>
              {/* Content Wrapper. Contains page content */}
              <div className="content-wrapper">

                  <section className="content">
                      <div className="container-fluid">
                        
                          <div className="row">
                              <div className="col-md-12">
                                  <div className="card">
                                      
                                      <div className="card-body">
                                          <div className="row">
                                              <div className="col-md-8">
                                                  <p className="text-center">
                                                      <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                                                  </p>
                                                  <div className="chart">
                                                      {/* Sales Chart Canvas */}
                                                      <canvas id="salesChart" height={180} style={{ height: 180 }} />
                                                  </div>
                                                  {/* /.chart-responsive */}
                                              </div>
                                              {/* /.col */}
                                              <div className="col-md-4">
                                                  <p className="text-center">
                                                      <strong>Goal Completion</strong>
                                                  </p>
                                                  <div className="progress-group">
                                                      Add Products to Cart
                                                      <span className="float-right"><b>160</b>/200</span>
                                                      <div className="progress progress-sm">
                                                          <div className="progress-bar bg-primary" style={{ width: '80%' }} />
                                                      </div>
                                                  </div>
                                                  {/* /.progress-group */}
                                                  <div className="progress-group">
                                                      Complete Purchase
                                                      <span className="float-right"><b>310</b>/400</span>
                                                      <div className="progress progress-sm">
                                                          <div className="progress-bar bg-danger" style={{ width: '75%' }} />
                                                      </div>
                                                  </div>
                                                  {/* /.progress-group */}
                                                  <div className="progress-group">
                                                      <span className="progress-text">Visit Premium Page</span>
                                                      <span className="float-right"><b>480</b>/800</span>
                                                      <div className="progress progress-sm">
                                                          <div className="progress-bar bg-success" style={{ width: '60%' }} />
                                                      </div>
                                                  </div>
                                                  {/* /.progress-group */}
                                                  <div className="progress-group">
                                                      Send Inquiries
                                                      <span className="float-right"><b>250</b>/500</span>
                                                      <div className="progress progress-sm">
                                                          <div className="progress-bar bg-warning" style={{ width: '50%' }} />
                                                      </div>
                                                  </div>
                                                  {/* /.progress-group */}
                                              </div>
                                              {/* /.col */}
                                          </div>
                                          {/* /.row */}
                                      </div>
                                      {/* ./card-body */}
                                      <div className="card-footer">
                                          <div className="row">
                                              <div className="col-sm-3 col-6">
                                                  <div className="description-block border-right">
                                                      <span className="description-percentage text-success"><i className="fas fa-caret-up" /> 17%</span>
                                                      <h5 className="description-header">$35,210.43</h5>
                                                      <span className="description-text">TOTAL REVENUE</span>
                                                  </div>
                                                  {/* /.description-block */}
                                              </div>
                                              {/* /.col */}
                                              <div className="col-sm-3 col-6">
                                                  <div className="description-block border-right">
                                                      <span className="description-percentage text-warning"><i className="fas fa-caret-left" /> 0%</span>
                                                      <h5 className="description-header">$10,390.90</h5>
                                                      <span className="description-text">TOTAL COST</span>
                                                  </div>
                                                  {/* /.description-block */}
                                              </div>
                                              {/* /.col */}
                                              <div className="col-sm-3 col-6">
                                                  <div className="description-block border-right">
                                                      <span className="description-percentage text-success"><i className="fas fa-caret-up" /> 20%</span>
                                                      <h5 className="description-header">$24,813.53</h5>
                                                      <span className="description-text">TOTAL PROFIT</span>
                                                  </div>
                                                  {/* /.description-block */}
                                              </div>
                                              {/* /.col */}
                                              <div className="col-sm-3 col-6">
                                                  <div className="description-block">
                                                      <span className="description-percentage text-danger"><i className="fas fa-caret-down" /> 18%</span>
                                                      <h5 className="description-header">1200</h5>
                                                      <span className="description-text">GOAL COMPLETIONS</span>
                                                  </div>
                                                  {/* /.description-block */}
                                              </div>
                                          </div>
                                          {/* /.row */}
                                      </div>
                                      {/* /.card-footer */}
                                  </div>
                                  {/* /.card */}
                              </div>
                              {/* /.col */}
                          </div>
                          {/* /.row */}
                          {/* Main row */}
                          <div className="row">
                             
                              <div className="col-md-4">
                                  {/* Info Boxes Style 2 */}
                                  <div className="info-box mb-3 bg-warning">
                                      <span className="info-box-icon"><i className="fas fa-tag" /></span>
                                      <div className="info-box-content">
                                          <span className="info-box-text">Inventory</span>
                                          <span className="info-box-number">5,200</span>
                                      </div>
                                      {/* /.info-box-content */}
                                  </div>
                                  {/* /.info-box */}
                                  <div className="info-box mb-3 bg-success">
                                      <span className="info-box-icon"><i className="far fa-heart" /></span>
                                      <div className="info-box-content">
                                          <span className="info-box-text">Mentions</span>
                                          <span className="info-box-number">92,050</span>
                                      </div>
                                      {/* /.info-box-content */}
                                  </div>
                                  {/* /.info-box */}
                                  <div className="info-box mb-3 bg-danger">
                                      <span className="info-box-icon"><i className="fas fa-cloud-download-alt" /></span>
                                      <div className="info-box-content">
                                          <span className="info-box-text">Downloads</span>
                                          <span className="info-box-number">114,381</span>
                                      </div>
                                      {/* /.info-box-content */}
                                  </div>
                                  {/* /.info-box */}
                                  <div className="info-box mb-3 bg-info">
                                      <span className="info-box-icon"><i className="far fa-comment" /></span>
                                      <div className="info-box-content">
                                          <span className="info-box-text">Direct Messages</span>
                                          <span className="info-box-number">163,921</span>
                                      </div>
                                      {/* /.info-box-content */}
                                  </div>
                                  {/* /.info-box */}
                                  <div className="card">
                                      <div className="card-header">
                                          <h3 className="card-title">Browser Usage</h3>
                                          <div className="card-tools">
                                              <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                  <i className="fas fa-minus" />
                                              </button>
                                              <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                  <i className="fas fa-times" />
                                              </button>
                                          </div>
                                      </div>
                                      
                                      {/* /.card-header */}
                                      <div className="card-body">
                                          <div className="row">
                                              <div className="col-md-8">
                                                  <div className="chart-responsive">
                                                      <canvas id="pieChart" height="150" />
                                                  </div>
                                                  {/* ./chart-responsive */}
                                              </div>
                                             
                                          </div>
                                          {/* /.row */}
                                      </div>
                                      
                                  </div>
                                
                              </div>
                              {/* /.col */}
                          </div>
                          {/* /.row */}
                      </div>{/*/. container-fluid */}
                  </section>
                  {/* /.content */}
              </div>
              {/* /.content-wrapper */}
              {/* Control Sidebar */}
              <aside className="control-sidebar control-sidebar-dark">
                  {/* Control sidebar content goes here */}
              </aside>
              {/* /.control-sidebar */}
          </div>

       
  )
}

export default Home
