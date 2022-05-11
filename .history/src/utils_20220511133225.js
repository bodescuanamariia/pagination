const paginate = (followers) => {
  const itemsPerPage = 10;
  const page = followers.length / itemsPerPage;
  console.log(page);
};

export default paginate;
