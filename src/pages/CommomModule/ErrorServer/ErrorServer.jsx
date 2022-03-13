import React from 'react';
import { Result} from 'antd';


const ErrorServer = (props) => {

    return (
        <>
            <div className="index-item-center">
                <Result
                    status="500"
                    title={props.title}
                    subTitle={props.subTitle}
                />
            </div>
        </>
    )
};

export default ErrorServer