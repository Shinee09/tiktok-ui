import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/components/Image'
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);



function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="" alt="avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>shinee09</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>shinee9</span>
            </div>
        </div>
     );
}

export default AccountItem;