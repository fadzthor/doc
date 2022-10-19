import React from "react";
import { Link } from "react-router-dom";

function Desc() {
  return (
    <div className="col-lg-7 col-md-8">
      <div id="post" className="documentation_info rvfs-4" data-rvfs={4}>
        <article className="documentation_body" id="getting-started">
          <div className="shortcode_title">
            <h1>Getting Started</h1>
            <p>
              <span></span> Sistem ini dibuat untuk memenuhi syarat untuk
              menyelesaikan project di PT Microdata indonesia{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    witdh="50px"
                    height="50px"
                    src="https://as1.ftcdn.net/v2/jpg/00/74/74/82/1000_F_74748297_hoVQkjb2hKWaMxwN2Z72BwhZPs3YfMHC.jpg"
                    alt=""
                  />
                </div>
                <div className="media-body">

                  <Link to="/m">Medicine</Link>

                  <p>Berisikan data obat</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    width="50px"
                    height="50px"
                    src="https://cdn-icons-png.flaticon.com/512/1308/1308346.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <Link to="/mc">Medicine Category</Link>

                  <p>
                    {" "}
                    Berisikan data obat yang telah dikategorikan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    width="50px"
                    height="50px"
                    src="https://cdn-icons-png.flaticon.com/512/4906/4906762.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <Link to="/mm">Medicine Mutation</Link>

                  <p>
                    {" "}
                    Berisi data mutasi obat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    width="50px"
                    height="50px"
                    src="https://cdn-icons-png.flaticon.com/512/1364/1364015.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <Link to="/mod">Medicine Out Detail</Link>

                  <p>
                    {" "}
                    Digunakan untuk membuat detail.
                    obat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    width="50px"
                    height="50px"
                    src="https://cdn-icons-png.flaticon.com/512/3406/3406861.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <Link to="/moh">Medicine Out Header</Link>

                  <p>
                    {" "}
                    Menampilkan daftar semua Header Obat Keluar dengan terperinci.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    width="50px"
                    height="50px"
                    src="https://cdn-icons-png.flaticon.com/512/3286/3286795.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <Link to="/mp">Medicine Prediction</Link>

                  <p>
                    {" "}
                    Menampilkan daftar semua prediksi obat berdasarkan tahun.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    width="50px"
                    height="50px"
                    src="https://cdn-icons-png.flaticon.com/512/8361/8361202.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <Link to="/mr">Medicine Request</Link>

                  <p>
                    {" "}
                    Digunakan untuk permintaan terhadap keperluan obat.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    width="50px"
                    height="50px"
                    src="https://cdn-icons-png.flaticon.com/512/8059/8059785.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <Link to="/ms">Medicine Stock</Link>

                  <p>
                    {" "}
                    Data Stok Obat
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    width="50px"
                    height="50px"
                    src="https://as1.ftcdn.net/v2/jpg/03/72/47/26/1000_F_372472698_vUfQFXLgQezA7VqcXdKDGb1mX51bvKlg.jpg"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <Link to="/mu">Medicine Unit</Link>

                  <p>
                    {" "}
                    Daftar untuk tiap unit obat.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    width="50px"
                    height="50px"
                    src="https://cdn-icons-png.flaticon.com/512/2302/2302792.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <Link to="/p">Patient</Link>

                  <p>
                    {" "}
                    Menampilkan data pasien.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    width="50px"
                    height="50px"
                    src="https://cdn-icons-png.flaticon.com/512/3769/3769239.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <Link to="/rko">RKO (Rencana Kebutuhan Obat)</Link>

                  <p>
                    {" "}
                    Mnentukan jenis dan jumlah obat dan bahan
                    medis habis pakai
                    yang tepat
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    width="50px"
                    height="50px"
                    src="https://cdn-icons-png.flaticon.com/512/685/685669.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <Link to="/up">Upload</Link>

                  <p> API ini digunakan untuk upload gambar dengan format yang telah ditentukan.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    width="50px"
                    height="50px"
                    src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <Link to="/us">User</Link>

                  <p> API ini digunakan untuk melihat detail data pengguna</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    width="50px"
                    height="50px"
                    src="https://cdn-icons-png.flaticon.com/128/2821/2821904.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <Link to="/w">Warehouse</Link>

                  <p> Menampilkan daftar semua gudang.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="media documentation_item">
                <div className="icon">
                  <img
                    width="50px"
                    height="50px"
                    src="https://cdn-icons-png.flaticon.com/512/2979/2979677.png"
                    alt=""
                  />
                </div>
                <div className="media-body">
                  <Link to="/wc">Warehouse Category</Link>

                  <p> Menampilkan daftar semua kategori gudang.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border_bottom" />
        </article>
        <div className="border_bottom" />
      </div>
    </div>
  );
}

export default Desc;
