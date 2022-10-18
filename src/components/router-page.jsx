import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Doc from './light';
import Medicine from './doc-api-medicine';
import Medicinecategory from './doc-api-medicine-category';
import Medicinemutation from './doc-api-medicine-mutation';
import Medicineoutdetail from './doc-api-medicine-out-detail';
import Medicineoutheader from './doc-api-medicine-out-header';
import Medicineprediction from './doc-api-medicine-prediction';
import Medicinerequest from './doc-api-medicine-request';
import Medicinestock from './doc-api-medicine-stock';
import Medicineunit from './doc-api-medicine-unit';
import Patient from './doc-api-patient';
import Rko from './doc-api-rko';
import Upload from './doc-api-upload';
import User from './doc-api-user';
import Warehouse from './doc-api-warehouse';
import Warehousecategory from './doc-api-warehouse-category';

function RRD() {
  return (
    <div>
      <Router>
        <Routes>
            <Route exact path="/" element={<Medicine/>} />
            <Route exact path="/mc" element={<Medicinecategory/>} />
            <Route exact path="/mm" element={<Medicinemutation/>} />
            <Route exact path="/mod" element={<Medicineoutdetail/>} />
            <Route exact path="/moh" element={<Medicineoutheader/>} />
            <Route exact path="/mp" element={<Medicineprediction/>} />
            <Route exact path="/mr" element={<Medicinerequest/>} />
            <Route exact path="/ms" element={<Medicinestock/>} />
            <Route exact path="/mu" element={<Medicineunit/>} />
            <Route exact path="/p" element={<Patient/>} />
            <Route exact path="/rko" element={<Rko/>} />
            <Route exact path="/up" element={<Upload/>} />
            <Route exact path="/us" element={<User/>} />
            <Route exact path="/w" element={<Warehouse/>} />
            <Route exact path="/wc" element={<Warehousecategory/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default RRD;
