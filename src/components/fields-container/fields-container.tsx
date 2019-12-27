import React from "react";
import FieldUsageTable from "../field-usage-table/field-usage-table";
import FieldUsagePie from "../field-usage-pie/field-usage-pie";
import './fields-container.css';
import {useQuery} from "@apollo/react-hooks";
import {gql} from 'apollo-boost';

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
            }
        }
    `, {pollInterval: 500});

    if (loading) return (<div className="Fields-Container"><p>Loading..</p></div>);
    if (error) return (<div className="Fields-Container"><p>Error Generating Table</p></div>);
    if (data.fieldUsages.length == 0) return (<div className="Fields-Container"><p>
        Waiting for tracing result...<br/>
        Analytics Information appears once you send your apollo-tracing results from your graphql server to the vision
        server
    </p></div>);

    return (
        <div className="Fields-Container">
            <FieldUsageTable results={data}/>
            <FieldUsagePie results={data}/>
        </div>
    );
};
export default FieldsContainer;