import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage/LandingPage';
import TabularPage from '../../pages/TabularPage/TabularPage';
import AppRoutes from '../../constants/AppRoutes';
import PieChartPage from '../../pages/PieChartPage/PieChartPage';
import BarChartPage from '../../pages/BarChartPage/BarChartPage';
import ProductionVSDemand from '../../pages/BarChartPage/ProductionVSDemand';
import ProductVSByproduct from '../../pages/BarChartPage/ProductVSByproduct';
import ByproductDiscardedVSUsed from '../../pages/PieChartPage/ByproductDiscardedVSUsed';
import ProductRevenue from '../../pages/BarChartPage/ProductRevenue';
import ProductionVSCost from '../../pages/BarChartPage/ProductionVSCost';

const CustomRouter = () => {
 return (
    <Routes>
      <Route path={AppRoutes.Home} element={<LandingPage />} />
      <Route path={AppRoutes.PieChartExample} element={<PieChartPage />} />
      <Route path={AppRoutes.TableExample} element={<TabularPage />} />
      <Route path={AppRoutes.BarChartExample} element={<BarChartPage />} />
      <Route path={AppRoutes.ProductionVSDemand} element={<ProductionVSDemand/>}/>
      <Route path={AppRoutes.ProductResultsTable} element={<TabularPage />}/>
      <Route path={AppRoutes.ProductVSByproduct} element={<ProductVSByproduct/>}/>
      <Route path={AppRoutes.ByproductDiscardedVSUsed} element={<ByproductDiscardedVSUsed/>}/>
      <Route path={AppRoutes.ProductRevenue} element={<ProductRevenue/>}/>
      <Route path={AppRoutes.ProductionVSCost} element={<ProductionVSCost/>}/>
    </Routes>
  );
    
};

export default CustomRouter;