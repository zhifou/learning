/**
 * @file child 子控件
 */
import React, { memo } from 'react';

const Child = memo(props => {
    const { data, onChange } = props;
    console.log('child render...', data);
    return (
        <div style={{background: '#ddd'}}>
            <div>child</div>
            <div>{data.name}</div>
            <input type="text" onChange={onChange} />
        </div>
    );
});

export default Child;