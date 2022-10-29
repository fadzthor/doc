import React from "react";
import { Link } from "react-router-dom";


function Restock() {
    return (
      <div className="col-lg-7 col-md-8">
      <div id="post" className="documentation_info rvfs-4" data-rvfs={4}>
        <article className="documentation_body" id="documentation">
          <div className="shortcode_title">
            <h1>Restock</h1>
            <p>Restock adalah peer-to-peer lending platform di Indonesia yang menghubungkan pelaku UMKM yang membutuhkan Pembiayaan untuk mengembangkan usaha dengan kumpulan Pemberi Pembiayaan yang memiliki dana lebih untuk membiayai usaha tersebut.
            </p>
          </div>
          <div className="border_bottom" />
        </article>
        <article className="documentation_body" id="api-post-restock">
        <h4 className="c_head"><span className="badge bg-success ml-1">POST</span>/restock Create Restock</h4>
          <div className="highlight">
            <div className="code-toolbar"><pre className=" language-htmlasc"><code className=" language-htmlasc" data-lang="html">http://103.228.245.122:3033/restock</code></pre><div className="toolbar"><div className="toolbar-item"><span>Htmlasc</span></div><div className="toolbar-item"><button>Copy</button></div></div></div>
          </div>
          <p>This API to update medicine stock on main warehouse and adding restock history on restock table.</p>
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
                        <div>Restock payload</div>
                        <div>Example value | model</div>
                        <div>
                        <pre className=" language-html">
                          <code className=" language-html" data-lang="html">
                            {"{"}
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "amount": 100,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "medicine_stock_id": 1,
                            <span className="token lf">{"\n"}</span>
                            {"}"}
                          </code>
                        </pre>
                        </div>
                      </td>
                        </tr>
                  </tbody>
                </table>

              {/*RESPONSE 200 OK */}
              <a
                  className="toggle_btn"
                  data-toggle="collapse"
                  href="#bodyok"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  Response 200 - Response body
                </a>
                <div className="collapse multi-collapse" id="bodyok">
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
                            <span className="token space"> </span>
                            "__typename": "CreateRestock",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "data": 2,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "status": "true",
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
                {/* Response MM */}

                {/*RESPONSE 200 */}
                <a
                  className="toggle_btn"
                  data-toggle="collapse"
                  href="#formbody"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  Response 200 - Form Body of Restock
                </a>
                <div className="collapse multi-collapse" id="formbody">
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
                            <span className="token space"> </span>
                            "amount": 100,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "medicine_stock_id": 1,
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
                {/* Response MM */}

                {/* Response 422 MM */} 
                <a 
                  className="toggle_btn" 
                  data-toggle="collapse" 
                  href="#failedrestock" 
                  role="button" 
                  aria-expanded="false" 
                  aria-controls="multiCollapseExample1" 
                > 
                  Response 422 - Data validation failed 
                </a> 
                <div className="collapse multi-collapse" id="failedrestock"> 
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
                {/* Response 422 MM */}

                {/* Response 500 MM */} 
                <a 
                  className="toggle_btn" 
                  data-toggle="collapse" 
                  href="#errorrestock" 
                  role="button" 
                  aria-expanded="false" 
                  aria-controls="multiCollapseExample1" 
                > 
                  Response 500 - Server error 
                </a> 
                <div className="collapse multi-collapse" id="errorrestock"> 
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
                {/* Response 500 MM */}
        </article>
        <article className="documentation_body" id="api-get-restock">
        <h4 className="c_head"><span className="badge bg-info ml-1">GET</span>/restock/(medicine_stock_id) List Restock</h4>
          <div className="highlight">
            <div className="code-toolbar"><pre className=" language-htmlasc"><code className=" language-htmlasc" data-lang="html">http://103.228.245.122:3033/restock/1</code></pre><div className="toolbar"><div className="toolbar-item"><span>Htmlasc</span></div><div className="toolbar-item"><button>Copy</button></div></div></div>
          </div>
          <p>Showing list of restock by stock id.</p>

          <table className="table table-bordered">
                      <thead>
                      <tr>
                      <th>Name</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>medicine_stock_id</div>
                        <div>integer</div>
                        <div>
                          {"{"}path{"}"}
                        </div>
                      </td>
                      <td>
                        <div>kolom untuk memasukkan Id Stok Obat, dapatkan dari parameter</div>
                        <input type="text" class="" title="" placeholder="medicine_stock_id" value=""/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>page</div>
                        <div>number</div>
                        <div>
                          {"{"}query{"}"}
                        </div>
                      </td>
                      <td>
                        <div>kolom untuk mencari nomor halaman- Default 1</div>
                        <input type="text" class="" title="" placeholder="page" value=""/>
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
                        <div>untuk menginputkan jumlah data yang ingin Anda tampilkan - Default: 10</div>
                        <input type="text" class="" title="" placeholder="limit" value=""/>
                      </td>
                    </tr>
                  </tbody>
                    </table>

                  {/*RESPONSE 200 OK */}
              <a
                  className="toggle_btn"
                  data-toggle="collapse"
                  href="#bodyok1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  Response 200 - Response body
                </a>
                <div className="collapse multi-collapse" id="bodyok1">
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
                            <span className="token space"> </span>
                            "__typename": "CreateRestock",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "data": [
                            <span className="token lf">{"\n"}</span>
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
                            "id": 1,
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
                            "amount": 100,
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
                            "created_at": "2022-01-01T00:00:00Z",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            {"}"},
                            <span className="token lf">{"\n"}</span>
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
                            "id": 2,
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
                            "amount": 100,
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
                            "created_at": "2022-10-27T04:50:39.516598Z",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            {"}"},
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            ]
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "status": "true",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "meta": {"{"}
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "page_count": 0,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "total": 2,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "current_page": 1,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "offset": 0,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            {"}"}
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
                {/* Response MM */}

                  {/*RESPONSE 200 */}
                <a
                  className="toggle_btn"
                  data-toggle="collapse"
                  href="#form"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  Response 200 - 	List data of Restock
                </a>
                <div className="collapse multi-collapse" id="form">
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
                            <span className="token space"> </span>
                            "amount": 100,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "craeted_at": "2012-04-23T18:25:43.511Z",
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
                            "id": 1,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "medicine_stock_id": 1,
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
                {/* Response MM */}

                {/* Response 422 MM */} 
                <a 
                  className="toggle_btn" 
                  data-toggle="collapse" 
                  href="#form_2" 
                  role="button" 
                  aria-expanded="false" 
                  aria-controls="multiCollapseExample1" 
                > 
                  Response 422 - Data validation failed 
                </a> 
                <div className="collapse multi-collapse" id="form_2"> 
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
                {/* Response 422 MM */}

                {/* Response 500 MM */} 
                <a 
                  className="toggle_btn" 
                  data-toggle="collapse" 
                  href="#form_3" 
                  role="button" 
                  aria-expanded="false" 
                  aria-controls="multiCollapseExample1" 
                > 
                  Response 500 - Server error 
                </a> 
                <div className="collapse multi-collapse" id="form_3"> 
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
                {/* Response 500 MM */}
                </article>
      </div>
    </div>

);
}

export default Restock;