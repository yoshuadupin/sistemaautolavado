import React from 'react';
import { Button, Table, Space, Col, Row, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const { Search } = Input;

const dataSource = [
    {
        key: '1',
        id: '63',
        inicio: '100',
        final: '150',
        cerramiento:'City Mall',
        ingresados: '15',
        creacion: '6.10.2015',
    },{
        key: '2',
        id: '64',
        inicio: '100',
        final: '150',
        cerramiento:'Multiplaza',
        ingresados: '15',
        creacion: '6.10.2015',
    },{
        key: '3',
        id: '65',
        inicio: '100',
        cerramiento:'City Mall',
        final: '150',
        ingresados: '15',
        creacion: '6.10.2015',
    }
]

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Inicio',
        dataIndex: 'inicio',
        key: 'inicio',
    },
    {
        title: 'Final',
        dataIndex: 'final',
        key: 'final',
    },
    {
        title: 'Cerramiento',
        dataIndex: 'cerramiento',
        key: 'cerramiento',
    },

    {
        title: 'Ingresados',
        dataIndex: 'ingresados',
        key: 'ingresados',
    },
    
    {
        title: 'Creación',
        dataIndex: 'creacion',
        key: 'creacion',
    },
   
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

                                <Button icon={<PlusCircleOutlined />} type="link">Crear Talonario</Button>
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