import React from 'react';
import {Table} from 'react-bootstrap';
import './field-usage-table.css';
import {FieldUsageProps} from "../fields-container/fields-container";

const FieldUsageTable: React.FC<FieldUsageProps> = (props:FieldUsageProps) => {
    const data = props.results;
    let sortedData = data.fieldUsages.sort((a: any, b: any) => b.count - a.count);

    let sum = 0;
    sortedData.forEach((field: any) => {
        sum += field.count;
    });

    return (
        <Table bordered striped hover variant="dark" responsive className="Usage-Table">
            <thead>
            <tr>
                <th>Field Path</th>
                <th>Usage Count</th>
                <th>Average Resolving Time (ns)</th>
            </tr>
            </thead>
            <tbody>
            {
                sortedData.map(({name, count, averageDuration}: { name: string, count: number, averageDuration: number }, index: number) => {
                    return <tr key={index}>
                        <td>{name}</td>
                        <td>{count} ({Math.round(count * 100 / sum)}%)</td>
                        <td>{averageDuration}</td>
                    </tr>
                })
            }
            </tbody>
        </Table>    );
};


export default FieldUsageTable;
