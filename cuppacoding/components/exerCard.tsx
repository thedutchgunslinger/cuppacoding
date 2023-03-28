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
        </div>
        <div className={ExerCardStyle.description}>{description}</div>
        <Languages lang={lang} />
      </div>
    </Link>
  );
}
