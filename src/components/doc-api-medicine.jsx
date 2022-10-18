import React from "react";


function Medicine() {
  return (
    
        <div className="col-lg-7 col-md-8">
          <div
            id="post"
            className="documentation_info rvfs-4"
            data-rvfs={4}
          >
            {/* /medicine */}
            <article className="documentation_body" id="medicine">
              <div className="shortcode_title">
                <h1>Medicine</h1>
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
            <article className="documentation_body" id="api-get-medicine">
              <h4 className="c_head">
                <span className="badge bg-success ml-1">GET</span>/medicine
                medicine list
              </h4>
              <div className="highlight">
                <div className="code-toolbar">
                  <pre className=" language-htmlasc">
                    <code className=" language-htmlasc" data-lang="html">
                      http://103.228.245.122:3033/medicine
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
              <p>Showing list of all medicine.</p>
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
                      <div>page number</div>
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
                        The amount of data you want to display - Default: 10
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
                      <div>medicine_name</div>
                      <div>string</div>
                      <div>
                        {"{"}query{"}"}
                      </div>
                    </td>
                    <td>
                      <div>Medicine Name</div>
                      <input
                        type="text"
                        class=""
                        title=""
                        placeholder="medicine_name"
                        value=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>start_medicine_price</div>
                      <div>integer</div>
                      <div>
                        {"{"}query{"}"}
                      </div>
                    </td>
                    <td>
                      <div>Medicine Price Start - Default: 0</div>
                      <input
                        type="text"
                        class=""
                        title=""
                        placeholder="start_medicine_price"
                        value=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>end_medicine_price</div>
                      <div>integer</div>
                      <div>
                        {"{"}query{"}"}
                      </div>
                    </td>
                    <td>
                      <div>Medicine Price End - Default: 1000000000 </div>
                      <input
                        type="text"
                        class=""
                        title=""
                        placeholder="end_medicine_price"
                        value=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>category_id</div>
                      <div>integer</div>
                      <div>
                        {"{"}query{"}"}
                      </div>
                    </td>
                    <td>
                      <div>Medicine Category ID</div>
                      <input
                        type="text"
                        class=""
                        title=""
                        placeholder="category_id"
                        value=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>unit_id</div>
                      <div>integer</div>
                      <div>
                        {"{"}query{"}"}
                      </div>
                    </td>
                    <td>
                      <div>Medicine Unit ID</div>
                      <input
                        type="text"
                        class=""
                        title=""
                        placeholder="unit_id"
                        value=""
                      />
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Response M 200 */}
              <a
                className="toggle_btn"
                data-toggle="collapse"
                href="#medicine_r200"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 200 - List data of medicine
              </a>
              <div className="collapse multi-collapse" id="medicine_r200">
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
                          <span className="token space"> </span>
                          "batch_number": "17152977728163",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "category": {"{"}
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
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
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "description": "Obat tablet biasanya berupa
                          padatan
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          berbentuk bulat atau oval. Jenis medicine ini
                          tersusun
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          atas zat aktif yang dikombinasikan dengan
                          bahan-bahan
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          tertentu dan kemudian dipadatkan.",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
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
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "name": Tablet,
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "text_color": "#F4F4F4",
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
                          <span className="token space"> </span>
                          "category_id": 2,
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "created_at":"2012-04-23T18:25:43.511Z",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
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
                          <span className="token space"> </span>
                          "description": "Paracetamol adalah medicine untuk
                          meredakan
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          demam dan nyeri, termasuk nyeri haid atau sakit
                          gigi.",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "distributor": "PT Kimia Farma",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "expired_date": "2012-04-23T18:25:43.511Z",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
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
                          <span className="token space"> </span>
                          "image": "Paracetamol adalah medicine untuk
                          meredakan
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          demam dan nyeri, termasuk nyeri haid atau sakit
                          gigi.",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "name": "Paracetamol",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "price": 16.95,
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "unit": {"{"}
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
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
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "description": "PCS dapat dikatakan sama
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          dengan 1 buah barang.",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
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
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "name": "PCS",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "text_color": "#F4F4F4",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          {"}"}
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "unit_id": 2,
                          <span className="token space"> </span>
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "updated_at": "2012-04-23T18:25:43.511Z",
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
              {/* Response M 200 */}

              {/* Response M 422  */}
              <a
                className="toggle_btn"
                data-toggle="collapse"
                href="#failed_a"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 422 - Data validation failed
              </a>
              <div className="collapse multi-collapse" id="failed_a">
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
                href="#error_a"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 500 - Server error
              </a>
              <div className="collapse multi-collapse" id="error_a">
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
            <article className="documentation_body" id="api-post-medicine">
              <h4 className="c_head">
                <span className="badge bg-info ml-1">POST</span>/medicine
                create medicine
              </h4>
              <div className="highlight">
                <div className="code-toolbar">
                  <pre className=" language-htmlasc">
                    <code className=" language-htmlasc" data-lang="html">
                      http://103.228.245.122:3033/medicine
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
                This API for create medicine data and will be showed up on
                Medicine List, Hit Medicine Category List API and Medicine
                Unit List API and get their id. After that use the id on
                your form body request to use this API.
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
                      <div>medicine payload</div>
                      <div>Example value | model</div>
                      <div>
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
                            "batch_number": "17152977728163",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "category_id": 2,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "description": "Paracetamol adalah medicine
                            untuk meredakan
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            demam dan nyeri, termasuk nyeri haid atau sakit
                            gigi.",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "distributor": "PT Kimia Farma",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "expired_date": "2012-04-23T18:25:43.511Z",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "image": "Paracetamol adalah medicine untuk
                            meredakan
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            demam dan nyeri, termasuk nyeri haid atau sakit
                            gigi.",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "name": "Paracetamol",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "price": 16.95,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "unit_id": 2,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            {"}"}
                            <span className="token lf">{"\n"}</span>]
                          </code>
                        </pre>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* Response 200 MM */}
              <a
                className="toggle_btn"
                data-toggle="collapse"
                href="#form_body"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 200 - Form Body of Medicine
              </a>
              <div className="collapse multi-collapse" id="form_body">
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
                          "batch_number": "17152977728163",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "category_id": 2,
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "description": "Paracetamol adalah medicine untuk
                          meredakan
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          demam dan nyeri, termasuk nyeri haid atau sakit
                          gigi.",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "distributor": "PT Kimia Farma",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "expired_date": "2012-04-23T18:25:43.511Z",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "image": "Paracetamol adalah medicine untuk
                          meredakan
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          demam dan nyeri, termasuk nyeri haid atau sakit
                          gigi.",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "name": "Paracetamol",
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "price": 16.95,
                          <span className="token lf">{"\n"}</span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          <span className="token space"> </span>
                          "unit_id": 2,
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
              {/* Response 200 MM */}

              {/* Response 422 MM */}
              <a
                className="toggle_btn"
                data-toggle="collapse"
                href="#failed_r"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 422 - Data validation failed
              </a>
              <div className="collapse multi-collapse" id="failed_r">
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
                href="#error_r"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 500 - Server error
              </a>
              <div className="collapse multi-collapse" id="error_r">
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
            <article className="documentation_body" id="api-get-detail-medicine">
              <h4 className="c_head">
                <span className="badge bg-success ml-1">GET</span>
                /medicine/(id) detail medicine
              </h4>
              <div className="highlight">
                <div className="code-toolbar">
                  <pre className=" language-htmlasc">
                    <code className=" language-htmlasc" data-lang="html">
                      http://103.228.245.122:3033/medicine
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
                This API is used to see detail medicine data by it's id.
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
                        Id of Medicine, get it from Medicine List API to
                        update the information by id
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
                href="#success_ra"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 200 - List data of medicine mutation
              </a>
              <div className="collapse multi-collapse" id="success_ra">
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
              {/* Response 200 MM */}

              {/* Response 422 MM */}
              <a
                className="toggle_btn"
                data-toggle="collapse"
                href="#failed_ra"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 422 - Data validation failed
              </a>
              <div className="collapse multi-collapse" id="failed_ra">
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
                href="#error_ra"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 500 - Server error
              </a>
              <div className="collapse multi-collapse" id="error_ra">
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
              {/* Response 500 MM */}
            </article>
            <article
              className="documentation_body"
              id="api-delete-medicine"
            >
              <h4 className="c_head">
                <span className="badge bg-danger ml-1">DELETE</span>
                /medicine/(id) delete medicine
              </h4>
              <div className="highlight">
                <div className="code-toolbar">
                  <pre className=" language-htmlasc">
                    <code className=" language-htmlasc" data-lang="html">
                      http://103.228.245.122:3033/medicine/2
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
              <p>This API for delete medicine data by it's id.</p>
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
                        Id of Medicine, get it from Medicine List API to
                        delete this medicine by id
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
              {/*response 200 */}
              <a
                className="toggle_btn"
                data-toggle="collapse"
                href="#delete_ar"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 200 - Success Response return True
              </a>
              <div className="collapse multi-collapse" id="delete_ar">
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
                href="#failed_delete"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 422 - Data validation failed
              </a>
              <div className="collapse multi-collapse" id="failed_delete">
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
                href="#error_delete"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 500 - Server error
              </a>
              <div className="collapse multi-collapse" id="error_delete">
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
            <article className="documentation_body" id="api-patch-medicine">
              <h4 className="c_head">
                <span className="badge bg-info ml-1">PATCH</span>
                medicine/(id) update medicine
              </h4>
              <div className="highlight">
                <div className="code-toolbar">
                  <pre className=" language-htmlasc">
                    <code className=" language-htmlasc" data-lang="html">
                      http://103.228.245.122:3033/medicine
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
                This API for update medicine data and will be replaced old
                medicine information with your new input, You have to get
                the id of the data you want to change, Hit Medicine List API
                to get it.
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
                        Id of Medicine, get it from Medicine List API to
                        delete this medicine by id
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
                      <div>medicine payload</div>
                      <div>Example value | model</div>
                      <div>
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
                            "batch_number": "17152977728163",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "category_id": 2,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "description": "Paracetamol adalah medicine
                            untuk meredakan
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            demam dan nyeri, termasuk nyeri haid atau sakit
                            gigi.",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "distributor": "PT Kimia Farma",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "expired_date": "2012-04-23T18:25:43.511Z",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "image": "Paracetamol adalah medicine untuk
                            meredakan
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            demam dan nyeri, termasuk nyeri haid atau sakit
                            gigi.",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "name": "Paracetamol",
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "price": 16.95,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            "unit_id": 2,
                            <span className="token lf">{"\n"}</span>
                            <span className="token space"> </span>
                            <span className="token space"> </span>
                            {"}"}
                            <span className="token lf">{"\n"}</span>]
                          </code>
                        </pre>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/*RESPONSE 200*/}
              <a
                className="toggle_btn"
                data-toggle="collapse"
                href="#success_ar"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 200 - Success Response return True
              </a>
              <div className="collapse multi-collapse" id="success_ar">
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
                href="#failed_ar"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 422 - Data validation failed
              </a>
              <div className="collapse multi-collapse" id="failed_ar">
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
                href="#error_ar"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Response 500 - Server error
              </a>
              <div className="collapse multi-collapse" id="error_ar">
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
            {/* /medicine */}
          </div>
        </div>
            
  );
}

export default Medicine;
