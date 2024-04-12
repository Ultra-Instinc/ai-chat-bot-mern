import { Link } from "react-router-dom";
const Logo = () => {
	return (
		<div className='flex mr-auto gap-[15px] h-[40px] items-center'>
			<Link to={"/"}>
				<img
					src='openai.png'
					alt='openai'
					width={30}
					height={30}
					className=' invert'
				/>
			</Link>{" "}
			<div className='text-[13px] hidden lg:inline-block leading-10 font-[800]'>
				<span className='text-[18px]'>MERN</span>-GPT
			</div>
		</div>
	);
};

export default Logo;
