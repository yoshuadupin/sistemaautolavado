import React, { useEffect, useState } from 'react'
import { Form, Button, Checkbox, Input, TextField, Alert } from 'antd';
import 'antd/dist/antd.css'
import styles from './styles.css'
import { Link, useHistory } from 'react-router-dom';
import Text from 'antd/lib/typography/Text';
import { useAuth } from '../../context/AuthContext'

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

const LoginContainer = () => {

  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const history = useHistory()
  
  useEffect(() => {
    let isUnmount = false;

    if(!isUnmount){
      setLoading('')
      setError('')
    }
    return () => {
      isUnmount=true;
    };
  }, [])


  const onFinish = async (values) => {
    console.log('Success:', values);

    try {
      setError('')
      setLoading(true)
      await login(values.email, values.password)
      history.push("/dashboard")
    } catch {
      setError('Failed to log in')
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
        email:"ttt@ttt.com" ,
        password: "holamundo"
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
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item >
        <Text>¿Necesita una cuenta? <Link to="/auth/register">Registrarse</Link></Text>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button disabled={loading} type="primary" htmlType="submit">
          Login
          </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginContainer;