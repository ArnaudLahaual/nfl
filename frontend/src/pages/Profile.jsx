import React from "react";
import { Card, Avatar, Button, Divider } from "antd";
import { useSelector } from "react-redux";

export default function Profile() {
  const { user } = useSelector((state) => state.log);

  if (!user || !user.firstname) return null;

  const handleDeleteAccount = () => {
    //ouverture modale suppression de compte ? ;
  };

  const handleModifyDataUser = () => {
    //ouverture fenetre modif infos user
  };

  return (
    <div className="flex justify-center mt-10">
      <Card
        style={{ width: 400 }}
        bordered={true}
        title={`Bienvenue ${user.firstname} ${user.lastname}`}
      >
        <div className="flex flex-col items-center gap-3">
          <Avatar
            size={80}
            style={{ backgroundColor: "#002C66", fontSize: 32 }}
          >
            {user.firstname[0]}
            {user.lastname[0]}
          </Avatar>

          <p>
            <strong>Pseudo:</strong> {user.nickname}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {user.birthdate && (
            <p>
              <strong>Date de naissance:</strong> {user.birthdate}
            </p>
          )}

          <Divider />

          <Button type="primary" block onClick={handleModifyDataUser}>
            Modifier mes informations
          </Button>
          <Button type="primary" danger block onClick={handleDeleteAccount}>
            Supprimer mon compte
          </Button>
        </div>
      </Card>
    </div>
  );
}
