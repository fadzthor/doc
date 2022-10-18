import React from "react";
import { Link } from "react-router-dom";

function Patient() {
  return (
    <div className="col-lg-7 col-md-8">
              <div
                id="post"
                className="documentation_info rvfs-4"
                data-rvfs={4}
              >
                <article className="documentation_body" id="patient">
                  <div className="shortcode_title">
                    <h1>Patient</h1>
                    <p>
                      Pasien atau pesakit adalah seseorang yang menerima
                      perawatan medis. Sering kali, pasien menderita penyakit
                      atau cedera dan memerlukan bantuan dokter untuk
                      memulihkannya.
                    </p>
                  </div>
                  <div className="border_bottom" />
                </article>

                <article className="documentation_body" id="api-get-patient">
                  <h4 className="c_head">
                    <span className="badge bg-info ml-1">GET</span>/patient
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /patient
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
                  <p>Showing list of all patient.</p>

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
                          <div>Page number</div>
                          <div>
                            <div>
                              <input
                                type="text"
                                className
                                title
                                placeholder="page"
                                disabled
                              />
                            </div>
                          </div>
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
                            The amount of data you want to display - Default: 10
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
                          <div>name</div>
                          <div>string</div>
                          <div>
                            {"{"}query{"}"}
                          </div>
                        </td>
                        <td>
                          <div>Patient Name</div>
                          <div>
                            <input
                              type="text"
                              className
                              title
                              placeholder="name"
                              disabled
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <a
                    className="toggle_btn collapsed"
                    data-toggle="collapse"
                    href="#patient"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 OK
                  </a>
                  <div
                    className="multi-collapse collapse"
                    id="patient"
                    style={{}}
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"["}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "address": "Kampung Baru Rajabasa Bandar Lampung",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "birthday": {"{},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "contact": "+6289571637182",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_at": "2012-04-23T18:25:43.511Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "education": "Sarjana S1",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "gender": "Laki Laki",
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
                              "name": "I Made Sattvikas",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "nik": "1873716491264102",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "profession": "Pegawai Swasta",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "updated_at": "2012-04-23T18:25:43.511Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "warehouse_id": 1
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"]"}
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
                  {/* Response 422 medicine stock */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#ptient"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="ptient">
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
                  {/* Response 422 medicine stock */}

                  {/* Response 500 medicine stock  */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#ptientt"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="ptientt">
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
                  {/* Response 500 medicine stock  */}
                  {/* Response medicine stock */}
                  <div className="border_bottom mt-5" />
                </article>
                <article className="documentation_body" id="api-post-patient">
                  <h4 className="c_head">
                    <span className="badge bg-success ml-1">POST</span>/patient
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /patient
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
                    This API for create patient data and will be showed up on
                    patient List.
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
                          <div>Patient payload</div>
                          <div>
                            <pre className=" language-html">
                              <code className=" language-html" data-lang="html">
                                {"["}
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                {"{"}
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "address": "Kampung Baru Rajabasa Bandar
                                Lampung",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "birthday": {"{},"}
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "contact": "+6289571637182",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "created_at": "2012-04-23T18:25:43.511Z",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "education": "Sarjana S1",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "gender": "Laki Laki",
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
                                "name": "I Made Sattvikas",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "nik": "1873716491264102",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "profession": "Pegawai Swasta",
                              </code>
                            </pre>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <a
                    className="toggle_btn collapsed"
                    data-toggle="collapse"
                    href="#ppatient"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 OK
                  </a>
                  <div
                    className="multi-collapse collapse"
                    id="ppatient"
                    style={{}}
                  >
                    <div className="card card-body toggle_body">
                      <div className="highlight">
                        <div className="code-toolbar">
                          <pre className=" language-html">
                            <code className=" language-html" data-lang="html">
                              {"["}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"{"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "address": "Kampung Baru Rajabasa Bandar Lampung",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "birthday": {"{},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "contact": "+6289571637182",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "created_at": "2012-04-23T18:25:43.511Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "education": "Sarjana S1",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "gender": "Laki Laki",
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
                              "name": "I Made Sattvikas",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "nik": "1873716491264102",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "profession": "Pegawai Swasta",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "updated_at": "2012-04-23T18:25:43.511Z",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "warehouse_id": 1
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              {"]"}
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
                  {/* Response 422 medicine stock */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#ptient1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="ptient1">
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
                  {/* Response 422 medicine stock */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#ptient2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="ptient2">
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
                  {/* Response 500 medicine stock  */}
                  {/* Response medicine stock */}
                </article>

                <article className="documentation_body" id="api-delete-patient">
                  <h4 className="c_head">
                    <span className="badge bg-danger ml-1">DELETE</span>
                    /patient/(id)
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /patient
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
                    This API for delete patient data. This cant be delete if
                    some patient is used this unit.
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
                          <div>
                            {"{"}path{"}"}
                          </div>
                        </td>
                        <td>
                          <div>
                            Id of Patient, get it from Patient List API to
                            update the information by id
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
                      <tr></tr>
                    </tbody>
                  </table>

                  <a
                    className="toggle_btn collapsed"
                    data-toggle="collapse"
                    href="#Dpatient"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 OK
                  </a>
                  <div
                    className="multi-collapse collapse"
                    id="Dpatient"
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
                              "__typename": "string",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "data": {"{},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "status": true
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
                  {/* Response 422 medicine stock */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#Dpatient1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="Dpatient1">
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
                  {/* Response 422 medicine stock */}

                  {/* Response 500 medicine stock  */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#Dpatient2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="Dpatient2">
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
                  {/* Response 500 medicine stock  */}
                  {/* Response medicine stock */}
                </article>

                <article className="documentation_body" id="api-patch-patient">
                  <h4 className="c_head">
                    <span className="badge bg-success ml-1">PATCH</span>
                    /patient/(id)
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /patient
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
                    This API for update patient data and will be replaced old
                    patient information with your new input, You have to get the
                    id of the data you want to change, Hit Patient List API to
                    get it.
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
                          <div>
                            {"{"}path{"}"}
                          </div>
                        </td>
                        <td>
                          <div>
                            Id of Patient, get it from Patient List API to
                            update the information by id
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
                        <div>payload</div>
                        <div>object</div>
                        <div>
                          {"{"}body{"}"}
                        </div>
                        <td>
                          <div>Patient Payload</div>
                          <div>
                            <pre className=" language-html">
                              <code className=" language-html" data-lang="html">
                                {"{"}
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "address": "Kampung Baru Rajabasa Bandar
                                Lampung",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "birthday": "1999-01-01",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "contact": "+6289571637182",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "education": "Sarjana S1",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "gender": "Laki Laki",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "name": "I Made Sattvikas",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "nik": "1873716491264102",
                                <span className="token lf">{"\n"}</span>
                                <span className="token space"> </span>
                                <span className="token space"> </span>
                                "profession": "Pegawai Swasta"
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

                  <a
                    className="toggle_btn collapsed"
                    data-toggle="collapse"
                    href="#Ppatient"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 200 OK
                  </a>
                  <div
                    className="multi-collapse collapse"
                    id="Ppatient"
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
                              "__typename": "string",
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "data": {"{},"}
                              <span className="token lf">{"\n"}</span>
                              <span className="token space"> </span>
                              <span className="token space"> </span>
                              "status": true
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
                  {/* Response 422 medicine stock */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#Ppatient1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div className="collapse multi-collapse" id="Ppatient1">
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
                  {/* Response 422 medicine stock */}

                  {/* Response 500 medicine stock  */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#Ppatient2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div className="collapse multi-collapse" id="Ppatient2">
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
                  {/* Response 500 medicine stock  */}
                  {/* Response medicine stock */}
                </article>
              </div>
            </div>
  );
}

export default Patient;
