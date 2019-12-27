import './service-info.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Card} from "react-bootstrap";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const ServiceInfo: React.FC = () => {
    return (
        <div className="Service-Info">
            <h2>Service Information</h2>
            <ul dir="ltr" className="text-left">
                <li>Monitored Service is <b>http://localhost:4000/graphql</b></li>
                <li>Last Request Received on <b>2019-12-27 14:30</b></li>
                <li>Service is <b className="text-success">Alive</b></li>
            </ul>
        </div>
    );
};
export default ServiceInfo;