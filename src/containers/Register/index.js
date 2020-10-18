import React, { useState } from 'react'
import { Form, Button, Checkbox, Input, Alert } from 'antd';
import 'antd/dist/antd.css'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom';
import Text from 'antd/lib/typography/Text';

const RegisterContainer = () => {

    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 18,
            span: 16,
        },
    };

    const onFinish = async (values) => {
        console.log('Success:', values);
        if (values.password !== values.confirm) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
           await signup(values.email, values.password)
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (

        <Form className="form"
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                {...tailLayout}
            >
                {error && <Alert message={error} type="warning" />}
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: '¡Por favor introduzca su correo!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Contraseña"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Por favor introduzca su contraseña!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>


            <Form.Item
                label="Confirm Password "
                name="confirm"
                rules={[
                    {
                        required: true,
                        message: '¡Confirme su contraseña!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item >
                <Text>¿Ya tienes una cuenta? <Link to="/login">Log In</Link></Text>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button disabled={loading} type="primary" htmlType="submit">
                    Registrarse
                </Button>
            </Form.Item>
        </Form>
    )
}

export default RegisterContainer;