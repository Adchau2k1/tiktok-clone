import { useEffect, useRef, useState } from 'react'
import className from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import * as searchServices from '~/apiServices/searchServices'
import styles from './Search.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import { SearchIcon } from '~/components/Icons'
import AccountItem from '~/components/AccountItem'
import { useDebounce } from '~/hooks'

const cx = className.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [showResult, setShowResult] = useState(true)
    const [searchResult, setSearchResult] = useState([])

    const inputRef = useRef()
    const debounced = useDebounce(searchValue, 500)

    const handleChange = (e) => {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    useEffect(() => {
        if (debounced.trim()) {
            const fetchApi = async () => {
                setLoading(true)

                const result = await searchServices.search(debounced)
                setSearchResult(result)

                setLoading(false)
            }

            fetchApi()
        } else setSearchResult([])
    }, [debounced])

    return (
        // Sử dụng thẻ wrapper <div> xung quanh phần tử tham chiếu
        // giải quyết vấn đề  bằng cách tạo một parentNode mới.
        <div>
            <HeadlessTippy
                interactive
                offset={[0, 8]}
                visible={showResult && searchResult.length > 0}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('title')}>Tài khoản</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                        placeholder='Tìm kiếm tài khoản và video'
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    )
}

export default Search
