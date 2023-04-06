import { useForm } from "react-hook-form";
import { registerSchema } from "./registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledHeaderRegisterPageContainer } from "./style";
import { Header } from "../../../src/components/Header";
import { Link } from "react-router-dom";
import { StyledRegisterMainContainer } from "./style";
import { FormRegister } from "../../components/FormRegister";

export const Register = ({ toast }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const [responseApi, setResponseApi] = useState("");
  // console.log(responseApi);

  const navigate = useNavigate();

  const toastSuccess = () => {
    toast.success("Conta criada com sucesso!", {
      autoClose: 2000,
    });
  };

  const registerFormSubmit = (registerFormData) => {
    postRegisterUser(registerFormData);
  };

  const postRegisterUser = async (registerFormData) => {
    try {
      const responseApi = await api
        .post("/users", registerFormData)
        .then((response) => {
          // console.log(response);
          setResponseApi(response.data);
        });
      toastSuccess();
      navigate("/");
      return responseApi;
    } catch (error) {
      // console.log(error);
      toast.error("Ops! Algo deu errado", {
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <StyledHeaderRegisterPageContainer>
        <Header>
          <Link to="/">Voltar</Link>
        </Header>
      </StyledHeaderRegisterPageContainer>
      <StyledRegisterMainContainer>
        <FormRegister
          register={register}
          handleSubmit={handleSubmit}
          registerFormSubmit={registerFormSubmit}
          errors={errors}
        />
      </StyledRegisterMainContainer>
    </>
  );
};
