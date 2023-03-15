import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	InnerBlocks
} from '@wordpress/block-editor';
import { PanelBody, ColorPicker } from '@wordpress/components';
const { Fragment } = wp.element;
import IconPicker from './components/Icon-picker/icon-picker';
// editor style
import './editor.scss';
// Date Picker
// colors

export default function Edit({ attributes, setAttributes }) {
	const { content, color, icon } = attributes;
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="My Block Settings" initialOpen={true}>
					<ColorPicker
						color={color}
						onChangeComplete={(value) =>
							setAttributes({ color: value.hex })
						}
						disableAlpha
					/>
				</PanelBody>
				<PanelBody title="My Block Settings" initialOpen={true}>
					<IconPicker
						attrName= "icon"
						attrValue= {icon}
						setAttributes= {setAttributes}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<h1 className="title" style={{ color }}>
					Selected Icon
				</h1>
				<div className="icon-show">
					<span className={`fab fa-${icon}`}></span>
				</div>
			</div>
		</Fragment>
	);
}
