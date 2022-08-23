import useUpdate from '@/components/useUpdate';
import { Button } from 'antd';
import React from 'react';

const Index: React.FC<any> = (props) => {
  const update = useUpdate();

  return (
    <div style={{ padding: 50 }}>
      <div>时间：{Date.now()}</div>
      <Button color='primary' onClick={update}>更新时间</Button>
    </div>
  );
}

export default Index;