import React from "react";
import { Link } from "react-router-dom";

function Medicineunit() {
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
                              <Link to="/">Medicine</Link>
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
                              <Link className="nav-link active" to="/mu">Medicine Unit</Link>
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
            <div className="col-lg-7 col-md-8">
              <div
                id="post"
                className="documentation_info rvfs-4"
                data-rvfs={4}
              >
                <article className="documentation_body" id="Medicine-unit">
                  <div className="shortcode_title">
                    <h1>Medicine Unit</h1>
                    <p>
                      Obat adalah bahan atau paduan bahan, termasuk produk
                      biologi yang digunakan untuk mempengaruhi atau menyelidiki
                      sistem fisiologi atau keadaan patologi dalam rangka
                      penetapan diagnosis, pencegahan, penyembuhan, pemulihan,
                      peningkatan kesehatan dan kontrasepsi, untuk manusia
                    </p>
                  </div>
                  <div className="border_bottom" />
                </article>
                <article
                  className="documentation_body"
                  id="api-get-medicine-unit"
                >
                  <h4 className="c_head">
                    <span className="badge bg-info ml-1">GET</span>
                    /medicine-unit
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /medicine-unit
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
                  <p>Showing list of all medicine unit.</p>

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
                          <div>
                            {"{"}path{"}"}
                          </div>
                        </td>
                        <td>
                          <div>Page number</div>
                          <div>
                            <div>
                              <input
                                type="text"
                                className
                                title
                                placeholder="page"
                                disabled
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>limit</div>
                          <div>number</div>
                          <div>
                            {"{"}query{"}"}
                          </div>
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
                          <div>
                            {"{"}query{"}"}
                          </div>
                        </td>
                        <td>
                          <div>Medicine Unit Name</div>
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

                  <a
                    className="toggle_btn collapsed"
                    data-toggle="collapse"
                    href="#unit"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 OK
                  </a>
                  <div className="multi-collapse collapse" id="unit" style={{}}>
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "__typename": "ListMedicineUnit",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "data": [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "name": "Unit",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "description": "Unit adalah kumpulan dari beberapa
                              pcs barang / spare part.",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "background_color": "",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "text_color": ""
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "id": 2,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "name": "PCS",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "description": "PCS dapat dikatakan sama dengan 1
                              buah barang.",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "background_color": "",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "text_color": ""
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "id": 3,
                              <span className="token lf">{"\n"}</span>
                              "name": "Botol",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "description": "Botol merupakan satuan tidak baku
                              besaran volume yang digunakan untuk mengukur besar
                              atau banyaknya volume benda yang terisi atau
                              terdapat pada satu botol",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "background_color": "",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "text_color": ""
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "status": true,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "meta": {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "total": 4,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "current_page": 1
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "updated_at": "2012-04-23T18:25:43.511Z"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
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
                  {/* Response 422 medicine stock */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#unit1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="unit1">
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
                  {/* Response 422 medicine stock */}

                  {/* Response 500 medicine stock  */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#unit3"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="unit3">
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
                  {/* Response 500 medicine stock  */}
                  {/* Response medicine stock */}
                  <div className="border_bottom mt-5" />
                </article>
                <article
                  className="documentation_body"
                  id="api-post-medicine-unit"
                >
                  <h4 className="c_head">
                    <span className="badge bg-success ml-1">POST</span>
                    /medicine-unit
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /medicine-stock
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
                    This API for create medicine unit data and will be showed up
                    on Medicine Unit List.
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
                          <div>
                            {"{"}body{"}"}
                          </div>
                        </td>
                        <td>
                          <div>Medicine Unit Unit payload</div>
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
                                "description": "PCS dapat dikatakan sama dengan
                                1 buah
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                barang.",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "name": "PCS",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "text_color": "#F4F4F4"
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                {"{"}
                              </code>
                            </pre>
                          </div>
                        </td>
                      </tr>
                      <tr></tr>
                    </tbody>
                  </table>
                  <a
                    className="toggle_btn collapsed"
                    data-toggle="collapse"
                    href="#Punit"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 OK
                  </a>
                  <div
                    className="multi-collapse collapse"
                    id="Punit"
                    style={{}}
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
                              "background_color": "#FFFFFF",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "description": "PCS dapat dikatakan sama dengan 1
                              buah barang.",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "name": "PCS",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "text_color": "#F4F4F4"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
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
                  {/* Response 422 medicine stock */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#punt"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="punt">
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
                  {/* Response 422 medicine stock */}

                  {/* Response 500 medicine stock  */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#punt1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="punt1">
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
                  {/* Response 500 medicine stock  */}
                  {/* Response medicine stock */}
                </article>

                <article
                  className="documentation_body"
                  id="api-delete-medicine-unit"
                >
                  <h4 className="c_head">
                    <span className="badge bg-danger ml-1">DELETE</span>
                    /medicine-unit/(id)
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /medicine-unit
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
                    This API for delete medicine unit data. This cant be delete
                    if some medicine is used this unit.
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
                          <div>
                            {"{"}path{"}"}
                          </div>
                        </td>
                        <td>
                          <div>
                            Id of Medicine Unit, get it from Medicine Unit List
                            API to update the information by id
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
                      <tr></tr>
                    </tbody>
                  </table>
                  <a
                    className="toggle_btn collapsed"
                    data-toggle="collapse"
                    href="#dPunit"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 OK
                  </a>
                  <div
                    className="multi-collapse collapse"
                    id="dPunit"
                    style={{}}
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
                              "data": {"{}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "status": true
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
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
                  {/* Response 422 medicine stock */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#Dpunt"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="Dpunt">
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
                  {/* Response 422 medicine stock */}

                  {/* Response 500 medicine stock  */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#Dpunt1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="Dpunt1">
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
                  {/* Response 500 medicine stock  */}
                  {/* Response medicine stock */}
                </article>

                <article
                  className="documentation_body"
                  id="api-patch-medicine-unit"
                >
                  <h4 className="c_head">
                    <span className="badge bg-success ml-1">PATCH</span>
                    /medicine-unit/(id)
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /medicine-unit
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
                    This API for update medicine unit data and will be replaced
                    old medicine unit information with your new input, You have
                    to get the id of the data you want to change, Hit Medicine
                    Unit List API to get it.
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
                          <div>
                            {"{"}path{"}"}
                          </div>
                        </td>
                        <td>
                          <div>
                            Id of Medicine Unit, get it from Medicine Unit List
                            API to update the information by id
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
                        <div>payload</div>
                        <div>object</div>
                        <div>
                          {"{"}body{"}"}
                        </div>
                        <td>
                          <div>Medicine Unit Payload</div>
                          <div>
                            {" "}
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
                                "description": "PCS dapat dikatakan sama dengan
                                1 buah
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                barang.",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "name": "PCS",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "text_color": "#F4F4F4"
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                {"}"}
                              </code>
                            </pre>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <a
                    className="toggle_btn collapsed"
                    data-toggle="collapse"
                    href="#PPunit"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 OK
                  </a>
                  <div
                    className="multi-collapse collapse"
                    id="PPunit"
                    style={{}}
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
                              "data": {"{}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "status": true
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
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
                  {/* Response 422 medicine stock */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#Ppunt1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="Ppunt1">
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
                  {/* Response 422 medicine stock */}

                  {/* Response 500 medicine stock  */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#Ppunt2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="Ppunt2">
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
                  {/* Response 500 medicine stock  */}
                  {/* Response medicine stock */}
                </article>
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
                          <a
                            href="#api-get-warehouse-category"
                            className="nav-link"
                          >
                            List Warehouse Category
                          </a>
                          <a
                            href="#api-post-warehouse-category"
                            className="nav-link active"
                          >
                            Create Warehouse Category
                          </a>
                          <a
                            href="#api-delete-warehouse-category"
                            className="nav-link"
                          >
                            Delete Warehouse Category
                          </a>
                          <a
                            href="#api-patch-warehouse-category"
                            className="nav-link"
                          >
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

export default Medicineunit;