function createLoginTracker(userInfo) {
  console.log(userInfo.userName);
  console.log(userInfo.passWord);

  let attemptCount = 0;
  const login = (passwordAttempt) => {
    attemptCount++;

    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    return `Attempt ${attemptCount}: Login failed`;
  };

  return login;
}

createLoginTracker({
  userName: "user1",
  passWord: "123",
});

module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};
