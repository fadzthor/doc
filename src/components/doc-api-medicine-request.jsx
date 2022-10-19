import React from "react";
import { Link } from "react-router-dom";

function Medicinerequest() {
  return (
    <div className="col-lg-7 col-md-8">
    <div
      id="post"
      className="documentation_info rvfs-4"
      data-rvfs={4}
    >
      <article className="documentation_body" id="medicine-request">
        <div className="shortcode_title">
          <h1>Medicine Request</h1>
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
        id="api-get-medicine-request"
      >
        <h4 className="c_head">
          <span className="badge bg-info ml-1">GET</span>
          /medicine-request
        </h4>
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
        <p>Menampilkan daftar semua permintaan obat menurut tahun.</p>

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
                <div>untuk memberikan nomor pada setiap halaman</div>
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
                <div>Page</div>
                <div>limit</div>
                <div>number</div>
                <div>
                  {"{"}query{"}"}
                </div>
              </td>
              <td>
                <div>
                Jumlah data yang ingin Anda tampilkan
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
                <div>years</div>
                <div>ineteger</div>
                <div>
                  {"{"}query{"}"}
                </div>
              </td>
              <td>
                <div>Tahun permintaan</div>
                <div>
                  <input
                    type="text"
                    className
                    title
                    placeholder="years"
                    disabled
                  />
                </div>
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
                    "data": [<span className="token lf">{"\n"}</span>
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
                    <span className="token space"> </span>
                    {"{"}
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
                    <span className="token space"> </span>
                    {"{"}
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
                    <span className="token space"> </span>
                    {"{"}
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
        {/* Response 500 medicine request*/}
        {/* Response medicine request*/}
      </article>
      <article
        className="documentation_body"
        id="api-post-medicine-request"
      >
        <h4 className="c_head">
          <span className="badge bg-success ml-1">POST</span>
          /medicine-request
        </h4>

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
        API ini digunakan untuk membuat permintaan obat. data ini
          diperlukan untuk Dokumen RKO (Rencana Kebutuhan Obat). Ini
          akan menampilkan jumlah permintaan obat di masing-masing
          gudang pada tahun tertentu.
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
                <div>untuk menampilkan deskripsi Muatan Unit Obat yang dibutuhkan</div>
                <div>
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
                </div>
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
        {/* Response 500 medicine request*/}
        {/* Response medicine request*/}
      </article>
    </div>
  </div>
  );
}

export default Medicinerequest;
