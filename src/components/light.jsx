import React from "react";
import { Link } from 'react-router-dom'

function Doc() {
  return (
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
      {/* <section className="page_breadcrumb">
        <div className="container custom_container">
          <div className="row">
            <div className="col-sm-7">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a style={{ color: "white" }} href="#">
                      Football Team Management
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a style={{ color: "white" }} href="#">
                      API Docs
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-sm-5">
              <a href="#" style={{ color: "white" }} className="date">
                <i className="icon_clock_alt" />
                Diperbarui pada Oktober 2022
              </a>
            </div>
          </div>
        </div>
      </section> */}
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
                              <Link to="/" >
                              Medicine
                              </Link>
                            </li>
                            <li>
                            <Link to="/mc" >
                              Medicine Category
                              </Link>
                            </li>
                            <li>
                            <Link to="/mm" >
                              Medicine Mutation
                              </Link>
                            </li>
                            <li>
                            <Link to="/mod" >
                              Medicine Out Detail
                              </Link>
                            </li>
                            <li>
                            <Link to="/moh" >
                              Medicine Out Header
                              </Link>
                            </li>
                            <li>
                            <Link to="/mp" >
                              Medicine Prediction
                              </Link>
                            </li>
                            <li>
                            <Link to="/mr" >
                                Medicine Request
                                </Link>
                            </li>
                            <li>
                            <Link to="/ms" >
                                Medicine Stock
                                </Link>
                            </li>
                            <li>
                            <Link to="/mu" >
                                Medicine Unit
                                </Link>
                            </li>
                            <li>
                            <Link to="/p" >
                                Patient
                                </Link>
                            </li>
                            <li>
                            <Link to="/rko" >
                                RKO (Rencana Kebutuhan Obat)
                                </Link>
                            </li>
                            <li>
                            <Link to="/up" >
                                Upload
                                </Link>
                            </li>
                            <li>
                            <Link to="/us" >
                                User
                                </Link>
                            </li>
                            <li>
                            <Link to="/w" >
                                Warehouse
                                </Link>
                            </li>
                            <li>
                            <Link to="/wc" >
                                Warehouse Category
                                </Link>
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
            <div className="col-lg-7 col-md-8">
              <div
                id="post"
                className="documentation_info rvfs-4"
                data-rvfs={4}
              >
                

                {/* RKO (Rencana Kebutuhan Obat) */}
                <article className="documentation_body" id="rko">
                  <div className="shortcode_title">
                    <h1>RKO (Rencana Kebutuhan Obat)</h1>
                    <p>
                      Perusahaan berisi Endpoint untuk mengelola tabel
                      "perusahaan". Tabel ini berisi data Perusahaan yang
                      menyelenggarakan sebuah event pertandingan
                    </p>
                  </div>
                </article>
                {/* /rko get */}
                <article className="documentation_body" id="api-get-rko">
                  <h4 className="c_head">
                    RKO List <span className="badge bg-success ml-1">GET</span>
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /rko
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>Htmlasc</span>
                        </div>
                        <div className="toolbar-item">
                          <button>Copy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Showing RKO (Rencana Kebutuhan Obat) Document. This output
                    references to excel from E-Logistik Whatsapp Group.
                  </p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th colspan="2">Parameter</th>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>Page</div>
                          <div>number</div>
                          <div>(query)</div>
                        </td>
                        <td>
                          <div>Page number - Default: 1</div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="page"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>Page</div>
                          <div>integer</div>
                          <div>(query)</div>
                        </td>
                        <td>
                          <div>Average Years Ex: 2022</div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="average_years"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>average_years</div>
                          <div>ineteger</div>
                          <div>(query)</div>
                        </td>
                        <td>
                          <div>Request Years Ex: 2022</div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="request_years"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>request_years</div>
                          <div>integer</div>
                          <div>(query)</div>
                        </td>
                        <td>
                          <div>Prediction Years Ex: 2022</div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="predictopn_years"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Response 200 RKO */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-rko-r200"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - List data of RKO
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-rko-r200"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "average_date_from": "2022-07-29 04:14:10",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "average_date_to": "2022-07-29 04:14:10",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_prediction_years": 2022,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_request_years": 2022,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>"rko": [
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "average_usage": 50,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_name": "Paracetamol",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_prediction": 50,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_request": 50,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_stock_id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "remaining_stok": 200,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>"unit_name":
                              "Botol 250 ml"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>],
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "warehouse_id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "warehouse_name": "Gudang Farmasi RSUD Zainal
                              Abidin"
                              <span className="token lf">{"\n"}</span>
                              {"}"}
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 200 RKO */}
                  {/* Response 422 RKO */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-rko-r422"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-rko-r422"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "nama: Harus diisi, tidak boleh kosong"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 422 RKO */}
                  {/* Response 500 RKO */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-rko-r500"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-rko-r500"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "schema: table is not exists"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border_bottom mt-5" />
                  {/* Response 500 RKO */}
                </article>
                {/* /rko get */}
                {/* RKO (Rencana Kebutuhan Obat) */}

                {/* Upload */}
                <article className="documentation_body" id="upload">
                  <div className="shortcode_title">
                    <h1>Upload</h1>
                    <p>
                      Perusahaan berisi Endpoint untuk mengelola tabel
                      "perusahaan". Tabel ini berisi data Perusahaan yang
                      menyelenggarakan sebuah event pertandingan
                    </p>
                  </div>
                </article>
                {/* /upload post */}
                <article className="documentation_body" id="api-post-upload">
                  <h4 className="c_head">
                    Upload <span className="badge bg-info ml-1">POST</span>
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /upload
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>Htmlasc</span>
                        </div>
                        <div className="toolbar-item">
                          <button>Copy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>Upload image file .jepg .png and jpg</p>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th colspan="2">Parameter</th>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>file</div>
                          <div>file</div>
                          <div>(formData)</div>
                        </td>
                        <td>
                          <div>Prediction Years Ex: 2022</div>
                          <div>
                            <input type="file" className title disabled />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Response 422 -Upload */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-post-upload-r422"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-post-upload-r422"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "nama: Harus diisi, tidak boleh kosong"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 422 Upload */}

                  {/* Response 500 Upload */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-post-upload-r500"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-post-upload-r500"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "schema: table is not exists"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border_bottom mt-5" />
                  {/* Response 500 Upload */}
                </article>
                {/* /upload post */}
                {/* Upload */}

                {/* User */}
                <article className="documentation_body" id="upload">
                  <div className="shortcode_title">
                    <h1>User</h1>
                    <p>
                      Perusahaan berisi Endpoint untuk mengelola tabel
                      "perusahaan". Tabel ini berisi data Perusahaan yang
                      menyelenggarakan sebuah event pertandingan
                    </p>
                  </div>
                </article>
                {/* /user get */}
                <article className="documentation_body" id="api-get-user">
                  <h4 className="c_head">
                    Detail User <span className="badge bg-info ml-1">POST</span>
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /user
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>Htmlasc</span>
                        </div>
                        <div className="toolbar-item">
                          <button>Copy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>This API is used to see detail users data by JWT Token.</p>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th colspan="2">Parameter</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>No Parameters</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Response 200 Detail User */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-user-r200"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - Success Response return True
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-user-r200"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "__typename": "string",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "data": {"{"}
                              {"}"},<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "status": true
                              <span className="token lf">{"\n"}</span>
                              {"}"}
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 200 Detail User */}

                  {/* Response 422 Detail User */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-user-r422"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-user-r422"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "nama: Harus diisi, tidak boleh kosong"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 422 Detail User */}

                  {/* Response 500 Detail User */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-user-r500"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-user-r500"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "schema: table is not exists"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border_bottom mt-5" />
                  {/* Response 500 Detail User */}
                </article>
                {/* /user get */}
                {/* User */}

                {/* Warehouse */}
                <article className="documentation_body" id="warehouse">
                  <div className="shortcode_title">
                    <h1>Warehouse</h1>
                    <p>
                      Perusahaan berisi Endpoint untuk mengelola tabel
                      "perusahaan". Tabel ini berisi data Perusahaan yang
                      menyelenggarakan sebuah event pertandingan
                    </p>
                  </div>
                </article>
                {/* /warehouse get */}
                <article className="documentation_body" id="api-get-warehouse">
                  <h4 className="c_head">
                    List Warehouse{" "}
                    <span className="badge bg-success ml-1">GET</span>
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /warehouse
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>Htmlasc</span>
                        </div>
                        <div className="toolbar-item">
                          <button>Copy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>Showing list of all warehouse.</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th colspan="2">Parameter</th>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>page</div>
                          <div>number</div>
                          <div>(path)</div>
                        </td>
                        <td>
                          <div>Page number</div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="page"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>limit</div>
                          <div>number</div>
                          <div>(query)</div>
                        </td>
                        <td>
                          <div>
                            The amount of data you want to display - Default: 10
                          </div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="limit"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>warehouse_name</div>
                          <div>string</div>
                          <div>(query)</div>
                        </td>
                        <td>
                          <div>Warehouse Name</div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="warehouse_name"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>category_id</div>
                          <div>integer</div>
                          <div>(query)</div>
                        </td>
                        <td>
                          <div>Warehouse Category ID</div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="category_id"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Response 200 Warehouse */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-warehouse-r200"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - Form Body of Warehouse
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-warehouse-r200"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "address": "Jalan Lintas Tengah Sumatera, Negeri
                              Baru Kecamatan Blambangan Umpu, Kabupaten Way
                              Kanan, Lampung, 34764",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "category": {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "background_color": "#FFFFFF",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "description": "Gudang yang digunakan sebagai
                              tempat menyimpan medicine sebelum di pindahkan ke
                              warehouse penjualan",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "name": "Penyimpanan",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "text_color": "#F4F4F4"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"},<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "category_id": 2,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "contact": "0821-7603-8182",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "description": "Gudang yang berada di rumah sakit
                              umum daerah (RSUD) Zainal Abidin Pagar Alam
                              Kabupaten Way Kanan",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "image": "Gambar gudang",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "name": "Gudang Farmasi RSUD Zainal Abidin"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 200  */}
                  {/* Response 422  */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-warehouse-r422"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-warehouse-r422"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "nama: Harus diisi, tidak boleh kosong"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 422 */}
                  {/* Response 500 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-warehouse-r500"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-warehouse-r500"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "schema: table is not exists"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border_bottom mt-5" />
                  {/* Response 500 */}
                </article>
                {/* /warehouse get */}
                {/* /warehouse post */}
                <article className="documentation_body" id="api-post-warehouse">
                  <h4 className="c_head">
                    Create Warehouse{" "}
                    <span className="badge bg-info ml-1">POST</span>
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /warehouse
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>Htmlasc</span>
                        </div>
                        <div className="toolbar-item">
                          <button>Copy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    This API for create warehouse data and will be showed up on
                    Warehouse List, Hit Warehouse Category List API and get its
                    id. After that use the id on your form body request to use
                    this API.
                  </p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th colspan="2">Parameter</th>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>payload</div>
                          <div>object</div>
                          <div>(body)</div>
                        </td>
                        <td>
                          <div>Warehouse payload</div>
                          <div>
                            <pre className=" language-html">
                              <code className=" language-html" data-lang="html">
                                {"{"}
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "address": "Jalan Lintas Tengah Sumatera, Negeri
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                Baru Kecamatan Blambangan Umpu, Kabupaten Way
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                Kanan, Lampung, 34764",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "category_id": 2,
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "contact": "0821-7603-8182",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "description": "Gudang yang digunakan sebagai
                                tempat
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                menyimpan medicine sebelum di pindahkan ke
                                warehouse
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                penjualan",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "image": "Gambar Gudang",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "name": "Gudang Farmasi RSUD Zainal Abidin"
                                <span className="token lf">{"\n"}</span>
                                {"}"}
                              </code>
                            </pre>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Response 200 Warehouse */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-post-warehouse-r200"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - Form Body of Warehouse
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-post-warehouse-r200"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "address": "Jalan Lintas Tengah Sumatera, Negeri
                              Baru Kecamatan Blambangan Umpu, Kabupaten Way
                              Kanan, Lampung, 34764",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "category_id": 2,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "contact": "0821-7603-8182",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "description": "Gudang yang berada di rumah sakit
                              umum daerah (RSUD) Zainal Abidin Pagar Alam
                              Kabupaten Way Kanan",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "image": "Gambar Gudang",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "name": "Gudang Farmasi RSUD Zainal Abidin"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 200 */}
                  {/* Response 422 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-post-warehouse-r422"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-post-warehouse-r422"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "nama: Harus diisi, tidak boleh kosong"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 422 */}
                  {/* Response 500 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-post-warehouse-r500"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-post-warehouse-r500"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "schema: table is not exists"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border_bottom mt-5" />
                  {/* Response 500 */}
                </article>
                {/* /warehouse post */}
                {/* /warehouse get detail */}
                <article
                  className="documentation_body"
                  id="api-get-detail-warehouse"
                >
                  <h4 className="c_head">
                    Detail Warehouse{" "}
                    <span className="badge bg-success ml-1">GET</span>
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /warehouse/{"{"}id{"}"}
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>Htmlasc</span>
                        </div>
                        <div className="toolbar-item">
                          <button>Copy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    This API is used to see detail warehouse data by it's id.
                  </p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th colspan="2">Parameter</th>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>id</div>
                          <div>integer</div>
                          <div>(path)</div>
                        </td>
                        <td>
                          <div>
                            Id of Warehouse, get it from Warehouse List API
                          </div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="id"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Response 200 Warehouse */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-detail-warehouse-r200"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - Success Response return True
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-detail-warehouse-r200"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "__typename": "string",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "data": {"{"}
                              {"}"},<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "status": true
                              <span className="token lf">{"\n"}</span>
                              {"}"}
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 200 */}
                  {/* Response 422 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-detail-warehouse-r422"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-detail-warehouse-r422"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "nama: Harus diisi, tidak boleh kosong"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 422 */}
                  {/* Response 500 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-detail-warehouse-r500"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-detail-warehouse-r500"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "schema: table is not exists"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border_bottom mt-5" />
                  {/* Response 500 */}
                </article>
                {/* /warehouse get detail */}
                {/* /warehouse delete */}
                <article
                  className="documentation_body"
                  id="api-delete-warehouse"
                >
                  <h4 className="c_head">
                    Delete Warehouse{" "}
                    <span className="badge bg-danger ml-1">DELETE</span>
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /warehouse/{"{"}id{"}"}
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>Htmlasc</span>
                        </div>
                        <div className="toolbar-item">
                          <button>Copy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>This API for delete warehouse data by it's id.</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th colspan="2">Parameter</th>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>id</div>
                          <div>integer</div>
                          <div>(path)</div>
                        </td>
                        <td>
                          <div>
                            Id of Warehouse, get it from Warehouse List API
                          </div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="id"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>payload</div>
                          <div>object</div>
                          <div>(body)</div>
                        </td>
                        <td>
                          <div>Warehouse payload</div>
                          <div>
                            <pre className=" language-html">
                              <code className=" language-html" data-lang="html">
                                {"{"}
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "address": "Jalan Lintas Tengah Sumatera, Negeri
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                Baru Kecamatan Blambangan Umpu, Kabupaten Way
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                Kanan, Lampung, 34764",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "category_id": 2,
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "contact": "0821-7603-8182",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "description": "Gudang yang digunakan sebagai
                                tempat
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                menyimpan medicine sebelum di pindahkan ke
                                warehouse
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                penjualan",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "image": "Gambar Gudang",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "name": "Gudang Farmasi RSUD Zainal Abidin"
                                <span className="token lf">{"\n"}</span>
                                {"}"}
                              </code>
                            </pre>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Response 200 Warehouse */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-delete-warehouse-r200"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - Success Response return True
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-delete-warehouse-r200"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "__typename": "string",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "data": {"{"}
                              {"}"},<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "status": true
                              <span className="token lf">{"\n"}</span>
                              {"}"}
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 200 */}
                  {/* Response 422 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-delete-warehouse-r422"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-delete-warehouse-r422"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "nama: Harus diisi, tidak boleh kosong"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 422 */}
                  {/* Response 500 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-delete-warehouse-r500"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-delete-warehouse-r500"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "schema: table is not exists"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border_bottom mt-5" />
                  {/* Response 500 */}
                </article>
                {/* /warehouse delete */}
                {/* /warehouse patch */}
                <article
                  className="documentation_body"
                  id="api-patch-warehouse"
                >
                  <h4 className="c_head">
                    Update Warehouse{" "}
                    <span className="badge bg-focus ml-1">PATCH</span>
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /warehouse/{"{"}id{"}"}
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>Htmlasc</span>
                        </div>
                        <div className="toolbar-item">
                          <button>Copy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    This API for update warehouse data and will be replaced old
                    warehouse information with your new input, You have to get
                    the id of the data you want to change, Hit Warehouse List
                    API to get it.
                  </p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th colspan="2">Parameter</th>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>id</div>
                          <div>integer</div>
                          <div>(path)</div>
                        </td>
                        <td>
                          <div>
                            Id of Warehouse, get it from Warehouse List API to
                            update the information by id
                          </div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="id"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>payload</div>
                          <div>object</div>
                          <div>(path)</div>
                        </td>
                        <td>
                          <div>Warehouse Payload</div>
                          <div>
                            <div>
                              <pre className=" language-html">
                                <code
                                  className=" language-html"
                                  data-lang="html"
                                >
                                  {"{"}
                                  <span className="token lf">{"\n"}</span>
                                  <span className="token space"> </span>
                                  <span className="token space"> </span>
                                  "address": "Jalan Lintas Tengah Sumatera,
                                  Negeri
                                  <span className="token lf">{"\n"}</span>
                                  <span className="token space"> </span>
                                  <span className="token space"> </span>
                                  <span className="token space"> </span>
                                  Baru Kecamatan Blambangan Umpu, Kabupaten Way
                                  <span className="token lf">{"\n"}</span>
                                  <span className="token space"> </span>
                                  <span className="token space"> </span>
                                  <span className="token space"> </span>
                                  Kanan, Lampung, 34764",
                                  <span className="token lf">{"\n"}</span>
                                  <span className="token space"> </span>
                                  <span className="token space"> </span>
                                  "category_id": 2,
                                  <span className="token lf">{"\n"}</span>
                                  <span className="token space"> </span>
                                  <span className="token space"> </span>
                                  "contact": "0821-7603-8182",
                                  <span className="token lf">{"\n"}</span>
                                  <span className="token space"> </span>
                                  <span className="token space"> </span>
                                  "description": "Gudang yang digunakan sebagai
                                  tempat
                                  <span className="token lf">{"\n"}</span>
                                  <span className="token space"> </span>
                                  <span className="token space"> </span>
                                  <span className="token space"> </span>
                                  menyimpan medicine sebelum di pindahkan ke
                                  warehouse
                                  <span className="token lf">{"\n"}</span>
                                  <span className="token space"> </span>
                                  <span className="token space"> </span>
                                  <span className="token space"> </span>
                                  penjualan",
                                  <span className="token lf">{"\n"}</span>
                                  <span className="token space"> </span>
                                  <span className="token space"> </span>
                                  "image": "Gambar Gudang",
                                  <span className="token lf">{"\n"}</span>
                                  <span className="token space"> </span>
                                  <span className="token space"> </span>
                                  "name": "Gudang Farmasi RSUD Zainal Abidin"
                                  <span className="token lf">{"\n"}</span>
                                  {"}"}
                                </code>
                              </pre>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Response 200 Warehouse */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-patch-warehouse-r200"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - Success Response return True
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-patch-warehouse-r200"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "__typename": "string",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "data": {"{"}
                              {"}"},<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "status": true
                              <span className="token lf">{"\n"}</span>
                              {"}"}
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 200 */}
                  {/* Response 422 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-patch-warehouse-r422"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-patch-warehouse-r422"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "nama: Harus diisi, tidak boleh kosong"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 422 */}
                  {/* Response 500 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-patch-warehouse-r500"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-patch-warehouse-r500"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "schema: table is not exists"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border_bottom mt-5" />
                  {/* Response 500 */}
                </article>
                {/* /warehouse patch */}

                {/* Warehouse */}

                {/* Warehouse category */}
                <article className="documentation_body" id="warehouse-category">
                  <div className="shortcode_title">
                    <h1>Warehouse Category</h1>
                    <p>
                      Perusahaan berisi Endpoint untuk mengelola tabel
                      "perusahaan". Tabel ini berisi data Perusahaan yang
                      menyelenggarakan sebuah event pertandingan
                    </p>
                  </div>
                </article>
                {/* /warehouse-category get */}
                <article
                  className="documentation_body"
                  id="api-get-warehouse-category"
                >
                  <h4 className="c_head">
                    List Warehouse Category
                    <span className="badge bg-success ml-1">GET</span>
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /warehouse-category
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>Htmlasc</span>
                        </div>
                        <div className="toolbar-item">
                          <button>Copy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>Showing list of all warehouse category.</p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th colspan="2">Parameter</th>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>page</div>
                          <div>number</div>
                          <div>(path)</div>
                        </td>
                        <td>
                          <div>Page number</div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="page"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>limit</div>
                          <div>number</div>
                          <div>(query)</div>
                        </td>
                        <td>
                          <div>
                            The amount of data you want to display - Default: 10
                          </div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="limit"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>category_name</div>
                          <div>string</div>
                          <div>(query)</div>
                        </td>
                        <td>
                          <div>Warehouse Category Name</div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="category_name"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Response 200  */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-warehouse-category-r200"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - List data of Warehouse Category
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-warehouse-category-r200"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "background_color": "#FFFFFF",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "description": "Gudang yang digunakan sebagai
                              tempat menyimpan medicine sebelum di pindahkan ke
                              warehouse penjualan",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "name": "Penyimpanan",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "text_color": "#F4F4F4"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 200  */}

                  {/* Response 422  */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-warehouse-category-r422"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-warehouse-category-r422"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "nama: Harus diisi, tidak boleh kosong"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 422 */}
                  {/* Response 500 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-get-warehouse-category-r500"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-get-warehouse-category-r500"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "schema: table is not exists"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border_bottom mt-5" />
                  {/* Response 500 */}
                </article>
                {/* /warehouse-category get */}
                {/* /warehouse-category post */}
                <article
                  className="documentation_body"
                  id="api-post-warehouse-category"
                >
                  <h4 className="c_head">
                    Create Warehouse Category
                    <span className="badge bg-info ml-1">POST</span>
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /warehouse-category
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>Htmlasc</span>
                        </div>
                        <div className="toolbar-item">
                          <button>Copy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    This API for create warehouse category data and will be
                    showed up on Warehouse Category List.
                  </p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th colspan="2">Parameter</th>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>payload</div>
                          <div>object</div>
                          <div>(body)</div>
                        </td>
                        <td>
                          <div>Warehouse Category payload</div>
                          <div>
                            <pre className=" language-html">
                              <code className=" language-html" data-lang="html">
                                {"{"}
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "background_color": "#FFFFFF",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "description": "Gudang yang digunakan sebagai
                                tempat
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                menyimpan medicine sebelum di pindahkan ke
                                warehouse
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                penjualan",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "name": "Penyimpanan",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "text_color": "#F4F4F4"
                                <span className="token lf">{"\n"}</span>
                                {"}"}
                              </code>
                            </pre>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Response 200 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-post-warehouse-category-r200"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - Form Body of Warehouse Category
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-post-warehouse-category-r200"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "background_color": "#FFFFFF",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "description": "Gudang yang digunakan sebagai
                              tempat menyimpan medicine sebelum di pindahkan ke
                              warehouse penjualan",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "name": "Penyimpanan",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "text_color": "#F4F4F4"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 200  */}
                  {/* Response 422 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-post-warehouse-category-r422"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-post-warehouse-category-r422"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "nama: Harus diisi, tidak boleh kosong"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 422 */}
                  {/* Response 500 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-post-warehouse-category-r500"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-post-warehouse-category-r500"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "schema: table is not exists"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border_bottom mt-5" />
                  {/* Response 500 */}
                </article>
                {/* /warehouse-category post */}
                {/* /warehouse-category delete */}
                <article
                  className="documentation_body"
                  id="api-delete-warehouse-category"
                >
                  <h4 className="c_head">
                    Delete Warehouse Category{" "}
                    <span className="badge bg-danger ml-1">DELETE</span>
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /warehouse-category/{"{"}id{"}"}
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>Htmlasc</span>
                        </div>
                        <div className="toolbar-item">
                          <button>Copy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    This API for delete warehouse category data. This cant be
                    delete if some medicine is used this unit.
                  </p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th colspan="2">Parameter</th>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>id</div>
                          <div>integer</div>
                          <div>(path)</div>
                        </td>
                        <td>
                          <div>
                            Id of Warehouse Category, get it from Warehouse
                            Category List API to update the information by id
                          </div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="id"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Response 200 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-delete-warehouse-category-r200"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - Success Response return True
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-delete-warehouse-category-r200"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "__typename": "string",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "data": {"{"}
                              {"}"},<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "status": true
                              <span className="token lf">{"\n"}</span>
                              {"}"}
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 200 */}
                  {/* Response 422 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-delete-warehouse-category-r422"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-delete-warehouse-category-r422"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "nama: Harus diisi, tidak boleh kosong"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 422 */}
                  {/* Response 500 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-delete-warehouse-category-r500"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-delete-warehouse-category-r500"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "schema: table is not exists"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border_bottom mt-5" />
                  {/* Response 500 */}
                </article>
                {/* /warehouse-category delete */}
                {/* /warehouse-category patch */}
                <article
                  className="documentation_body"
                  id="api-patch-warehouse-category"
                >
                  <h4 className="c_head">
                    Update Warehouse Category{" "}
                    <span className="badge bg-focus ml-1">PATCH</span>
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /warehouse-category/{"{"}id{"}"}
                        </code>
                      </pre>
                      <div className="toolbar">
                        <div className="toolbar-item">
                          <span>Htmlasc</span>
                        </div>
                        <div className="toolbar-item">
                          <button>Copy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    This API for update warehouse category data and will be
                    replaced old medicine information with your new input, You
                    have to get the id of the data you want to change, Hit
                    Warehouse Category List API to get it.
                  </p>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th colspan="2">Parameter</th>
                      </tr>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>id</div>
                          <div>integer</div>
                          <div>(path)</div>
                        </td>
                        <td>
                          <div>
                            Id of Warehouse Category, get it from Warehouse
                            Category List API to update the information by id
                          </div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="id"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>payload</div>
                          <div>object</div>
                          <div>(path)</div>
                        </td>
                        <td>
                          <div>Warehouse Category Payload</div>
                          <div>
                            <pre className=" language-html">
                              <code className=" language-html" data-lang="html">
                                {"{"}
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "background_color": "#FFFFFF",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "description": "Gudang yang digunakan sebagai
                                tempat
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                menyimpan medicine sebelum di pindahkan ke
                                warehouse
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                penjualan",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "name": "Penyimpanan",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "text_color": "#F4F4F4"
                                <span className="token lf">{"\n"}</span>
                                {"}"}
                              </code>
                            </pre>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Response 200 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-patch-warehouse-category-r200"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - Success Response return True
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-patch-warehouse-category-r200"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "__typename": "string",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "data": {"{"}
                              {"}"},<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "status": true
                              <span className="token lf">{"\n"}</span>
                              {"}"}
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 200 */}
                  {/* Response 422 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-patch-warehouse-category-r422"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-patch-warehouse-category-r422"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "nama: Harus diisi, tidak boleh kosong"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Response 422 */}
                  {/* Response 500 */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-patch-warehouse-category-r500"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-patch-warehouse-category-r500"
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message": "schema: table is not exists"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>]
                            </code>
                          </pre>
                          <div className="toolbar">
                            <div className="toolbar-item">
                              <span>HTML</span>
                            </div>
                            <div className="toolbar-item">
                              <button>Copy</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border_bottom mt-5" />
                  {/* Response 500 */}
                </article>
                {/* /warehouse-category patch */}

                {/* Warehouse category */}
              </div>
            </div>
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
                          <a href="#api-get-warehouse-category" className="nav-link">
                          List Warehouse Category
                          </a>
                          <a href="#api-post-warehouse-category" className="nav-link active">
                          Create Warehouse Category
                          </a>
                          <a href="#api-delete-warehouse-category" className="nav-link">
                          Delete Warehouse Category
                          </a>
                          <a href="#api-patch-warehouse-category" className="nav-link">
                          Update Warehouse Category
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
  );
}

export default Doc;
