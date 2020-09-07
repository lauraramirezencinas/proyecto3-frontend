import React from 'react';

function UploadImage(props) {
	const handleChange = (event) => {
		props.handleImageChange(event.target.files[0]);
	};
	return (
		<div className="form-group">
			<label>Imagen*</label>
			<input
				type="file"
				className=""
				placeholder=""
				name={props.fieldName}
				onChange={handleChange}
			/>
		</div>
	);
}

export default UploadImage;
