const jsonifyResponse = async(url: string) => {
  const data = await fetch(url).then(resp => resp.json());
  return data;
}

export default jsonifyResponse;