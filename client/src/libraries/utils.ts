export const getDate = (data: any) => {
  const year = data.split("-")[0];
  const month = data.split("-")[1];
  const day = data.split("-")[2].split("T")[0];
  const hour = data.split("T")[1].split(":")[0];
  const min = data.split("T")[1].split(":")[1];
  return `${year}.${month}.${day} ${hour}시 ${min}분`;
};
