import { Modal } from "antd";
import { Form, Input, Button, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../api/axiosConfig";
import { setPlayersList } from "../redux/Players/players";
import { enqueueSnackbar } from "notistack";

export default function AddPlayerModal({ teamsList, open, onClose }) {
  const { positions, postes } = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleValidate = (values) => {
    console.log("values", values);
    axiosInstance
      .post("/addPlayer", values)
      .then((resp) => {
        axiosInstance.get("/players").then((resp) => {
          dispatch(setPlayersList(resp.data));
          form.resetFields();
        });
        enqueueSnackbar("Joueur crée avec succès!", { variant: "success" });
        onClose();
      })
      .catch((error) => {
        console.log(error);
        const message = error.message;
        enqueueSnackbar(message, { variant: "error" });
      });
  };

  return (
    <div>
      <Modal
        title="Ajouter un joueur"
        open={open}
        onCancel={onClose}
        footer={null}
      >
        <Form
          form={form}
          name="register"
          layout="vertical"
          onFinish={handleValidate}
          className="[&_.ant-form-item]:mb-3"
        >
          <Form.Item
            name="firstName"
            label="Prénom"
            rules={[
              {
                required: true,
                message: "Veuillez entrer le prénom du joueur",
              },
            ]}
          >
            <Input
              size="middle"
              placeholder="Veuillez entrer le prénom du joueur"
            />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Nom"
            rules={[
              { required: true, message: "Veuillez entrer le nom du joueur" },
            ]}
          >
            <Input
              size="middle"
              placeholder="Veuillez entrer le nom du joueur"
            />
          </Form.Item>

          <Form.Item
            name="teamId"
            label="Franchise"
            rules={[
              {
                required: true,
                message: "Veuillez sélectionner l'équipe",
              },
            ]}
          >
            <Select
              placeholder="Veuillez sélectionner l'équipe"
              options={teamsList.map((team) => ({
                label: team.name,
                value: team.id,
              }))}
            />
          </Form.Item>

          <Form.Item
            name="position"
            label="Poste"
            rules={[
              {
                required: true,
                message: "Veuillez renseigner le poste du joueur",
              },
            ]}
          >
            <Select
              placeholder="Veuillez renseigner le poste du joueur"
              options={postes.map((poste) => ({
                label: poste,
                value: poste,
              }))}
            />
          </Form.Item>

          <Form.Item
            name="field"
            label="Equipe terrain"
            rules={[
              {
                required: true,
                message: "Veuillez renseigner l'équipe sur le terrain",
              },
            ]}
          >
            <Select
              placeholder="Veuillez renseigner l'équipe sur le terrain"
              options={positions.map((position) => ({
                label: position,
                value: position,
              }))}
            />
          </Form.Item>

          <Form.Item className="!mt-4">
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-blue-900 hover:bg-blue-800"
            >
              Ajouter joueur
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
