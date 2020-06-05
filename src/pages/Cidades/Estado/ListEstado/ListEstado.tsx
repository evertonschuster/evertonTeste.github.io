import React, { useMemo } from 'react';
import FormBasicLayout from '../../../../layouts/FormBasicLayout/FormBasicLayout';
import { RouteComponentProps } from 'react-router-dom';
import ListForm from '../../../../components/ListForm/ListForm';
import { UseListPagined } from '../../../../hoc/UseListPagined';
import { EstadoApi } from '../../../../apis/Cidades/EstadoApi';

const ListEstado: React.FC<RouteComponentProps> = () => {

    const response = UseListPagined({ URL: "/api/Estado/list" });

    const columns = useMemo(() => [
        {
            title: 'Código',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Estado',
            dataIndex: 'nome',
        },
        {
            title: 'UF',
            dataIndex: 'uf',
        },
        {
            title: 'Pais',
            dataIndex: 'pais.nome',
        },
    ], []);

    return (
        <FormBasicLayout breadcrumbList={[{ displayName: "Estado", URL: "/Estado" }, { displayName: "Listagem", URL: undefined }]} >


            <ListForm
                tableProps={response}
                deleteFunction={EstadoApi.Excluir.bind(EstadoApi)}
                columns={columns} />


        </FormBasicLayout>
    );

}

export default ListEstado;
