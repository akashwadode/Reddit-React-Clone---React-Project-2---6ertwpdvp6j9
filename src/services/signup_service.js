
const signup_service = async (username,email, password) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("projectId", "7k1ct68pbbmr");

  var raw = JSON.stringify({
    name:`${username}`,
    email: `${email}`,
    password: `${password}`,
    appType: "reddit",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const url = "https://academics.newtonschool.co/api/v1/user/login";
  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error("Sign up Failed");
    }
    return response.json();
  } catch (error) {
    throw new Error("Sign up Failed");
  }
};

export default signup_service;
