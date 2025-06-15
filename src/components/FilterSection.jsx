import React, { useState, useEffect, useCallback } from 'react';
import { User, Search, X } from 'lucide-react';
import './styles/FilterSection.css';

// 선택된 필터 태그 컴포넌트
const SelectedFilters = ({ selectedFilters, onRemove }) => {
    if (selectedFilters.length === 0) return null;

    return (
        <div className="selected-filters">
            <span className="selected-filters-label">선택된 필터:</span>
            {selectedFilters.map(({ category, value }) => (
                <div key={`${category}-${value}`} className="filter-tag">
                    {category}: {value}
                    <X
                        size={14}
                        className="filter-tag-remove"
                        onClick={() => onRemove(category, value)}
                    />
                </div>
            ))}
        </div>
    );
};

const FilterSection = ({
    onFilterChange,
    onSearchChange,
    items = [],
    showRegisterButton = true
}) => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // 필터 설정
    const filterOptions = {
        '학급': ['전체', '1학년', '2학년', '3학년'],
        '분야': ['전체', '웹개발', '웹디자인', '모바일앱개발', '백엔드', '데이터분석'],
        '동아리': ['전체', 'ADA', 'ADAA', 'ADAAAAAA', 'ADAAAAA'],
    };

    // 필터링 로직
    const applyFilters = useCallback(() => {
        if (!items || !Array.isArray(items)) {
            onFilterChange && onFilterChange([]);
            return;
        }

        let filtered = items;

        // 검색어 필터링
        if (searchTerm.trim()) {
            filtered = filtered.filter(item =>
                item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // 카테고리 필터링
        selectedFilters.forEach(({ category, value }) => {
            if (value !== '전체') {
                filtered = filtered.filter(item => {
                    switch (category) {
                        case '학급':
                            return item.grade === value || item.class === value;
                        case '분야':
                            return item.field === value || item.category === value;
                        case '동아리':
                            return item.club === value;
                        case '기타':
                            return item.type === value;
                        default:
                            return true;
                    }
                });
            }
        });

        onFilterChange && onFilterChange(filtered);
    }, [items, selectedFilters, searchTerm, onFilterChange]);

    // 필터나 검색어 변경시 적용
    useEffect(() => {
        applyFilters();
    }, [applyFilters]);

    // 검색어 변경 핸들러
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearchChange && onSearchChange(value);
    };

    // 필터 토글 핸들러
    const toggleFilter = (category, value) => {
        setSelectedFilters(prev => {
            const existingIndex = prev.findIndex(f => f.category === category);

            if (existingIndex >= 0) {
                // 이미 선택된 카테고리가 있는 경우
                if (prev[existingIndex].value === value || value === '전체') {
                    // 같은 값이거나 '전체'를 선택한 경우 제거
                    return prev.filter((_, index) => index !== existingIndex);
                } else {
                    // 다른 값으로 변경
                    return prev.map((filter, index) =>
                        index === existingIndex ? { category, value } : filter
                    );
                }
            } else {
                // 새로운 카테고리 추가 ('전체'가 아닌 경우만)
                if (value !== '전체') {
                    return [...prev, { category, value }];
                }
                return prev;
            }
        });
    };

    // 필터 제거 핸들러
    const removeFilter = (category, value) => {
        setSelectedFilters(prev =>
            prev.filter(f => !(f.category === category && f.value === value))
        );
    };

    // 모든 필터 초기화
    const clearAllFilters = () => {
        setSelectedFilters([]);
        setSearchTerm('');
    };

    // 선택된 필터 확인
    const isFilterSelected = (category, value) => {
        return selectedFilters.some(f => f.category === category && f.value === value);
    };

    return (
        <div className="filter-section">
            

            <div className="filter-content">
                {Object.entries(filterOptions).map(([category, options]) => (
                    <div key={category} className="filter-group">
                        <span className="filter-label">{category}</span>
                        <div className="filter-buttons">
                            {options.map(option => (
                                <button
                                    key={option}
                                    className={`filter-button ${isFilterSelected(category, option) ? 'active' : ''
                                        }`}
                                    onClick={() => toggleFilter(category, option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="filter-summary">
                <span className="filter-summary-text">
                    {selectedFilters.length > 0 || searchTerm ?
                        `필터 적용됨 (${selectedFilters.length + (searchTerm ? 1 : 0)}개 조건)` :
                        '모든 프로젝트 표시'
                    }
                </span>
            </div> */}

            <div className="filter-header">
                <div className="filter-search-container">
                    <div className="filter-search-wrapper">
                        <Search size={18} className="filter-search-icon" />
                        <input
                            type="text"
                            className="filter-search"
                            placeholder="프로젝트명, 작성자, 설명으로 검색..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        {searchTerm && (
                            <X
                                size={18}
                                className="filter-search-clear"
                                onClick={() => setSearchTerm('')}
                                />
                        )}
                    </div>
                </div>

                <SelectedFilters
                    selectedFilters={selectedFilters}
                    onRemove={removeFilter}
                />
                {(selectedFilters.length > 0) && (
                    <div className="filter-resetbutton-container">
                    <div className="filter-group">
                        <button
                            className="filter-clear-button"
                            onClick={clearAllFilters}
                        >
                            <X size={16} />
                            초기화
                        </button>
                        </div>
                     </div>
                )}

                {showRegisterButton && (
                    <div className="register-section">
                        <div className="register-avatar">
                            <User className="register-icon" />
                        </div>
                        <span className="register-text">프로젝트 등록하기</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterSection;