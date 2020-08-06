import React from 'react';
import { Button, Table, Space, Col, Row, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const { Search } = Input;

const dataSource = [
    {
        key: '1',
        nombre: 'Manuel Alvarez',
        codigo: 80116294,
        creacion: '6.10.2020',
        estadoCuenta: 'Activa',
        entrada: '8:00 am',
        salida: '5:00 pm',
        correo: 'djosuemendoza@gmail.com'
    },
    {
        key: '2',
        nombre: 'Manuel Alvarez',
        codigo: 80116294,
        creacion: '6.10.2020',
        estadoCuenta: 'Activa',
        entrada: '8:00 am',
        salida: '5:00 pm',
        correo: 'djosuemendoza@gmail.com'
    }, {
        key: '3',
        nombre: 'Manuel Alvarez',
        codigo: 80116294,
        creacion: '6.10.2020',
        estadoCuenta: 'Activa',
        entrada: '8:00 am',
        salida: '5:00 pm',
        correo: 'djosuemendoza@gmail.com'
    },
];

const columns = [
    {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
    },
    {
        title: 'Código',
        dataIndex: 'codigo',
        key: 'codigo',
    },
    {
        title: 'Creación',
        dataIndex: 'creacion',
        key: 'creacion',
    },
    {
        title: 'Estado de Cuenta',
        dataIndex: 'estadoCuenta',
        key: 'estadoCuenta',
    },
    {
        title: 'Entrada',
        dataIndex: 'entrada',
        key: 'entrada',
    },

    {
        title: 'Salida',
        dataIndex: 'salida',
        key: 'salida',
    },
    {
        title: 'Correo',
        dataIndex: 'correo',
        key: 'correo',
    },
];

export default class ContentLavadores extends React.Component {
    render() {
        return (
            <div>
                <div style={{ margin: '16px' }}>
                    <Row>
                        <Col span={8}>
                            <Space size='large' style={{ margin: '16 px' }}>
                                <Button type="primary">Hacer Ronda</Button>
                                <Button type="primary">Eliminar</Button>
                            </Space>
                        </Col>
                        <Col span={8} offset={7}>
                            <Space size='large' style={{ margin: '16 px' }}>

                                <Button icon={<PlusCircleOutlined />} type="link">Crear Lavadores</Button>
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
}