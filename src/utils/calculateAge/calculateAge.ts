const calculateAge = (birthday: string) => {
  const birthdayArr = birthday.split("-");
  const birthdayDate = new Date(
    Number(birthdayArr[0]),
    Number(birthdayArr[1]) - 1,
    Number(birthdayArr[2]),
  );

  const ageDifference = Date.now() - birthdayDate.getTime();
  const ageDate = new Date(ageDifference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default calculateAge;
