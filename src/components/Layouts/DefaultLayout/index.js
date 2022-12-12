import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layouts/components/Header';
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';
import { TopIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function DafaultLayout({ children }) {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <div className={cx('sticky-block')}>
                <div className={cx('download')}><button className={cx('download-app')}> Tải ứng dụng </button></div>
                {showTopBtn && (
                    <button className={cx('top-icon')} onClick={handleClick}>
                        <TopIcon className={cx('icon')} />{' '}
                    </button>
                )}
            </div>
        </div>
    );
}

export default DafaultLayout;
