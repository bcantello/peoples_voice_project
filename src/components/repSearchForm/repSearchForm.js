import React from "react";

export default function RepSearchForm() {
	return (
		<form>
			<div id={'starting-locations-container'}>
				<div>
					<input
						className="starting-location-field"
						type="text"
						placeholder={'Zipcode'}
					/>
				</div>
			</div>
			<input className={'rep-search-btn'} type="submit" value="Search"/>
		</form>
	)
};
