import React from 'react';
import { Button, Table, Space, Col, Row, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const { Search } = Input;

const dataSource = [
    {
        key: '1',
        codigo: '605',
        modelo: 'RapidWash',
        supervisor: 'Manual Alvarez',
        estado:'En Reparación',
        ultimaReparacion: '21.12.2020',
    },{
        key: '2',
        codigo: '304',
        modelo: 'ProntoWash',
        supervisor: 'Manual Alvarez',
        estado:'Funcional',
        ultimaReparacion: '21.12.2020',
    },{
        key: '45',
        codigo: '605',
        modelo: 'SpeedWash',
        supervisor: 'Manual Alvarez',
        estado:'Dañado',
        ultimaReparacion: '21.12.2020',
    },
]

const columns = [
    {
        title: 'Código',
        dataIndex: 'codigo',
        key: 'codigo',
    },
    {
        title: 'Modelo',
        dataIndex: 'modelo',
        key: 'modelo',
    },
    {
        title: 'Supervisor',
        dataIndex: 'supervisor',
        key: 'supervisor',
    },
    {
        title: 'Estado',
        dataIndex: 'estado',
        key: 'estado',
    },

    {
        title: 'Ultima Reparación',
        dataIndex: 'ultimaReparacion',
        key: 'ultimaReparacion',
    }
];

export default class ContentCarritos extends React.Component {
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

                                <Button icon={<PlusCircleOutlined />} type="link">Crear Carrito</Button>
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