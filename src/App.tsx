import { Button, ConfigProvider, Input, Space, theme, App,message } from 'antd';
import { useEffect } from 'react';

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
        algorithm: theme.darkAlgorithm,
      }}
    >
      <App>
        <MyPage/>
      </App>
    </ConfigProvider>
  );
}

export default MyApp;
