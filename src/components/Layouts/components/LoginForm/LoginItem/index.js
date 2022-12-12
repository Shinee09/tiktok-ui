import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './LoginItem.module.scss';

const cx = classNames.bind(styles);

function LoginItem({ data, onClick }) {
    return (
        <Button className={cx('item', data.classB)} leftIcon={data.icon} to={data.to} onClick={onClick}> {data.title} {data.button} </Button>
    );
}

export default LoginItem;
