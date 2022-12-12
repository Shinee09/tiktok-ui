import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AcountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        // const options = {
        //     method: 'GET',
        //     url: 'https://scraptik.p.rapidapi.com/search-users',
        //     params: {keyword: debouced, count: '20', cursor: '0'},
        //     headers: {
        //       'X-RapidAPI-Key': '7f8a53f552msh0dd3a304f965aefp1ce262jsn14fb9dede641',
        //       'X-RapidAPI-Host': 'scraptik.p.rapidapi.com'
        //     }
        //   };

        // axios
        //     .request(options)
        //     .then(function (response) {
        //         setSearchResult(response.data.user_list);
        //         setLoading(false);
        //     })
        //     .catch(function (error) {
        //         console.error(error);
        //         setLoading(false);
        //     });

        axios
            .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
                params: {
                    q: debouced,
                    type: 'more',
                },
            })
            .then((res) => {
                console.log(res.data)
                setSearchResult(res.data.data);
                setLoading(false);
            });
    }, [debouced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        setSearchValue(searchValue.startsWith(' ') ? searchValue.trim() : searchValue);
    };
    return (
        //Using a wrapper <div>  tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-label')}>Tài khoản</h4>
                            <div className={cx('account-list')}>
                                {searchResult.map((result) => (
                                    <AccountItem key={result.id} data={result} handleHideResult />
                                ))}
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Tìm kiếm tài khoản và video"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <span className={cx('search-spacer')}></span>
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
