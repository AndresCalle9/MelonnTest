import { API_TEST } from "../utils/globalConst";

const fetchApi = async (endPoint,method,body) => {
   const res = await fetch(`${API_TEST}/${endPoint}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      return res
}

export default fetchApi;