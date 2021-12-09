import {
	SelectTimeSlotWrapper,
	TimeSlotButton,
	TimeSlotContainer,
	TimeSlotButtonDisabled,
} from './style';
import { SelectHeader } from '../SelectHeader';
import { parseISO, format } from 'date-fns';
import { addHours } from 'utils';
import { useDispatch } from 'react-redux';
import { setSelectedAppointmentTime } from 'modules';

type SelectTimeSlotProps = {
	data?: string[];
	selectedDate?: string;
};

const fakeTimeSlots = addHours(
	new Date(1970, 0, 1, 9, 0, 0, 0),
	Math.floor(Math.random() * 9) + 3
);

export const SelectTimeSlot: React.FC<SelectTimeSlotProps> = ({
	data,
	selectedDate,
}) => {
	const dispatch = useDispatch();
	const onClick = (time: string) => {
		dispatch(setSelectedAppointmentTime(time));
	};

	const fakeData = fakeTimeSlots.map((t, i) => (
		<TimeSlotButtonDisabled type='button' key={t + '-/-' + i}>
			{format(t, 'hh:mm aaa ')}
		</TimeSlotButtonDisabled>
	));

	const realData = data?.map((t, i) => {
		const isoToString = format(parseISO(t), 'hh:mm aaa ');
		return (
			<TimeSlotButton
				active={selectedDate === t}
				key={t + '--' + i}
				type='button'
				onClick={() => onClick(t)}
			>
				{isoToString}
			</TimeSlotButton>
		);
	});

	const isData = data ? data.length : 0;

	return (
		<SelectTimeSlotWrapper>
			<SelectHeader number='3' title='Select an available timeslot' />
			<TimeSlotContainer>{isData > 0 ? realData : fakeData}</TimeSlotContainer>
		</SelectTimeSlotWrapper>
	);
};
