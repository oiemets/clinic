import _ from 'lodash';

export const keysToCamelCase = (data: any): any => {
	if (_.isArray(data)) {
		return _.map(data, keysToCamelCase);
	}
	if (_.isObject(data)) {
		return _(data)
			.mapKeys(_.rearg(_.camelCase, 1))
			.mapValues((v, k) => keysToCamelCase(v))
			.value();
	}
	return data;
};
