import { Button, ConfigProvider, Input, Space, theme, App,message } from 'antd';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import  browserRouter from '@/router';

const MyPage = () => {
  const { message } = App.useApp();
  useEffect(() => {
    message.info("hhhh");
  }, []);
  const onClick = () => {
    message.info("test");
  };
  return (
    <>
      <Button type="primary" onClick={onClick}>
        测试button
      </Button>
    </>
  );
};
const MyApp = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <App>
        <RouterProvider router={browserRouter}/> 
      </App>
    </ConfigProvider>
  );
}

export default MyApp;
