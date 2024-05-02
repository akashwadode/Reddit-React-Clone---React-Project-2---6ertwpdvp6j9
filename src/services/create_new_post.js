const create_new_post = async (title,content) => {
    const token = sessionStorage.getItem("userToken");
    const FormData = require('form-data');
    let data = new FormData();
    data.append('title', 'test post');
    data.append('content', 'this is test post content');
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://academics.newtonschool.co/api/v1/reddit/post/',
      headers: { 
        'projectId': '7k1ct68pbbmr', 
        'Authorization': `Bearer ${token}`, 
        ...data.getHeaders()
      },
      data : data
    };

    try{
        const response = await axios.post(config);
        console.log(response);
    }catch(error){
        console.log("error",error);
    }
}

export default create_new_post