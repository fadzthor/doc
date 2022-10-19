import React from "react";
import { Link } from "react-router-dom";

function Medicinemutation() {
  return (
    <div className="col-lg-7 col-md-8">
    <div
      id="post"
      className="documentation_info rvfs-4"
      data-rvfs={4}
    >
      <article className="documentation_body" id="medicine-mutation">
        <div className="shortcode_title">
          <h1>Medicine Mutation</h1>
          <p>
            Medicine mutation merupakan sebuah proses memasukkan dan
            mengeluarkan jumlah obat di apotek baik yang berkaitan
            dengan transaksi maupun tidak.
          </p>
        </div>
        <div className="border_bottom" />
      </article>
      <article
        className="documentation_body"
        id="api-get-medicine-mutation"
      >
        <h4 className="c_head">
          <span className="badge bg-info ml-1">GET</span>
          /medicine-mutation medicine mutation list
        </h4>
        <div className="highlight">
          <div className="code-toolbar">
            <pre className=" language-htmlasc">
              <code className=" language-htmlasc" data-lang="html">
                http://103.228.245.122:3033/medicine-mutation
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
        <p>Menampilkan daftar semua mutasi obat.</p>
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
                <div>untuk memberikan nomor pada setiap halaman - Default: 1</div>
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
          </tbody>
        </table>
        {/*RESPONSE 200 */}
        <a
          className="toggle_btn"
          data-toggle="collapse"
          href="#jQ2bC3wnEH"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Response 200 - List data of medicine mutation
        </a>
        <div className="collapse multi-collapse" id="jQ2bC3wnEH">
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
                    "amount": "224",
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "created_at": "2012-04-23T18:25:43.511Z",
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "created_by": "1",
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "destination_warehouse_category": 2,
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "destination_warehouse_id": 2,
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "destination_warehouse_name": 2,
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
                    "medicine_id": 1,
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "medicine_name": "1",
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "source_warehouse_id": 1,
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "source_warehouse_name": "1",
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
        id="api-post-medicine-mutation"
      >
        <h4 className="c_head">
          <span className="badge bg-success ml-1">POST</span>
          /medicine-mutation create medicine mutation
        </h4>
        <div className="highlight">
          <div className="code-toolbar">
            <pre className=" language-htmlasc">
              <code className=" language-htmlasc" data-lang="html">
                http://103.228.245.122:3033/medicine-mutation
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
        API ini digunakan untuk transaksi obat antar gudang. Banyak validasi di sini. Tolong jangan menambahkan data secara langsung di database, gunakan Api ini sebagai gantinya atau Anda akan melanggar aturan sistem.
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
                <div>untuk menampilkan deskripsi muatan gudang yang dibutuhkan</div>
                <div>Example value | model</div>
                <div>
                  <pre className=" language-html">
                    <code className=" language-html" data-lang="html">
                      {"{"}
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      "amount": "224",
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      "destination_warehouse_id": 2,
                      <span className="token lf">{"\n"}</span>
                      <span className="token space"> </span>
                      <span className="token space"> </span>
                      "medicine_id": 1,
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
          Response 200 - Form Body of Medicine Mutation Form
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
                    "amount": "224",
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "destination_warehouse_id": 2,
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "medicine_id": 1,
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
    </div>
  </div>
  );
}

export default Medicinemutation;
