import React from "react";
import { Link } from "react-router-dom";

function Medicinecategory() {
  return (
    <div className="col-lg-7 col-md-8">
    <div
      id="post"
      className="documentation_info rvfs-4"
      data-rvfs={4}
    >
      <article className="documentation_body" id="medicine-category">
        <div className="shortcode_title">
          <h1>Medicine Category</h1>
          <p>
            dengan mengenal kategori obat dapat meningkatkan
            kewaspadaan dalam mengonsumsi dan memberikan obat.
          </p>
        </div>
        <div className="border_bottom" />
      </article>
      <article
        className="documentation_body"
        id="api-get-medicine-category"
      >
        <h4 className="c_head">
          <span className="badge bg-success ml-1">GET</span>
          /medicine-category medicine category list
        </h4>
        <div className="highlight">
          <div className="code-toolbar">
            <pre className=" language-htmlasc">
              <code className=" language-htmlasc" data-lang="html">
                http://103.228.245.122:3033/medicine-category
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
          Menampilkan daftar semua kategori obat. Kategori obat digunakan untuk menentukan bentuk atau jenis obat.
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
                <div>untuk memberikan nomor pada setiap halaman</div>
                <input
                  type="text"
                  class=""
                  title=""
                  placeholder="page"
                  value=""
                />
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
                  untuk menampilkan jumlah data yang ingin ada tampilkan - Default: 10
                </div>
                <input
                  type="text"
                  class=""
                  title=""
                  placeholder="limit"
                  value=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <div>category _name</div>
                <div>string</div>
                <div>
                  {"{"}string{"}"}
                </div>
              </td>
              <td>
                <div>Untuk menampilkan nama setiap kategori obat yang dibutuhkan</div>
                <input
                  type="text"
                  class=""
                  title=""
                  placeholder="category_name"
                  value=""
                />
              </td>
            </tr>
          </tbody>
        </table>
        {/*RESPONSE 200*/}
        <a
          className="toggle_btn"
          data-toggle="collapse"
          href="#category"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Response 200 - List data of medicine category
        </a>
        <div className="collapse multi-collapse" id="category">
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
                    <span className="token space"> </span>
                    "background_color": "#FFFFFF",
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "description": "Obat tablet biasanya berupa
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    padatan berbentuk bulat atau oval.
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    Jenis medicine ini tersusun atas zat aktif
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    yang dikombinasikan dengan bahan-bahan tertentu
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    dan kemudian dipadatkan.",
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "id": "1",
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
                    "text_color": "#F4F4F4",
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
        {/* Response 200 Mc */}

        {/* Response 422 MM */}
        <a
          className="toggle_btn"
          data-toggle="collapse"
          href="#failed"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Response 422 - Data validation failed
        </a>
        <div className="collapse multi-collapse" id="failed">
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
        {/* Response 422 MM */}

        {/* Response 500 MM */}
        <a
          className="toggle_btn"
          data-toggle="collapse"
          href="#error"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Response 500 - Server error
        </a>
        <div className="collapse multi-collapse" id="error">
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
        {/* Response 500 MM */}
      </article>
      <article
        className="documentation_body"
        id="api-post-medicine-category"
      >
        <h4 className="c_head">
          <span className="badge bg-info ml-1">POST</span>
          /medicine-category create medicine category
        </h4>
        <div className="highlight">
          <div className="code-toolbar">
            <pre className=" language-htmlasc">
              <code className=" language-htmlasc" data-lang="html">
                http://103.228.245.122:3033/medicine-category
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
        API ini untuk membuat data kategori obat dan akan muncul di Daftar Kategori Obat.
        </p>
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
                <div>Payload</div>
                <div>object</div>
                <div>
                  {"{"}body{"}"}
                </div>
              </td>
              <td>
                <div>untuk menampilkan deskripsi kategori muatan obat yang dibutuhkan</div>
                <div>Example value | model</div>
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
                      "description": "Obat tablet biasanya berupa
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      padatan berbentuk bulat atau oval.
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      Jenis medicine ini tersusun atas zat aktif
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      yang dikombinasikan dengan bahan-bahan tertentu
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      dan kemudian dipadatkan.",
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      "name": "Tablet",
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      "text_color": "#F4F4F4",
                      <span className="token lf">{"\n"}</span>
                      {"}"}
                    </code>
                  </pre>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/*RESPONSE 200 */}
        <a
          className="toggle_btn"
          data-toggle="collapse"
          href="#form"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Response 200 - Form Body of Medicine Category
        </a>
        <div className="collapse multi-collapse" id="form">
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
                    <span className="token space"> </span>
                    "background_color": "#FFFFFF",
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "description": "Obat tablet biasanya berupa
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    padatan berbentuk bulat atau oval.
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    Jenis medicine ini tersusun atas zat aktif
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    yang dikombinasikan dengan bahan-bahan tertentu
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    dan kemudian dipadatkan.",
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
                    "text_color": "#F4F4F4",
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
        {/* Response 500 MM */}
      </article>
      <article
        className="documentation_body"
        id="api-delete-medicine-category"
      >
        <h4 className="c_head">
          <span className="badge bg-danger ml-1">DELETE</span>
          /medicine-category/(id) delete medicine category
        </h4>
        <div className="highlight">
          <div className="code-toolbar">
            <pre className=" language-htmlasc">
              <code className=" language-htmlasc" data-lang="html">
                http://103.228.245.122:3033/medicine-category/2
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
        API ini untuk menghapus data kategori obat, Anda harus mendapatkan id dari data yang ingin Anda hapus, Tekan API Daftar Kategori Obat untuk mendapatkannya.
        </p>
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
                <div>id</div>
                <div>integer</div>
                <div>
                  {"{"}path{"}"}
                </div>
              </td>
              <td>
                <div>
                  ID kategori obat, didapatkan dari API daftar kategori obat untuk menghapus data obat dengan memasukkan ID
                </div>
                <input
                  type="text"
                  class=""
                  title=""
                  placeholder="id"
                  value=""
                />
              </td>
            </tr>
          </tbody>
        </table>
        {/*RESPONSE 200 */}
        <a
          className="toggle_btn"
          data-toggle="collapse"
          href="#success"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Response 200 - Success Response return True
        </a>
        <div className="collapse multi-collapse" id="success">
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
                    <span className="token space"> </span>
                    "__typename": "string",
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "data": {"{}"},
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "status": true,
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
        {/* Response MM */}

        {/* Response 422 MM */}
        <a
          className="toggle_btn"
          data-toggle="collapse"
          href="#failed_3"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Response 422 - Data validation failed
        </a>
        <div className="collapse multi-collapse" id="failed_3">
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
        {/* Response 422 MM */}

        {/* Response 500 MM */}
        <a
          className="toggle_btn"
          data-toggle="collapse"
          href="#error_3"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Response 500 - Server error
        </a>
        <div className="collapse multi-collapse" id="error_3">
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
        {/* Response 500 MM */}
      </article>
      <article
        className="documentation_body"
        id="api-patch-medicine-category"
      >
        <h4 className="c_head">
          <span className="badge bg-info ml-1">PATCH</span>
          /medicine-category/(id) update medicine category
        </h4>
        <div className="highlight">
          <div className="code-toolbar">
            <pre className=" language-htmlasc">
              <code className=" language-htmlasc" data-lang="html">
                http://103.228.245.122:3033/medicine-category/2
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
        API ini untuk update data kategori obat dan akan diganti informasi obat lama dengan input baru anda, Anda harus mendapatkan id data yang ingin anda ubah, Tekan API Daftar Kategori Obat untuk mendapatkannya.
        </p>
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
                <div>id</div>
                <div>integer</div>
                <div>
                  {"{"}path{"}"}
                </div>
              </td>
              <td>
                <div>
                ID kategori obat, didapatkan dari API daftar kategori obat untuk memperbaharui informasi dengan memasukkan ID
                </div>
                <input
                  type="text"
                  class=""
                  title=""
                  placeholder="id"
                  value=""
                />
              </td>
            </tr>
            <tr>
              <td>
                <div>payload</div>
                <div>object</div>
                <div>
                  {"{"}body{"}"}
                </div>
              </td>
              <td>
                <div>untuk menampilkan deskripsi kategori muatan obat yang dibutuhkan</div>
                <div>Example value | model</div>
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
                      "description": "Obat tablet biasanya berupa
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      padatan berbentuk bulat atau oval.
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      Jenis medicine ini tersusun atas zat aktif
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      yang dikombinasikan dengan bahan-bahan tertentu
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      dan kemudian dipadatkan.",
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      "name": "Tablet",
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      "text_color": "#F4F4F4",
                      <span className="token lf">{"\n"}</span>
                      {"}"}
                    </code>
                  </pre>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/*RESPONSE 200 */}
        <a
          className="toggle_btn"
          data-toggle="collapse"
          href="#return"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Response 200 - Success Response return True
        </a>
        <div className="collapse multi-collapse" id="return">
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
                    <span className="token space"> </span>
                    "__typename": "string",
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "data": {"{}"},
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "status": true,
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
        {/* Response MM */}

        {/* Response 422 MM */}
        <a
          className="toggle_btn"
          data-toggle="collapse"
          href="#failed_1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Response 422 - Data validation failed
        </a>
        <div className="collapse multi-collapse" id="failed_1">
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
        {/* Response 422 MM */}

        {/* Response 500 MM */}
        <a
          className="toggle_btn"
          data-toggle="collapse"
          href="#error_1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Response 500 - Server error
        </a>
        <div className="collapse multi-collapse" id="error_1">
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
        {/* Response 500 MM */}
      </article>
    </div>
  </div>
  );
}

export default Medicinecategory;
