import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return <Header className={cx('wrapper')}>Header</Header>;
}

export default Header;
