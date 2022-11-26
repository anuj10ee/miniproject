const callCodeforcessubmissions = async (props) => {
  console.log(props);

  try {
    const res = await fetch(
      `https://codeforces.com/api/user.status?handle=Rinnegone`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        credentials: "omit",
      }
    );
    const codeforcesdata = await res.json();
    console.log(codeforcesdata);
    for await (const results of codeforcesdata.result) {
        console.log(results);

        console.log(results.verdict);

      if (results.verdict === "OK") {

        console.log(props.userID);
        console.log(results.id);
        const response = await fetch("http://localhost:1337/posts/codeforces", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: props.userID,
            time: results.creationTimeSeconds,
          }),
        });
        const data = await response.json();
        console.log(data);
      }
    }
    return codeforcesdata;
  } catch (err) {
    console.log(err);
  }
};

module.exports = callCodeforcessubmissions;
