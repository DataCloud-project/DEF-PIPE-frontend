import * as React from 'react';
import {Route, Router, Routes} from 'react-router';
import PipelineDesigner from './components/PipelineDesigner/PipelineDesigner';
import TemplateDesigner from './components/TemplateDesigner/TemplateDesigner';

import './custom.css'
import Layout from "./components/Layout";
import NavMenu from "./components/NavMenu";
import {Container} from "reactstrap";


export default () => (
    <React.Fragment>
        <NavMenu/>
        <Container fluid={true} className="app-container">
            <Routes>
                <Route path='/login' element={<PipelineDesigner/>}/>
                <Route path='/' element={<PipelineDesigner/>}/>
                <Route path='/repo/:username' element={<PipelineDesigner/>}/>
                <Route path='/template-designer' element={<TemplateDesigner/>}/>
            </Routes>
        </Container>
    </React.Fragment>
);
