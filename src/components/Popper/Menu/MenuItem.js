import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('more-item', data.classB)} leftIcon={data.icon} to={data.to} onClick={onClick}> {data.title} {data.button} </Button>
    );
}

export default MenuItem;
