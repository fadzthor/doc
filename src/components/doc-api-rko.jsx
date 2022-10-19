import React from "react";
import { Link } from 'react-router-dom'

function Rko() {
  return (
    <div className="col-lg-7 col-md-8">
    <div
      id="post"
      className="documentation_info rvfs-4"
      data-rvfs={4}
    >
      

      {/* RKO (Rencana Kebutuhan Obat) */}
      <article className="documentation_body" id="rko">
        <div className="shortcode_title">
          <h1>RKO (Rencana Kebutuhan Obat)</h1>
          <p>
          Perencanaan Kebutuhan Obat dan Bahan Medis Habis Pakai adalah kegiatan untuk menentukan jenis dan jumlah obat dan bahan medis habis pakai (BMHP) yang tepat sesuai dengan kebutuhan pelayanan kesehatan.
          </p>
        </div>
      </article>
      {/* /rko get */}
      <article className="documentation_body" id="api-get-rko">
        <h4 className="c_head">
          RKO List <span className="badge bg-success ml-1">GET</span>
        </h4>
        <div className="highlight">
          <div className="code-toolbar">
            <pre className=" language-htmlasc">
              <code className=" language-htmlasc" data-lang="html">
                /rko
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
        Menampilkan Dokumen RKO (Rencana Kebutuhan Obat). Output ini mengacu pada excel dari E-Logistik Whatsapp Group.
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
                <div>(query)</div>
              </td>
              <td>
                <div>Digunakan untuk memberikan penomoran halaman pada obat yang pertama dan seterusnya</div>
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
                <div>integer</div>
                <div>(query)</div>
              </td>
              <td>
                <div>Diisi sesuai nilai rata2 pengeluaran obat yang ingin di filter pertahunnya</div>
                <div>
                  <input
                    type="text"
                    className
                    title
                    placeholder="average_years"
                    disabled
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>average_years</div>
                <div>ineteger</div>
                <div>(query)</div>
              </td>
              <td>
                <div>Diisi sesuai dengan data permintaan obat pada tahun yang diminta</div>
                <div>
                  <input
                    type="text"
                    className
                    title
                    placeholder="request_years"
                    disabled
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div>request_years</div>
                <div>integer</div>
                <div>(query)</div>
              </td>
              <td>
                <div>Digunakan untuk memprediksi stok obat sesuai tahun yang ingin dicari</div>
                <div>
                  <input
                    type="text"
                    className
                    title
                    placeholder="predictopn_years"
                    disabled
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Response 200 RKO */}
        <a
          className="toggle_btn"
          data-toggle="collapse"
          href="#api-get-rko-r200"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Response 200 - List data of RKO
        </a>
        <div
          className="collapse multi-collapse"
          id="api-get-rko-r200"
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
                    "average_date_from": "2022-07-29 04:14:10",
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "average_date_to": "2022-07-29 04:14:10",
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "medicine_prediction_years": 2022,
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "medicine_request_years": 2022,
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>"rko": [
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    {"}"}
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "average_usage": 50,
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
                    "medicine_name": "Paracetamol",
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "medicine_prediction": 50,
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "medicine_request": 50,
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
                    "remaining_stok": 200,
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>"unit_name":
                    "Botol 250 ml"
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    {"}"}
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>],
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "warehouse_id": 1,
                    <span className="token lf">{"\n"}</span>
                    <span className="token space"> </span>
                    <span className="token space"> </span>
                    "warehouse_name": "Gudang Farmasi RSUD Zainal
                    Abidin"
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
        {/* Response 200 RKO */}
        {/* Response 422 RKO */}
        <a
          className="toggle_btn"
          data-toggle="collapse"
          href="#api-get-rko-r422"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Response 422 - Data validation failed
        </a>
        <div
          className="collapse multi-collapse"
          id="api-get-rko-r422"
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
        {/* Response 422 RKO */}
        {/* Response 500 RKO */}
        <a
          className="toggle_btn"
          data-toggle="collapse"
          href="#api-get-rko-r500"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Response 500 - Server error
        </a>
        <div
          className="collapse multi-collapse"
          id="api-get-rko-r500"
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
        {/* Response 500 RKO */}
      </article>
      {/* /rko get */}
      {/* RKO (Rencana Kebutuhan Obat) */}
      
    </div>
  </div>
  );
}
export default Rko;
