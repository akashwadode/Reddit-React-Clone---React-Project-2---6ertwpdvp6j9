
const login_service = async (email, password) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("projectId", "7k1ct68pbbmr");

  var raw = JSON.stringify({
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
      throw new Error("Login Failed");
    }
    return response.json();
  } catch (error) {
    throw new Error("Login Failed");
  }
};

export default login_service;
