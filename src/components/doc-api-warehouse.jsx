import React from "react";
import { Link } from 'react-router-dom'

function Warehouse() {
  return (
    <div className="col-lg-7 col-md-8">
    <div
      id="post"
      className="documentation_info rvfs-4"
      data-rvfs={4}
    >
      {/* Cons */}

      {/* Cons */}

      {/* Warehouse */}
      <article className="documentation_body" id="warehouse">
        <div className="shortcode_title">
          <h1>Warehouse</h1>
          <p>
            API untuk Warehouse
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
        <p>Menampilkan daftar semua gudang.</p>
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
                          <div>Memberikan penomoran halaman pada obat yang pertama dan seterusnya</div>
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
                          Menampilkan jumlah dan batas data yg ingin ditampilkan
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
                          <div>Diisi sesuai dengan nama gudang yang akan dicari</div>
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
                      <tr>
                        <td>
                          <div>category_name</div>
                          <div>integer</div>
                          <div>(query)</div>
                        </td>
                        <td>
                          <div>ID gudang yang digunakan sebagai tanda pengenal dan identifikasi agar data gudang tidak meleset</div>
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
        API ini digunakan untuk membuat data warehouse dan akan ditampilkan di Warehouse List, Hit Warehouse Category List API dan mendapatkan id-nya. Setelah itu gunakan id pada permintaan badan formulir Anda untuk menggunakan API ini.
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
        API ini untuk menghapus data gudang dengan id-nya.
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
                ID untuk mengetahui detail gudang bisa mendapatkan dari API warehouse list untuk memperbarui informasi dengan id warehouse yang ingin dilihat detailnya
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
        <p>API ini untuk menghapus data gudang dengan ID-nya</p>
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
                ID bisa didapat dari API list warehouse untuk menghapus data gudang ini dengan ID
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
        API ini digunakan untuk memperbarui data gudang dan akan menggantikan informasi gudang lama dengan input-an yang baru, jika ingin mengubah id data maka tekan API daftar gudang. 
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
                ID bisa didapat dari API list warehouse untuk memperbarui data gudang ini dengan ID
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

    </div>
  </div>
  
  );
}
export default Warehouse;
