interface AddMarkerProps {
	onClick: (latitude:number, longitude:number) => void,
}

export function AddMarkerButton({onClick}:AddMarkerProps) {
	const lat = -37.808194;
	const long = 144.895084;

	return (
			<button 
				className="border-2 rounded-sm p-2"
				onClick={ () => {onClick(lat, long)}}
			>
				AddMarker
			</button>
	);
}
