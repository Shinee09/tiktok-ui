import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/components/Layouts/components/Header';
import 'tippy.js/dist/tippy.css';
import Sidebar from './Sidebar';
import { TopIcon } from '~/components/Icons';
import { useState, useEffect } from 'react';

import useModal from '~/hooks/useModal';
import DownApp from '~/components/Layouts/components/DownApp'

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

    const { isShowing, toggle } = useModal();
    useEffect(() => {
        if(isShowing) {
            document.querySelector("body").style.overflow="hidden"
        } else {
            document.querySelector("body").style.overflow="overlay"
        }
    }, [isShowing]);

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
                <div className={cx((showTopBtn && 'show') || 'hide')}>
                    <button className={cx('download-app')} onClick={toggle}>
                        Tải ứng dụng
                    </button>
                    <DownApp isShowing={isShowing} hide={toggle} />
                    <button className={cx('top-icon')} onClick={handleClick}>
                        <TopIcon className={cx('icon')} />{' '}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DafaultLayout;
