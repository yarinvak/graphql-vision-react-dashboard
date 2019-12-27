import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import MainNavbar from "../navbar/navbar";
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import FieldsContainer from "../fields-container/fields-container";
import {Tab, Tabs} from "react-bootstrap";

const DashBoard: React.FC<{ endpoint: string, serviceName: string }> = (props) => {
    const endpoint = props.endpoint;

    const client = new ApolloClient({
        uri: endpoint,
    });

    return (
        <ApolloProvider client={client}>
            <div className="Dash">
                <MainNavbar/>
                <header className="App-header">
                    <Tabs defaultActiveKey="usage" id="uncontrolled-tab-example" className="Dashboard-Tabs">
                        <Tab eventKey="usage" title="Fields Usage">
                            <FieldsContainer/>
                        </Tab>
                        <Tab eventKey="service" title="Service Info">
                            blabla
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            blabla
                        </Tab>
                    </Tabs>
                </header>
            </div>
        </ApolloProvider>
    );
};

export default DashBoard;
