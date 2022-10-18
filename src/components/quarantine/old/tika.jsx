function Doc() {
    return (
<div className="body_wrapper">
<nav className="navbar navbar-expand-lg menu_one display_none">
  <div className="container custom_container">
    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
<div className="mobile_main_menu navbar_fixed fadeInDown" id="sticky" style={{top: '0px'}}>
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
    <div className="mobile_logo">
    </div>
  </div>
  <div className="mobile_nav_wrapper">
    <nav className="mobile_nav_top">
      <ul className="navbar-nav menu ml-auto">
      </ul>
    </nav>
    <div className="mobile_nav_bottom">
      <aside className="doc_left_sidebarlist">
        <div className="scroll mCustomScrollbar _mCS_2"><div id="mCSB_2" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style={{maxHeight: '450px'}} tabIndex={0}><div id="mCSB_2_container" className="mCSB_container" style={{position: 'relative', top: 0, left: 0}} dir="ltr">
              <ul className="list-unstyled nav-sidebar">
                <li className="nav-item">
                  <a href="https://football-team-management.spaceart.tech" className="nav-link"><img src="https://football-team-management.spaceart.tech/img/side-nav/home.png" alt="" className="mCS_img_loaded" />Getting Started</a>
                </li>
                <li className="nav-item active">
                  <a href="#" className="nav-link"><img src="https://football-team-management.spaceart.tech/img/side-nav/briefcase.png" alt="briefcase" className="mCS_img_loaded" />API</a>
                  <span className="icon"><i className="arrow_carrot-down" /></span>
                  <ul className="list-unstyled dropdown_nav" style={{display: 'block'}}>
                    <li><a href="https://football-team-management.spaceart.tech/api-docs/studi-kasus">Studi Kasus</a></li>
                    <li><a href="https://football-team-management.spaceart.tech/api-docs/authentication">Authentication</a></li>
                    <li><a href="https://football-team-management.spaceart.tech/api-docs/perusahaan">Perusahaan</a></li>
                    <li><a href="https://football-team-management.spaceart.tech/api-docs/tim">Tim</a></li>
                    <li><a href="https://football-team-management.spaceart.tech/api-docs/pemain">Pemain</a></li>
                    <li><a href="https://football-team-management.spaceart.tech/api-docs/jadwal-pertandingan">Jadwal Pertandingan</a></li>
                    <li><a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">Hasil Pertandingan</a></li>
                    <li><a href="https://football-team-management.spaceart.tech/api-docs/report">Report</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a target="_blank" download rel="noreferrer" href="https://football-team-management.spaceart.tech/Ayo Indonesia - Software Developer Technical Test.postman_collection.json" className="nav-link"><img src="https://football-team-management.spaceart.tech/img/side-nav/document.png" alt="" className="mCS_img_loaded" />Postman Collection</a>
                </li>
                <li className="nav-item">
                  <a target="_blank" download rel="noreferrer" href="https://github.com/yoviealfaguistuta/backend-football-team-management" className="nav-link"><img src="https://football-team-management.spaceart.tech/img/side-nav/chat1.png" alt="" className="mCS_img_loaded" />Github</a>
                </li>
                <li className="nav-item">
                  <a target="_blank" download rel="noreferrer" href="http://yoviealfaguistuta.site/" className="nav-link"><img src="https://football-team-management.spaceart.tech/img/side-nav/coding.png" alt="" className="mCS_img_loaded" />Portofolio</a>
                </li>
              </ul>
            </div><div id="mCSB_2_scrollbar_vertical" className="mCSB_scrollTools mCSB_2_scrollbar mCS-light mCSB_scrollTools_vertical" style={{display: 'block'}}><div className="mCSB_draggerContainer"><div id="mCSB_2_dragger_vertical" className="mCSB_dragger" style={{position: 'absolute', minHeight: '30px', height: '448px', top: '0px', display: 'block', maxHeight: '440px'}}><div className="mCSB_dragger_bar" style={{lineHeight: '30px'}} /></div><div className="mCSB_draggerRail" /></div></div></div></div>
      </aside>
    </div>
  </div></div>
<section className="page_breadcrumb">
  <div className="container custom_container">
    <div className="row">
      <div className="col-sm-7">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a style={{color: 'white'}} href="#">Football Team Management</a></li>
            <li className="breadcrumb-item active" aria-current="page"><a style={{color: 'white'}} href="#">API Docs</a></li>
          </ol>
        </nav>
      </div>
      <div className="col-sm-5">
        <a href="#" style={{color: 'white'}} className="date"><i className="icon_clock_alt" />Diperbarui pada 05 Agustus 2022</a>
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
          <div className="scroll mCustomScrollbar _mCS_3"><div id="mCSB_3" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style={{maxHeight: '450px'}} tabIndex={0}><div id="mCSB_3_container" className="mCSB_container" style={{position: 'relative', top: 0, left: 0}} dir="ltr">
                <ul className="list-unstyled nav-sidebar">
                  <li className="nav-item">
                    <a href="https://football-team-management.spaceart.tech" className="nav-link"><img src="https://football-team-management.spaceart.tech/img/side-nav/home.png" alt="" className="mCS_img_loaded" />Getting Started</a>
                  </li>
                  <li className="nav-item active">
                    <a href="#" className="nav-link"><img src="https://football-team-management.spaceart.tech/img/side-nav/briefcase.png" alt="briefcase" className="mCS_img_loaded" />API</a>
                    <span className="icon"><i className="arrow_carrot-down" /></span>
                    <ul className="list-unstyled dropdown_nav" style={{display: 'block'}}>
                      <li><a href="https://football-team-management.spaceart.tech/api-docs/studi-kasus">Medicine</a></li>
                      <li><a href="https://football-team-management.spaceart.tech/api-docs/authentication">Medicine Category</a></li>
                      <li><a href="https://football-team-management.spaceart.tech/api-docs/perusahaan">Medicine Mutation</a></li>
                      <li><a href="https://football-team-management.spaceart.tech/api-docs/tim">Medicine Out Header</a></li>
                      <li><a href="https://football-team-management.spaceart.tech/api-docs/pemain">Medicine Prediction</a></li>
                      <li><a href="https://football-team-management.spaceart.tech/api-docs/jadwal-pertandingan">Medicine Request</a></li>
                      <li><a href="https://football-team-management.spaceart.tech/api-docs/hasil-pertandingan">Medicine Stock</a></li>
                      <li><a href="https://football-team-management.spaceart.tech/api-docs/report">Medicine Unit</a></li>
                      <li><a href="https://football-team-management.spaceart.tech/api-docs/report">RKO(Rencana Kebutuhan Obat)</a></li>
                      <li><a href="https://football-team-management.spaceart.tech/api-docs/report">User</a></li>
                      <li><a href="https://football-team-management.spaceart.tech/api-docs/report">Warehouse</a></li>
                      <li><a href="https://football-team-management.spaceart.tech/api-docs/report">Warehouse Category</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a target="_blank" download rel="noreferrer" href="https://football-team-management.spaceart.tech/Ayo Indonesia - Software Developer Technical Test.postman_collection.json" className="nav-link"><img src="https://football-team-management.spaceart.tech/img/side-nav/document.png" alt="" className="mCS_img_loaded" />Postman Collection</a>
                  </li>
                  <li className="nav-item">
                    <a target="_blank" download rel="noreferrer" href="https://github.com/yoviealfaguistuta/backend-football-team-management" className="nav-link"><img src="https://football-team-management.spaceart.tech/img/side-nav/chat1.png" alt="" className="mCS_img_loaded" />Github</a>
                  </li>
                  <li className="nav-item">
                    <a target="_blank" download rel="noreferrer" href="http://yoviealfaguistuta.site/" className="nav-link"><img src="https://football-team-management.spaceart.tech/img/side-nav/coding.png" alt="" className="mCS_img_loaded" />Portofolio</a>
                  </li>
                </ul>
              </div><div id="mCSB_3_scrollbar_vertical" className="mCSB_scrollTools mCSB_3_scrollbar mCS-light mCSB_scrollTools_vertical" style={{display: 'block'}}><div className="mCSB_draggerContainer"><div id="mCSB_3_dragger_vertical" className="mCSB_dragger" style={{position: 'absolute', minHeight: '30px', height: '448px', top: '0px', display: 'block', maxHeight: '440px'}}><div className="mCSB_dragger_bar" style={{lineHeight: '30px'}} /></div><div className="mCSB_draggerRail" /></div></div></div></div>
        </aside>                  </div>
      <div className="col-lg-7 col-md-8">
        <div id="post" className="documentation_info rvfs-4" data-rvfs={4}>
          <article className="documentation_body" id="medicine-request">
            <div className="shortcode_title">
              <h1>Medicine Request</h1>
              <p>Obat adalah bahan atau paduan bahan, termasuk produk biologi yang digunakan untuk mempengaruhi atau menyelidiki sistem fisiologi atau keadaan patologi dalam rangka penetapan diagnosis, pencegahan, penyembuhan, pemulihan, peningkatan kesehatan dan kontrasepsi, untuk manusia</p>
            </div>
            <div className="border_bottom" />
          </article>
          <article className="documentation_body" id="list">
          <article className="documentation_body" id="api-get-medicine-request">
          <h4 className="c_head"><span className="badge bg-info ml-1">GET</span>/medicine-request</h4> 
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /medicine-request
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
                  Showing list of all medicine request by years.
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
                          <div>
                            {"{"}query{"}"}
                          </div>
                        </td>
                       
                        <td>
                          <div>Page number - Default: 1</div>
                          <div><input type="text" className title placeholder="page" disabled /></div>
                        </td>
                        
                      </tr>
                      <tr>
                        <td>
                          <div>Page</div>
                          <div>limit</div>
                          <div>number</div>
                          <div>
                            {"{"}query{"}"}
                          </div>
                        </td>
                        <td>
                          <div>The amount of data you want to display - Default: 10</div>
                          <div><input type="text" className title placeholder="limit" disabled /></div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>years</div>
                          <div>ineteger</div>
                          <div>
                            {"{"}query{"}"}
                          </div>
                        </td>
                        <td>
                          <div>Medicine Request Years</div>
                          <div><input type="text" className title placeholder="years" disabled /></div>
                        </td>
                    </tr>
                    </tbody>
                  </table>

                 {/* Response Medidine Request */}
                 <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#jQ2bC3wnEH"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - List data of Medicine Request
                  </a>
                  <div className="collapse multi-collapse" id="jQ2bC3wnEH">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "__typename": "ListMedicineRequest",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "data": [
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_name": "Paracetamol",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_stock": 224,
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
                              "years": 2022,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "amount": 10,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_by": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "updated_at": "2022-01-01T00:00:00Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_at": "2022-01-01T00:00:00Z"
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
                              <span className="token space"> </span>{"{"}
                              
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "id": 2,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_name": "Paracetamol",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_stock": 224,
                              <span className="token lf">{"\n"}</span>
                              "medicine_stock_id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "years": 2022,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "amount": 999,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_by": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "updated_at": "2022-10-10T08:10:47Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_at": "2022-10-10T08:10:47Z"
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
                              <span className="token space"> </span>{"{"}
                              "id": 3,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_name": "Paracetamol",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_stock": 224,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_stock_id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "years": 2023,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "amount": 1999,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_by": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "updated_at": "2022-10-10T08:19:29Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_at": "2022-10-10T08:19:29Z"
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
                              <span className="token space"> </span>{"{"}
                              "status": true,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "meta": {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "total": 3,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "current_page": 1
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
                  
                  {/* Response 422 medicine request */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#RKO-R422"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="RKO-R422">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                  {/* Response 422 medicine request  */}

                  {/* Response 500 medicine request  */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#RKO-R500"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="RKO-R500">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                  {/* Response 500 medicine request*/}
                  {/* Response medicine request*/}
                </article>
                <article className="documentation_body" id="api-post-medicine-request"> 
                <h4 className="c_head">
                    <span className="badge bg-success ml-1">POST</span>/medicine-request
                  </h4>
          
            <div className="highlight"> 
              <div className="code-toolbar">
                <pre className=" language-htmlasc">
                  <code className=" language-htmlasc" data-lang="html">/medicine-request</code>
                  </pre><div className="toolbar"><div className="toolbar-item"><span>Htmlasc</span></div>
                  <div className="toolbar-item"><button>Copy</button></div></div></div> 
            </div> 
            <p>This API is used for creating medicine request. This data required for RKO (Rencana Kebutuhan Obat) Document. This will display the number of medicine requests in each warehouse in a given year.</p>
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
                              <div>medicine request payload</div> 
                              <div><pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "amount": 224,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "years": 2022
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                            </code>
                          </pre></div>
                            </td> 
                          </tr> 
                        </tbody> 
                      </table> 

                      {/* Response Medidine Request */}
                 <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#postR"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - List data of Medicine Request
                  </a>
                  <div className="collapse multi-collapse" id="postR">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "amount": 224,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "years": 2022
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
                  
                  {/* Response 422 medicine request */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#R"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="R">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                  {/* Response 422 medicine request  */}

                  {/* Response 500 medicine request  */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#R1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="R1">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                  {/* Response 500 medicine request*/}
                  {/* Response medicine request*/}

            </article>  

            <article className="documentation_body" id="Medicine-stock">
            <div className="shortcode_title">
              <h1>Medicine Stock</h1>
              <p>Obat stok adalah obat yang tidak diberi label untuk, atau dimaksudkan untuk, digunakan oleh pasien tertentu ketika meninggalkan apotek, tetapi dimaksudkan untuk disimpan dan pada akhirnya dikelola oleh profesional perawatan kesehatan berlisensi sesuai dengan undang-undang dan peraturan yang berlaku.</p>
            </div>
            <div className="border_bottom" />
          </article>            
                  <article className="documentation_body" id="api-get-medicine-stock">
                  <h4 className="c_head"><span className="badge bg-info ml-1">GET</span>/medicine-stock</h4> 
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
                  Showing list of all medicine stock by warehouse.
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
                          <div>
                            {"{"}query{"}"}
                          </div>
                        </td>
                        <td>
                          <div>Page number - Default: 1</div>
                          <div><input type="text" className title placeholder="page" disabled /></div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>Page</div>
                          <div>limit</div>
                          <div>number</div>
                          <div>
                            {"{"}query{"}"}
                          </div>
                        </td>
                        <td>
                          <div>The amount of data you want to display - Default: 10</div>
                          <div><input type="text" className title placeholder="limit" disabled /></div>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>

                  {/* Response Medicine Stock */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#stock"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - List data of Medicine Stock
                  </a>
                  <div className="collapse multi-collapse" id="stock">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"["}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_at": "2012-04-23T18:25:43.511Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_by_description": "Dibuat melalui Mutasi gudang A ke gudang B",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine":  {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "batch_number": "17152977728163",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
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
                              "description": "Obat tablet biasanya berupa padatan berbentuk bulat atau oval. Jenis medicine ini tersusun atas zat aktif yang dikombinasikan dengan bahan-bahan tertentu dan kemudian dipadatkan.",
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
                              "name": "Tablet",
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
                              <span className="token space"> </span>
                              {"},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "category_id": 2,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_at": "2012-04-23T18:25:43.511Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_by": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "description": "Paracetamol adalah medicine untuk meredakan demam dan nyeri, termasuk nyeri haid atau sakit gigi.",
                              <span className="token lf">{"\n"}</span>
                              "name": "Paracetamol",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "price": 16.95,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "unit": {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "background_color": "#FFFFFF",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "description": "PCS dapat dikatakan sama dengan 1 buah barang.",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "id": 1,
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
                              "text_color": "#F4F4F4"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "unit_id": 2,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "updated_at": "2012-04-23T18:25:43.511Z"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "medicine_id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "stock": 224,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "updated_at": "2012-04-23T18:25:43.511Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "warehouse": {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "address": "Jalan Lintas Tengah Sumatera, Negeri Baru Kecamatan Blambangan Umpu, Kabupaten Way Kanan, Lampung, 34764",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>{"{"}
                              "category": {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "background_color": "#FFFFFF",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "description": "Gudang yang digunakan sebagai tempat menyimpan medicine sebelum di pindahkan ke warehouse penjualan",
                              <span className="token lf">{"\n"}</span>
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
                              {"},"}
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
                              "description": "Gudang yang berada di rumah sakit umum daerah (RSUD) Zainal Abidin Pagar Alam Kabupaten Way Kanan",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "id": 1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "image": "Gambar gudang",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "name": "Gudang Farmasi RSUD Zainal Abidin"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "warehouse_id": 1
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                               {"},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"]"}


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
                  {/* Response 422 medicine stock*/}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#stock1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="stock1">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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

                  {/* Response 500 medicine stock */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#stock3"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="stock3">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                  {/* Response medicine stock */}
                  {/* Response medicine stock */}
                  <div className="border_bottom mt-5" />
                </article>
                <article className="documentation_body" id="api-get-medicine-stock-detail">
                  <h4 className="c_head"><span className="badge bg-info ml-1">GET</span>/medicine-stock - {"id"}</h4> 
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
                  This API is used to see detail medicine stock by warehouse id. This will displays the amount of medicine available in the warehouse and the deep information about warehouse and medicine.
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
                          <div>Id of Medicine Stock</div>
                          <div><input type="text" className title placeholder="id" disabled /></div>
                        </td>
                      </tr>
                      <tr>   
                      </tr>
                    </tbody>
                  </table>
                   {/* Response Medicine Stock */}
                   <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#ms"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 - List data of Medicine Stock
                  </a>
                  <div className="collapse multi-collapse" id="ms">
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
                  {/* Response 422 medicine stock*/}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#sm"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="sm">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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

                  {/* Response 500 medicine stock */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#sm1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="sm1">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                  {/* Response medicine stock */}
                  {/* Response medicine stock */}
                  </article>
                
                  <article className="documentation_body" id="Medicine-unit">
            <div className="shortcode_title">
              <h1>Medicine Unit</h1>
              <p>Obat adalah bahan atau paduan bahan, termasuk produk biologi yang digunakan untuk mempengaruhi atau menyelidiki sistem fisiologi atau keadaan patologi dalam rangka penetapan diagnosis, pencegahan, penyembuhan, pemulihan, peningkatan kesehatan dan kontrasepsi, untuk manusia</p>
            </div>
            <div className="border_bottom" />
          </article>          
                <article className="documentation_body" id="api-get-medicine-unit">
                <h4 className="c_head"><span className="badge bg-info ml-1">GET</span>/medicine-unit</h4> 
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
                  Showing list of all medicine unit.
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
                          <div>
                            {"{"}path{"}"}
                          </div>
                        </td>
                        <td>
                          <div>Page number</div>
                          <div>
                          <div><input type="text" className title placeholder="page" disabled /></div>
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
                          <div>The amount of data you want to display - Default: 10</div>
                          <div><input type="text" className title placeholder="limit" disabled /></div>
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
                          <div><input type="text" className title placeholder="category_name" disabled /></div>
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
                  <div
                    className="multi-collapse collapse"
                    id="unit"
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
                              "__typename": "ListMedicineUnit",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "data": [
                              <span className="token lf">{"\n"}</span>
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
                              "description": "Unit adalah kumpulan dari beberapa pcs barang / spare part.",
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
                              "description": "PCS dapat dikatakan sama dengan 1 buah barang.",
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
                              "description": "Botol merupakan satuan tidak baku besaran volume yang digunakan untuk mengukur besar atau banyaknya volume benda yang terisi atau terdapat pada satu botol",
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
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                <article className="documentation_body" id="api-post-medicine-unit">
                <h4 className="c_head">
                    <span className="badge bg-success ml-1">POST</span>/medicine-unit
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
                  This API for create medicine unit data and will be showed up on Medicine Unit List.
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
                          <div><pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "background_color": "#FFFFFF",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "description": "PCS dapat dikatakan sama dengan 1 buah 
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
                          </pre></div>
                        </td>
                      </tr>
                      <tr>
                        
                      </tr>  
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
                              "description": "PCS dapat dikatakan sama dengan 1 buah barang.",
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
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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

                  <article className="documentation_body" id="api-delete-medicine-unit">
                  <h4 className="c_head"><span className="badge bg-danger ml-1">DELETE</span>/medicine-unit/(id)</h4> 
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
                  This API for delete medicine unit data. This cant be delete if some medicine is used this unit.
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
                          <div>Id of Medicine Unit, get it from Medicine Unit List API to update the information by id</div>
                          <div><input type="text" className title placeholder="id" disabled /></div>
                        </td>
                      </tr>
                      <tr>
                        
                      </tr>
                      
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
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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

                  <article className="documentation_body" id="api-patch-medicine-unit">
                  <h4 className="c_head">
                    <span className="badge bg-success ml-1">PATCH</span>/medicine-unit/(id)
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
                  This API for update medicine unit data and will be replaced old medicine unit information with your new input, You have to get the id of the data you want to change, Hit Medicine Unit List API to get it.
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
                          <div>Id of Medicine Unit, get it from Medicine Unit List API to update the information by id</div>
                          <div><input type="text" className title placeholder="id" disabled /></div>
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
                          <div>                        <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "background_color": "#FFFFFF",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "description": "PCS dapat dikatakan sama dengan 1 buah 
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
                          </pre></div>
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
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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

                  <article className="documentation_body" id="patient">
            <div className="shortcode_title">
              <h1>Patient</h1>
              <p>Pasien atau pesakit adalah seseorang yang menerima perawatan medis. Sering kali, pasien menderita penyakit atau cedera dan memerlukan bantuan dokter untuk memulihkannya.</p>
            </div>
            <div className="border_bottom" />
          </article>          
            
            <article className="documentation_body" id="api-get-patient">
            <h4 className="c_head"><span className="badge bg-info ml-1">GET</span>/patient</h4> 
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /patient
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
                  Showing list of all patient.
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
                          <div>
                            {"{"}path{"}"}
                          </div>
                        </td>
                        <td>
                          <div>Page number</div>
                          <div>
                          <div><input type="text" className title placeholder="page" disabled /></div>
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
                          <div>The amount of data you want to display - Default: 10</div>
                          <div><input type="text" className title placeholder="limit" disabled /></div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>name</div>
                          <div>string</div>
                          <div>
                            {"{"}query{"}"}
                          </div>
                        </td>
                        <td>
                          <div>Patient Name</div>
                          <div><input type="text" className title placeholder="name" disabled /></div>
                        </td>
                      </tr>
                     
                    </tbody>
                  </table>

                  <a
                    className="toggle_btn collapsed"
                    data-toggle="collapse"
                    href="#patient"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 OK
                  </a>
                  <div
                    className="multi-collapse collapse"
                    id="patient"
                    style={{}}
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                        <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"["}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "address": "Kampung Baru Rajabasa Bandar Lampung",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "birthday": {"{},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "contact": "+6289571637182",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_at": "2012-04-23T18:25:43.511Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "education": "Sarjana S1",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "gender": "Laki Laki",
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
                              "name": "I Made Sattvikas",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "nik": "1873716491264102",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "profession": "Pegawai Swasta",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "updated_at": "2012-04-23T18:25:43.511Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "warehouse_id": 1
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                               {"]"}
                              
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
                    href="#ptient"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="ptient">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                    href="#ptientt"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="ptientt">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                <article className="documentation_body" id="api-post-patient">
                  <h4 className="c_head">
                    <span className="badge bg-success ml-1">POST</span>/patient
                  </h4> 
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /patient
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
                  This API for create patient data and will be showed up on patient List.
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
                          <div>Patient payload</div>
                          <div><pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"["}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "address": "Kampung Baru Rajabasa Bandar Lampung",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "birthday": {"{},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "contact": "+6289571637182",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_at": "2012-04-23T18:25:43.511Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "education": "Sarjana S1",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "gender": "Laki Laki",
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
                              "name": "I Made Sattvikas",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "nik": "1873716491264102",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "profession": "Pegawai Swasta",
                              
                            </code>
                          </pre></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <a
                    className="toggle_btn collapsed"
                    data-toggle="collapse"
                    href="#ppatient"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 OK
                  </a>
                  <div
                    className="multi-collapse collapse"
                    id="ppatient"
                    style={{}}
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                        <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"["}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "address": "Kampung Baru Rajabasa Bandar Lampung",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "birthday": {"{},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "contact": "+6289571637182",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_at": "2012-04-23T18:25:43.511Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "education": "Sarjana S1",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "gender": "Laki Laki",
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
                              "name": "I Made Sattvikas",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "nik": "1873716491264102",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "profession": "Pegawai Swasta",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "updated_at": "2012-04-23T18:25:43.511Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "warehouse_id": 1
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                               {"]"}
                              
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
                    href="#ptient1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="ptient1">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                    href="#ptient2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="ptient2">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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

                  <article className="documentation_body" id="api-delete-patient">
                  <h4 className="c_head"><span className="badge bg-danger ml-1">DELETE</span>/patient/(id)</h4> 
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /patient
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
                  This API for delete patient data. This cant be delete if some patient is used this unit.
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
                          <div>Id of Patient, get it from Patient List API to update the information by id</div>
                          <div><input type="text" className title placeholder="id" disabled /></div>
                        </td>
                      </tr>
                      <tr> 
                      </tr>
                    </tbody>
                  </table>
                      
                  <a
                    className="toggle_btn collapsed"
                    data-toggle="collapse"
                    href="#Dpatient"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 OK
                  </a>
                  <div
                    className="multi-collapse collapse"
                    id="Dpatient"
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
                              "data": {"{},"}
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
                    href="#Dpatient1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="Dpatient1">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                    href="#Dpatient2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="Dpatient2">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                  
                  <article className="documentation_body" id="api-patch-patient">
                  <h4 className="c_head">
                    <span className="badge bg-success ml-1">PATCH</span>/patient/(id)
                  </h4> 
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /patient
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
                  This API for update patient data and will be replaced old patient information with your new input, You have to get the id of the data you want to change, Hit Patient List API to get it.
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
                          <div>Id of Patient, get it from Patient List API to update the information by id</div>
                          <div><input type="text" className title placeholder="id" disabled /></div>
                        </td>
                      </tr>
                      <tr>
                      <div>payload</div>
                      <div>object</div>
                      <div>
                        {"{"}body{"}"}
                      </div>
                      <td>
                          <div>Patient Payload</div>
                          <div><pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "address": "Kampung Baru Rajabasa Bandar Lampung",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "birthday": "1999-01-01",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "contact": "+6289571637182",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "education": "Sarjana S1",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "gender": "Laki Laki",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "name": "I Made Sattvikas",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "nik": "1873716491264102",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "profession": "Pegawai Swasta"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
                             
                            </code>
                          </pre></div>
                        </td>
                      </tr>
                      
                    </tbody>
                  </table>

                  <a
                    className="toggle_btn collapsed"
                    data-toggle="collapse"
                    href="#Ppatient"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 OK
                  </a>
                  <div
                    className="multi-collapse collapse"
                    id="Ppatient"
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
                              "data": {"{},"}
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
                    href="#Ppatient1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="Ppatient1">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                    href="#Ppatient2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="Ppatient2">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              [
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token lf">{"\n"}</span>
                              ]
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
                  <div className="border_bottom mt-5" />

          </article>
 
        </div>
      </div>
      <div className="col-lg-2 col-md-4 doc_right_mobile_menu">
        <div className="open_icon" id="right">
          <i className="arrow_carrot-left" />
          <i className="arrow_carrot-right" />
        </div>
        <div className="doc_rightsidebar scroll mCustomScrollbar _mCS_3 _mCS_1"><div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style={{maxHeight: 'none'}} tabIndex={0}><div id="mCSB_1_container" className="mCSB_container" style={{position: 'relative', top: 0, left: 0}} dir="ltr"><div id="mCSB_3" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" tabIndex={0} style={{maxHeight: 'none'}}><div id="mCSB_3_container" className="mCSB_container" style={{position: 'relative', top: 0, left: 0}} dir="ltr">
                  <div id="font-switcher" className="d-flex justify-content-between align-items-center">
                    <div id="rvfs-controllers" className="fontsize-controllers group"><div className="btn-group"><a href="#" className="rvfs-decrease btn" title="Decrease font size">A-</a><a href="#" className="rvfs-reset btn disabled" title="Default font size">A</a><a href="#" className="rvfs-increase btn" title="Increase font size">A+</a></div></div>
                    <a href="javascript:window.print()" className="print"><i className="icon_printer" /></a>
                  </div>
                  <div className="doc_switch">
                    <label htmlFor="something" className="tab-btn tab-btns" style={{color: 'rgb(16, 179, 214)'}}><i className="icon_lightbulb_alt" /></label>
                    <input type="checkbox" name="something" id="something" className="tab_switcher" />
                    <label htmlFor="something" className="tab-btn"><i className="far fa-moon" /></label>
                  </div>
                  <h6>Dalam Halaman Ini:</h6>
                  <nav className="list-unstyled doc_menu" id="navbar-example3">
                    <a href="#list" className="nav-link">List</a>
                    <a href="#create" className="nav-link active">Create</a>
                    <a href="#update" className="nav-link">Update</a>
                    <a href="#delete" className="nav-link">Delete</a>
                  </nav>
                </div><div id="mCSB_3_scrollbar_vertical" className="mCSB_scrollTools mCSB_3_scrollbar mCS-light mCSB_scrollTools_vertical" style={{display: 'block'}}><div className="mCSB_draggerContainer"><div id="mCSB_3_dragger_vertical" className="mCSB_dragger" style={{position: 'absolute', minHeight: '30px', display: 'block', height: '223px', maxHeight: '240px', top: '0px'}}><div className="mCSB_dragger_bar" style={{lineHeight: '30px'}} /></div><div className="mCSB_draggerRail" /></div></div></div></div><div id="mCSB_1_scrollbar_vertical" className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" style={{display: 'block'}}><div className="mCSB_draggerContainer"><div id="mCSB_1_dragger_vertical" className="mCSB_dragger" style={{position: 'absolute', minHeight: '30px', height: '225px', top: '0px', display: 'block', maxHeight: '236px'}}><div className="mCSB_dragger_bar" style={{lineHeight: '30px'}} /></div><div className="mCSB_draggerRail" /></div></div></div></div>
      </div>
    </div>
  </div>
</section>
</div>
);
}

export default Doc;