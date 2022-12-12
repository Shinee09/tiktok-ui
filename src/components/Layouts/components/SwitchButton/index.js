import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SwitchButton.module.scss';
const cx = classNames.bind(styles);

function SwitchButton() {
    const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');
    useEffect(() => {
        document.getElementsByTagName('HTML')[0].setAttribute('data-theme', localStorage.getItem('theme') || 'light');
    }, []);

    const toggleThemeChange = (e) => {
        if (e.target.checked) {
            document.getElementsByTagName('HTML')[0].setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(false);
        } else {
            document.getElementsByTagName('HTML')[0].setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            setIsDark(true);
        }
    };
    return (
        <span>
            <label className={cx('switch')}>
                <input type="checkbox" defaultChecked={isDark} onChange={(e) => toggleThemeChange(e)} />
                <span className={cx('slider')}></span>
            </label>
        </span>
    );
}
export default SwitchButton;
