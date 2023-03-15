const icons = [
	{
		name: 'Facebook',
		value: 'facebook-f',
	},
	{
		name: 'Facebook Square',
		value: 'facebook-square',
	},
	// {
	// 	name: 'Linkedin',
	// 	value: 'linkedin',
	// },
	// {
	// 	name: 'Instagram',
	// 	value: 'instagram',
	// },
	// {
	// 	name: 'Youtube',
	// 	value: 'youtube',
	// },
	// {
	// 	name: 'Pinterest',
	// 	value: 'pinterest',
	// },
	// {
	// 	name: 'Whatsapp',
	// 	value: 'whatsapp',
	// },
	// {
	// 	name: 'Email',
	// 	value: 'email',
	// },
	// {
	// 	name: 'Redit',
	// 	value: 'redit',
	// },
	// {
	// 	name: 'Spotify',
	// 	value: 'spotify',
	// },
];
import './icon-picker.scss';

const IconPicker = ({
    attrName,
    attrValue,
    setAttributes
}) => {
    return (
		<div className="icon-picker-wrapper">
			<h3>Selected Icon</h3>
			<div className="section-icon">
				<span className={`fab fa-${attrValue}`}></span>
			</div>
			<div className="icons-list">
				{icons &&
					icons.map((icon, index) => {
						return (
							<div key={index} className="icon-item">
								<button onClick={() => setAttributes({
                                    [attrName]: icon.value
                                })}>
									<span
										className={`fab fa-${icon.value}`}
									></span>
								</button>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default IconPicker;