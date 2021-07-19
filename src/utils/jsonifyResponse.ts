const jsonifyResponse = async (url: string) => {
  const data = await fetch(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    mode: "cors",
  }).then((resp) => resp.json());
  return data;
};

export default jsonifyResponse;
