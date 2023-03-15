// import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { content, color, icon } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<RichText.Content tagName="h4" value={content} style={{ color }} />
			<div className="icon-show">
				<span className={`fab fa-${icon}`}></span>
			</div>
			<InnerBlocks.Content />
		</div>
	);
}
