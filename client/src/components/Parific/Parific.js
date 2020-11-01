import React, { useEffect } from "react";
import { getUserData } from "../../api/apiReq";

function Parific() {
  useEffect(() => {
    const getData = async () => {
      let data = await getUserData();
      return data;
    };
    getData().then((res) => {
      //   console.log(res);
    });
  });
  return <div>app here</div>;
}

export default Parific;
