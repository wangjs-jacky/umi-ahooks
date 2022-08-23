import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  return (
    <PageContainer ghost>
     <h1>Hello world!</h1>
    </PageContainer>
  );
};

export default HomePage;
