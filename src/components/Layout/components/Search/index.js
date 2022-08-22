import { useEffect, useRef, useState } from 'react'
import className from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import styles from './Search.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import { SearchIcon } from '~/components/Icons'
import AccountItem from '~/components/AccountItem'

const cx = className.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(true)
    const [searchResult, setSearchResult] = useState([1, 2])

    const inputRef = useRef()

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
        setSearchResult([])
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    // useEffect(() => {
    //     setSearchResult((prev) => [...prev, searchValue])
    // }, searchValue)

    return (
        <HeadlessTippy
            interactive
            offset={[0, 8]}
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('title')}>Tài khoản</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onClick={() => setShowResult(true)}
                    placeholder='Tìm kiếm tài khoản và video'
                />
                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    )
}

export default Search
