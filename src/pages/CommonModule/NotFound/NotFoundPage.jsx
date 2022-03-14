import React from 'react';
import {Button, Result} from 'antd';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <section>
        <Result
            status="404"
            title="404"
            subTitle="Cette page n'existe pas, désolé"
            extra={<Button type="primary"><Link to="/"> Retour à l'accueil</Link></Button>}
        />,
    </section>
);

export default NotFoundPage;
