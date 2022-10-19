import React from "react";
import { Link } from 'react-router-dom'

function Upload() {
  return (
    <div className="col-lg-7 col-md-8">
              <div
                id="post"
                className="documentation_info rvfs-4"
                data-rvfs={4}
              >

                {/* Upload */}
                <article className="documentation_body" id="upload">
                  <div className="shortcode_title">
                    <h1>Upload</h1>
                    <p>
                      API ini digunakan untuk upload gambar.
                    </p>
                  </div>
                </article>
                {/* /upload post */}
                <article className="documentation_body" id="api-post-upload">
                  <h4 className="c_head">
                    Upload <span className="badge bg-info ml-1">POST</span>
                  </h4>
                  <div className="highlight">
                    <div className="code-toolbar">
                      <pre className=" language-htmlasc">
                        <code className=" language-htmlasc" data-lang="html">
                          /upload
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
                  <p>Unggah file gambar gambar berformat .jepg .png dan .jpg</p>

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
                          <div>file</div>
                          <div>file</div>
                          <div>(formData)</div>
                        </td>
                        <td>
                          <div>Upload bukti prediksi yang sudah di upload sebelumnya dalam bentuk .jepg .png dan .jpg</div>
                          <div>
                            <input type="file" className title disabled />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Response 422 -Upload */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-post-upload-r422"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 422 - Data validation failed
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-post-upload-r422"
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
                  {/* Response 422 Upload */}

                  {/* Response 500 Upload */}
                  <a
                    className="toggle_btn"
                    data-toggle="collapse"
                    href="#api-post-upload-r500"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    Response 500 - Server error
                  </a>
                  <div
                    className="collapse multi-collapse"
                    id="api-post-upload-r500"
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
                  {/* Response 500 Upload */}
                </article>
                {/* /upload post */}
                {/* Upload */}

              </div>
            </div>
  );
}
export default Upload;
