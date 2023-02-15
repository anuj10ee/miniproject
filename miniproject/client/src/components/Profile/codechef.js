const callCodechef = async (props) => {
  console.log(props);

  try {
    const res = await fetch(
      `https://competitive-coding-api.herokuapp.com/api/codechef/${props.codechefID}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "omit",
      }
    );
    const codechefdata = await res.json();
    return codechefdata;
  } catch (err) {
    console.log(err);
  }
};

export default callCodechef;
