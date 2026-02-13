import React from "react";
import { Timeline } from "antd";

export default function TimeLine() {
  return (
    <Timeline
      mode="left"
      items={[
        {
          label: <span className="text-white font-bold">1920</span>,
          content: (
            <p className="text-white leading-relaxed max-w-xl">
              Création de l’American Professional Football Association (APFA),
              ancêtre de la NFL.
            </p>
          ),
        },
        {
          label: <span className="text-white font-bold">1922</span>,
          content: (
            <p className="text-white leading-relaxed max-w-xl">
              L’APFA est officiellement renommée National Football League (NFL).
            </p>
          ),
        },
        {
          label: <span className="text-white font-bold">1933</span>,
          content: (
            <p className="text-white leading-relaxed max-w-xl">
              Introduction des divisions et du premier match de championnat NFL.
            </p>
          ),
        },
        {
          label: <span className="text-white font-bold">1958</span>,
          content: (
            <p className="text-white leading-relaxed max-w-xl">
              Finale mythique surnommée « The Greatest Game Ever Played », qui
              propulse la NFL à la télévision nationale.
            </p>
          ),
        },
        {
          label: <span className="text-white font-bold">1960</span>,
          content: (
            <p className="text-white leading-relaxed max-w-xl">
              Création de l’American Football League (AFL), future grande rivale
              de la NFL.
            </p>
          ),
        },
        {
          label: <span className="text-white font-bold">1967</span>,
          content: (
            <p className="text-white leading-relaxed max-w-xl">
              Premier Super Bowl entre les champions de la NFL et de l’AFL.
            </p>
          ),
        },
        {
          label: <span className="text-white font-bold">1970</span>,
          content: (
            <p className="text-white leading-relaxed max-w-xl">
              Fusion officielle NFL–AFL, naissance des conférences AFC et NFC.
            </p>
          ),
        },
        {
          label: <span className="text-white font-bold">Années 1980–1990</span>,
          content: (
            <p className="text-white leading-relaxed max-w-xl">
              Ère des grandes dynasties (49ers, Cowboys) et explosion médiatique
              de la NFL.
            </p>
          ),
        },
        {
          label: <span className="text-white font-bold">Années 2000</span>,
          content: (
            <p className="text-white leading-relaxed max-w-xl">
              La NFL devient la ligue sportive la plus suivie et lucrative des
              États-Unis.
            </p>
          ),
        },
        {
          label: <span className="text-white font-bold">Aujourd’hui</span>,
          content: (
            <p className="text-white leading-relaxed max-w-xl">
              La NFL est un phénomène mondial, avec des matchs internationaux et
              une audience record chaque année lors du Super Bowl.
            </p>
          ),
        },
      ]}
    />
  );
}
