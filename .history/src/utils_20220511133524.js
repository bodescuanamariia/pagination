const paginate = (followers) => {
  const itemsPerPage = 9;
  const pages = Math.ceil(followers.length / itemsPerPage);
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    console.log(start);
  });

  console.log(newFollowers);
};

export default paginate;
