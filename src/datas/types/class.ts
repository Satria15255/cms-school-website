export interface SubClassItem {
	kelas: string;
	walikel: string;
	classRoom: string;
	member: string;
	classStatus: string;
	classType: string;
}

export interface ClassItem {
	id: string;
	tingkat: string;
	symbol: string;
	phase: string;
	description: string;
	koord: string;
	subClass: SubClassItem[];
}
