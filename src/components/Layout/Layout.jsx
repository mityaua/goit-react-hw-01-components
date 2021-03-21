import PropTypes from 'prop-types';
import Container from '../Container/Container';

const Layout = ({ children }) => <Container>{children}</Container>;

Layout.defaultProps = {
  children: [],
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
