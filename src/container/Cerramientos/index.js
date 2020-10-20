import React, { useState } from 'react';
import {  Modal, Button, Table, Space, Col, Row, Input} from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import FormOnModal from './FormOnModal'
const { Search } = Input;

const dataSource = [
    {
        key: '1',
        nombre: 'City Mall',
        creacion: '6.10.2015',
        ubicacion: 'Blv. Morazán',
        numEmpleados: '5',
        numCarritos: '3',
    }, {
        key: '2',
        nombre: 'Multiplaza',
        creacion: '6.10.2015',
        ubicacion: 'Blv. Morazán',
        numEmpleados: '5',
        numCarritos: '3',
    }, {
        key: '3',
        nombre: 'Centro Comercial Honduras',
        creacion: '6.10.2015',
        ubicacion: 'Blv. Morazán',
        numEmpleados: '5',
        numCarritos: '3',
    },
];

const columns = [
    {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
    },
    {
        title: 'Creación',
        dataIndex: 'creacion',
        key: 'creacion',
    },
    {
        title: 'Ubicación',
        dataIndex: 'ubicacion',
        key: 'ubicacion',
    },
    {
        title: 'N° Empleados',
        dataIndex: 'numEmpleados',
        key: 'numEmpleados',
    },

    {
        title: 'N° Carritos',
        dataIndex: 'numCarritos',
        key: 'numCarritos',
    },

];



const ContentCerramiento = () => {


    const [modalText, setmodalText] = useState('Content of  the modal')
    const [visibleModal, setvisibleModal] = useState(false)
    const [confirmLoading, setconfirmLoading] = useState(false)
    const [componentSize, setComponentSize] = useState('default');


    const showModal = () => {
        setvisibleModal(true);
    };

    const handleOk = () => {

        setmodalText('The modal will be closed after two seconds');
        setconfirmLoading(true);

        setTimeout(() => {

            setvisibleModal(false)
            setconfirmLoading(false)
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setvisibleModal(false)
    };


    return (
        <div>
            <div style={{ margin: '16px' }}>
                <Row>
                    <Col span={8}>
                        <Space size='large' style={{ margin: '16 px' }}>
                            <Button type="primary">Eliminar</Button>
                        </Space>
                    </Col>
                    <Col span={8} offset={7}>
                        <Space size='large' style={{ margin: '16 px' }}>

                            <Button onClick={showModal} icon={<PlusCircleOutlined />} type="link">Crear Cerramiento</Button>
                            <Modal
                                title="Registrar Cerramiento"
                                visible={visibleModal}
                                onOk={handleOk}
                                confirmLoading={confirmLoading}
                                onCancel={handleCancel}
                            >
                                <FormOnModal />
                            </Modal>
                            <Button type="primary">Editar</Button>
                            <Search
                                placeholder="Buscar..."
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }}
                            />
                        </Space>
                    </Col>
                </Row>
            </div>
            <Table dataSource={dataSource} columns={columns} />
        </div>)

}

export default ContentCerramiento;