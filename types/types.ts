import { Dispatch, SetStateAction } from "react";
import { StaticImageData } from "next/image";
export type ATTENDANCE_TABLE_PROPS = {
  display: string;
  SearchBarDisplay: string;
  showAttendance: boolean;
};

export type SEARCH_BAR_PROPS = {
  width: number;
  searchText: string;
  setSearchText: (text: string) => void;
};
export type ATTENDANCE_STATE = {
  isLoading: boolean;
  error: string | null;
};

export type STATS_CARD_TYPES = {
  src: StaticImageData;
  icon: StaticImageData;
  amount: number;
  heading: string;
  date: string;
  percent: number;
  BgColor: string;
  textColor: string;
  iconAlt: string;
  srcAlt: string;
};
export type PROFILE_TABLE_HEADINGS = {
  heading: string;
};
export type PROFILE_TABLE_DATA = {
  [key: string]: string;
};
export type GLOBAL_PROFILE_TABLE_PROPS = {
  tableHeadings: PROFILE_TABLE_HEADINGS[];
  tableData: PROFILE_TABLE_DATA[];
};
export type EMPLOYEE_PERSONAL_DATA = {
  [key: string]: string;
  photoURL: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  emailAddress: string;
  dateOfBirth: string;
  address: string;
  city: string;
  gender: string;
  maritalStatus: string;
  nationality: string;
  state: string;
  zipCode: string;
};
export type EMPLOYEE_PROFESSIONAL_DATA = {
  [key: string]: string;
  employeeId: string;
  userName: string;
  employmentType: string;
  email: string;
  department: string;
  designation: string;
  workingDays: string;
  joiningDate: string;
  officeLocation: string;
};
export type EMPLOYEE_DOCUMENTS_DATA = {
  appointmentLetter: string;
  salarySlip: string;
  relivingLetter: string;
  experienceLetter: string;
};
export type EMPLOYEE_ACCOUNT_ACCESS_DATA = {
  [key: string]: string;
  email: string;
  slackId: string;
  skypeId: string;
  githubId: string;
};
export type INPUT_PROPS = {
  name: string;
  value: string;
  placeholder: string;
  type: HTMLInputElement["type"];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export type CustomChangeEvent = {
  target: {
    name: string;
    value: string;
  };
};
type Options = {
  label: string;
  value: string;
};

export type INPUT_DROPDOWN_PROPS = {
  label: string;
  width?: string;
  initialValue?: string;
  margin?: boolean;
  height?: string;
  options: Options[];
  onChange: (e: CustomChangeEvent) => void;
};
export type INFO_BAR_PROPS = {
  option: number;
  handleClick: (num: number) => void;
};
export type LAYOUT_PROPS = {
  heading: string;
  description: string;
  isSideBarOpen: boolean;
  setIsSideBarOpen: (value: boolean) => void;
};
export type EMPLOYEE_POST_DATA = {
  address: string;
  appointmentLetter: string;
  city: string;
  dateOfBirth: string;
  department: string;
  designation: string;
  email: string;
  emailAddress: string;
  employeeId: string;
  employmentType: string;
  experienceLetter: string;
  firstName: string;
  gender: string;
  githubId: string;
  joiningDate: string;
  lastName: string;
  maritalStatus: string;
  mobileNumber: string;
  nationality: string;
  officeLocation: string;
  photoURL: string;
  relivingLetter: string;
  salarySlip: string;
  skypeId: string;
  slackId: string;
  state: string;
  userName: string;
  workingDays: string;
  zipCode: string;
};
export type EMPLOYEE_SORTED_DATA = {
  personalInfo: EMPLOYEE_PERSONAL_DATA;
  professionalInfo: EMPLOYEE_PROFESSIONAL_DATA;
  documents: EMPLOYEE_DOCUMENTS_DATA;
  accountAccess: EMPLOYEE_ACCOUNT_ACCESS_DATA;
};
export type EMPLOYEE_PERSONAL_INFO_PROPS = {
  data?: EMPLOYEE_PERSONAL_DATA;
  setData: Dispatch<SetStateAction<EMPLOYEE_PERSONAL_DATA>>;
  option: number;
  handleClick: (num: number) => void;
};
export type EMPLOYEE_PROFESSIONAL_INFO_PROPS = {
  data?: EMPLOYEE_PROFESSIONAL_DATA;
  setData: Dispatch<SetStateAction<EMPLOYEE_PROFESSIONAL_DATA>>;
  option: number;
  handleClick: (num: number) => void;
};
export type EMPLOYEE_DOCUMENTS_PROPS = {
  data?: EMPLOYEE_DOCUMENTS_DATA;
  setData: Dispatch<SetStateAction<EMPLOYEE_DOCUMENTS_DATA>>;
  option: number;
  handleClick: (num: number) => void;
};
export type EMPLOYEE_ACCOUNT_ACCESS_PROPS = {
  data?: EMPLOYEE_ACCOUNT_ACCESS_DATA;
  setData: Dispatch<SetStateAction<EMPLOYEE_ACCOUNT_ACCESS_DATA>>;
  option: number;
  handleClick: (num: number) => void;
};
export type EMPLOYEE_DATA = {
  data: {
    id: string;
    address: string;
    appointmentLetter: string;
    city: string;
    dateOfBirth: string;
    department: string;
    designation: string;
    email: string;
    emailAddress: string;
    employeeId: string;
    employmentType: string;
    experienceLetter: string;
    firstName: string;
    gender: string;
    githubId: string;
    joiningDate: string;
    lastName: string;
    maritalStatus: string;
    mobileNumber: string;
    nationality: string;
    officeLocation: string;
    photoURL: string;
    relivingLetter: string;
    salarySlip: string;
    skypeId: string;
    slackId: string;
    state: string;
    userName: string;
    workingDays: string;
    zipCode: string;
  };
};
export type EMPLOYEES_TABLE_DATA = {
  firstName: string;
  lastName: string;
  employeeId: string;
  type?: string;
  department: string;
  designation: string;
  employmentType: string;
  photoURL: string;
  id: string;
};
export type EMPLOYEE_ATTENDANCE_DATA = {
  id: string;
  attendance?: string;
  photoURL: string;
  firstName: string;
  lastName: string;
  designation: string;
  type: string;
  checkIn: string;
  status: string;
};
export type EMPLOYEE_DETAILS_PROPS = {
  id: string;
  setName: (name: string) => void;
};
export type CHART_STATE = {
  series: {
    name: string;
    data: number[];
  }[];
};
export type BUTTON_PROPS = {
  option: number;
  handleClick: (num: number) => void;
};
