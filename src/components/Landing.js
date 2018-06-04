import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './landingComponents/Carousel';
import Mosaic from './landingComponents/Mosaic';
import Navbar from './landingComponents/Navbar';
//import Calendar from './landingComponents/Calendar';
import {Calendar, Badge } from 'antd';
import 'antd/dist/antd.css';

//Calendar functions
function getListData(value) {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
            ]; break;
        case 10:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
                { type: 'error', content: 'This is error event.' },
            ]; break;
        case 15:
            listData = [
                { type: 'warning', content: 'This is warning event' },
                { type: 'success', content: 'This is very long usual event。。....' },
                { type: 'error', content: 'This is error event 1.' },
                { type: 'error', content: 'This is error event 2.' },
                { type: 'error', content: 'This is error event 3.' },
                { type: 'error', content: 'This is error event 4.' },
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