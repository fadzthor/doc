import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Doc from './light';
import Medicine from './doc-api-medicine';
import Medicinecategory from './doc-api-medicine-category';
import Medicinemutation from './doc-api-medicine-mutation';
import Medicineoutdetail from './doc-api-medicine-out-detail';
import Medicineoutheader from './doc-api-medicine-out-header';
import Medicineprediction from './doc-api-medicine-prediction';
import Medicinerequest from './doc-api-medicine-request';
import Medicinestock from './doc-api-medicine-stock';
import Medicineunit from './doc-api-medicine-unit';
import Patient from './doc-api-patient';
import Rko from './doc-api-rko';
import Upload from './doc-api-upload';
import User from './doc-api-user';
import Warehouse from './doc-api-warehouse';
import Warehousecategory from './doc-api-warehouse-category';
import { Link } from "react-router-dom";

function RRD() {
	return (
		<div>
			<Router>
				<div className="body_wrapper">
					<nav className="navbar navbar-expand-lg menu_one display_none">
						<div className="container custom_container">
							<button
								className="navbar-toggler collapsed"
								type="button"
								data-toggle="collapse"
								data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="menu_toggle">
									<span className="hamburger">
										<span />
										<span />
										<span />
									</span>
									<span className="hamburger-cross">
										<span />
										<span />
									</span>
								</span>
							</button>
						</div>
					</nav>
					<div
						className="mobile_main_menu navbar_fixed fadeInDown"
						id="sticky"
						style={{ top: "0px" }}
					>
						<div className="container">
							<div className="mobile_menu_left">
								<button type="button" className="navbar-toggler mobile_menu_btn">
									<span className="menu_toggle ">
										<span className="hamburger">
											<span />
											<span />
											<span />
										</span>
									</span>
								</button>
							</div>
						</div>
					</div>
					<div className="click_capture" />
					<div className="side_menu">
						<div className="mobile_menu_header">
							<div className="close_nav">
								<i className="arrow_left" />
								<i className="icon_close" />
							</div>
							<div className="mobile_logo"></div>
						</div>
						<div className="mobile_nav_wrapper">
							<nav className="mobile_nav_top">
								<ul className="navbar-nav menu ml-auto"></ul>
							</nav>
							<div className="mobile_nav_bottom">
								<aside className="doc_left_sidebarlist">
									<div className="scroll mCustomScrollbar _mCS_2">
										<div
											id="mCSB_2"
											className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
											style={{ maxHeight: "450px" }}
											tabIndex={0}
										>
											{/* Hidden NAV */}
											{/* <div
                    id="mCSB_2_container"
                    className="mCSB_container"
                    style={{ position: "relative", top: 0, left: 0 }}
                    dir="ltr"
                  >
                    <ul className="list-unstyled nav-sidebar">
                      <li className="nav-item">
                        <a
                          href="https://football-team-management.spaceart.tech"
                          className="nav-link"
                        >
                          <img
                            src="https://football-team-management.spaceart.tech/img/side-nav/home.png"
                            alt=""
                            className="mCS_img_loaded"
                          />
                          Getting Started
                        </a>
                      </li>
                      
                      <li className="nav-item active">
                        <a href="#" className="nav-link">
                          <img
                            src="https://football-team-management.spaceart.tech/img/side-nav/briefcase.png"
                            alt="briefcase"
                            className="mCS_img_loaded"
                          />
                          API
                        </a>
                        <span className="icon">
                          <i className="arrow_carrot-down" />
                        </span>
                        <ul
                            className="list-unstyled dropdown_nav"
                            style={{ display: "block" }}
                          >
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/studi-kasus">
                              Medicine
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/authentication">
                              Medicine Category
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/perusahaan">
                              Medicine Mutation
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/tim">
                              Medicine Out Detail
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/pemain">
                              Medicine Out Header
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/jadwal-pertandingan">
                              Medicine Prediction
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                                Medicine Request
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/report">
                                Medicine Stock
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                                Medicine Unit
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/report">
                                Patient
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                                RKO (Rencana Kebutuhan Obat)
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/report">
                                Upload
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                                User
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/report">
                                Warehouse
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                                Warehouse Category
                              </a>
                            </li>
                          </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          target="_blank"
                          download
                          rel="noreferrer"
                          href="https://football-team-management.spaceart.tech/Ayo Indonesia - Software Developer Technical Test.postman_collection.json"
                          className="nav-link"
                        >
                          <img
                            src="https://football-team-management.spaceart.tech/img/side-nav/document.png"
                            alt=""
                            className="mCS_img_loaded"
                          />
                          Postman Collection
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          target="_blank"
                          download
                          rel="noreferrer"
                          href="https://github.com/yoviealfaguistuta/backend-football-team-management"
                          className="nav-link"
                        >
                          <img
                            src="https://football-team-management.spaceart.tech/img/side-nav/chat1.png"
                            alt=""
                            className="mCS_img_loaded"
                          />
                          Github
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          target="_blank"
                          download
                          rel="noreferrer"
                          href="http://yoviealfaguistuta.site/"
                          className="nav-link"
                        >
                          <img
                            src="https://football-team-management.spaceart.tech/img/side-nav/coding.png"
                            alt=""
                            className="mCS_img_loaded"
                          />
                          Portofolio
                        </a>
                      </li>
                    </ul>
                  </div> */}
											<div
												id="mCSB_2_scrollbar_vertical"
												className="mCSB_scrollTools mCSB_2_scrollbar mCS-light mCSB_scrollTools_vertical"
												style={{ display: "block" }}
											>
												<div className="mCSB_draggerContainer">
													<div
														id="mCSB_2_dragger_vertical"
														className="mCSB_dragger"
														style={{
															position: "absolute",
															minHeight: "30px",
															height: "448px",
															top: "0px",
															display: "block",
															maxHeight: "440px",
														}}
													>
														<div
															className="mCSB_dragger_bar"
															style={{ lineHeight: "30px" }}
														/>
													</div>
													<div className="mCSB_draggerRail" />
												</div>
											</div>
										</div>
									</div>
								</aside>
							</div>
						</div>
					</div>
					<section className="doc_documentation_area body_fixed" id="sticky_doc">
						<div className="overlay_bg" />
						<div className="container custom_container">
							<div className="row">
								<div className="col-lg-3 doc_mobile_menu display_none">
									<aside className="doc_left_sidebarlist">
										<div className="open_icon" id="left">
											<i className="arrow_carrot-right" />
											<i className="arrow_carrot-left" />
										</div>
										<div className="scroll mCustomScrollbar _mCS_3">
											<div
												id="mCSB_3"
												className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
												style={{ maxHeight: "450px" }}
												tabIndex={0}
											>
												<div
													id="mCSB_3_container"
													className="mCSB_container"
													style={{ position: "relative", top: 0, left: 0 }}
													dir="ltr"
												>
													<ul className="list-unstyled nav-sidebar">
														{/* <li className="nav-item">
                          <a
                            href="https://football-team-management.spaceart.tech"
                            className="nav-link"
                          >
                            <img
                              src="https://football-team-management.spaceart.tech/img/side-nav/home.png"
                              alt=""
                              className="mCS_img_loaded"
                            />
                            Getting Started
                          </a>
                        </li> */}
														<li className="nav-item active">
															<a href="#" className="nav-link">
																<img
																	src="https://football-team-management.spaceart.tech/img/side-nav/briefcase.png"
																	alt="briefcase"
																	className="mCS_img_loaded"
																/>
																API
															</a>
															<span className="icon">
																<i className="arrow_carrot-down" />
															</span>
															<ul
																className="list-unstyled dropdown_nav"
																style={{ display: "block" }}
															>
																<li>
																	<Link className="nav-link active" to="/">
																		Medicine
																	</Link>
																</li>
																<li>
																	<Link to="/mc">Medicine Category</Link>
																</li>
																<li>
																	<Link to="/mm">Medicine Mutation</Link>
																</li>
																<li>
																	<Link to="/mod">Medicine Out Detail</Link>
																</li>
																<li>
																	<Link to="/moh">Medicine Out Header</Link>
																</li>
																<li>
																	<Link to="/mp">Medicine Prediction</Link>
																</li>
																<li>
																	<Link to="/mr">Medicine Request</Link>
																</li>
																<li>
																	<Link to="/ms">Medicine Stock</Link>
																</li>
																<li>
																	<Link to="/mu">Medicine Unit</Link>
																</li>
																<li>
																	<Link to="/p">Patient</Link>
																</li>
																<li>
																	<Link to="/rko">
																		RKO (Rencana Kebutuhan Obat)
																	</Link>
																</li>
																<li>
																	<Link to="/up">Upload</Link>
																</li>
																<li>
																	<Link to="/us">User</Link>
																</li>
																<li>
																	<Link to="/w">Warehouse</Link>
																</li>
																<li>
																	<Link to="/wc">Warehouse Category</Link>
																</li>
															</ul>

															{/* noroute */}
															{/* <ul
                            className="list-unstyled dropdown_nav"
                            style={{ display: "block" }}
                          >
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/studi-kasus">
                              Medicine
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/authentication">
                              Medicine Category
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/perusahaan">
                              Medicine Mutation
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/tim">
                              Medicine Out Detail
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/pemain">
                              Medicine Out Header
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/jadwal-pertandingan">
                              Medicine Prediction
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                                Medicine Request
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/report">
                                Medicine Stock
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                                Medicine Unit
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/report">
                                Patient
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                                RKO (Rencana Kebutuhan Obat)
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/report">
                                Upload
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                                User
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/report">
                                Warehouse
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                                Warehouse Category
                              </a>
                            </li>
                          </ul> */}
														</li>
														{/* <li className="nav-item">
                          <a
                            target="_blank"
                            download
                            rel="noreferrer"
                            href="https://football-team-management.spaceart.tech/Ayo Indonesia - Software Developer Technical Test.postman_collection.json"
                            className="nav-link"
                          >
                            <img
                              src="https://football-team-management.spaceart.tech/img/side-nav/document.png"
                              alt=""
                              className="mCS_img_loaded"
                            />
                            Postman Collection
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            target="_blank"
                            download
                            rel="noreferrer"
                            href="https://github.com/yoviealfaguistuta/backend-football-team-management"
                            className="nav-link"
                          >
                            <img
                              src="https://football-team-management.spaceart.tech/img/side-nav/chat1.png"
                              alt=""
                              className="mCS_img_loaded"
                            />
                            Github
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            target="_blank"
                            download
                            rel="noreferrer"
                            href="http://yoviealfaguistuta.site/"
                            className="nav-link"
                          >
                            <img
                              src="https://football-team-management.spaceart.tech/img/side-nav/coding.png"
                              alt=""
                              className="mCS_img_loaded"
                            />
                            Portofolio
                          </a>
                        </li> */}
													</ul>
												</div>
												<div
													id="mCSB_3_scrollbar_vertical"
													className="mCSB_scrollTools mCSB_3_scrollbar mCS-light mCSB_scrollTools_vertical"
													style={{ display: "block" }}
												>
													<div className="mCSB_draggerContainer">
														<div
															id="mCSB_3_dragger_vertical"
															className="mCSB_dragger"
															style={{
																position: "absolute",
																minHeight: "30px",
																height: "448px",
																top: "0px",
																display: "block",
																maxHeight: "440px",
															}}
														>
															<div
																className="mCSB_dragger_bar"
																style={{ lineHeight: "30px" }}
															/>
														</div>
														<div className="mCSB_draggerRail" />
													</div>
												</div>
											</div>
										</div>
									</aside>{" "}
								</div>
								<Routes>
									<Route exact path="/" element={<Medicine />} />
									<Route exact path="/mc" element={<Medicinecategory />} />
									<Route exact path="/mm" element={<Medicinemutation />} />
									<Route exact path="/mod" element={<Medicineoutdetail />} />
									<Route exact path="/moh" element={<Medicineoutheader />} />
									<Route exact path="/mp" element={<Medicineprediction />} />
									<Route exact path="/mr" element={<Medicinerequest />} />
									<Route exact path="/ms" element={<Medicinestock />} />
									<Route exact path="/mu" element={<Medicineunit />} />
									<Route exact path="/p" element={<Patient />} />
									<Route exact path="/rko" element={<Rko />} />
									<Route exact path="/up" element={<Upload />} />
									<Route exact path="/us" element={<User />} />
									<Route exact path="/w" element={<Warehouse />} />
									<Route exact path="/wc" element={<Warehousecategory />} />
								</Routes>
								<div className="col-lg-2 col-md-4 doc_right_mobile_menu">
									<div className="open_icon" id="right">
										<i className="arrow_carrot-left" />
										<i className="arrow_carrot-right" />
									</div>
									<div className="doc_rightsidebar scroll mCustomScrollbar _mCS_3 _mCS_1">
										<div
											id="mCSB_1"
											className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
											style={{ maxHeight: "none" }}
											tabIndex={0}
										>
											<div
												id="mCSB_1_container"
												className="mCSB_container"
												style={{ position: "relative", top: 0, left: 0 }}
												dir="ltr"
											>
												<div
													id="mCSB_3"
													className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
													tabIndex={0}
													style={{ maxHeight: "none" }}
												>
													<div
														id="mCSB_3_container"
														className="mCSB_container"
														style={{ position: "relative", top: 0, left: 0 }}
														dir="ltr"
													>
														{/* <div
                          id="font-switcher"
                          className="d-flex justify-content-between align-items-center"
                        >
                          <div
                            id="rvfs-controllers"
                            className="fontsize-controllers group"
                          >
                            <div className="btn-group">
                              <a
                                href="#"
                                className="rvfs-decrease btn"
                                title="Decrease font size"
                              >
                                A-
                              </a>
                              <a
                                href="#"
                                className="rvfs-reset btn disabled"
                                title="Default font size"
                              >
                                A
                              </a>
                              <a
                                href="#"
                                className="rvfs-increase btn"
                                title="Increase font size"
                              >
                                A+
                              </a>
                            </div>
                          </div>
                          <a href="javascript:window.print()" className="print">
                            <i className="icon_printer" />
                          </a>
                        </div>
                        <div className="doc_switch">
                          <label
                            htmlFor="something"
                            className="tab-btn tab-btns"
                            style={{ color: "rgb(16, 179, 214)" }}
                          >
                            <i className="icon_lightbulb_alt" />
                          </label>
                          <input
                            type="checkbox"
                            name="something"
                            id="something"
                            className="tab_switcher"
                          />
                          <label htmlFor="something" className="tab-btn">
                            <i className="far fa-moon" />
                          </label>
                        </div> */}
														<h6>Dalam Halaman Ini:</h6>
														<nav
															className="list-unstyled doc_menu"
															id="navbar-example3"
														>
															<a
																href="#api-get-medicine"
																className="nav-link"
															>
																GET Medicine
															</a>
															<a
																href="#api-post-medicine"
																className="nav-link"
															>
																POST Medicine
															</a>
															<a
																href="#api-get-detail-medicine"
																className="nav-link"
															>
																GET Medicine


															</a>
															<a
																href="#api-delete-medicine"
																className="nav-link"
															>
																DELETE Medicine
															</a>
															<a
																href="#api-patch-medicine"
																className="nav-link"
															>
																PATCH Medicine
															</a>
														</nav>
													</div>
													<div
														id="mCSB_3_scrollbar_vertical"
														className="mCSB_scrollTools mCSB_3_scrollbar mCS-light mCSB_scrollTools_vertical"
														style={{ display: "block" }}
													>
														<div className="mCSB_draggerContainer">
															<div
																id="mCSB_3_dragger_vertical"
																className="mCSB_dragger"
																style={{
																	position: "absolute",
																	minHeight: "30px",
																	display: "block",
																	height: "223px",
																	maxHeight: "240px",
																	top: "0px",
																}}
															>
																<div
																	className="mCSB_dragger_bar"
																	style={{ lineHeight: "30px" }}
																/>
															</div>
															<div className="mCSB_draggerRail" />
														</div>
													</div>
												</div>
											</div>
											<div
												id="mCSB_1_scrollbar_vertical"
												className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical"
												style={{ display: "block" }}
											>
												<div className="mCSB_draggerContainer">
													<div
														id="mCSB_1_dragger_vertical"
														className="mCSB_dragger"
														style={{
															position: "absolute",
															minHeight: "30px",
															height: "225px",
															top: "0px",
															display: "block",
															maxHeight: "236px",
														}}
													>
														<div
															className="mCSB_dragger_bar"
															style={{ lineHeight: "30px" }}
														/>
													</div>
													<div className="mCSB_draggerRail" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</Router>
		</div>
	);
}

export default RRD;
