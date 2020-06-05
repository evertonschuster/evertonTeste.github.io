import React, { } from 'react';
import FormBasicLayout from '../../../../layouts/FormBasicLayout/FormBasicLayout';
import ListForm from '../../../../components/ListForm/ListForm';
import { UseListPagined } from '../../../../hoc/UseListPagined';
import { ColumnProps } from 'antd/lib/table';
import { Categoria } from '../../../../models/Movimentos/Categoria';
import { CategoriaApi } from '../../../../apis/Movimentos/CategoriaApi';

const ListCategoria: React.FC = () => {

    const response = UseListPagined({ URL: "/api/categoria/list" });

    const columns: ColumnProps<Categoria>[] = [
        {
            title: 'Código',
            dataIndex: 'id',
            key: 'id',
            width: "100px"
        },
        {
            title: 'Categoria',
            dataIndex: 'nome',
        },
    ];



    return (
        <FormBasicLayout breadcrumbList={[{ displayName: "Categorias", URL: "/categoria" }, { displayName: "Listagem", URL: undefined }]} >

            <ListForm
                tableProps={response}
                deleteFunction={CategoriaApi.Excluir.bind(CategoriaApi)}
                columns={columns} />

        </FormBasicLayout>
    );

}

export default ListCategoria;
