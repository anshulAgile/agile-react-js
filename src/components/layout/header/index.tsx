import { useDispatch } from 'react-redux';
import Button from 'components/common/Button';
import { authFail } from 'services/redux/AuthSlice';
import { Wrapper } from './style';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/constants/routes';

const Header = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(authFail());
  };

  return (
    <>
      <Wrapper>
        <div className="left">
          <h2>LOGO</h2>
          <ul>
            <li>
              <Link to={ROUTES.dashboard}>Home</Link>
            </li>
            <li>
              <Link to={ROUTES.reactQueryDemo}>User List</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <Button variant="primary" type="button" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
