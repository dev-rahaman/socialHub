const PostData = ({ endPoint, newData }) => {
  try {
    fetch(`http://localhost:5000/${endPoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    });
  } catch (error) {
    console.error(`Error posting ${endPoint} to server:`, error);
  }
};

export default PostData;
