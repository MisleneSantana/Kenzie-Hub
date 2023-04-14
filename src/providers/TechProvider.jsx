import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserProvider";
import { api } from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { user, setLoading, toast, toastError } = useContext(UserContext);

  const [techList, setTechList] = useState(user.techs);

  const toastSuccessCreate = () => {
    toast.success("Tecnologia criada", {
      autoClose: 2000,
    });
  };

  const toastSuccessUpdate = () => {
    toast.success("Tecnologia alterada", {
      autoClose: 2000,
    });
  };

  const toastSuccessDelete = () => {
    toast.success("Tecnologia deletada", {
      autoClose: 2000,
    });
  };

  // Create tech:
  const handleNewTechnology = async (formData) => {
    try {
      const responseApi = await api
        .post("/users/techs", formData)
        .then((response) => {
          setTechList([...techList, response.data]);

          toastSuccessCreate();
        });
      return responseApi;
    } catch (error) {
      toastError();
    } finally {
      setLoading(false);
    }
  };

  // Update tech:
  const handleUpdateTech = async (techId, formData) => {
    try {
      const responseApi = await api
        .put(`/users/techs/${techId}`, formData)
        .then((response) => {
          const updateCurrentTech = techList.filter(
            (tech) => tech.id !== techId
          );
          setTechList([...updateCurrentTech, response.data]);

          toastSuccessUpdate();
        });

      return responseApi;
    } catch (error) {
      toastError();
    } finally {
      setLoading(false);
    }
  };

  // Delete tech:
  const handleDeleteTech = async (techId) => {
    try {
      const response = await api.delete(`/users/techs/${techId}`);

      const removeCurrentTech = techList.filter((tech) => tech.id !== techId);

      setTechList(removeCurrentTech);
      toastSuccessDelete();

      return response;
    } catch (error) {
      // toastError();
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        techList,
        handleNewTechnology,
        handleUpdateTech,
        handleDeleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
