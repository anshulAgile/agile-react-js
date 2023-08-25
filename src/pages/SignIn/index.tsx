import { Navigate, useNavigate } from 'react-router-dom';
import Button from 'components/common/Button';
import { Wrapper } from './style';
import { useAppSelector } from 'services/redux/store';
import { ROUTES } from 'utils/constants/routes';
import { authAPI } from 'services/api/auth';
import { useCallback } from 'react';
import Meta from 'components/common/Meta';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  console.log('isLoggedIn: ', isLoggedIn);

  const onSubmit = useCallback(async () => {
    try {
      const res = await authAPI.signIn({ email: 'rootadmin@yopmail.com', password: '123456' });
      console.log('res: ', res);
      navigate(ROUTES.dashboard);
    } catch (error) {
      console.log('error: ', error);
      alert((error as Error)?.message);
    }
  }, [navigate]);

  if (isLoggedIn) {
    return <Navigate to={ROUTES.dashboard} />;
  }

  return (
    <>
      <Meta title="Demo App - Sign In" />
      <Wrapper>
        <h2 style={{ textAlign: 'center' }}>In SignIn</h2>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="primary" type="button" onClick={onSubmit}>
            Login test
          </Button>
        </div>
      </Wrapper>
    </>
  );
};

export default SignIn;
