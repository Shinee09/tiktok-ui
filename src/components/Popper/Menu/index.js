import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';


const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => (
            console.log(item.icon),
            <MenuItem key={index} data={item} />
        ));
    };

    return (
        <Tippy
            interactive
            delay = {[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('more')} tabIndex="-1" {...attrs}>
                    <ul className={cx('more-list')}>
                        {renderItems()}
                    </ul>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
