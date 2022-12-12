import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem({ data, handleHideResult }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')} onClick={handleHideResult}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>

        // <Link to={`/@${data.user_info.search_user_name}`} className={cx('wrapper')} onClick={handleHideResult}>
        //     <Image className={cx('avatar')} src={data.user_info.avatar_168x168.url_list[0]} alt={data.user_info.search_user_name} />
        //     <div className={cx('info')}>
        //         <h4 className={cx('name')}>
        //             <span>{data.user_info.search_user_name}</span>
        //             {data.user_info.custom_verify && 'Verified account' && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        //         </h4>
        //         <span className={cx('username')}>{data.user_info.search_user_desc}</span>
        //     </div>
        // </Link>
    );
}

export default AccountItem;
