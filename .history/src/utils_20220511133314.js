const paginate = (followers) => {
  const itemsPerPage = 9;
  const page = Math.ceil(followers.length / itemsPerPage);
  console.log(page);
};

export default paginate;
