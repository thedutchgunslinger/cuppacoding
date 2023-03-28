import ExerCardStyle from '../styles/exerCard.module.css'
import Languages from './languages'
import Link from "next/link";

export default function ExerCard( { id, title, level, module, time, description, lang}: any) {
  return (
    <Link href={`/#${id}`} className={ExerCardStyle.noline}>
      <div className={`${ExerCardStyle.container}`} data-level={level}>
        <h1 className={ExerCardStyle.title}>{title}</h1>
        <p className={ExerCardStyle.module}>{module}</p>
        <div className={ExerCardStyle.time}>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 0C4.6996 0 0 4.6996 0 10.5C0 16.3004 4.6996 21 10.5 21C16.3004 21 21 16.3004 21 10.5C21 4.6996 16.3004 0 10.5 0ZM12.9175 14.8228L9.18327 12.1089C9.05202 12.0115 8.97581 11.8591 8.97581 11.6982V4.57258C8.97581 4.29315 9.20444 4.06452 9.48387 4.06452H11.5161C11.7956 4.06452 12.0242 4.29315 12.0242 4.57258V10.4026L14.7127 12.3587C14.9413 12.5238 14.9879 12.8413 14.8228 13.07L13.6288 14.7127C13.4637 14.9371 13.1462 14.9879 12.9175 14.8228Z"
              fill="black"
            />
          </svg>

          <p>{time}m</p>
          <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3646 0.77312L7.5304 6.51965L1.18926 7.44413C0.052104 7.60906 -0.403625 9.01097 0.421028 9.81392L5.0087 14.2844L3.92363 20.5995C3.72832 21.741 4.93058 22.596 5.93752 22.0622L11.6103 19.0804L17.283 22.0622C18.29 22.5917 19.4922 21.741 19.2969 20.5995L18.2118 14.2844L22.7995 9.81392C23.6242 9.01097 23.1684 7.60906 22.0313 7.44413L15.6901 6.51965L12.8559 0.77312C12.3481 -0.251186 10.8768 -0.264207 10.3646 0.77312Z"
              fill="black"
            />
          </svg>
          <p>{level}</p>
        </div>
        <div className={ExerCardStyle.description}>{description}</div>
        <Languages lang={lang} />
      </div>
    </Link>
  );
}
