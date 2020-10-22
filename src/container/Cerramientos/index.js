import React, { useState } from 'react';
import { Modal, Button, Table, Space, Col, Row, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import RegisterForm from './RegisterForm'
import EditForm from './EditForm';
const { Search } = Input;

const dataSource = [
    {
        key: '1',
        nombre: 'City Mall',
        creacion: '6.10.2015',
        ubicacion: 'Blv. Morazán',
        numEmpleados: '5',
        numCarritos: '3'
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

    const [cerramientos, setcerramientos] = useState(dataSource)
    const [visibleModal, setvisibleModal] = useState(false)
    const [confirmLoading, setconfirmLoading] = useState(false)
    const [crud, setcrud] = useState(
        {
            deleteKey:-1,
            hadSelected:false
        })
    const [deleteKey, setdeleteKey] = useState(-1)
    const [haveSelected, sethaveSelected] = useState(false)

    const onFinish = values => {
        let { nombre, ubicacion, numEmpleados, numCarritos } = values;
        let actualDate = new Date();
        let dateFormat = `${actualDate.getDate()}.${actualDate.getMonth() + 1}.${actualDate.getFullYear()}`
        let tempCerramiento = {
            key: cerramientos.length + 1,
            nombre: nombre,
            creacion: dateFormat,
            ubicacion: ubicacion,
            numEmpleados: numEmpleados,
            numCarritos: numCarritos
        }
        setcerramientos(cerramientos.concat(tempCerramiento))
    }

    const handleDelete = () => {
        setcerramientos(cerramientos => cerramientos.filter((cerr) => { return cerr.key != crud.deleteKey }))
    }

    const showModal = () => {
        setvisibleModal(true);
    };

    const handleOk = () => {
        setconfirmLoading(true);
        setvisibleModal(false)
        setconfirmLoading(false)
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setvisibleModal(false)
    };

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setcrud({
                deleteKey:selectedRowKeys,
                hadSelected:true
            })
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    return (
        <div>
            <div style={{ margin: '16px' }}>
                <Row>
                    <Col span={8}>
                        <Space size='large' style={{ margin: '16 px' }}>
                            <Button onClick={handleDelete} type="primary">Eliminar</Button>
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
                                destroyOnClose={RegisterForm}
                            >
                                {<RegisterForm onFinish={onFinish} />}
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
            <Table rowSelection={{
                type: 'radio',
                ...rowSelection,
            }}
                dataSource={cerramientos} columns={columns} />
        </div>)

}

export default ContentCerramiento;