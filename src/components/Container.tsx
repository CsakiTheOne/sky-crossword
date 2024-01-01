import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
    return <div style={{ padding: '0 10%' }}>{children}</div>;
};

export default Container;
