import { createContext, useContext } from "react";
import { UserContext } from "./UserProvider";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const {
    // user,
    setUser,
    updateTech,
    // setUpdateTech,
    setLoading,
    toast,
    toastError,
  } = useContext(UserContext);

  const toastSuccess = () => {
    toast.success("Tecnologia criada", {
      autoClose: 2000,
    });
  };

  console.log(updateTech);

  // const addNewToTechsList = (currentTech) => {
  //   const newTechsList = [...user, currentTech];
  //   if (!user.some((user) => user.id === currentTech.id)) {
  //     setUser(newTechsList);
  //   }
  // };

  const createNewTechnology = async (formData) => {
    try {
      const responseApi = await api
        .post("/users/techs", formData)
        .then((response) => {
          setUser(response.data);
          toastSuccess();
        });
      return responseApi;
    } catch (error) {
      toastError();
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider value={{ createNewTechnology }}>
      {children}
    </TechContext.Provider>
  );
};
