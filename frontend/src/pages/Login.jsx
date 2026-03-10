import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { Link } from "react-router-dom";

export default function Login() {
  const onFinish = (values) => {
    console.log("values du formulaire: ", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-50 p-2 rounded-xl shadow-md">
        <h3 className="text-2xl text-blue-900 font-semibold text-center mb-2">
          Vous avez déjà un compte
        </h3>

        <Form
          name="login"
          initialValues={{ remember: true }}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            label="Pseudo"
            rules={[
              { required: true, message: "Veuillez renseigner votre pseudo" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Votre pseudo" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Mot de passe"
            rules={[
              {
                required: true,
                message: "Veuillez renseigner votre mot de passe",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Mot de passe"
            />
          </Form.Item>

          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Se souvenir de moi</Checkbox>
              </Form.Item>

              <a href="#" className="bg-blue-900 hover:bg-blue-800">
                Mot de passe oublié
              </a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              className="bg-blue-900 hover:bg-blue-800"
            >
              Se connecter
            </Button>

            <div className="text-center mt-4 text-sm">
              Vous n'avez pas de compte ?{" "}
              <Link to="/register" className="text-blue-500 font-medium">
                Créer un compte
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
