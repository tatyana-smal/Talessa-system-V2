import { Fragment } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import "./case.css";
import phoneFrame from "@/assets/img/yarn/phone-frame.svg";
import status from "@/assets/img/yarn/status.svg";
import notch from "@/assets/img/yarn/notch.svg";

/** Рядки з переносами: ["Перший", "Другий"] → «Перший<br>Другий». */
export function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={line}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </>
  );
}

/** Макет телефона з екраном застосунку; положення в героя задають у відсотках (`style`). */
export function Phone({ screen, style }: { screen: StaticImageData; style: CSSProperties }) {
  return (
    <div className="phone" style={style}>
      <div className="phone__screen">
        <Image className="phone__content" src={screen} alt="" sizes="20vw" />
        <div className="phone__bar" />
        <Image className="phone__status" src={status} alt="" />
      </div>
      <Image className="phone__frame" src={phoneFrame} alt="" />
      <Image className="phone__notch" src={notch} alt="" />
    </div>
  );
}

/** Широка ілюстрація сторінки застосунку на всю ширину колонки. */
export function CaseImage({
  src,
  alt,
  className = "yarn-img",
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) {
  return <Image className={className} src={src} alt={alt} sizes="(min-width: 1280px) 1280px, 100vw" />;
}
