// controller function
const getAllPosts = (req, res) => {
  res.json({
    message: 'All posts fetched successfully'
  });
};

// export function
module.exports = {
  getAllPosts
};
