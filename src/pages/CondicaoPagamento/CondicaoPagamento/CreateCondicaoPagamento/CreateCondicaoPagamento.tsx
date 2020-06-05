import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CrudFormLayout from '../../../../layouts/CrudFormLayout/CrudFormLayout';
import { FormikHelpers } from 'formik';
import { errorBack } from '../../../../utils/MessageApi';
import { CondicaoPagamento } from '../../../../models/CondicaoPagamento/CondicaoPagamento';
import { CondicaoPagamentoSchema } from './CondicaoPagamentoSchema';
import CondicaoPagamentoGeneral from './components/CondicaoPagamentoGeneral';
import { CondicaoPagamentoApi } from '../../../../apis/CondicaoPagamento/CondicaoPagamentoApi';

const CreateCondicaoPagamento: React.FC<RouteComponentProps & RouteComponentProps<any>> = (props) => {


    const [condicaopagamento, setCondicaoPagamento] = useState<CondicaoPagamento>({
        nome: "",
        juro: 0,
        multa: 0,
        desconto: 0,
        parcela: [

        ]
    })

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getCondicaoPagamento(props.match.params.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.id])


    async function onSubmit(values: CondicaoPagamento, formikHelpers: FormikHelpers<any>) {

        try {

            if (props.match.params.id) {
                await CondicaoPagamentoApi.Update(values);
            } else {
                await CondicaoPagamentoApi.Save(values);
            }

            props.history.push("/condicao-pagamento")
        } catch (e) {
            errorBack(formikHelpers, e);
        }
    }

    async function getCondicaoPagamento(id: number) {
        if (!id) {
            return;
        }

        try {
            setLoading(true);
            let bdestado = await CondicaoPagamentoApi.GetById(id);
            setCondicaoPagamento({ ...condicaopagamento, ...bdestado.data });

        } finally {
            setLoading(false);
        }

    }

    return (
        <CrudFormLayout
            isLoading={loading}
            backPath="/condicao-pagamento"
            breadcrumbList={[{ displayName: "Condições de Pagamento", URL: "/condicao-pagamento" }, { displayName: "Nova Condição de Pagamento", URL: undefined }]}
            initialValues={condicaopagamento}
            validationSchema={CondicaoPagamentoSchema}
            onSubmit={onSubmit}
        >
            <CondicaoPagamentoGeneral />
        </CrudFormLayout>
    );

}

export default CreateCondicaoPagamento;
