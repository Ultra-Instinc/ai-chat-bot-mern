import React from "react";
import { Link } from "react-router-dom";
type Props = {
	to: string;
	bg: string;
	text: string;
	textColor: string;
	onClick?: () => Promise<void>;
};
const NavigationLink = (props: Props) => {
	return (
		<Link
			to={props.to}
			style={{ background: props.bg, color: props.textColor }}
			className='font-[600] uppercase mx-2.5 py-2 px-5 rounded-[10px] tracking-[1px]'>
			{props.text}
		</Link>
	);
};

export default NavigationLink;
