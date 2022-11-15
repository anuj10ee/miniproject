const callDetails = async (props) => {
    console.log(props);
  
    try {
      const res = await fetch(
        `http://localhost:1337/user/${props.userID}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "omit",
        }
      );
      const userdata = await res.json();
      console.log(userdata);
      return userdata;
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports = callDetails;
  