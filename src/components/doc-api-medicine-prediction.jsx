import React from "react";
import { Link } from "react-router-dom";

function Medicineprediction() {
  return (
    <div className="col-lg-7 col-md-8">
    <div
      id="post"
      className="documentation_info rvfs-4"
      data-rvfs={4}
    >
      <article
        className="documentation_body"
        id="medicine-prediction"
      >
        <div className="shortcode_title">
          <h1>Medicine Prediction</h1>
          <p>
            Menampilkan daftar semua prediksi obat berdasarkan tahun.
          </p>
        </div>
        <div className="border_bottom" />
      </article>
      <article
        className="documentation_body"
        id="api-get-medicine-prediction"
      >
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
                    <th className="col_header parameters-col_name">
                      Name
                    </th>
                    <th className="col_header parameters-col_description">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-param-name="page" data-param-in="query">
                    <td className="parameters-col_name">
                      <div className="parameter__name">
                        {/* react-text: 4844 */}page
                        {/* /react-text */}
                      </div>
                      <div className="parameter__type">
                        {/* react-text: 4846 */}number
                        {/* /react-text */}
                      </div>
                      <div className="parameter__deprecated">
                        &nbsp;
                      </div>
                      <div className="parameter__in">
                        {/* react-text: 4849 */}({/* /react-text */}
                        {/* react-text: 4850 */}query
                        {/* /react-text */}
                        {/* react-text: 4851 */}){/* /react-text */}
                      </div>
                    </td>
                    <td className="parameters-col_description">
                      <div className="markdown">
                        <p>menampilkan nomor halaman- Default: 1</p>
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
                        {/* react-text: 4858 */}limit
                        {/* /react-text */}
                      </div>
                      <div className="parameter__type">
                        {/* react-text: 4860 */}number
                        {/* /react-text */}
                      </div>
                      <div className="parameter__deprecated">
                        &nbsp;
                      </div>
                      <div className="parameter__in">
                        {/* react-text: 4863 */}({/* /react-text */}
                        {/* react-text: 4864 */}query
                        {/* /react-text */}
                        {/* react-text: 4865 */}){/* /react-text */}
                      </div>
                    </td>
                    <td className="parameters-col_description">
                      <div className="markdown">
                        <p>
                          untuk menampilkan jumlah data obat yang ingin di tampilkan  -
                          Default: 10
                        </p>
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
                        {/* react-text: 4872 */}years
                        {/* /react-text */}
                      </div>
                      <div className="parameter__type">
                        {/* react-text: 4874 */}integer
                        {/* /react-text */}
                      </div>
                      <div className="parameter__deprecated">
                        &nbsp;
                      </div>
                      <div className="parameter__in">
                        {/* react-text: 4877 */}({/* /react-text */}
                        {/* react-text: 4878 */}query
                        {/* /react-text */}
                        {/* react-text: 4879 */}){/* /react-text */}
                      </div>
                    </td>
                    <td className="parameters-col_description">
                      <div className="markdown">
                        <p>untuk menampilkan prediksi obat tahunan</p>
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
                  <tr
                    data-param-name="medicine_id"
                    data-param-in="query"
                  >
                    <td className="parameters-col_name">
                      <div className="parameter__name">
                        {/* react-text: 4886 */}medicine_id
                        {/* /react-text */}
                      </div>
                      <div className="parameter__type">
                        {/* react-text: 4888 */}integer
                        {/* /react-text */}
                      </div>
                      <div className="parameter__deprecated">
                        &nbsp;
                      </div>
                      <div className="parameter__in">
                        {/* react-text: 4891 */}({/* /react-text */}
                        {/* react-text: 4892 */}query
                        {/* /react-text */}
                        {/* react-text: 4893 */}){/* /react-text */}
                      </div>
                    </td>
                    <td className="parameters-col_description">
                      <div className="markdown">
                        <p>menampilkan id obat </p>
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
          Response 200 List data of Medicine Prediction
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
                    <span className="token space"></span>
                    "medicine_id":
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
                    <span className="token space"></span>
                    "medicine_name":
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
                    <span className="token space"></span>
                    "medicine_stock":
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
                    "medicine_stock_id":
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
                    <span className="token space"></span>
                    "2012-04-23T18:25:45:43.511Z",
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
      </article>
      <div className="border_bottom mt-5" />

      <article
        className="documentation_body"
        id="api-post-medicine-prediction"
      >
        <h4 className="c_head">
          <span className="badge bg-info ml-1">POST</span>/
          medicine-prediction
        </h4>
        <div className="highlight">
          <p>
            {" "}
            API ini digunakan untuk membuat prediksi obat.<br></br>
            Data ini diperlukan untuk Dokumen RKO (Rencana Kebutuhan
            Obat). <br></br>
            Ini akan memprediksi sisa stok obat di gudang pada tahun
            tertentu.
          </p>
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
                    <th className="col_header parameters-col_name">
                      Name
                    </th>
                    <th className="col_header parameters-col_description">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-param-name="payload" data-param-in="body">
                    <td className="parameters-col_name">
                      <div className="parameter__name required">
                        {/* react-text: 5135 */}payload
                        {/* /react-text */}&nbsp;*
                      </div>
                      <div className="parameter__type">
                        {/* react-text: 5138 */}object
                        {/* /react-text */}
                      </div>
                      <div className="parameter__deprecated">
                        &nbsp;
                      </div>
                      <div className="parameter__in">
                        {/* react-text: 5141 */}({/* /react-text */}
                        {/* react-text: 5142 */}body
                        {/* /react-text */}
                        {/* react-text: 5143 */}){/* /react-text */}
                      </div>
                    </td>
                    <td className="parameters-col_description">
                      <div className="markdown">
                        <p>prediski obat keluar </p>
                      </div>
                      <div className="model-example">
                        <ul className="tab">
                          <li className="tabitem active">
                            <a
                              className="tablinks"
                              data-name="example"
                            >
                              Edit Value
                            </a>
                          </li>
                          <li className="tabitem">
                            <a
                              className="tablinks inactive"
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
                            <textarea
                              className="body-param__text"
                              style={{ width: 324, height: 143 }}
                              defaultValue={
                                '{\n  "amount": 224,\n  "medicine_stock_id": 1,\n  "years": 2022\n}'
                              }
                            />
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
                    <span className="token space"> </span>
                    {"}"}
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
        id="api-delete-medicine-prediction"
      >
        <h4 className="c_head">
          <span className="badge bg-danger ml-1">DELETE</span>
          /medicine-prediction {"{"} id{"}"}
        </h4>
        <div className="highlight">
          <p>
            API ini untuk menghapus data prediksi obat berdasarkan
            idnya.
          </p>
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
          menghapus data obat dengan id dan obat akan kembali ke
          gudang saat data di hapus
        </p>
        <h4 className="c_head">parameter</h4>
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
                   id dari prediski obat , di dapat dari id prediksi obat yang ada 
                   di list API  untuk menghapus data informasi obat 
                   menggunakan id  
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
                    <span className="token space"> </span>
                    "__typename":
                    <span className="token space"> </span>"string",
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>"data":
                    <span className="token space"> </span>
                    {"{}"},<span className="token lf">{"\n"}</span>
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

export default Medicineprediction;
