import { Link } from 'react-router-dom';
import { Button, Input } from '../../../components';
import { Root } from './style';

export const SignUp = () => {
	return (
		<Root>
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

			<Input placeholder={'First Name'} icon='user' />
			<Input placeholder={'Last Name'} icon='user' />
			<Input placeholder={'Email'} icon='email' />
			<Input placeholder={'Password'} icon='lock' iconRight='eyeslash' />
			<Input
				placeholder={'Confirm Password'}
				icon='check'
				iconRight='eyeslash'
				iconColor='green'
			/>

			<Input placeholder={'Testing'} />
		</Root>
	);
};
