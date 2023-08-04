import JsonPlaceholderAPI from "./JsonPlaceholderAPI";


export const fetchUsers = async () => {
//   const imgResponse = await JsonPlaceholderAPI.get("/users", {
//     params: {
//       query: term,
//     },
//   });
  const users = await JsonPlaceholderAPI.get("/users");
  console.log("user api: ", users)
  return users
};
