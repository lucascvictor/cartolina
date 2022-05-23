import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import { OrderButtons } from '../../../../components/index';
import { Clubes } from '../../../../services/cartola';

const List = () => {
    const [clubes, setClubes] = useState();
    const [bodyList, setBodyList] = useState();

    const transformBodyItens = () => {
      return  (clubes) ? clubes.map(clube => {
        return (<CTableRow>
          <CTableHeaderCell scope="row">{clube.id}</CTableHeaderCell>
          <CTableDataCell>{clube.nome}</CTableDataCell>
          <CTableDataCell>{clube.abreviacao}</CTableDataCell>
          <CTableDataCell>{clube.nome_fantasia}</CTableDataCell>
        </CTableRow>)
      }) : null;
    }

    useEffect(() => {
        (async function () {
          const clubes = await Clubes();
          setClubes(Object.values(clubes));
          
        })();
    }, [setClubes]);

    useEffect(() => {
      setBodyList(transformBodyItens());
    }, [clubes])

  return (
    <>
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Lista de times do campeonato brasileiro</strong>
          </CCardHeader>
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nome
                      <OrderButtons 
                        list={clubes} 
                        field='nome' 
                        setFunction={setClubes}
                        setBodyList={setBodyList}
                        transformBodyItens={transformBodyItens}
                        type='string'
                      />
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Abreviação
                    <OrderButtons 
                        list={clubes} 
                        field='abreviacao' 
                        setFunction={setClubes}
                        setBodyList={setBodyList}
                        transformBodyItens={transformBodyItens}
                        type='string'
                      />
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nome fantasia
                      <OrderButtons 
                        list={clubes} 
                        field='nome_fantasia' 
                        setFunction={setClubes}
                        setBodyList={setBodyList}
                        transformBodyItens={transformBodyItens}
                        type='string'
                      />
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                 {bodyList}
                </CTableBody>
              </CTable>
        </CCard>
      </CCol>
    </CRow>
    </>
  )
}

export default List
