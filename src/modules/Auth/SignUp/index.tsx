import { Link } from 'react-router-dom';
import { Button } from '../../../components';

export const SignUp = () => {
	return (
		<div>
			<h1>sign up</h1>
			<Link to='/signin'>sign in</Link>
			<Button variant='white' titleColor='lightBlue' border='lightBlue'>
				12:00 pm
			</Button>
			<Button variant='white' titleColor='mediumGrey'>
				12:00 pm
			</Button>
			<Button variant='solidGrey'>12:00 pm</Button>

			<Button variant='lightBlue' size='md'>
				Patients
			</Button>

			<Button variant='white' titleColor='lightBlue' size='md' fontLighter>
				Resolutions
			</Button>

			<Button size='lg'>Create Account</Button>
			<Button size='lg' variant='solidGrey'>
				Create Account
			</Button>

			<Button size='lg' arrow='left'>
				Create Account
			</Button>
			<Button size='lg' arrow='right' variant='lightBlue'>
				Create Account
			</Button>
		</div>
	);
};
