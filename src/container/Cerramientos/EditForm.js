import { Form, Input, Button, InputNumber, Select } from 'antd';
import React from 'react'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const EditForm = (props) => {


    const onFinish = values => {
        console.log('Success:', values);
    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (

        <Form
            {...layout}
            name="basic"
            
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Nombre"
                name="nombre"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Ubicación"
                name="ubicacion"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="N° Empleados"
                name="numEmpleados"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                label="N° carritos"
                name="numCarritos"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <InputNumber />
            </Form.Item>

            <Form.Item label="Empleados">
                <Select>
                    <Select.Option value="Manuel Alvarez">Manuel Alvarez</Select.Option>
                    <Select.Option value="Camila Ramirez">Camila Ramirez</Select.Option>
                    <Select.Option value="Giselle Castillo">Giselle Castillo</Select.Option>
                </Select>
            </Form.Item>


            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

    )
}

export default EditForm;