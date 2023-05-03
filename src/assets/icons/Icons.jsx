import React from "react";

export const AreaIcon = ({stroke="white"})=>{
	return(
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 22H23" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M19.78 22.01V17.55" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M19.8 10.89C18.58 10.89 17.6 11.87 17.6 13.09V15.36C17.6 16.58 18.58 17.56 19.8 17.56C21.02 17.56 22 16.58 22 15.36V13.09C22 11.87 21.02 10.89 19.8 10.89Z" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M2.09998 22V6.03003C2.09998 4.02003 3.10003 3.01001 5.09003 3.01001H11.32C13.31 3.01001 14.3 4.02003 14.3 6.03003V22" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M5.79999 8.25H10.75" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M5.79999 12H10.75" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M8.25 22V18.25" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	)
};

export const DropIcon = ({stroke="white"})=>{
	return(
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M12.61 2.21C12.25 1.93 11.75 1.93 11.39 2.21C9.49001 3.66 3.88 8.39 3.91 13.9C3.91 18.36 7.54001 22 12.01 22C16.48 22 20.11 18.37 20.11 13.91C20.12 8.48 14.5 3.67 12.61 2.21Z" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10"/>
		</svg>
	)
};

export const LoutIcon = ({stroke="#031F73"})=>{
	return(
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M9.6001 23.1001H3.30013C2.66361 23.1001 2.05317 22.8403 1.60309 22.3777C1.153 21.9151 0.900146 21.2877 0.900146 20.6335V3.36681C0.900146 2.71261 1.153 2.08521 1.60309 1.62262C2.05317 1.16003 2.66361 0.900146 3.30013 0.900146H9.6001" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M17.1006 17.9999L23.1005 12L17.1006 6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M23.0996 12H8.69971" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	)
};

export const GarbageIcon = ({stroke="#031F73"})=>{
	return(
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="4.5" y="5.10004" width="15" height="18" rx="1.5" stroke={stroke}strokeWidth="1.5"/>
		<rect x="2.25" y="2.10004" width="19.5" height="3" rx="0.75" stroke={stroke}strokeWidth="1.5" strokeLinejoin="round"/>
		<path d="M9 0.899963L15 0.899963" stroke={stroke}strokeWidth="1.5" strokeLinecap="round"/>
		<path d="M12 9V19.5" stroke={stroke}strokeWidth="1.5" strokeLinecap="round"/>
		<path d="M15.75 9V19.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/>
		<path d="M8.25 9V19.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round"/>
		</svg>

	)
};

export const EditIcon = ({stroke="#031F73"})=>{
	return(
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M14.91 4.15002C15.58 6.54002 17.45 8.41002 19.85 9.09002" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	)
};

export const PersonalIcon = ({stroke="#031F73"}) =>{
	return(
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		<path d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>

	)
}
