import { EMPLOYEE_POST_DATA } from "@/types/EmployeeInfoProps";

export const transformEmployeeDetails = (data: EMPLOYEE_POST_DATA) => {
  return {
    personalInfo: {
      address: data.address,
      city: data.city,
      dateOfBirth: data.dateOfBirth,
      emailAddress: data.emailAddress,
      firstName: data.firstName,
      gender: data.gender,
      lastName: data.lastName,
      maritalStatus: data.maritalStatus,
      mobileNumber: data.mobileNumber,
      nationality: data.nationality,
      photoURL: data.photoURL,
      state: data.state,
      zipCode: data.zipCode,
    },
    professionalInfo: {
      department: data.department,
      designation: data.designation,
      email: data.email,
      employeeId: data.employeeId,
      employmentType: data.employmentType,
      joiningDate: data.joiningDate,
      officeLocation: data.officeLocation,
      userName: data.userName,
      workingDays: data.workingDays,
    },
    documents: {
      appointmentLetter: data.appointmentLetter,
      experienceLetter: data.experienceLetter,
      relivingLetter: data.relivingLetter,
      salarySlip: data.salarySlip,
    },
    accountAccess: {
      email: data.email,
      githubId: data.githubId,
      skypeId: data.skypeId,
      slackId: data.slackId,
    },
  };
};
