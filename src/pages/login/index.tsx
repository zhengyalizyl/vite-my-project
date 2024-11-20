import React from 'react';
import type { FormProps } from 'antd'
import { Button, Form, Input } from 'antd';

type FieldType = {
  username: string;
  password: string;
}
const Login: React.FC = () => {
  console.log('login')

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  return (
    <div className='flex  flex-col justify-center items-center h-screen '>
      <div className='shadow-[2px_3px_7px_#0003] p-10 rounded-lg'>
      <h1 className='text-2xl mb-10 text-center'>登陆</h1>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item<FieldType>
          label={'用户名'}
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label={'密码'}
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType='submit'>
            登录
          </Button>
        </Form.Item>

      </Form>
      </div>
    </div>
  )
}

export default Login