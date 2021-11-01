import { PatientsLoadStart, PatientsLoadSuccess } from './patients';

export type Action = PatientsLoadStart | PatientsLoadSuccess;

export * from './patients';
