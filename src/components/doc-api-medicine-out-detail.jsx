import React from "react";
import { Link } from "react-router-dom";

function Medicineoutdetail() {
  return (
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
                          <p>menampilkan data obat yang keluar </p>
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
                                    </span> //jumlah obat 
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
                  Id of Medicine Out Detail, dapatkan dari Medicine Out Header 
                  List API untuk menghapus informasi dengan id
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
  );
}

export default Medicineoutdetail;
