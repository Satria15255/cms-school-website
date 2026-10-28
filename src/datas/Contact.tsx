import { MdMessage, MdPhoneInTalk, MdMarkEmailRead } from "react-icons/md";
import { LuSendHorizontal, LuPhone } from "react-icons/lu";
import { TbMailShare } from "react-icons/tb";

export const ContactAddress = [
	{
		id: "1",
		icon: <MdMessage />,
		label: "Aktiv Kerja",
		title: "Layanan Chat Whatsapp",
		description:
			"Respons cepat informasi pendaftaran, berkas, dan administrasi sekolah",
		contact: "+62 812-3456-7890",
		contactDesc: "Senin - Jumat (07.30 - 15.30 WIB)",
		cta: {
			ctaIcon: <LuSendHorizontal />,
			text: "Kirim Pesan Whatsapp",
		},
	},
	{
		id: "2",
		icon: <MdPhoneInTalk />,
		label: "PTSN Kantor",
		title: "Telepon Kantor & Tata Usaha",
		description:
			"Layanan sambungan langsung sekretariat dan departemen internal.",
		contact: "+62 21 555-0199",
		contactDesc: "Ext. 101 (Tata Usaha) & Ext. 102 (Kesiswaan)",
		cta: {
			ctaIcon: <LuPhone />,
			text: "Hubungi Sekarang",
		},
	},
	{
		id: "3",
		icon: <MdMarkEmailRead />,
		label: "Verifikasi Dinas",
		title: "Surel / Email Resmi",
		description:
			"Surat dinas, legalitas, permohonan kemitraan, dan verifikasi dokumen.",
		contact: "info@smpnusantara.sch.id",
		contactDesc: "humas@smpnusantara.sch.id",
		cta: {
			ctaIcon: <TbMailShare />,
			text: "Kirim Email Resmi",
		},
	},
];
