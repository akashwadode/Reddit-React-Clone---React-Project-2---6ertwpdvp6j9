const remove_space = (str) => {
  if(!str){
    return "unknown"
  }
  let trimmedStr = str.split(" ").join("");
  return trimmedStr;
};

export default remove_space;
