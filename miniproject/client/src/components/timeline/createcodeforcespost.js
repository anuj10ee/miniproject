async function createcodeforcesPost(event) {
    event.preventDefault();
    var bodyformdata = new FormData();
    // bodyformdata.append("codeforcesID", codeforcesID);
    bodyformdata.append("userId", event.userId);
    console.log(bodyformdata);

    const response = await fetch("http://localhost:1337/posts", {
      method: "POST",
      body: bodyformdata,
    });
    const data = await response.json();
    // const data1 = new FormData()
    //     data1.append("file",profilePic)
    //     data1.append("upload_preset","miniproject")
    //     data1.append("cloud_name","dz2u63jv5")
    //     fetch("https://api.cloudinary.com/v1_1/dz2u63jv5/image/upload",{
    //         method:"post",
    //         body:data1
    //     })
    //     .then(res=>res.json())
    //     .then(data1=>{
    //        console.log(data1)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    console.log(data);
    // setUrl(data.img);
    if (response.status === 422 || !data) {
      window.alert("INVALID");
    }
  }

  module.exports = createcodeforcesPost;
