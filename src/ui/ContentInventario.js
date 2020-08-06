import React from 'react';
import { Button, Table, Space, Col, Row, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const { Search } = Input;

const dataSource = [
    {
        key: '1',
        codigo: '6365',
        nombre: 'MaxShampo',
        costo: '350.99',
        cantidad: '15',
        fechaIngresado: '6.10.2015',
    }, {
        key: '1',
        codigo: '6385',
        nombre: 'Paños 3M',
        costo: '350.99',
        cantidad: '15',
        fechaIngresado: '6.10.2015',
    }, {
        key: '1',
        codigo: '6385',
        nombre: 'Brillo 3M',
        costo: '350.99',
        cantidad: '15',
        fechaIngresado: '6.10.2015',
    }
]

const columns = [
    {
        title: 'Código',
        dataIndex: 'codigo',
        key: 'codigo',
    },
    {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
    },
    {
        title: 'Costo',
        dataIndex: 'costo',
        key: 'costo',
    },
    {
        title: 'Cantidad',
        dataIndex: 'cantidad',
        key: 'cantidad',
    },

    {
        title: 'Fecha de Ingreso',
        dataIndex: 'fechaIngresado',
        key: 'fechaIngresado',
    }

];

export default class ContentTalonarios extends React.Component {
    render() {
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

                                <Button icon={<PlusCircleOutlined />} type="link">Crear Articulo</Button>
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