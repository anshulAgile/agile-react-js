import Meta from 'components/common/Meta';
import { Wrapper } from './style';
import UserList from './components/UserList';

const ReactQueryDemo = () => {
  return (
    <Wrapper>
      <Meta title="Demo App - Users" />
      <h4>Data fetching demo of react-query</h4>
      <UserList />
    </Wrapper>
  );
};

export default ReactQueryDemo;
