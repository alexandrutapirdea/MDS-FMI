import React from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './landingComponents/Carousel';
import Mosaic from './landingComponents/Mosaic';
import Navbar from './landingComponents/Navbar';
// import Calendar from './landingComponents/Calendar';
import {Calendar, Badge } from 'antd';
import 'antd/dist/antd.css';
import './landingComponents/landingStyle.css';

//Calendar functions
function getListData(value) {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                { type: 'warning', content: 'Examen MDS' },
                { type: 'success', content: 'Verificare Retele' },
            ]; break;
        case 10:
            listData = [
                { type: 'warning', content: 'Proiect PAO' },
                { type: 'success', content: 'CARIERE V7.0' },
                { type: 'error', content: 'Concurs de informatica' },
            ]; break;
        case 15:
            listData = [
                { type: 'warning', content: 'Recuperare geometrie' },
                { type: 'success', content: 'Consultatie algebra' },

            ]; break;
        default:
    }
    return listData || [];
}

function dateCellRender(value) {
    const listData = getListData(value);
    return (
        <ul className="events">
            {
                listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))
            }
        </ul>
    );
}

function getMonthData(value) {
    if (value.month() === 8) {
        return 1394;
    }
}

function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
        <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
        </div>
    ) : null;
}

//End Functions




const LandingPage = () =>
<div>
    <div>
        <Navbar/>
    </div>
    <div>
        <Carousel/>
    </div>
    <div>
        <Mosaic/>
    </div>
    <div>
        <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
    </div>
    <div>
        <Navbar/>
    </div>

</div>;

export default LandingPage;