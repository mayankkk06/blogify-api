const getAllPosts = async (req, res) => {
  res.json({
    message: "Fetching all posts",
  });
};

const getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;

    res.json({
      message: "Fetching data for post with ID: " + postId,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
};
