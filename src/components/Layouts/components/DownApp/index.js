import React from 'react';
import ReactDOM from 'react-dom';
import styles from './DownApp.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Modal = ({ isShowing, hide }) =>
    isShowing
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <div className={cx('modal-overlay')} onClick={hide} />
                  <div className={cx('modal-wrapper')} aria-modal aria-hidden tabIndex={-1} role="dialog">
                      <div className={cx('modal')}>
                          <div className={cx('modal-header')}>
                              <p className={cx('modal-title')}>Tải ứng dụng TikTok</p>
                              <button
                                  type="button"
                                  className={cx('modal-close-button')}
                                  data-dismiss="modal"
                                  aria-label="Close"
                                  onClick={hide}
                              >
                                  <svg
                                      width="24"
                                      height="24"
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
                          <div className={cx('modal-content')}>
                              <p>Hãy quét mã QR để tải TikTok về máy</p>
                              <div className={cx('qr-block')}>
                                  <svg
                                      className={cx('svg')}
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 200 200"
                                      width="176"
                                      height="176"
                                  >
                                      <path
                                          fill="#161823"
                                          fillRule="evenodd"
                                          d="M189.562 1.164a9.278 9.278 0 019.279 9.279v11.546a1.031 1.031 0 01-2.062 0V10.443a7.217 7.217 0 00-7.217-7.217h-11.546a1.031 1.031 0 010-2.062h11.546z"
                                          clipRule="evenodd"
                                      ></path>
                                      <path
                                          fill="#25F4E8"
                                          fillRule="evenodd"
                                          d="M188.394 0a9.278 9.278 0 019.279 9.278v11.547a1.031 1.031 0 01-2.062 0V9.278a7.217 7.217 0 00-7.217-7.216h-11.546a1.031 1.031 0 010-2.062h11.546z"
                                          clipRule="evenodd"
                                      ></path>
                                      <path
                                          fill="#FE2C55"
                                          fillRule="evenodd"
                                          d="M190.722 2.328A9.278 9.278 0 01200 11.606v11.547a1.03 1.03 0 11-2.061 0V11.606a7.217 7.217 0 00-7.217-7.216h-11.546a1.03 1.03 0 110-2.062h11.546z"
                                          clipRule="evenodd"
                                      ></path>
                                      <path
                                          fill="url(#qr-code-wrapper_svg__pattern0)"
                                          d="M12.675 12.674h174.656v174.651H12.675V12.674z"
                                      ></path>
                                      <path fill="white" d="M80.931 81.443h38.146v38.144H80.931V81.443z"></path>
                                      <path
                                          fill="#161823"
                                          fillRule="evenodd"
                                          d="M1.163 10.443a9.278 9.278 0 019.279-9.279h11.546a1.03 1.03 0 110 2.062H10.442a7.216 7.216 0 00-7.217 7.217v11.546a1.031 1.031 0 11-2.062 0V10.443z"
                                          clipRule="evenodd"
                                      ></path>
                                      <path
                                          fill="#25F4E8"
                                          fillRule="evenodd"
                                          d="M0 9.278A9.278 9.278 0 019.277 0h11.546a1.031 1.031 0 110 2.062H9.278A7.216 7.216 0 002.06 9.278v11.547a1.03 1.03 0 01-2.062 0V9.278z"
                                          clipRule="evenodd"
                                      ></path>
                                      <path
                                          fill="#FE2C55"
                                          fillRule="evenodd"
                                          d="M2.327 11.606a9.278 9.278 0 019.279-9.278h11.546a1.031 1.031 0 110 2.062H11.606a7.216 7.216 0 00-7.217 7.216v11.547a1.03 1.03 0 01-2.062 0V11.606z"
                                          clipRule="evenodd"
                                      ></path>
                                      <path
                                          fill="#161823"
                                          fillRule="evenodd"
                                          d="M198.841 189.558a9.278 9.278 0 01-9.279 9.278h-11.546a1.03 1.03 0 110-2.062h11.546a7.217 7.217 0 007.217-7.216v-11.547a1.03 1.03 0 012.062 0v11.547z"
                                          clipRule="evenodd"
                                      ></path>
                                      <path
                                          fill="#25F4E8"
                                          fillRule="evenodd"
                                          d="M197.673 188.393a9.278 9.278 0 01-9.278 9.278h-11.547a1.03 1.03 0 110-2.061h11.547a7.217 7.217 0 007.216-7.217v-11.546a1.03 1.03 0 112.062 0v11.546z"
                                          clipRule="evenodd"
                                      ></path>
                                      <path
                                          fill="#FE2C55"
                                          fillRule="evenodd"
                                          d="M200.001 190.722a9.278 9.278 0 01-9.279 9.278h-11.546a1.032 1.032 0 010-2.062h11.546a7.217 7.217 0 007.217-7.216v-11.547a1.03 1.03 0 112.062 0v11.547z"
                                          clipRule="evenodd"
                                      ></path>
                                      <path
                                          fill="#161823"
                                          fillRule="evenodd"
                                          d="M10.442 198.836a9.278 9.278 0 01-9.279-9.278v-11.546a1.03 1.03 0 112.062 0v11.546a7.216 7.216 0 007.217 7.216h11.546a1.031 1.031 0 010 2.062H10.442z"
                                          clipRule="evenodd"
                                      ></path>
                                  </svg>
                                  <div className={cx('qr-img')}>
                                      <img
                                          className={cx('qrcode')}
                                          alt="qr-tiktok"
                                          src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/47624c235266dedd8e4d.png"
                                      />
                                  </div>
                              </div>
                              <p>Tải về từ cửa hàng ứng dụng</p>
                              <div>
                                  <a href="http://" className={cx('store-link')}>
                                      <img
                                          alt="store"
                                          className={cx('store-img')}
                                          src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/f1596f39e85631c052c4.png"
                                      />
                                  </a>
                                  <a href="http://" className={cx('store-link')}>
                                      <img
                                          alt="store"
                                          className={cx('store-img')}
                                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmnPPVzQUsuM8fL0-beTpaLDdu_IQ6doTkw&usqp=CAU"
                                      />
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </React.Fragment>,
              document.body,
          )
        : null;

export default Modal;
