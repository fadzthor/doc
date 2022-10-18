import React from "react";
import { Link } from "react-router-dom";

function Medicineoutdetail() {
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
                              <Link className="nav-link active" to="/mod">
                                Medicine Out Detail
                              </Link>
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
            <div className="col-lg-7 col-md-8">
              <div
                id="post"
                className="documentation_info rvfs-4"
                data-rvfs={4}
              >
                <article
                  className="documentation_body"
                  id="post-medicine-out-detail"
                >
                  <div className="shortcode_title">
                    <h1>Medicine Out Detail </h1>
                    <p>
                      Medicine Out Detail API ini digunakan untuk membuat detail
                      obat. Dan Ini akan mentransfer obat ke pasien melalui
                      gudang. API ini terhubung dengan stok obat{" "}
                    </p>
                    
                  </div>
                  <div className="border_bottom" />
                </article>
                <article
                  className="documentation_body"
                  id="api-post-medicine-out-detail"
                >
                  <h4 className="c_head">
                    <span className="badge bg-info ml-1">POST</span>/ Medicine -
                    out - detail{" "}
                  </h4>
                  <div className="highlight">
                    <p>
                      Menambahkan data Obat ke dalam tabel Medicine Out Detail
                    </p>
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          http://103.228.245.122:3033/medicine-out-detail
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
                    <div className="opblock-section">
                      <div className="opblock-section-header">
                        <div className="tab-header">
                          <h4 className="opblock-title">Parameters</h4>
                          <p>&nbsp;</p>
                        </div>
                      </div>
                      <div className="parameters-container">
                        <div className="table-container">
                          <table
                            className="parameters"
                            style={{ width: 490 }}
                            border="1px"
                          >
                            <thead>
                              <tr>
                                <th
                                  className="col_header parameters-col_name"
                                  style={{ width: "71.7031px" }}
                                >
                                  Name
                                </th>
                                <th
                                  className="col_header parameters-col_description"
                                  style={{ width: "402.297px" }}
                                >
                                  Description
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                data-param-name="payload"
                                data-param-in="body"
                              >
                                <td
                                  className="parameters-col_name"
                                  style={{ width: "71.7031px" }}
                                >
                                  <div className="parameter__name required">
                                    {/* react-text: 1443 */}payload
                                    {/* /react-text */}&nbsp;*
                                  </div>
                                  <div className="parameter__type">
                                    {/* react-text: 1446 */}object
                                    {/* /react-text */}
                                  </div>
                                  <div className="parameter__deprecated">
                                    &nbsp;
                                  </div>
                                  <div className="parameter__in">
                                    {/* react-text: 1449 */}({/* /react-text */}
                                    {/* react-text: 1450 */}body
                                    {/* /react-text */}
                                    {/* react-text: 1451 */}){/* /react-text */}
                                  </div>
                                </td>
                                <td
                                  className="parameters-col_description"
                                  style={{ width: "402.297px" }}
                                >
                                  <div className="markdown">
                                    <p>Medicine Out payload</p>
                                  </div>
                                  <div className="model-example">
                                    <ul className="tab">
                                      <li className="tabitem active">
                                        <a
                                          className="tablinks"
                                          data-name="example"
                                        >
                                          Example Value
                                        </a>
                                      </li>
                                      <li className="tabitem">
                                        <a
                                          className="tablinks"
                                          data-name="model"
                                        >
                                          Model
                                        </a>
                                      </li>
                                    </ul>
                                    <div>
                                      <div
                                        className="body-param"
                                        data-param-name="payload"
                                        data-param-in="body"
                                      >
                                        <div className="highlight-code">
                                          <pre
                                            className="body-param__example microlight"
                                            style={{
                                              display: "block",
                                              overflowX: "auto",
                                              padding: "0.5em",
                                              background: "#333333",
                                              color: "white",
                                            }}
                                          >
                                            <code
                                              className="language-json"
                                              style={{ whiteSpace: "pre" }}
                                            >
                                              {/* react-text: 1601 */}
                                              {"{"}
                                              {"\n"}
                                              {/* /react-text */}
                                              {/* react-text: 1603 */}
                                              {"  "}
                                              {/* /react-text */}
                                              <span className="hljs-attr">
                                                {/* react-text: 1605 */}"amount"
                                                {/* /react-text */}
                                              </span>
                                              {/* react-text: 1607 */}:{" "}
                                              {/* /react-text */}
                                              <span
                                                style={{ color: "#d36363" }}
                                              >
                                                {/* react-text: 1609 */}200
                                                {/* /react-text */}
                                              </span>
                                              {/* react-text: 1611 */},{"\n"}
                                              {/* /react-text */}
                                              {/* react-text: 1613 */}
                                              {"  "}
                                              {/* /react-text */}
                                              <span className="hljs-attr">
                                                {/* react-text: 1615 */}
                                                "medicine_id"
                                                {/* /react-text */}
                                              </span>
                                              {/* react-text: 1617 */}:{" "}
                                              {/* /react-text */}
                                              <span
                                                style={{ color: "#d36363" }}
                                              >
                                                {/* react-text: 1619 */}1
                                                {/* /react-text */}
                                              </span>
                                              {/* react-text: 1621 */},{"\n"}
                                              {/* /react-text */}
                                              {/* react-text: 1623 */}
                                              {"  "}
                                              {/* /react-text */}
                                              <span className="hljs-attr">
                                                {/* react-text: 1625 */}
                                                "medicine_out_header_id"
                                                {/* /react-text */}
                                              </span>
                                              {/* react-text: 1627 */}:{" "}
                                              {/* /react-text */}
                                              <span
                                                style={{ color: "#d36363" }}
                                              >
                                                {/* react-text: 1629 */}1
                                                {/* /react-text */}
                                              </span>
                                              {/* react-text: 1631 */}
                                              {"\n"}
                                              {/* /react-text */}
                                              {/* react-text: 1632 */}
                                              {"}"}
                                              {"\n"}
                                              {/* /react-text */}
                                            </code>
                                          </pre>
                                        </div>
                                        <div className="body-param-options">
                                          <label htmlFor="">
                                            <label htmlFor="">
                                              Parameter content type
                                            </label>
                                          </label>
                                          <div className="content-type-wrapper body-param-content-type">
                                            <select
                                              className="content-type"
                                              aria-label="Parameter content type"
                                            >
                                              <option value="application/json">
                                                application/json
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#xcChsXY6Ni"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 form of Medicine Out Detail{" "}
                  </a>
                  <div className="collapse multi-collapse" id="xcChsXY6Ni">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"["}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>"amount":
                              <span className="token space"></span>200,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              "medicine_id":
                              <span className="token space"> </span>1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              "medicine_out_header_id":
                              <span className="token space"></span>1
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              {"}"}
                              <span className="token space"></span>
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>]
                              <span className="token lf">{"\n"}</span>
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

                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#myrsya22"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 Data Validation Failed
                  </a>
                  <div className="collapse multi-collapse" id="myrsya22">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span> "Message"
                              <span className="token space"></span> "nama: Harus
                              diisi, tidak boleh kosong"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>]
                              <span className="token lf">{"\n"}</span>
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

                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#nypyt22"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 server error
                  </a>
                  <div className="collapse multi-collapse" id="nypyt22">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span> "Message"
                              <span className="token space"></span> "schema:
                              table is not exists"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>]
                              <span className="token lf">{"\n"}</span>
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
                </article>

                <article
                  className="documentation_body"
                  id="api-delete-medicine-out-detail"
                >
                  <h4 className="c_head">
                    <span className="badge bg-danger ml-1">DELETE</span> /
                    medicine - out - detail/{"{"} id {"}"}
                  </h4>
                  <div className="highlight">
                    <p>
                      API ini untuk menghapus detail obat berdasarkan id-nya.
                      Stok obat akan kembali ke gudang saat data ini dihapus.
                    </p>
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          http://103.228.245.122:3033/medicine-out-detail{"{"}
                          id_medicine_out_detail{"}"}
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

                  <table
                    className="parameters"
                    style={{
                      height: 179,
                      width: 413,
                      borderStyle: "solid",
                      borderColor: "#dddddd",
                    }}
                    border={1}
                  >
                    <thead>
                      <tr style={{ height: 18 }}>
                        <th
                          className="col_header parameters-col_name"
                          style={{ width: "89.2188px", height: 18 }}
                        >
                          Name
                        </th>
                        <th
                          className="col_header parameters-col_description"
                          style={{ width: "307.781px", height: 18 }}
                        >
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        style={{ height: 161 }}
                        data-param-name="id"
                        data-param-in="path"
                      >
                        <td
                          className="parameters-col_name"
                          style={{ width: "89.2188px", height: 161 }}
                        >
                          <div className="parameter__name required">
                            id&nbsp;*
                          </div>
                          <div className="parameter__type">integer</div>
                          <div className="parameter__deprecated">&nbsp;</div>
                          <div className="parameter__in">(path)</div>
                        </td>
                        <td
                          className="parameters-col_description"
                          style={{ width: "307.781px", height: 161 }}
                        >
                          <div className="markdown">
                            <p>
                              Id of Medicine Out Detail, get it from Medicine
                              Out Header List API to delete the information by
                              id
                            </p>
                          </div>
                          <input
                            className=""
                            title=""
                            type="text"
                            defaultValue={1}
                            placeholder="id"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a
                    className="toggle_btn collapsed"
                    data-toggle="collapse"
                    href="#HNHqtY5fBq"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 Success Response return True
                  </a>
                  <div
                    className="multi-collapse collapse"
                    id="HNHqtY5fBq"
                    style={{}}
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              "__typename":<span className="token space"></span>
                              "string",<span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>"data":
                              <span className="token space"></span>
                              {"{}"},<span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>"status":
                              <span className="token space"></span>"true"
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

                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#myrsya23"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 Data Validation Failed
                  </a>
                  <div className="collapse multi-collapse" id="myrsya23">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span> "Message"
                              <span className="token space"></span> "nama: Harus
                              diisi, tidak boleh kosong"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>]
                              <span className="token lf">{"\n"}</span>
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
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#nypyt23"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 server error
                  </a>
                  <div className="collapse multi-collapse" id="nypyt23">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span> "Message"
                              <span className="token space"></span> "schema:
                              table is not exists"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>]
                              <span className="token lf">{"\n"}</span>
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
                            href="#post-medicine-out-detail"
                            className="nav-link"
                          >
                            Post Medicine Out Detail 
                          </a>
                          <a
                            href="#api-delete-medicine-out-detail"
                            className="nav-link"
                          >
                            Delete Medicine Out Detail
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

export default Medicineoutdetail;
