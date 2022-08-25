import { useEffect, useRef, useState } from 'react'
import className from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'

import * as searchService from '~/services/searchService'
import styles from './Search.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import { SearchIcon } from '~/components/Icons'
import AccountItem from '~/components/AccountItem'
import { useDebounce } from '~/hooks'

const cx = className.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [searchResult, setSearchResult] = useState([])

    const inputRef = useRef()
    const debouncedValue = useDebounce(searchValue, 500)

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
        if (debouncedValue.trim()) {
            const fetchApi = async () => {
                setLoading(true)

                const result = await searchService.search(debouncedValue)
                setSearchResult(result)

                setLoading(false)
            }

            fetchApi()
        } else setSearchResult([])
    }, [debouncedValue])

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

                            {/* Nếu vòng map mà render từ 20 item trở lên thì nên tách component 
                            và áp dụng reacMemo để tránh render lại không cần thiết*/}
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
