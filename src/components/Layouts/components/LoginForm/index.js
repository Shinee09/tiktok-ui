import React from 'react';
import ReactDOM from 'react-dom';
import styles from './LoginForm.module.scss';
import classNames from 'classnames/bind';
import {
    AppleIcon,
    FacebookIcon,
    GoogleIcon,
    InstagramIcon,
    KakaoTalkIcon,
    LineIcon,
    PersonalIcon,
    QRIcon,
    TwitterIcon,
} from '~/components/Icons';
// import LoginItem from './LoginItem';
import LoginItem from './LoginItem';

const cx = classNames.bind(styles);

const LIST_LOGIN = [
    {
        icon: <QRIcon />,
        title: 'Sử dụng mã QR',
    },
    {
        icon: <PersonalIcon />,
        title: 'Số điện thoại / Email / TikTok ID',
    },
    {
        icon: <FacebookIcon />,
        title: 'Tiếp tục với Facebook',
    },
    {
        icon: <GoogleIcon />,
        title: 'Tiếp tục với Google',
    },
    {
        icon: <TwitterIcon />,
        title: 'Tiếp tục với Twitter',
    },
    {
        icon: <LineIcon />,
        title: 'Tiếp tục với LINE',
    },
    {
        icon: <KakaoTalkIcon />,
        title: 'Tiếp tục với KakaoTalk',
    },
    {
        icon: <AppleIcon />,
        title: 'Tiếp tục với Apple',
    },
    {
        icon: <InstagramIcon />,
        title: 'Tiếp tục với Instagram',
    },
];

function LoginForm({ isShowing, hide, handleLogin}) {
    
    const renderItems = () => {
        return LIST_LOGIN.map((item, index) => {
            return <LoginItem onClick={handleLogin} key={index} data={item}></LoginItem>;
        });
    };
    return isShowing
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <div className={cx('modal-overlay')} />
                  <div className={cx('modal-wrapper')} aria-modal aria-hidden tabIndex={-1} role="dialog">
                      <div className={cx('modal')}>
                          <div className={cx('modal-body')}>
                              <div className={cx('modal-title')}>Đăng nhập vào TikTok</div>
                              <div>{renderItems()}</div>
                          </div>
                          <div className={cx('modal-footer')}>
                              <p className={cx('footer-content')}>
                                  Bạn không có tài khoản? <span className={cx('footer-link')}>Đăng ký</span>
                              </p>
                          </div>
                          <button
                              type="button"
                              className={cx('modal-close-button')}
                              data-dismiss="modal"
                              aria-label="Close"
                              onClick={hide}
                          >
                              <svg
                                  width="26"
                                  height="26"
                                  viewBox="0 0 48 48"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M21.1718 23.9999L10.2931 13.1212C9.90261 12.7307 9.90261 12.0975 10.2931 11.707L11.7074 10.2928C12.0979 9.90228 12.731 9.90228 13.1216 10.2928L24.0002 21.1715L34.8789 10.2928C35.2694 9.90228 35.9026 9.90228 36.2931 10.2928L37.7073 11.707C38.0979 12.0975 38.0979 12.7307 37.7073 13.1212L26.8287 23.9999L37.7073 34.8786C38.0979 35.2691 38.0979 35.9023 37.7073 36.2928L36.2931 37.707C35.9026 38.0975 35.2694 38.0975 34.8789 37.707L24.0002 26.8283L13.1216 37.707C12.731 38.0975 12.0979 38.0975 11.7074 37.707L10.2931 36.2928C9.90261 35.9023 9.90261 35.2691 10.2931 34.8786L21.1718 23.9999Z"
                                  ></path>
                              </svg>
                          </button>
                      </div>
                  </div>
              </React.Fragment>,
              document.body,
          )
        : null;
}

export default LoginForm;
