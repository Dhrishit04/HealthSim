exports.getProfile = async (userId) => {
    // Dummy profile data; in a real app, query the database.
    return {
      id: userId,
      name: "John Doe",
      email: "john@example.com"
    };
  };
  
  exports.updateProfile = async (userId, updateData) => {
    // Dummy implementation: Return merged data.
    return { id: userId, ...updateData };
  };
  