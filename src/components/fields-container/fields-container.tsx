import React from "react";
import FieldUsageTable from "../field-usage-table/field-usage-table";
import FieldUsagePie from "../field-usage-pie/field-usage-pie";
import './fields-container.css';
import {useQuery} from "@apollo/react-hooks";
import {gql} from 'apollo-boost';
import logo from '../../graphql-vision.png';

export interface FieldUsageProps{
    results: any;
}

const FieldsContainer: React.FC = () => {
    const {loading, error, data} = useQuery(gql`
        {
            fieldUsages{
                name
                count
                averageDuration
                lastRequestTime
            }
        }
    `, {pollInterval: 500});

    if (loading) return (<div className="Fields-Container"><p>Loading..</p></div>);
    if (error) return (<div className="Fields-Container">
        <h2>Connection Error</h2>
        <p>
        Cannot connect to the GraphQL Vision Server in order to retrieve information and tracing results.<br/>
        Have you set up a graphql-vision server?<br/>
        Visit the <a href="https://github.com/yarinvak/graphql-vision" target="_blank">Github Project</a> of graphql-vision to learn how to set up a graphql-vision server.<br/><br/>
        <img src={logo} width="150"/>
    </p></div>);
    if (data.fieldUsages.length == 0) return (<div className="Fields-Container"><p>
        Waiting for tracing result...<br/>
        Analytics Information appears once you send your apollo-tracing results from your graphql server to the vision
        server
    </p></div>);

    return (
        <div className="Fields-Container">
            <h2>Fields Usage Metrics</h2>
            <small>Here are some metrics about the usage of your graphql fields</small><br/>
            <FieldUsageTable results={data}/>
            <FieldUsagePie results={data}/>
        </div>
    );
};
export default FieldsContainer;