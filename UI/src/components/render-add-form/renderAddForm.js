import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const RenderAddForm = ({ history, type, add }) => {
	let option = {};
	if (type == 'doctors') {
		option = { profile: 'Family Physician' };
	}

	const [record, setRecord] = useState(option);
	const [selectedFile, setFile] = useState(null);

	const onTextChange = e => {
			setRecord({ ...record, [e.target.name]: e.target.value.toString() });
	
	};

	const onChangeHandler = event => {
		setFile(event.target.files[0]);
	};

	const onAddRecord = e => {
		e.preventDefault();
		const path = type === 'doctors' ? '/doctors' : '/patients';

		const data = new FormData();
		const toArrObj = Object.entries(record);

		toArrObj.forEach(el => {
			console.log(el)
			data.append(el[0], el[1]);
		});

		data.append('file', selectedFile);

		add(data);
		// add(record);
		history.push(path);
	};

	const onCancelAdd = () => {
		setRecord({});
		history.goBack();
	};

	const extraFields = () => {
		if (type === 'doctors') {
			return (
				<React.Fragment>
					<div className="form-group">
						<label>Speciality</label>
						<select
							className="form-control"
							name="profile"
							onChange={onTextChange}
						>
							<option value="Family Physician">Family Physician</option>
							<option value="Pediatrician">Pediatrician</option>
							<option value="OB/GYN">OB/GYN</option>
							<option value="Psychiatrist">Psychiatrist</option>
							<option value="Cardiologist">Cardiologist</option>
							<option value="Dermatologist">Dermatologist</option>
							<option value="Gastroenterologist">Gastroenterologist</option>
						</select>
					</div>
					<div className="form-group">
						<label>Price</label>
						<input
							type="number"
							name="price"
							className="form-control"
							onChange={onTextChange}
							min="0"
						/>
					</div>
				</React.Fragment>
			);
		} else if (type === 'patients') {
			return (
				<div className="form-group">
					<label>Status</label>
					<select className="form-control" name="type" onChange={onTextChange}>
						<option value="General">General</option>
						<option value="VIP">VIP</option>
					</select>
				</div>
			);
		}
	};

	return (
		<div className="row mt-3">
			<div className="col-md-5 d-block mx-auto">
				<h1 className="display-4 mb-5">
					Add {type === 'doctors' ? 'Doctor' : 'Patient'}
				</h1>
				<form onSubmit={onAddRecord}>
					<div>
						<input type="file" name="file" onChange={onChangeHandler} />
					</div>
					{/* <div>
						<input
							type="file"
							name="image"
							id="imgupload"
							onChange={onTextChange}
						/>
					</div> */}
					{/* <div className="form-group">
						<label>Image</label>
						<input
							type="file"
							name="image"
							className="form-control-file"
							onChange={onTextChange}
							formEncType="multipart/form-data"
						/>
					</div> */}
					<div className="form-group">
						<label>First Name</label>
						<input
							type="text"
							name="firstName"
							className="form-control"
							onChange={onTextChange}
						/>
					</div>
					<div className="form-group">
						<label>Last Name</label>
						<input
							type="text"
							name="lastName"
							className="form-control"
							onChange={onTextChange}
						/>
					</div>
					<div className="form-group">
						<label>Email address</label>
						<input
							type="email"
							name="email"
							className="form-control"
							onChange={onTextChange}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="text"
							name="phone"
							className="form-control"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							onChange={onTextChange}
						/>
					</div>
					{extraFields()}
					<div className="d-flex justify-content-end">
						<input
							type="submit"
							value="Save"
							className="btn btn-primary"
							onClick={onAddRecord}
						/>

						<button
							type="button"
							className="btn btn-secondary ml-3"
							onClick={onCancelAdd}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default withRouter(RenderAddForm);
