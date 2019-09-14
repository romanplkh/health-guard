import React, { useState } from 'react';
import {
	InputGroup,
	DropdownButton,
	FormControl,
	Dropdown
} from 'react-bootstrap';

let filtered;

const AppointmentSearch = props => {
	const [text, setText] = useState({ searchWord: '' });
	const onTextChange = e => {
		setText({ searchWord: e.target.value });
		console.log(props.info);
	};

	const search = () => {
		const result = props.info.filter(el => {
			console.log(text);
			const regex = new RegExp(`${text.searchWord}`, 'gi');
			return el.match(regex);
		});

		console.log(result);
	};

	return (
		<InputGroup className="mb-3 ">
			<DropdownButton
				as={InputGroup.Prepend}
				variant="outline-info"
				title="Search"
				id="input-group-dropdown-1"
			>
				<Dropdown.Item href="#" onClick={search}>
					By Patient Last Name
				</Dropdown.Item>
				<Dropdown.Item href="#">By Doctor Last Name</Dropdown.Item>
				<Dropdown.Item href="#">By Date</Dropdown.Item>
				<Dropdown.Item href="#">By Price</Dropdown.Item>
			</DropdownButton>
			<FormControl
				aria-describedby="basic-addon1"
				onChange={onTextChange}
				placeholder="Your search here.."
			/>
		</InputGroup>
	);
};

export default AppointmentSearch;
