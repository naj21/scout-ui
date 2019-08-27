import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Card from './Card';

const SbSelect = styled.input`
    appearance: none;
    width: 80%;
    padding: 5px 10px;
    font-size: 16px;
    outline: none;
    border: none;
    background: none;
`

const SbSelectGroup = styled.div`
	position: relative;
    display: inline-flex;
    width: 200px;
    border-radius: 4px;
    border: 2px solid #FA5423;
    margin-bottom: 20px;
    i {
        position: absolute
        color: #9EE2E3;
        right: 10px;
        top: 5px;
    }
`;

const SbOptionGroup = styled(Card)`
    position: absolute;
    top: 35px;
    display: flex;
    flex-direction: column;
    border-radius: 5px
    padding: 10px 0;
    max-height: 100px;
    overflow-y: scroll;
`

const SbOption = styled.a`
    display: inline-block;
	padding: 5px 20px;
	color: #444;
	font-size: 14px;
	text-decoration: none;
	white-space: nowrap;
	cursor: pointer;
	&:hover {
		color: white;
		background: #9EE2E3;
	}
`

const Select = (props) => {
    const { options, text, action } = props;
    const [isVisible, setVisibility] = useState(false);
    const [value, setValue] = useState(text)
    const node = useRef();

	useEffect(() => {
		// add when mounted
		document.addEventListener("mousedown", handleClick);
		// return function to be called when unmounted
		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, []);

	const handleClick = e => {
		if (node.current.contains(e.target)) {
			// inside click
			return;
		}
		// outside click
		setVisibility(false);
    };

    const [icon, setIcon] = useState('fa-chevron-down')
    
    return (
        <SbSelectGroup 
            ref={node}
            onClick={() => {
                setVisibility(!isVisible)
                icon !== 'fa-chevron-down' ? setIcon("fa-chevron-down"):  setIcon("fa-chevron-up")
            }}
        >
            <SbSelect 
                {...props}
                value={value}
            />
            <i className={`fa ${icon}`}/>
            {isVisible && <SbOptionGroup {...props}>
                 {
                     options && options.map(option => <SbOption
                        {...props}
                        onClick={() => {
                            setValue(option.value);
                            setVisibility(!isVisible);
                            action(option.value);
                        }}
                        key={option.key}
                     >{option.value}</SbOption>)
                    }
            </SbOptionGroup>}
        </SbSelectGroup> 
    )
}

export default Select;