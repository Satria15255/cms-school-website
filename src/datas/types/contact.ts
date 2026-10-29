import type { ReactNode } from "react";

export interface ContactItem {
	id: string;
	icon: ReactNode;
	label: string;
	title: string;
	description: string;
	contact: string;
	contactDesc: string;
	cta: {
		ctaIcon: ReactNode;
		text: string;
	};
}
