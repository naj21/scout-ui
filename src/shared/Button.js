import React, { Fragment } from "react";
import styled, { css } from "styled-components";

const SbButtonText = styled.span`
	margin-top: 2px;
	display: inline-block;
`;
const SbButton = styled.button`
	font-size: 14px;
	border-radius: 3px;
	background: #9EE2E3;
    padding: 10px 32px;
	outline: none;
	border: none;
	cursor: pointer;
    color: #fdf8f8;
    display: inline-block;
    align-self: center;
    font-size: 20px;
    box-shadow: 3px 3px 15px #c5b1b1;
	transition: all 300ms ease-out;
	&:hover{
        box-shadow: 1px 1px 5px #8e7676;
	}

	${props =>
		props.disabled &&
		css`
			color: #eee;
            cursor: not-allowed;
            opacity: 0.8;
		`}
`;

const Button = props => {
	const { text, isLoading } = props;
	return (
		<Fragment>
			<SbButton {...props}>
			    <SbButtonText>{isLoading ? 'Loading...' : text}</SbButtonText>
			</SbButton>
		</Fragment>
	);
};

export default Button;
