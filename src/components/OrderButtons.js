


import React from 'react'
import CIcon from '@coreui/icons-react';
import {
  cilArrowBottom,
  cilArrowTop,
} from '@coreui/icons'

const OrderButtons = (props) => {
    const {list, field, setFunction, transformBodyItens, setBodyList, type} = props;

    const AscOrder = () => {
        if (list) {
            setFunction(Object.values(list).sort((a, b) => { 
                if (type === 'string') {
                    return a[field].localeCompare(b[field])
                }
                if (type === 'number') {
                    return b[field] - a[field] 
                }
            }));
            setBodyList(transformBodyItens(list));
        }
    }

    const DescOrder = () => {
        if (list) {
            setFunction(Object.values(list).sort((a, b) => {
                if (type === 'string') {
                    return -1 * a[field].localeCompare(b[field]);
                }
                if (type === 'number') {
                    return a[field] - b[field];
                }
            }));
            setBodyList(transformBodyItens(list));
        }
    }
    return (
        <>
            <CIcon icon={cilArrowTop} height={20} alt="Crescente" onClick={() => AscOrder()} />
            <CIcon icon={cilArrowBottom} height={20} alt="Decrescente" onClick={() => DescOrder()} />
        </>
    )
}

export default React.memo(OrderButtons)
