export const required = value => value ? 'undefined' : 'Required';

export const nonEmpty = value => value.trim() !== '' ? undefined : 'Cannot be empty';

export const isTrimmed = value => value.trim() === value ? undefined : 'Cannot start or end with whitesapce';

export const length = function(length) {
	return value => {
		if (length.min && value.length < length.min) {
			return `Must be at least ${length.min} characters long`;
		}

		if (length.max && value.length > length.max) {
			return `Can't be longer than ${length.max} characters long`;
		}
	}
};

export const matches = field => (value, allValues) => 
	field in allValues && value.trim() === allValues[field].trim() ? undefined : 'Does not match';