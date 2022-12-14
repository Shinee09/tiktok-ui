import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images/';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import SwitchButton from '~/components/Layouts/components/SwitchButton';
import {
    FeedbackIcon,
    GetCoinIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LiveStudioIcon,
    Logo,
    LogoutIcon,
    MessageIcon,
    ProfileIcon,
    SettingIcon,
    ThemeIcon,
    UploadIcon,
} from '~/components/Icons';
import Search from '../Search';

import React, { useState, useEffect } from 'react';

import useModal from '~/hooks/useModal';
import LoginForm from '~/components/Layouts/components/LoginForm';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'Tiếng Anh',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Phản hồi và trợ giúp',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: <ThemeIcon />,
        title: 'Chế độ tối',
        button: <SwitchButton mode />,
    },
];

const userMenu = [
    {
        icon: <ProfileIcon />,
        title: 'Xem hồ sơ',
        to: '/@user',
    },
    {
        icon: <GetCoinIcon />,
        title: 'Nhận Xu',
    },
    {
        icon: <LiveStudioIcon />,
        title: 'LIVE Studio',
    },
    {
        icon: <SettingIcon />,
        title: 'Cài đặt',
    },
    ...MENU_ITEMS,
    {
        icon: <LogoutIcon />,
        title: 'Đăng xuất',
        classB: cx('logout'),
        to: '/',
    },
];

function Header() {
    //Handle logic

    const { isShowing, toggle } = useModal();
    useEffect(() => {
        if (isShowing) {
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'overlay';
        }
    }, [isShowing]);

    const [menuRender, setMenuRender] = useState(localStorage.getItem('login') === 'true' ? userMenu : MENU_ITEMS);

    const [isLogin, setLogin] = useState(localStorage.getItem('login') === 'true');

    const handleLogin = () => {
        localStorage.setItem('login', 'true');
        setLogin(true);
        setMenuRender(userMenu);
        toggle(false);
    };
    useEffect(() => {
        setMenuRender(userMenu);
    }, [isLogin]);
    const handleMenuChange = (menuItem) => {
        switch (menuItem.title) {
            case 'Đăng xuất':
                localStorage.setItem('login', 'false');
                setLogin(false);
                setMenuRender(MENU_ITEMS);
                break;
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Button to="/" className={cx('logo-img')}>
                        <Logo />
                    </Button>
                </div>
                <Search />
                <div className={cx('actions')}>
                    {isLogin ? (
                        <>
                            <Button outline className={cx('upload-btn')}>
                                <span className={cx('upload-btn-span')}>
                                    <UploadIcon />
                                    Tải lên
                                </span>
                            </Button>
                            <Tippy content="Tin nhắn" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Hộp thư" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outline className={cx('upload-btn')}>
                                <span className={cx('upload-btn-span')}>
                                    <UploadIcon />
                                    Tải lên
                                </span>
                            </Button>
                            <Button primary small onClick={toggle} className={cx('login-btn-span')}>
                                Đăng nhập
                            </Button>
                            <LoginForm handleLogin={handleLogin} isShowing={isShowing} hide={toggle} />
                        </>
                    )}
                    <Menu
                        handleLogin={handleLogin}
                        // items={isLogin ? userMenu : MENU_ITEMS}
                        isLogin={isLogin}
                        items={menuRender}
                        onChange={handleMenuChange}
                    >
                        {isLogin ? (
                            <Image src={images.avatar} className={cx('user-avatar')} alt="avatar" />
                        ) : (
                            <div className={cx('more-btn')}>
                                <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 48 48"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M24 4C26.2091 4 28 5.79086 28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4ZM24 20C26.2091 20 28 21.7909 28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20ZM24 36C26.2091 36 28 37.7909 28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36Z"></path>
                                </svg>
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
