import React from "react";
import { Link } from 'react-router-dom'

function Warehousecategory() {
  return (
    <div className="col-lg-7 col-md-8">
    <div
      id="post"
      className="documentation_info rvfs-4"
      data-rvfs={4}
    >
      
      {/* Warehouse category */}
      <article className="documentation_body" id="warehouse-category">
        <div className="shortcode_title">
          <h1>Warehouse Category</h1>
          <p>
            API untuk warehouse Category
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
        <p>Menampilkan daftar semua kategori gudang.</p>
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
        API ini digunakan untuk membuat data kategori gudang dan akan ditampilkan pada Daftar Kategori Gudang.
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
        API ini digunakan untuk menghapus data kategori gudang. Ini tidak dapat dihapus jika beberapa obat digunakan unit ini.
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
                ID bisa didapat dari API data kategori gudang untuk menghapus data kategori gudang ini dengan ID
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
        API ini digunakan untuk memperbarui data kategori gudang dan akan menggantikan informasi obat lama dengan input-an yang baru, jika ingin merubah id data maka tekan API daftar kategori gudang untuk mendapatkannya.
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
                ID bisa didapat dari API warehouse category untuk memperbarui data kategori gudang ini dengan ID
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
  );
}
export default Warehousecategory;
