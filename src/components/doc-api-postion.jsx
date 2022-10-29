import React from "react";
import { Link } from "react-router-dom";

function Position() {
    return (
      <div className="col-lg-7 col-md-8">
      <div id="post" className="documentation_info rvfs-4" data-rvfs={4}>
      <article className="documentation_body" id="documentation">
          <div className="shortcode_title">
            <h1>Position</h1>
            <p>API untuk menampilkan semua position list.
            </p>
          </div>
          <div className="border_bottom" />
        </article>
        <article className="documentation_body" id="api-get-restock">
        <h4 className="c_head"><span className="badge bg-info ml-1">GET</span>/warehouse-category</h4>
          <div className="highlight">
            <div className="code-toolbar"><pre className=" language-htmlasc"><code className=" language-htmlasc" data-lang="html">http://103.228.245.122:3033/warehouse-category</code></pre><div className="toolbar"><div className="toolbar-item"><span>Htmlasc</span></div><div className="toolbar-item"><button>Copy</button></div></div></div>
          </div>
          <p>Showing list of all position.</p>

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
                      <div>Page</div>
                      <div>number</div>
                        <div>
                          {"{"}path{"}"}
                        </div>
                      </td>
                      <td>
                        <div>memberikan nomor pada setiap halaman</div>
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
                        <div>Jumlah data yang ingin Anda tampilkan</div>
                        <input type="text" class="" title="" placeholder="limit" value=""/>
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
                        <div>Nama Kategori Gudang</div>
                        <input type="text" class="" title="" placeholder="category_name" value=""/>
                      </td>
                    </tr>
                  </tbody>
                    </table>

                  {/*RESPONSE 200 OK */}
              <a
                  className="toggle_btn"
                  data-toggle="collapse"
                  href="#Rposition"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  Response 200 - Response body
                </a>
                <div className="collapse multi-collapse" id="Rposition">
                  <div className="card card-body toggle_body">
                    <div className="highlight">
                      <div className="code-toolbar">
                        <pre className=" language-html">
                        <code className=" language-html" data-lang="html">
                            {"{"}
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "__typename": "WarehouseCategoryList",
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
                            "name": "Utama"
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "deskripstion: "Gudang Utama Dinas Kesehatan sebagai Pusat Distribusi Obat",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "background_color": "#f1faff",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "text_color": "#009ef7"
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            {"}"}
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            {"}"}
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "id": 2,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "name": "Penyimpanan",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "description": "Gudang yang digunakan sebagai tempat menyimpan medicine sebelum di pindahkan ke warehouse penjualan",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "background_color": "#f1faff",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "text_color": "#009ef7"
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            {"}"}
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            {"{"}
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "id": 3,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "name": "Penjualan",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "description": "Gudang yang digunakan sebagai tempat menyimpan medicine sementara. Obat yang berada di dalam warehouse ini dapat diperjual belikan atau diberikan kepada pasien",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "background_color": "#f1faff",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "text_color": "#009ef7"
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            {"}"}
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            ],
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "status": true,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "meta": {"{"}
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "page_count": 0,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "total": 3,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "current_page": 1,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "offset": 0
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
                {/* Response MM */}

                  {/*RESPONSE 200 */}
                <a
                  className="toggle_btn"
                  data-toggle="collapse"
                  href="#Rposition1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  Response 200 - 	List data of Position
                </a>
                <div className="collapse multi-collapse" id="Rposition1">
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
                            "id": 1,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "position": "Kepala Gudang",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "power": 1
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
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
                  href="#Rposition2" 
                  role="button" 
                  aria-expanded="false" 
                  aria-controls="multiCollapseExample1" 
                > 
                  Response 422 - Data validation failed 
                </a> 
                <div className="collapse multi-collapse" id="Rposition2"> 
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
                  href="#Rposition3" 
                  role="button" 
                  aria-expanded="false" 
                  aria-controls="multiCollapseExample1" 
                > 
                  Response 500 - Server error 
                </a> 
                <div className="collapse multi-collapse" id="Rposition3"> 
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

export default Position;