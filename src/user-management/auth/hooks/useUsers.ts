import { useQuery } from "react-query";
import { getUsers } from "../use-cases/getUsers";

export const useUsers = () => {
  const result = useQuery("getUsers", getUsers);
  return result;
};
