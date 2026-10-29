export interface NewsParticipants {
	teachers: string[];
	classes: string[];
}

export interface NewsItem {
	id: string;
	date: string;
	title: string;
	description: string;
	category: string;
	participants: NewsParticipants;
	content: string;
}
