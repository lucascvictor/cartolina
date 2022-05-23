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
import { Atletas } from '../../../../services/cartola';


const List = () => {
    const [atletas, setAtletas] = useState();
    const [clubes, setClubes] = useState();
    const [posicoes, setPosicoes] = useState();
    const [bodyList, setBodyList] = useState();

    const transformBodyItens = () => {
      return (atletas && posicoes && clubes) ? Object.values(atletas).map(atleta => {
        return (<CTableRow>
          <CTableHeaderCell scope="row">{atleta.id}</CTableHeaderCell>
          <CTableDataCell>{atleta.apelido}</CTableDataCell>
          <CTableDataCell>{atleta.nome}</CTableDataCell>
          <CTableDataCell>{Object.values(posicoes).find(x => x.id == atleta.posicao_id).nome}</CTableDataCell>
          <CTableDataCell>{Object.values(clubes).find(x => x.id == atleta.clube_id).nome}</CTableDataCell>
          <CTableDataCell>{atleta.minimo_para_valorizar}</CTableDataCell>
        </CTableRow>)
      }) : null;
    }
   

    useEffect(() => {
        (async function () {
          const { atletas, clubes, posicoes } = await Atletas();
          setAtletas(atletas);
          setClubes(clubes);
          setPosicoes(posicoes);
        })();
    }, [setAtletas]);

    useEffect(() => {
      setBodyList(transformBodyItens());
    }, [atletas, clubes, posicoes])

  return (
    <>
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Lista de Jogadores</strong>
          </CCardHeader>
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Apelido
                      <OrderButtons 
                        list={atletas} 
                        field='apelido' 
                        setFunction={setAtletas}
                        setBodyList={setBodyList}
                        transformBodyItens={transformBodyItens}
                        type='string'
                      />
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nome
                      <OrderButtons 
                        list={atletas} 
                        field='nome' 
                        setFunction={setAtletas}
                        setBodyList={setBodyList}
                        transformBodyItens={transformBodyItens}
                        type='string'
                      />
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Posição</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Clube</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Minimo para valorizar 
                      <OrderButtons 
                        list={atletas} 
                        field='minimo_para_valorizar' 
                        setFunction={setAtletas}
                        setBodyList={setBodyList}
                        transformBodyItens={transformBodyItens}
                        type='number'
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
