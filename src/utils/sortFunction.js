const sortFunction = (a,b) => {
  let dateA = new Date(a.dueDate).getTime()
  let dateB = new Date(b.dueDate).getTime()
  return dateA > dateB ? 1 : -1;
}

export default sortFunction;