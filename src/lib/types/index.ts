import type { Token } from "marked";

export type Banner = {
	id: string;
	type: string;
	title?: string;
	content: string;
	url?: string;
	dismissible?: boolean;
	timestamp: number;
};

export enum TTS_RESPONSE_SPLIT {
	PUNCTUATION = 'punctuation',
	PARAGRAPHS = 'paragraphs',
	NONE = 'none'
}

export type FileData = {
	name: string;
	size: string;
	type: string;
	content: string;
	link: string;
	details: {
		text: string;
		tokens: Token[];
	};
};

export enum DocumentType {
	ALL = 'ALL',
	PDF = 'PDF',
	DOCX = 'DOCX',
	TXT = 'TXT',
	HTML = 'HTML'
}

export type DocumentTypeRecord = Record<DocumentType, string>;

export const DocumentTypeOptions: DocumentTypeRecord = {
	[DocumentType.ALL]: 'Wszystkie',
	[DocumentType.PDF]: 'PDF',
	[DocumentType.DOCX]: 'DOCX',
	[DocumentType.TXT]: 'TXT',
	[DocumentType.HTML]: 'HTML'
};

