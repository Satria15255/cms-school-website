import type { IconType } from "react-icons";

export interface CtaContact {
	ctaIcon: IconType;
	text: string;
}

export interface ContactItem {
	id: string;
	icon: IconType;
	label: string;
	title: string;
	description: string;
	contact: string;
	contactDesc: string;
	cta: CtaContact;
}
