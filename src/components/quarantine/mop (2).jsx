const Mop = () => {
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
                  <div
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
                              Studi Kasus
                            </a>
                          </li>
                          <li>
                            <a href="https://football-team-management.spaceart.tech/api-docs/authentication">
                              User
                            </a>
                          </li>
                          <li>
                            <a href="https://football-team-management.spaceart.tech/api-docs/perusahaan">
                              Medicine
                            </a>
                          </li>
                          <li>
                            <a href="https://football-team-management.spaceart.tech/api-docs/tim">
                              Medicine Category
                            </a>
                          </li>
                          <li>
                            <a href="">Medicine Out detail</a>
                          </li>
                          <li>
                            <a href="https://football-team-management.spaceart.tech/api-docs/jadwal-pertandingan">
                              Medicine out Header
                            </a>
                          </li>
                          <li>
                            <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                              Medicine prediction
                            </a>
                          </li>
                          <li>
                            <a href="https://football-team-management.spaceart.tech/api-docs/report">
                              Medicine Request
                            </a>
                          </li>
                          <li>
                            <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                              Medicine Unit{" "}
                            </a>
                          </li>
                          <li>
                            <a href="https://football-team-management.spaceart.tech/api-docs/report">
                              Rencana Kebutuhan obat (RKO){" "}
                            </a>
                          </li>
                          <li>
                            <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                              Warehouse
                            </a>
                          </li>
                          <li>
                            <a href="https://football-team-management.spaceart.tech/api-docs/report">
                              Warehouse Category{" "}
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
                  </div>
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
      <section className="page_breadcrumb">
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
                Diperbarui pada 05 Agustus 2022
              </a>
            </div>
          </div>
        </div>
      </section>
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
                                Studi Kasus
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/authentication">
                                User
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/perusahaan">
                                Medicine
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/tim">
                                Medicine Category
                              </a>
                            </li>
                            <li>
                              <a href="">Medicine Out detail</a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/jadwal-pertandingan">
                                Medicine out Header
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                                Medicine prediction
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/report">
                                Medicine Request
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                                Medicine Unit{" "}
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/report">
                                Rencana Kebutuhan obat (RKO){" "}
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">
                                Warehouse
                              </a>
                            </li>
                            <li>
                              <a href="https://football-team-management.spaceart.tech/api-docs/report">
                                Warehouse Category{" "}
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
                <article className="documentation_body" id="documentation">
                  <div className="shortcode_title">
                    <h1>Medicine Prediction</h1>
                    <p>
                    Menampilkan daftar semua prediksi obat berdasarkan tahun.
                    </p>
                  </div>
                  <div className="border_bottom" />
                </article>
                <article className="documentation_body" id="list">
                  <h4 className="c_head">
                    <span className="badge bg-success ml-1">GET</span>/ Medicine
                    -prediction
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                        http://103.228.245.122:3033/medicine-prediction
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
                  <p>Menampilkan daftar prediksi obat berdasakan tahun </p>
                  <div className="opblock-section">
  <div className="opblock-section-header">
    <div className="tab-header">
      <h4 className="opblock-title">Parameters</h4>
    </div>
  </div>
  <div className="parameters-container">
    <div className="table-container">
      <table className="parameters">
        <thead>
          <tr>
            <th className="col_header parameters-col_name">Name</th>
            <th className="col_header parameters-col_description">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr data-param-name="page" data-param-in="query">
            <td className="parameters-col_name">
              <div className="parameter__name">
                {/* react-text: 4844 */}page{/* /react-text */}
              </div>
              <div className="parameter__type">
                {/* react-text: 4846 */}number{/* /react-text */}
              </div>
              <div className="parameter__deprecated">&nbsp;</div>
              <div className="parameter__in">
                {/* react-text: 4849 */}({/* /react-text */}
                {/* react-text: 4850 */}query{/* /react-text */}
                {/* react-text: 4851 */}){/* /react-text */}
              </div>
            </td>
            <td className="parameters-col_description">
              <div className="markdown">
                <p>Page number - Default: 1</p>
              </div>
              <input
                className=""
                title=""
                type="text"
                defaultValue=""
                placeholder="page"
              />
            </td>
          </tr>
          <tr data-param-name="limit" data-param-in="query">
            <td className="parameters-col_name">
              <div className="parameter__name">
                {/* react-text: 4858 */}limit{/* /react-text */}
              </div>
              <div className="parameter__type">
                {/* react-text: 4860 */}number{/* /react-text */}
              </div>
              <div className="parameter__deprecated">&nbsp;</div>
              <div className="parameter__in">
                {/* react-text: 4863 */}({/* /react-text */}
                {/* react-text: 4864 */}query{/* /react-text */}
                {/* react-text: 4865 */}){/* /react-text */}
              </div>
            </td>
            <td className="parameters-col_description">
              <div className="markdown">
                <p>The amount of data you want to display - Default: 10</p>
              </div>
              <input
                className=""
                title=""
                type="text"
                defaultValue=""
                placeholder="limit"
              />
            </td>
          </tr>
          <tr data-param-name="years" data-param-in="query">
            <td className="parameters-col_name">
              <div className="parameter__name">
                {/* react-text: 4872 */}years{/* /react-text */}
              </div>
              <div className="parameter__type">
                {/* react-text: 4874 */}integer{/* /react-text */}
              </div>
              <div className="parameter__deprecated">&nbsp;</div>
              <div className="parameter__in">
                {/* react-text: 4877 */}({/* /react-text */}
                {/* react-text: 4878 */}query{/* /react-text */}
                {/* react-text: 4879 */}){/* /react-text */}
              </div>
            </td>
            <td className="parameters-col_description">
              <div className="markdown">
                <p>Medicine Prediction Years</p>
              </div>
              <input
                className=""
                title=""
                type="text"
                defaultValue=""
                placeholder="years"
              />
            </td>
          </tr>
          <tr data-param-name="medicine_id" data-param-in="query">
            <td className="parameters-col_name">
              <div className="parameter__name">
                {/* react-text: 4886 */}medicine_id{/* /react-text */}
              </div>
              <div className="parameter__type">
                {/* react-text: 4888 */}integer{/* /react-text */}
              </div>
              <div className="parameter__deprecated">&nbsp;</div>
              <div className="parameter__in">
                {/* react-text: 4891 */}({/* /react-text */}
                {/* react-text: 4892 */}query{/* /react-text */}
                {/* react-text: 4893 */}){/* /react-text */}
              </div>
            </td>
            <td className="parameters-col_description">
              <div className="markdown">
                <p>Medicine ID</p>
              </div>
              <input
                className=""
                title=""
                type="text"
                defaultValue=""
                placeholder="medicine_id"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#lVhxosIk2Q"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    	Response 200 	List data of Medicine Prediction
                  </a>
                  <div className="collapse multi-collapse" id="lVhxosIk2Q">
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
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>"amount":
                              <span className="token space"> </span>224,

                              <span className="token lf">{"\n"}</span>
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
                              <span className="token space"></span>"created_at":
                              <span className="token space"></span>
                              "2012-04-23T18:25:43.511Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>"created_by":
                              <span className="token space"></span>1,
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
                              <span className="token space"></span>"id":
                              <span className="token space"></span>1,
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
                              <span className="token space"></span>"medicine_id":
                              <span className="token space"></span>1,
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
                              <span className="token space"></span>"medicine_name":
                              <span className="token space"></span>"Paracetamol"
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token space"></span>"medicine_stock":
                              <span className="token space"></span>1,
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
                              <span className="token space"></span>"medicine_stock_id":
                              <span className="token space"></span>1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
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
                              <span className="token space"></span>"update_at":
                              <span className="token space"></span>"2012-04-23T18:25:45:43.511Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              "years"
                              <span className="token space"></span>2022
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
                              <span className="token space"></span>
                              
                              <span className="token space"></span>
                             {"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
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
                    href="#myrnyat1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    	Response 422 Data Validation Failed
                  </a>
                  <div className="collapse multi-collapse" id="myrnyat1">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              
                           
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token space"></span> "nama: Harus diisi, tidak boleh kosong"
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
                              <span className="token space"></span>{"}"}
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
                    href="#myrna2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    	Response 500 server error 
                  </a>
                  <div className="collapse multi-collapse" id="myrna2">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              
                           
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token space"></span> "schema: table is not exists"
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
                              <span className="token space"></span>{"}"}
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
                  </article>
                  <div className="border_bottom mt-5" />
               
                <article className="documentation_body" id="create">
                  <h4 className="c_head">
                   <span className="badge bg-info ml-1">POST</span>
                  / medicine-prediction
                  </h4>
                  <div className="highlight">
                    <p> API ini digunakan untuk membuat prediksi obat.<br></br>
                       Data ini diperlukan untuk Dokumen RKO (Rencana Kebutuhan Obat). <br></br>
                      Ini akan memprediksi sisa stok obat di gudang pada tahun tertentu.</p>
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                        http://103.228.245.122:3033/medicine-prediction
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
                  <p>membuat data prediksi obat </p>
              

                  <div className="opblock-section">
  <div className="opblock-section-header">
    <div className="tab-header">
      <h4 className="opblock-title">Parameters</h4>
    </div>
    <div className="try-out">&nbsp;</div>
  </div>
  <div className="parameters-container">
    <div className="table-container">
      <table className="parameters">
        <thead>
          <tr>
            <th className="col_header parameters-col_name">Name</th>
            <th className="col_header parameters-col_description">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr data-param-name="payload" data-param-in="body">
            <td className="parameters-col_name">
              <div className="parameter__name required">
                {/* react-text: 5135 */}payload{/* /react-text */}&nbsp;*
              </div>
              <div className="parameter__type">
                {/* react-text: 5138 */}object{/* /react-text */}
              </div>
              <div className="parameter__deprecated">&nbsp;</div>
              <div className="parameter__in">
                {/* react-text: 5141 */}({/* /react-text */}
                {/* react-text: 5142 */}body{/* /react-text */}
                {/* react-text: 5143 */}){/* /react-text */}
              </div>
            </td>
            <td className="parameters-col_description">
              <div className="markdown">
                <p>Medicine Prediction payload</p>
              </div>
              <div className="model-example">
                <ul className="tab">
                  <li className="tabitem active">
                    <a className="tablinks" data-name="example">
                      Edit Value
                    </a>
                  </li>
                  <li className="tabitem">
                    <a className="tablinks inactive" data-name="model">
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
                    <textarea
                      className="body-param__text"
                      style={{ width: 324, height: 143 }}
                      defaultValue={
                        '{\n  "amount": 224,\n  "medicine_stock_id": 1,\n  "years": 2022\n}'
                      }
                    />
                    <div className="body-param-options">
                      <label htmlFor="">
                        <label htmlFor="">Parameter content type</label>
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
                 
 
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#xcChsXY6Ni"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 Form Body of Medicine Prediction
                  </a>
                  <div className="collapse multi-collapse" id="xcChsXY6Ni">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"["}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>"amount":  
                              <span className="token space"> </span>224,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_id":
                              <span className="token space"> </span>
                              "1",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "years":
                              <span className="token space"> </span>
                              2022
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>{"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>]
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
                    href="#myrsya12"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    	Response 422 Data Validation Failed
                  </a>
                  <div className="collapse multi-collapse" id="myrsya12">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              
                           
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token space"></span> "nama: Harus diisi, tidak boleh kosong"
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
                              <span className="token space"></span>{"}"}
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
                    href="#nypyt12"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    	Response 500 server error 
                  </a>
                  <div className="collapse multi-collapse" id="nypyt12">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              
                           
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token space"></span> "schema: table is not exists"
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
                              <span className="token space"></span>{"}"}
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
               
             
                <article className="documentation_body" id="delete">
                  <h4 className="c_head">
                    <span className="badge bg-danger ml-1">DELETE</span>/medicine-prediction {"{"} id{"}"}
                  </h4>
                  <div className="highlight">
                    <p>API ini untuk menghapus data prediksi obat berdasarkan idnya.</p>
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                      
                        http://103.228.245.122:3033/medicine-prediction/1
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
                  menghapus data obat dengan id dan obat akan kembali ke gudang saat data di hapus
                  </p>
                  <h4 className="c_head">parameter</h4>
                  <table
  className="parameters"
  style={{
    height: 179,
    width: 413,
    borderStyle: "solid",
    borderColor: "#dddddd"
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
    <tr style={{ height: 161 }} data-param-name="id" data-param-in="path">
      <td
        className="parameters-col_name"
        style={{ width: "89.2188px", height: 161 }}
      >
        <div className="parameter__name required">id&nbsp;*</div>
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
            Id of Medicine prediction, get it from Medicine prediction List API
            to delete the information by id
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
                    Response 200 Success return true 
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
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>"__typename":
                              <span className="token space"> </span>"string",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>"data":
                              <span className="token space"> </span>{"{}"},
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>"status":
                              <span className="token space"> </span>
                              "true"
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
                    href="#myrsya21"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    	Response 422 Data Validation Failed
                  </a>
                  <div className="collapse multi-collapse" id="myrsya21">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              
                           
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token space"></span> "nama: Harus diisi, tidak boleh kosong"
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
                              <span className="token space"></span>{"}"}
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
                    href="#nypyt21"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    	Response 500 server error 
                  </a>
                  <div className="collapse multi-collapse" id="nypyt21">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              
                           
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token space"></span> "schema: table is not exists"
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
                              <span className="token space"></span>{"}"}
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
                        <div
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
                        </div>
                        <h6>Dalam Halaman Ini:</h6>
                        <nav
                          className="list-unstyled doc_menu"
                          id="navbar-example3"
                        >
                          <a href="#list" className="nav-link">
                            GET 
                          </a>
                          <a href="#create" className="nav-link active">
                            POST
                          </a>
                          <a href="#delete" className="nav-link">
                            DELETE
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
};
export default Mop;