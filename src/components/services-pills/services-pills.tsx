import './services-pills.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {gql} from 'apollo-boost';
import {useQuery} from "@apollo/react-hooks";
import {Tab, Tabs} from "react-bootstrap";
import FieldsContainer from "../fields-container/fields-container";

const ServicesPills: React.FC = () => {
    const {loading, error, data} = useQuery(gql`
        {
            senderIds
        }
    `, {pollInterval: 1000, fetchPolicy: 'no-cache'});

    if (!loading && !error) {
        const tabs = data.senderIds.map((x:string)=>{
            return (<Tab eventKey={x} title={x}><FieldsContainer senderId={x}/></Tab>);
        });
        return (
            <div className="Services-Pills">
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className="Dashboard-Tabs">
                    <Tab eventKey="all" title="All">
                        <FieldsContainer />
                    </Tab>
                    {tabs}
                </Tabs>
            </div>
        );
    }
    else{
        return (<div></div>);
    }
};
export default ServicesPills;
