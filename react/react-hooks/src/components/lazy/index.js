import React from 'react';
import Test from './test';

const LazyComponent = React.lazy(() => new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            default: () => <Test />
        })
    }, 5000);
}));

export default class Index extends React.Component {
    render() {
        return <div style={{marginTop: '50px'}}>
            <React.Suspense fallback={<div>loading...</div>}>
                <LazyComponent />
            </React.Suspense>
        </div>
    }
}