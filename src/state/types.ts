export type Patient = {
	id: string;
	first_name: string;
	last_name: string;
	ogin: string;
	password: string;
	photo: string;
	role_id: string;
};

export type AppState = {
	patients?: Patient[];
};

export type AppAction<T extends string, P = null> = {
	type: T;
} & (P extends null ? unknown : { payload: P });
