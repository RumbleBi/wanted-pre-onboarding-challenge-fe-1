export const getDate = (data: string) => {
  const year = data.split("-")[0];
  const month = data.split("-")[1];
  const day = data.split("-")[2].split("T")[0];
  const hour = data.split("T")[1].split(":")[0];
  const min = data.split("T")[1].split(":")[1];
  return `${year}.${month}.${day} ${hour}시 ${min}분`;
};

export const signupValidation = (data: any) => {
  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const passwordRegExp = /^.{8,}$/;
  if (emailRegExp.test(data.email) && passwordRegExp.test(data.password)) {
    return true;
  } else {
    return false;
  }
};
