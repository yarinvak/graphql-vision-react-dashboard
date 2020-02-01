import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {gql} from 'apollo-boost';
import './keepalive-point.css';

export const KeepAlivePoint: React.FC<{ senderId: string, pollInterval: number }> = (props: { senderId: string, pollInterval: number }) => {
    const {senderId, pollInterval} = props;
    const {loading, error, data} = useQuery(gql`
        query($senderId: String!){
            keepAlive(senderId: $senderId)
        }
    `, {pollInterval, variables: {senderId: senderId}});

    if (loading) return (<span></span>);
    if (error) return (<span></span>);
    if (data.keepAlive) {
        return (<div className="scale-up-center circle-object"></div>);
    }


    return (<div></div>);
};