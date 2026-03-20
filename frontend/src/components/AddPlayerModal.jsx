import { Modal } from "antd";
import { Form, Input, Button, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../api/axiosConfig";
import { setPlayersList } from "../redux/Players/players";
import { enqueueSnackbar } from "notistack";

export default function AddPlayerModal({ teamsList, open, onClose }) {
  const { positions, postes } = useSelector((state) => state.players);
  const dispatch = useDispatch();

  const handleValidate = (values) => {
    console.log("values", values);
    axiosInstance
      .post("/addPlayer", values)
      .then((resp) => {
        axiosInstance.get("/players").then((resp) => {
          dispatch(setPlayersList(resp.data));
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
                required: false,
                message: "Veuillez entrer le prénom du joueur",
              },
            ]}
          >
            <Input size="middle" />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Nom"
            rules={[
              { required: false, message: "Veuillez entrer le nom du joueur" },
            ]}
          >
            <Input size="middle" />
          </Form.Item>

          <Form.Item
            name="teamId"
            label="franchise"
            rules={[
              {
                required: true,
                message: "Veuillez sélectionner l'équipe",
              },
            ]}
          >
            <Select
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
