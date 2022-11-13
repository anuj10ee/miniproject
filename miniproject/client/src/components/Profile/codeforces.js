
const callCodeforces = async (props) => {
    console.log(props);

    try {
      const res = await fetch(
        `https://competitive-coding-api.herokuapp.com/api/codeforces/${props.codeforcesID}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "omit",
        }
      );
      const codeforcesdata = await res.json();
      console.log(codeforcesdata);
      return codeforcesdata;
    } catch (err) {
      console.log(err);
    }
  };


module.exports=callCodeforces
