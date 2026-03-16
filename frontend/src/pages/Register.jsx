import React from "react";
import { Form, Input, Button, DatePicker } from "antd";
import { data, useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import axiosInstance from "../api/axiosConfig";
import { useSnackbar } from "notistack";

export default function Register() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleValidateForm = (values) => {
    const data = {
      ...values,
      birthdate: values.birthdate?.format("YYYY-MM-DD"),
    };
    axiosInstance
      .post("/register", data)
      .then((resp) => {
        console.log("user crée:", resp);
        navigate("/login");
        enqueueSnackbar("Compte crée avec succès!", { variant: "success" });
      })
      .catch((error) => {
        console.log(error);
        const message =
          error.response?.data?.message || error.message || "Erreur inconnue";

        enqueueSnackbar(message, { variant: "error" });
      });
  };

  return (
    <>
      <div className="self-start mb-4">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 mb-6 hover:opacity-80 transition"
          style={{ cursor: "pointer" }}
        >
          <ArrowLeftOutlined /> Espace connexion
        </button>
      </div>
      <div className="min-h-screen flex items-center justify-center px-4 mt-4">
        <div className="w-full max-w-sm bg-slate-50 backdrop-blur-sm rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 text-center mb-5">
            Créer un compte
          </h3>

          <Form
            name="register"
            layout="vertical"
            onFinish={handleValidateForm}
            className="[&_.ant-form-item]:mb-3"
          >
            <Form.Item
              name="lastname"
              label="Nom"
              rules={[{ required: true, message: "Veuillez entrer votre nom" }]}
            >
              <Input size="middle" />
            </Form.Item>

            <Form.Item
              name="firstname"
              label="Prénom"
              rules={[
                { required: true, message: "Veuillez entrer votre prénom" },
              ]}
            >
              <Input size="middle" />
            </Form.Item>

            <Form.Item
              name="birthdate"
              label="Date de naissance"
              rules={[
                {
                  required: true,
                  message: "Veuillez entrer votre date de naissance",
                },
              ]}
            >
              <DatePicker style={{ width: "100%" }} size="middle" />
            </Form.Item>

            <Form.Item
              name="nickname"
              label="Pseudo"
              rules={[{ required: true, message: "Veuillez entrer un pseudo" }]}
            >
              <Input size="middle" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { type: "email", message: "Email invalide" },
                { required: true, message: "Veuillez entrer votre email" },
              ]}
            >
              <Input size="middle" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Mot de passe"
              rules={[
                { required: true, message: "Veuillez entrer un mot de passe" },
              ]}
              hasFeedback
            >
              <Input.Password size="middle" />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirmer le mot de passe"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Veuillez confirmer le mot de passe",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Les mots de passe ne correspondent pas"),
                    );
                  },
                }),
              ]}
            >
              <Input.Password size="middle" />
            </Form.Item>

            <Form.Item className="!mt-4">
              <Button
                type="primary"
                htmlType="submit"
                block
                className="bg-blue-900 hover:bg-blue-800"
              >
                Créer un compte
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
