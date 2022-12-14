import React from "react";
import { Link } from "react-router-dom";

function Medicineoutheader() {
  return (
<div className="col-lg-7 col-md-8">
              <div
                id="post"
                className="documentation_info rvfs-4"
                data-rvfs={4}
              >
                <article
                  className="documentation_body"
                  id="medicine-out-header"
                >
                  <div className="shortcode_title">
                    <h1>Medicine Out Header</h1>
                    <p>
                      Menampilkan daftar semua Header Obat Keluar dengan Rincian
                      Obat Keluar. Setiap transaksi tentang obat ke pasien akan
                      muncul di sini.
                    </p>
                  </div>
                  <div className="border_bottom" />
                </article>
                <article
                  className="documentation_body"
                  id="api-get-medicine-out-header"
                >
                  <h4 className="c_head">
                    <span className="badge bg-success ml-1">GET</span>/ Medicine
                    - Out - Header
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          http://103.228.245.122:3033/medicine-out-header
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
                  <p>Menampilkan daftar transaksi obat </p>
                  <>
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
                            <tr data-param-name="page" data-param-in="path">
                              <td className="parameters-col_name">
                                <div className="parameter__name">page</div>
                                <div className="parameter__type">number</div>
                                <div className="parameter__deprecated">
                                  &nbsp;
                                </div>
                                <div className="parameter__in">(path)</div>
                              </td>
                              <td className="parameters-col_description">
                                <div className="markdown">
                                  <p>untuk menampilkan nomer halaman </p>
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
                                <div className="parameter__name">limit</div>
                                <div className="parameter__type">number</div>
                                <div className="parameter__deprecated">
                                  &nbsp;
                                </div>
                                <div className="parameter__in">(query)</div>
                              </td>
                              <td className="parameters-col_description">
                                <div className="markdown">
                                  <p>
                                    jumlah data yang ingin di tampilkan -
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
                            <tr
                              data-param-name="warehouse_id"
                              data-param-in="query"
                            >
                              <td className="parameters-col_name">
                                <div className="parameter__name">
                                  warehouse_id
                                </div>
                                <div className="parameter__type">integer</div>
                                <div className="parameter__deprecated">
                                  &nbsp;
                                </div>
                                <div className="parameter__in">(query)</div>
                              </td>
                              <td className="parameters-col_description">
                                <div className="markdown">
                                  <p>untuk menampilkan id gudang </p>
                                </div>
                                <input
                                  className=""
                                  title=""
                                  type="text"
                                  defaultValue=""
                                  placeholder="warehouse_id"
                                />
                              </td>
                            </tr>
                            <tr
                              data-param-name="patient_name"
                              data-param-in="query"
                            >
                              <td className="parameters-col_name">
                                <div className="parameter__name">
                                  patient_name
                                </div>
                                <div className="parameter__type">string</div>
                                <div className="parameter__deprecated">
                                  &nbsp;
                                </div>
                                <div className="parameter__in">(query)</div>
                              </td>
                              <td className="parameters-col_description">
                                <div className="markdown">
                                  <p>untuk menampilkan nama pasien </p>
                                </div>
                                <input
                                  className=""
                                  title=""
                                  type="text"
                                  defaultValue=""
                                  placeholder="patient_name"
                                />
                              </td>
                            </tr>
                            <tr
                              data-param-name="created_by"
                              data-param-in="query"
                            >
                              <td className="parameters-col_name">
                                <div className="parameter__name">
                                  created_by
                                </div>
                                <div className="parameter__type">integer</div>
                                <div className="parameter__deprecated">
                                  &nbsp;
                                </div>
                                <div className="parameter__in">(query)</div>
                              </td>
                              <td className="parameters-col_description">
                                <div className="markdown">
                                  <p>untuk menampilkan id user atau pengguna </p>
                                </div>
                                <input
                                  className=""
                                  title=""
                                  type="text"
                                  defaultValue=""
                                  placeholder="created_by"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>

                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#lVhxosIk2Q"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 List data of Medicine Out
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
                              <span className="token space"></span>"complaint":
                              <span className="token space"> </span>"Sakit perut
                              dan sakit kepala sebelah",
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
                              <span className="token space"></span>"diagnosis":
                              <span className="token space"></span>"HIV",
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
                              <span className="token space"></span>"medicine":
                              <span className="token space"></span>[
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
                              {"{"}
                              <span className="token space"></span>
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
                              <span className="token space"></span>"amount":
                              <span className="token space"></span>200,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>{" "}
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>"id":
                              <span className="token space"></span>1,
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
                              "Medicine_id":{" "}
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
                              <span className="token space"></span>{" "}
                              "Paracetamol",
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
                              "medicine_out_header_id":
                              <span className="token space"></span>1,
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
                              <span className="token space"> </span>2,
                              <span className="token space"></span>
                              {"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>{" "}
                              <span className="token space"> </span>{" "}
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
                              <span className="token space"></span>],
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>{" "}
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
                              <span className="token space"></span>"patient_id":
                              <span className="token space"></span>1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>{" "}
                              <span className="token space"> </span>{" "}
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>{" "}
                              "patient_name":{" "}
                              <span className="token space"></span>"Made",
                              <span className="token lf">{"\n"}</span>
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
                              "warehouse_id":{" "}
                              <span className="token space"></span>1,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              "warehouse_name":{" "}
                              <span className="token space"></span>"Puskesmas"
                              <span className="token lf">{"\n"}</span>
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
                              {"}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>]
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
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
                    href="#myrna1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 response Body
                  </a>
                  <div className="collapse multi-collapse" id="myrna1">
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
                              <span className="token space"> </span>{" "}
                              "__typename"
                              <span className="token space"></span>
                              "ListMedicineOutHeader"
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>"data":
                              <span className="token space"> </span>null,
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
                              <span className="token space"></span>"status":
                              <span className="token space"></span>
                              true,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>"meta":
                              <span className="token space"></span>
                              {"{"}
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
                              "current_page":
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
                              <span className="token space"></span>
                              {"}"}
                              <span className="token space"></span>[
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
                    href="#nyaw4ti"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 response headers
                  </a>
                  <div className="collapse multi-collapse" id="nyaw4ti">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>{" "}
                              access-control-allow-origin:
                              <span className="token space"></span>*
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              content-length:
                              <span className="token space"> </span>90
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
                              <span className="token space"></span>{" "}
                              content-type:
                              <span className="token space"></span>
                              application/json
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span> date:
                              <span className="token space"></span> Tue,11 Oct
                              2022 06:17:06 GMT
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
                              <span className="token space"></span>server:
                              <span className="token space"></span>60
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
                              <span className="token space"></span> vary:
                              <span className="token space"></span> Origin
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
                  id="api-post-medicine-out-header"
                >
                  <h4 className="c_head">
                    <span className="badge bg-info ml-1">POST</span>/ medicine -
                    out -header
                  </h4>
                  <div className="highlight">
                    <p>
                      {" "}
                      API ini untuk membuat data header obat keluar dan akan
                      ditampilkan di API Daftar Header Obat Keluar,<br></br>
                      Anda dapat membawa larik Detail Obat Keluar untuk
                      terhubung dengan Header ini
                    </p>
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          'http://103.228.245.122:3033/medicine-out-header
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
                    membuat dan Menampilkan data transaksi obat pada out Header
                  </p>
                  <h4 className="c_head"></h4>
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
                                {/* react-text: 1542 */}payload
                                {/* /react-text */}
                                <span>&nbsp;*</span>
                              </div>
                              <div className="parameter__type">
                                {/* react-text: 1545 */}object
                                {/* /react-text */}
                              </div>
                              <div className="parameter__deprecated" />
                              <div className="parameter__in">
                                {/* react-text: 1548 */}({/* /react-text */}
                                {/* react-text: 1549 */}body{/* /react-text */}
                                {/* react-text: 1550 */}){/* /react-text */}
                              </div>
                            </td>
                            <td className="parameters-col_description">
                              <div className="markdown">
                                <p>untuk menampilkan data obat header keluar </p>
                              </div>
                              <div className="model-example">
                                <ul className="tab">
                                  <li className="tabitem active">
                                    <a className="tablinks" data-name="example">
                                      Example Value
                                    </a>
                                  </li>
                                  <li className="tabitem">
                                    <a className="tablinks" data-name="model">
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
                                          background: "rgb(51, 51, 51)",
                                          color: "white",
                                        }}
                                      >
                                        <code
                                          className="language-json"
                                          style={{ whiteSpace: "pre" }}
                                        >
                                          <span>
                                            {/* react-text: 1727 */}
                                            {"{"}
                                            {"\n"}
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1729 */}
                                            {"  "}
                                            {/* /react-text */}
                                          </span>
                                          <span className="hljs-attr">
                                            {/* react-text: 1731 */}"complaint"
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1733 */}:{" "}
                                            {/* /react-text */}
                                          </span>
                                          <span
                                            style={{
                                              color: "rgb(162, 252, 162)",
                                            }}
                                          >
                                            {/* react-text: 1735 */}"Sakit perut
                                            dan sakit kepala sebelah"
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1737 */},{"\n"}
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1739 */}
                                            {"  "}
                                            {/* /react-text */}
                                          </span>
                                          <span className="hljs-attr">
                                            {/* react-text: 1741 */}"diagnosis"
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1743 */}:{" "}
                                            {/* /react-text */}
                                          </span>
                                          <span
                                            style={{
                                              color: "rgb(162, 252, 162)",
                                            }}
                                          >
                                            {/* react-text: 1745 */}"HIV"
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1747 */},{"\n"}
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1749 */}
                                            {"  "}
                                            {/* /react-text */}
                                          </span>
                                          <span className="hljs-attr">
                                            {/* react-text: 1751 */}"medicine"
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1753 */}: [{"\n"}
                                            {/* /react-text */}
                                          </span>
                                          {/* react-text: 1754 */}
                                          {"    "}
                                          {"{"}
                                          {"\n"}
                                          {/* /react-text */}
                                          <span>
                                            {/* react-text: 1756 */}
                                            {"      "}
                                            {/* /react-text */}
                                          </span>
                                          <span className="hljs-attr">
                                            {/* react-text: 1758 */}"amount"
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1760 */}:{" "}
                                            {/* /react-text */}
                                          </span>
                                          <span
                                            style={{
                                              color: "rgb(211, 99, 99)",
                                            }}
                                          >
                                            {/* react-text: 1762 */}200
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1764 */},{"\n"}
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1766 */}
                                            {"      "}
                                            {/* /react-text */}
                                          </span>
                                          <span className="hljs-attr">
                                            {/* react-text: 1768 */}
                                            "medicine_id"
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1770 */}:{" "}
                                            {/* /react-text */}
                                          </span>
                                          <span
                                            style={{
                                              color: "rgb(211, 99, 99)",
                                            }}
                                          >
                                            {/* react-text: 1772 */}1
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1774 */}
                                            {"\n"}
                                            {/* /react-text */}
                                          </span>
                                          {/* react-text: 1775 */}
                                          {"    "}
                                          {"}"}
                                          {"\n"}
                                          {/* /react-text */}
                                          {/* react-text: 1776 */}
                                          {"  "}],{"\n"}
                                          {/* /react-text */}
                                          <span>
                                            {/* react-text: 1778 */}
                                            {"  "}
                                            {/* /react-text */}
                                          </span>
                                          <span className="hljs-attr">
                                            {/* react-text: 1780 */}"patient_id"
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1782 */}:{" "}
                                            {/* /react-text */}
                                          </span>
                                          <span
                                            style={{
                                              color: "rgb(211, 99, 99)",
                                            }}
                                          >
                                            {/* react-text: 1784 */}1
                                            {/* /react-text */}
                                          </span>
                                          <span>
                                            {/* react-text: 1786 */}
                                            {"\n"}
                                            {/* /react-text */}
                                          </span>
                                          {/* react-text: 1787 */}
                                          {"}"}
                                          {"\n"}
                                          {/* /react-text */}
                                        </code>
                                      </pre>
                                    </div>
                                    <div className="body-param-options">
                                      <label htmlFor="">
                                        <span>Parameter content type</span>
                                        <div className="content-type-wrapper body-param-content-type">
                                          <select
                                            aria-label="Parameter content type"
                                            className="content-type"
                                          >
                                            <option value="application/json">
                                              application/json
                                            </option>
                                          </select>
                                        </div>
                                      </label>
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

                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#xcChsXY6Ni"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 Form Body of Medicine Out Header
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
                              <span className="token space"> </span>"complaint":
                              <span className="token space"> </span>"Sakit perut
                              dan
                              <span className="token space"> </span>Sakit kepala
                              sebelah",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "diagnosis":
                              <span className="token space"> </span>
                              "HIV",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "Medicine":
                              <span className="token space"> </span>[
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
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>"amount":
                              <span className="token space"> </span>200,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "Medicine_id":
                              <span className="token space"> </span>1,
                              <span className="token lf">{"\n"}</span>
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
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"]"},<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "patient_id":
                              <span className="token space"> </span>1
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
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
                    href="#Niyamyrna"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 Response Body
                  </a>
                  <div className="collapse multi-collapse" id="Niyamyrna">
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
                              <span className="token space"> </span>
                              "error":
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
                              <span className="token space"> </span>[
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "message":
                              <span className="token space"> </span>
                              "oops!.. Hanya pengguna yang berada di Gudang
                              Penjualan yang dapat mengeluarkan atau menjual
                              obat"
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
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"]"},<span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "__typename":
                              <span className="token space"> </span>{" "}
                              "CreateMedicineOutHeader",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>"status":
                              <span className="token space"> </span>false,
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"}"}
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
                    href="#nyaw4ti"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 response headers
                  </a>
                  <div className="collapse multi-collapse" id="nyaw4ti">
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>{" "}
                              access-control-allow-origin:
                              <span className="token space"></span>*
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              <span className="token space"> </span>
                              <span className="token space"></span>
                              content-length:
                              <span className="token space"> </span>176
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
                              <span className="token space"></span>{" "}
                              content-type:
                              <span className="token space"></span>
                              application/json
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span>
                              <span className="token space"></span> date:
                              <span className="token space"></span> Tue,11 Oct
                              2022 09:28:09 GMT
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
                              <span className="token space"></span>server:
                              <span className="token space"></span>60
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
                              <span className="token space"></span> vary:
                              <span className="token space"></span> Origin
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
                  id="api-get-detail-medicine-out-header"
                >
                  <h4 className="c_head">
                    <span className="badge bg-success ml-6">GET</span>/ medicine
                    -out-header / {"{"} id {"}"}
                  </h4>
                  <div className="highlight">
                    API ini digunakan untuk melihat detail data header obat
                    keluar berdasarkan id-nya.<br></br>
                    Informasi pohon dalam yang dapat Anda lihat dengan API in
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          http://103.228.245.122:3033/medicine-out-header/1
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
                  <p>melihat detail data obat yang ada di header</p>
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
                              id dari header obat keluar,di dapat dari 
                              id header obat yang ada di daftar API untuk 
                              memperbaharui  informasi menggunakan id 
                             
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
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#jQ2bC3wnEH"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 Success Response return True
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
                              {"{}"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>"status":
                              <span className="token space"> </span>"true"
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

                <article
                  className="documentation_body"
                  id="api-delete-medicine-out-header"
                >
                  <h4 className="c_head">
                    <span className="badge bg-danger ml-1">DELETE</span>
                    /medicine -out-header-/ {"{"} id{"}"}
                  </h4>
                  <div className="highlight">
                    <p>
                      API ini untuk menghapus header obat dengan id-nya.
                      <br></br>
                      Stok obat akan kembali ke gudang saat data ini dihapus.
                    </p>
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          http://103.228.245.122:3033/medicine-out-header/1
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
                            id dari header obat keluar,di dapat dari 
                              id header obat yang ada di daftar API untuk 
                              memperbaharui  informasi menggunakan id 
                             
                              
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

                <article
                  className="documentation_body"
                  id="api-patch-medicine-out-header"
                >
                  <h4 className="c_head">
                    <span className="badge bg-succes ml-1">PATCH</span>/medicine
                    -out-header-/ {"{"} id{"}"}
                  </h4>
                  <div className="highlight">
                    <p>
                      API ini untuk memperbarui informasi obat keluar header
                      dengan id-nya dan <br></br>
                      akan menggantikan informasi terakhir dengan input Anda.
                      <br></br>
                      Ada beberapa validasi Anda tidak bisa begitu saja
                      memanipulasi stok obat dengan input Anda.<br></br>
                      Stok obat akan terhubung dengan API ini.
                    </p>
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          http://103.228.245.122:3033/medicine-out-header/1
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
                            <tr data-param-name="id" data-param-in="path">
                              <td className="parameters-col_name">
                                <div className="parameter__name required">
                                  {/* react-text: 3910 */}id{/* /react-text */}
                                  &nbsp;*
                                </div>
                                <div className="parameter__type">
                                  {/* react-text: 3913 */}integer
                                  {/* /react-text */}
                                </div>
                                <div className="parameter__deprecated">
                                  &nbsp;
                                </div>
                                <div className="parameter__in">
                                  {/* react-text: 3916 */}({/* /react-text */}
                                  {/* react-text: 3917 */}path
                                  {/* /react-text */}
                                  {/* react-text: 3918 */}){/* /react-text */}
                                </div>
                              </td>
                              <td className="parameters-col_description">
                                <div className="markdown">
                                  <p>
                                  id dari header obat keluar,di dapat dari 
                              id header obat yang ada di daftar API untuk 
                              memperbaharui  informasi menggunakan id 
                             
                                  </p>
                                </div>
                                <input
                                  className=""
                                  title=""
                                  disabled="disabled"
                                  type="text"
                                  defaultValue=""
                                  placeholder="id"
                                />
                              </td>
                            </tr>
                            <tr data-param-name="payload" data-param-in="body">
                              <td className="parameters-col_name">
                                <div className="parameter__name required">
                                  {/* react-text: 3925 */}payload
                                  {/* /react-text */}&nbsp;*
                                </div>
                                <div className="parameter__type">
                                  {/* react-text: 3928 */}object
                                  {/* /react-text */}
                                </div>
                                <div className="parameter__deprecated">
                                  &nbsp;
                                </div>
                                <div className="parameter__in">
                                  {/* react-text: 3931 */}({/* /react-text */}
                                  {/* react-text: 3932 */}body
                                  {/* /react-text */}
                                  {/* react-text: 3933 */}){/* /react-text */}
                                </div>
                              </td>
                              <td className="parameters-col_description">
                                <div className="markdown">
                                  <p>Medicine Out Header Update payload</p>
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
                                      <a className="tablinks" data-name="model">
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
                                            {/* react-text: 4077 */}
                                            {"{"}
                                            {"\n"}
                                            {/* /react-text */}
                                            {/* react-text: 4079 */}
                                            {"  "}
                                            {/* /react-text */}
                                            <span className="hljs-attr">
                                              {/* react-text: 4081 */}
                                              "complaint"
                                              {/* /react-text */}
                                            </span>
                                            {/* react-text: 4083 */}:{" "}
                                            {/* /react-text */}
                                            <span style={{ color: "#a2fca2" }}>
                                              {/* react-text: 4085 */}"Sakit
                                              perut dan sakit kepala sebelah"
                                              {/* /react-text */}
                                            </span>
                                            {/* react-text: 4087 */},{"\n"}
                                            {/* /react-text */}
                                            {/* react-text: 4089 */}
                                            {"  "}
                                            {/* /react-text */}
                                            <span className="hljs-attr">
                                              {/* react-text: 4091 */}
                                              "diagnosis"
                                              {/* /react-text */}
                                            </span>
                                            {/* react-text: 4093 */}:{" "}
                                            {/* /react-text */}
                                            <span style={{ color: "#a2fca2" }}>
                                              {/* react-text: 4095 */}"HIV"
                                              {/* /react-text */}
                                            </span>
                                            {/* react-text: 4097 */},{"\n"}
                                            {/* /react-text */}
                                            {/* react-text: 4099 */}
                                            {"  "}
                                            {/* /react-text */}
                                            <span className="hljs-attr">
                                              {/* react-text: 4101 */}"medicine"
                                              {/* /react-text */}
                                            </span>
                                            {/* react-text: 4103 */}: [{"\n"}
                                            {/* /react-text */}
                                            {/* react-text: 4104 */}
                                            {"    "}
                                            {"{"}
                                            {"\n"}
                                            {/* /react-text */}
                                            {/* react-text: 4106 */}
                                            {"      "}
                                            {/* /react-text */}
                                            <span className="hljs-attr">
                                              {/* react-text: 4108 */}"amount"
                                              {/* /react-text */}
                                            </span>
                                            {/* react-text: 4110 */}:{" "}
                                            {/* /react-text */}
                                            <span style={{ color: "#d36363" }}>
                                              {/* react-text: 4112 */}200
                                              {/* /react-text */}
                                            </span>
                                            {/* react-text: 4114 */},{"\n"}
                                            {/* /react-text */}
                                            {/* react-text: 4116 */}
                                            {"      "}
                                            {/* /react-text */}
                                            <span className="hljs-attr">
                                              {/* react-text: 4118 */}"id"
                                              {/* /react-text */}
                                            </span>
                                            {/* react-text: 4120 */}:{" "}
                                            {/* /react-text */}
                                            <span style={{ color: "#d36363" }}>
                                              {/* react-text: 4122 */}1
                                              {/* /react-text */}
                                            </span>
                                            {/* react-text: 4124 */},{"\n"}
                                            {/* /react-text */}
                                            {/* react-text: 4126 */}
                                            {"      "}
                                            {/* /react-text */}
                                            <span className="hljs-attr">
                                              {/* react-text: 4128 */}
                                              "medicine_id"
                                              {/* /react-text */}
                                            </span>
                                            {/* react-text: 4130 */}:{" "}
                                            {/* /react-text */}
                                            <span style={{ color: "#d36363" }}>
                                              {/* react-text: 4132 */}1
                                              {/* /react-text */}
                                            </span>
                                            {/* react-text: 4134 */}
                                            {"\n"}
                                            {/* /react-text */}
                                            {/* react-text: 4135 */}
                                            {"    "}
                                            {"}"}
                                            {"\n"}
                                            {/* /react-text */}
                                            {/* react-text: 4136 */}
                                            {"  "}],{"\n"}
                                            {/* /react-text */}
                                            {/* react-text: 4138 */}
                                            {"  "}
                                            {/* /react-text */}
                                            <span className="hljs-attr">
                                              {/* react-text: 4140 */}
                                              "patient_id"
                                              {/* /react-text */}
                                            </span>
                                            {/* react-text: 4142 */}:{" "}
                                            {/* /react-text */}
                                            <span style={{ color: "#d36363" }}>
                                              {/* react-text: 4144 */}1
                                              {/* /react-text */}
                                            </span>
                                            {/* react-text: 4146 */}
                                            {"\n"}
                                            {/* /react-text */}
                                            {/* react-text: 4147 */}
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

export default Medicineoutheader;
