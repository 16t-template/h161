import { PasswordCategoryInfo, PasswordItem } from '../types/password';

export const PASSWORD_CATEGORIES: PasswordCategoryInfo[] = [
  { id: 'all', name: 'Tất cả tài khoản', iconName: 'KeyRound', color: 'text-primary', badgeBg: 'bg-primary/10' },
  { id: 'work', name: 'Công việc & ERP', iconName: 'Building2', color: 'text-blue-500', badgeBg: 'bg-blue-500/10' },
  { id: 'email', name: 'Email & Thư tín', iconName: 'Mail', color: 'text-amber-500', badgeBg: 'bg-amber-500/10' },
  { id: 'web', name: 'Website & Dịch vụ Web', iconName: 'Globe', color: 'text-emerald-500', badgeBg: 'bg-emerald-500/10' },
  { id: 'social', name: 'Mạng xã hội & Chat', iconName: 'Share2', color: 'text-indigo-500', badgeBg: 'bg-indigo-500/10' },
  { id: 'server', name: 'Server / VPS & Cloud', iconName: 'Server', color: 'text-purple-500', badgeBg: 'bg-purple-500/10' },
  { id: 'finance', name: 'Ngân hàng & Ví điện tử', iconName: 'Wallet', color: 'text-rose-500', badgeBg: 'bg-rose-500/10' },
  { id: 'software', name: 'Bản quyền & Phần mềm', iconName: 'Cpu', color: 'text-cyan-500', badgeBg: 'bg-cyan-500/10' },
  { id: 'other', name: 'Mục khác', iconName: 'FolderLock', color: 'text-slate-500', badgeBg: 'bg-slate-500/10' },
];

// Danh sách tài khoản & mật khẩu đồng bộ từ Google Sheets (dự phòng an toàn khi mất kết nối / rate limit)
export const INITIAL_PASSWORDS: PasswordItem[] = [
  {
    "id": "pw_1792135865809_15iy8xno",
    "code": "MK-116",
    "title": "auto shopee kit",
    "category": "web",
    "username": "quangh161",
    "password": "Ha425464@t26",
    "tags": [
      "Công việc"
    ],
    "isFavorite": false,
    "securityScore": 85,
    "lastChangedDate": "16/10/2026",
    "createdAt": "2026-10-16 07:31",
    "updatedAt": "2026-10-16 07:31"
  },
  {
    "id": "pw_1792115837449_abbb2c11",
    "code": "MK-115",
    "title": "wamely",
    "category": "web",
    "username": "Admin",
    "password": "wameli2026abc",
    "tags": [
      "Công việc"
    ],
    "isFavorite": false,
    "securityScore": 60,
    "lastChangedDate": "16/10/2026",
    "createdAt": "2026-10-16 01:57",
    "updatedAt": "2026-10-16 01:57"
  },
  {
    "id": "pw_1792048193470_monj8i8t",
    "code": "MK-114",
    "title": "shopee gdd top ke",
    "category": "web",
    "username": "942604355",
    "password": "Fcc@2026ab",
    "tags": [
      "Công việc"
    ],
    "isFavorite": false,
    "securityScore": 65,
    "lastChangedDate": "16/10/2026",
    "createdAt": "2026-10-15 07:09",
    "updatedAt": "2026-10-16 02:16"
  },
  {
    "id": "pw_1792048087018_237gg19t",
    "code": "MK-113",
    "title": "shopee bce best choi",
    "category": "web",
    "username": "965174261",
    "password": "Hanhung1999@",
    "tags": [
      "Công việc"
    ],
    "isFavorite": false,
    "securityScore": 85,
    "lastChangedDate": "15/10/2026",
    "createdAt": "2026-10-15 07:08",
    "updatedAt": "2026-10-15 07:08"
  },
  {
    "id": "pw_1790741587087_10e71fwi",
    "code": "MK-001",
    "title": "mail",
    "category": "web",
    "username": "luuanhh1612025v1@gmail.com",
    "password": "Mll1h161@t26",
    "tags": [
      "Công việc"
    ],
    "isFavorite": false,
    "securityScore": 85,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30 04:13",
    "updatedAt": "2026-09-30 04:13"
  },
  {
    "id": "pw_1790741543028_1k0j4oaf",
    "code": "MK-002",
    "title": "mail",
    "category": "email",
    "username": "ftha1698@gmail.com",
    "password": "Mlf8h161@t26",
    "tags": [
      "Công việc"
    ],
    "isFavorite": false,
    "securityScore": 85,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30 04:12",
    "updatedAt": "2026-09-30 04:12"
  },
  {
    "id": "pw_1790740695160_ys7fvrod",
    "code": "MK-003",
    "title": "MAIL",
    "category": "web",
    "username": "luutruh162@gmail.com",
    "password": "Mll2h161@t26",
    "tags": [
      "mail"
    ],
    "isFavorite": false,
    "securityScore": 85,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30 03:58",
    "updatedAt": "2026-09-30 06:55"
  },
  {
    "id": "pw_mk_004_1jvy3v6v",
    "code": "MK-004",
    "title": "hot sever",
    "category": "other",
    "username": "hhhcty6@gmail.com",
    "password": "đăng nhập mail",
    "url": "https://my.dataonline.vn/clientarea/services/hosting-gia-re/",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_005_db1u285g",
    "code": "MK-005",
    "title": "tên miền",
    "category": "other",
    "username": "hhhcty6@gmail.com",
    "password": "đăng nhập mail",
    "url": "https://inet.vn/",
    "tags": [
      "inet"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_006_9fulc3as",
    "code": "MK-006",
    "title": "TTP",
    "category": "other",
    "username": "979387369",
    "password": "66668888",
    "tags": [
      "viettel mb"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_007_25iag1g0",
    "code": "MK-007",
    "title": "TTP",
    "category": "other",
    "username": "983669543",
    "password": "983669543",
    "tags": [
      "viettel mn"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_008_21evhwbn",
    "code": "MK-008",
    "title": "CAMERA",
    "category": "other",
    "username": "FTHA0409@",
    "password": "Ha425464",
    "tags": [
      "YCC365 PLUS"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_009_16hlowr9",
    "code": "MK-009",
    "title": "CAMERA",
    "category": "other",
    "username": "FTHA0409@",
    "password": "Ha425464",
    "tags": [
      "YOOSEE"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_010_1xeyf5po",
    "code": "MK-010",
    "title": "CAMERA",
    "category": "other",
    "username": "FTHA0409@",
    "password": "Ha425464",
    "tags": [
      "V380 PRO"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_011_1qquovjr",
    "code": "MK-011",
    "title": "TTP",
    "category": "other",
    "username": "lamquangha1998@gmail.com",
    "password": "Ha@12345789",
    "tags": [
      "sky"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_012_1vim9gh6",
    "code": "MK-012",
    "title": "CAMERA",
    "category": "other",
    "username": "FTHA0409@",
    "password": "Ha425464",
    "tags": [
      "smart lite"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_013_24ljh2nu",
    "code": "MK-013",
    "title": "WEB",
    "category": "other",
    "username": "LAMQ616@GMAIL.COM",
    "password": "Bsl6h161@t23",
    "tags": [
      "bigseler"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_014_avz5ufoh",
    "code": "MK-014",
    "title": "CANVA",
    "category": "other",
    "username": "ftha0409",
    "password": "HA425464@",
    "tags": [
      "Canva"
    ],
    "isFavorite": false,
    "securityScore": 55,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30 06:49"
  },
  {
    "id": "pw_mk_015_zx0yowbp",
    "code": "MK-015",
    "title": "GAME",
    "category": "other",
    "username": "quangh161",
    "password": "gtvq1h161@t",
    "tags": [
      "game tv đế chế"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_016_1vs2qn1g",
    "code": "MK-016",
    "title": "ĐƠN VỊ VẬN CHUYỂN",
    "category": "other",
    "username": "phongketoanein@yersinnhatrang.edu.vn",
    "password": "Tottamphuc@1",
    "tags": [
      "ghtk"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_017_9dm0s0cx",
    "code": "MK-017",
    "title": "TK MICROSOFT",
    "category": "other",
    "username": "amquangha231098@outlook.com.vn",
    "password": "Mi h16 @t26",
    "tags": [
      "TK MICROSOFT"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_018_1r8lwgrg",
    "code": "MK-018",
    "title": "Fiver",
    "category": "other",
    "username": "quangh161(ftha0409@gmail.com)",
    "password": "fjq6h",
    "tags": [
      "fiverr"
    ],
    "isFavorite": false,
    "securityScore": 20,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30 06:54"
  },
  {
    "id": "pw_mk_019_qmwlcjlh",
    "code": "MK-019",
    "title": "MAIL",
    "category": "other",
    "username": "xaquang61@gmail.com",
    "password": "x1h161",
    "tags": [
      "mail kgd",
      "mail"
    ],
    "isFavorite": false,
    "securityScore": 20,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30 06:56"
  },
  {
    "id": "pw_mk_020_ajc5toor",
    "code": "MK-020",
    "title": "TTP",
    "category": "other",
    "username": "halq",
    "password": "lamquangha",
    "url": "https://ttp.1office.vn/login?r=https%3A%2F%2Fttp.1office.vn%2Fsocial",
    "tags": [
      "1offit"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_021_21xar7od",
    "code": "MK-021",
    "title": "CANVA",
    "category": "other",
    "username": "dothithanhhuyen.ttp.01112020@gmail.com",
    "password": "huyen@129999",
    "tags": [
      "Canva"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_022_19fotqtc",
    "code": "MK-022",
    "title": "CANVA",
    "category": "other",
    "username": "nhunghathi123123@gmail.com",
    "password": "Ein123456@125",
    "tags": [
      "Canva"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_023_6m3j94zw",
    "code": "MK-023",
    "title": "MAIL",
    "category": "other",
    "username": "quangthuy425464@",
    "password": "Mlq4h161@t",
    "tags": [
      "mail"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_024_neqizq2o",
    "code": "MK-024",
    "title": "LAZADA",
    "category": "other",
    "username": "quangthuy425464@gmail.com",
    "password": "laq4h161@t01655011144",
    "tags": [
      "lzdmall"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_025_mlu8aada",
    "code": "MK-025",
    "title": "netflix",
    "category": "other",
    "username": "andylovefranzy@web.",
    "password": "Andy08031",
    "tags": [
      "netffix"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_026_1rly1hih",
    "code": "MK-026",
    "title": "MAIL",
    "category": "other",
    "username": "nonglam151161",
    "password": "Mln1h161@t25",
    "tags": [
      "mail"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_027_kpc7czx1",
    "code": "MK-027",
    "title": "ĐƠN VỊ VẬN CHUYỂN",
    "category": "other",
    "username": "congtyttp8686",
    "password": "Ttp@2023!",
    "tags": [
      "best"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_028_usvaxizq",
    "code": "MK-028",
    "title": "netflix",
    "category": "other",
    "username": "angelchc1@aol.com",
    "password": "Ainis1!",
    "tags": [
      "netffix"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_029_1dol3d05",
    "code": "MK-029",
    "title": "netflix",
    "category": "other",
    "username": "venunka@gmail.com",
    "password": "Letadylko22",
    "tags": [
      "netffix"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_030_1ubonec7",
    "code": "MK-030",
    "title": "netflix",
    "category": "other",
    "username": "lynnowilson@yahoo.com",
    "password": "Trigger001",
    "tags": [
      "netffix"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_031_2fbfojnp",
    "code": "MK-031",
    "title": "netflix",
    "category": "other",
    "username": "gabriela.quintao@yahoo.com",
    "password": "Biel2014",
    "tags": [
      "netffix"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_032_2dk5ih2r",
    "code": "MK-032",
    "title": "netflix",
    "category": "other",
    "username": "veronicathai92@gmail.com",
    "password": "quynhnga1193",
    "tags": [
      "netffix"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_033_17dm6cjk",
    "code": "MK-033",
    "title": "MAIL",
    "category": "other",
    "username": "halq@tottamphuc.com",
    "password": "Ha425464",
    "tags": [
      "mail"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_034_1b8kzu9h",
    "code": "MK-034",
    "title": "MAIL",
    "category": "other",
    "username": "lamquangha16123@gmail.com",
    "password": "Mll3h161@t",
    "tags": [
      "MAIL"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_035_6xbmpvyg",
    "code": "MK-035",
    "title": "MAIL",
    "category": "other",
    "username": "hhhcty6@gmail.com",
    "password": "Mlh6h161@t24",
    "tags": [
      "MAIL"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_036_ucq0x693",
    "code": "MK-036",
    "title": "MAIL",
    "category": "other",
    "username": "lamq616@GMAIL.COM",
    "password": "Mll6h161@t24",
    "tags": [
      "mail"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_037_1h9g3h81",
    "code": "MK-037",
    "title": "MAIL",
    "category": "other",
    "username": "testmaychieu593@gmailcom",
    "password": "Mlt3h161@t23",
    "tags": [
      "mail"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_038_uxr4ttlg",
    "code": "MK-038",
    "title": "TIKTOK",
    "category": "other",
    "username": "testmaychieu593@gmail.com",
    "password": "ĐĂNG NHẬP MAIL",
    "tags": [
      "TIKTOK"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_039_10dhi758",
    "code": "MK-039",
    "title": "SHOPEE",
    "category": "other",
    "username": "355011144",
    "password": "Ha425464@t26",
    "tags": [
      "SHOPEE"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_040_1fxw9dfz",
    "code": "MK-040",
    "title": "FACEBOOK",
    "category": "other",
    "username": "end.htf",
    "password": "Fbefh16@t26",
    "tags": [
      "facebook"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_041_1f8uu4yt",
    "code": "MK-041",
    "title": "MAIL",
    "category": "other",
    "username": "luutruh161@gmail.com",
    "password": "Mll1h161@t23",
    "tags": [
      "quangha",
      "mail"
    ],
    "isFavorite": false,
    "securityScore": 85,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30 07:04"
  },
  {
    "id": "pw_mk_042_r3hmq10f",
    "code": "MK-042",
    "title": "GAME",
    "category": "other",
    "username": "Quangh161",
    "password": "ha425464",
    "tags": [
      "TỐC CHIẾN"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_043_1i1bz0z9",
    "code": "MK-043",
    "title": "MAIL",
    "category": "other",
    "username": "luutruh162@gmail.com",
    "password": "Mll2h161@t23",
    "tags": [
      "MAIL"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_044_v1sqxtbm",
    "code": "MK-044",
    "title": "NGÂN HÀNG",
    "category": "other",
    "username": "4217092001",
    "password": "tp01h61@t26",
    "tags": [
      "tp bank"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_045_4fvasfjc",
    "code": "MK-045",
    "title": "WEB",
    "category": "other",
    "username": "testmaychieu593",
    "password": "Cat3h161@t23",
    "url": "https://carrd.co/dashboard",
    "tags": [
      "tạo web"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_046_1sgdy0da",
    "code": "MK-046",
    "title": "WEB",
    "category": "other",
    "username": "Saleonline1.oimeli@gmail.com",
    "password": "123@1234Ab",
    "tags": [
      "bigseler"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_047_b5cm1xkn",
    "code": "MK-047",
    "title": "SHOPEE",
    "category": "other",
    "username": "398886355",
    "password": "123@1234Ab",
    "tags": [
      "shopee"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_048_276szi7k",
    "code": "MK-048",
    "title": "VNEID",
    "category": "other",
    "username": "24098004838",
    "password": "Ha425464@t25",
    "tags": [
      "VNEID"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_049_ypp66ae7",
    "code": "MK-049",
    "title": "TTP",
    "category": "other",
    "username": "936366729",
    "password": "TTPa@1203",
    "tags": [
      "đơn ngoài viettel"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_050_cr3eap5j",
    "code": "MK-050",
    "title": "MAIL",
    "category": "other",
    "username": "luutru3h161@gmail.com",
    "password": "Mll1h161@t24",
    "tags": [
      "mail"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_051_t9onq284",
    "code": "MK-051",
    "title": "SHOPEE",
    "category": "other",
    "username": "898183745",
    "password": "Abc1234@wml",
    "tags": [
      "shopee"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_052_26eekwoh",
    "code": "MK-052",
    "title": "netflix",
    "category": "other",
    "username": "thuylinh25042002@gmail.com",
    "password": "thuylinh25042002",
    "tags": [
      "netflix"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_053_2cqwwoo0",
    "code": "MK-053",
    "title": "Tài khoản không tên",
    "category": "other",
    "username": "",
    "password": "",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_054_2a48p5e0",
    "code": "MK-054",
    "title": "ĐƠN VỊ VẬN CHUYỂN",
    "category": "other",
    "username": "testmaychieu593@gmail.com",
    "password": "Ha425464",
    "url": "https://khachhang.ghn.vn/",
    "tags": [
      "GHN"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_055_we1b09jr",
    "code": "MK-055",
    "title": "netflix",
    "category": "other",
    "username": "letdieulinh@gmail.com",
    "password": "1010ChuChoYeu1#16",
    "tags": [
      "netflix"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_056_26kzqqar",
    "code": "MK-056",
    "title": "TTP",
    "category": "other",
    "username": "933808818",
    "password": "Hmp@123456789",
    "tags": [
      "viettel"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.055Z"
  },
  {
    "id": "pw_mk_057_1krc2mgz",
    "code": "MK-057",
    "title": "netflix",
    "category": "other",
    "username": "hometanphong1@gmail.com",
    "password": "ab12312ab",
    "tags": [
      "netflix"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.055Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_058_26uxj2ak",
    "code": "MK-058",
    "title": "netflix",
    "category": "web",
    "username": "caokhanh990412@gmail.com",
    "password": "12345Ab",
    "tags": [
      "netflix"
    ],
    "isFavorite": false,
    "securityScore": 30,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30 04:26"
  },
  {
    "id": "pw_mk_059_1hs7ql98",
    "code": "MK-059",
    "title": "netflix",
    "category": "web",
    "username": "ninhphamkhang",
    "password": "N!nh0902",
    "tags": [
      "netflix"
    ],
    "isFavorite": false,
    "securityScore": 65,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30 04:27"
  },
  {
    "id": "pw_mk_060_2a0w04e4",
    "code": "MK-060",
    "title": "netflix",
    "category": "web",
    "username": "luuthu776@gmail.com",
    "password": "Thu1997@",
    "tags": [
      "netflix"
    ],
    "isFavorite": false,
    "securityScore": 65,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30 04:27"
  },
  {
    "id": "pw_mk_061_1480r6g5",
    "code": "MK-061",
    "title": "netflix",
    "category": "other",
    "username": "daucungvacochang@gmail.com",
    "password": "Joyful@12",
    "tags": [
      "NETFLIX"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_062_1tx4izzk",
    "code": "MK-062",
    "title": "MAIL",
    "category": "email",
    "username": "lamquangha16123@gmail.com",
    "password": "ll3h161t23",
    "tags": [
      "mail"
    ],
    "isFavorite": false,
    "securityScore": 40,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30 04:28"
  },
  {
    "id": "pw_mk_063_v49tgbc1",
    "code": "MK-063",
    "title": "MAIL",
    "category": "web",
    "username": "ftha04049@mail.com",
    "password": "Mlf9h161@t24",
    "tags": [
      "mail"
    ],
    "isFavorite": false,
    "securityScore": 85,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30 04:28"
  },
  {
    "id": "pw_mk_064_292ws42n",
    "code": "MK-064",
    "title": "FACEBOOK",
    "category": "other",
    "username": "lamq.16",
    "password": "Fbl6h16@t26",
    "tags": [
      "facebook"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_065_1p7kz6ly",
    "code": "MK-065",
    "title": "WEB",
    "category": "other",
    "username": "lamq616@gmail.com",
    "password": "Ha425464@",
    "tags": [
      "deskln"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_066_1fa9i6f0",
    "code": "MK-066",
    "title": "VNEID",
    "category": "other",
    "username": "355011144",
    "password": "Ha425464@t24",
    "tags": [
      "vn id"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_067_2e0t4ug7",
    "code": "MK-067",
    "title": "wamely",
    "category": "other",
    "username": "lamquangha",
    "password": "123456",
    "url": "https://phanmem.wameli.vn/admin/users/profile",
    "tags": [
      "phần mên in đơn"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_068_wi6rca4n",
    "code": "MK-068",
    "title": "netflix",
    "category": "other",
    "username": "thaison11112002@gmail.com",
    "password": "suong881100",
    "tags": [
      "netflix"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_069_2b5x4nyd",
    "code": "MK-069",
    "title": "MAIL",
    "category": "other",
    "username": "ha.kt1@tottamphuc.com",
    "password": "123456789@$",
    "tags": [
      "mail"
    ],
    "isFavorite": false,
    "securityScore": 45,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30 06:19"
  },
  {
    "id": "pw_mk_070_24tk71p2",
    "code": "MK-070",
    "title": "NGÂN HÀNG",
    "category": "other",
    "username": "QUANGH16",
    "password": "Ha4256@t26",
    "tags": [
      "MB BANK"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_071_1xucmk9k",
    "code": "MK-071",
    "title": "MAIL",
    "category": "other",
    "username": "lamthuyhong2008@gmail.com",
    "password": "Hong425464@h25@",
    "tags": [
      "hồng"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_072_1girt6yb",
    "code": "MK-072",
    "title": "WEB",
    "category": "email",
    "username": "lamq616@GMAIL.COM",
    "password": "Ha425464@t25",
    "url": "https://huggingface.co/welcome",
    "tags": [
      "huggingface"
    ],
    "isFavorite": false,
    "securityScore": 85,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:25:45.341Z",
    "updatedAt": "2026-09-30 04:26"
  },
  {
    "id": "pw_mk_073_dl9wxe6v",
    "code": "MK-073",
    "title": "netflix",
    "category": "other",
    "username": "chuydrive17@gmail.com",
    "password": "465345",
    "tags": [
      "NETFLIX"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_074_1bsjool0",
    "code": "MK-074",
    "title": "odoo",
    "category": "other",
    "username": "hhhcty6@gmail.com",
    "password": "Ha425464@t25",
    "url": "https://www.odoo.com/web/signup?login=hhhcty6%40gmail.com",
    "tags": [
      "hhhcty640gmail.com"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_075_18g8vdzp",
    "code": "MK-075",
    "title": "VIDEO AI",
    "category": "other",
    "username": "lamq616@gmail.com",
    "password": "ha425464",
    "url": "https://www.videotudong.com/auth/register",
    "tags": [
      "VIDEO AI"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_076_xudescus",
    "code": "MK-076",
    "title": "ĐƠN VỊ VẬN CHUYỂN",
    "category": "other",
    "username": "355011144",
    "password": "Vt04h16@t25",
    "tags": [
      "VIETTEL"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_077_8v2tegxn",
    "code": "MK-077",
    "title": "netflix",
    "category": "other",
    "username": "hoangminh.gon@gmail.com",
    "password": "Netflix@1111",
    "tags": [
      "netflix"
    ],
    "isFavorite": false,
    "securityScore": 85,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30 06:20"
  },
  {
    "id": "pw_mk_078_mfm8k3vh",
    "code": "MK-078",
    "title": "TẠO APP",
    "category": "other",
    "username": "LAMQ616@GMAIL.COM",
    "password": "Ha425464@t25",
    "url": "https://www.adalo.com/?via=refer&msclkid=0574e6f8aff110a19786813050dcf5cd",
    "tags": [
      "APP"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_079_xipm0wha",
    "code": "MK-079",
    "title": "TẠO APP",
    "category": "other",
    "username": "admin@nocobase.com",
    "password": "admin123",
    "url": "https://a_73gz6d905m1.v7.demo.nocobase.com/admin/xoyi1jxi3ce/tabs/pylzfmlweju",
    "tags": [
      "APP"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_080_lt9nf81t",
    "code": "MK-080",
    "title": "KIOTVIET",
    "category": "other",
    "username": "",
    "password": "",
    "url": "https://h162.kiotviet.vn/man/#/login",
    "tags": [
      "TEST"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_081_eafcky1i",
    "code": "MK-081",
    "title": "netflix",
    "category": "other",
    "username": "Ngocthien0205@gmail.com",
    "password": "Tinhthang@08",
    "tags": [
      "netflix"
    ],
    "isFavorite": false,
    "securityScore": 85,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30 06:20"
  },
  {
    "id": "pw_mk_082_2afsf8ck",
    "code": "MK-082",
    "title": "TẠO APP",
    "category": "other",
    "username": "LAMQ616@GMAIL.COM",
    "password": "Ha425464@t2",
    "url": "https://app.adalo.com/apps/1131bdc5-0465-461e-9b2f-fccaa19c5fbc/screens",
    "tags": [
      "adola"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_083_16siq6nd",
    "code": "MK-083",
    "title": "TTP",
    "category": "other",
    "username": "ha.kt1@tottamphuc.com",
    "password": "123456789@$",
    "tags": [
      "mail ttp"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_084_7ofrbiyf",
    "code": "MK-084",
    "title": "netflix",
    "category": "other",
    "username": "toshikomuranyfx@hotmail.com",
    "password": "346363466",
    "tags": [
      "netflix"
    ],
    "isFavorite": false,
    "securityScore": 30,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30 06:20"
  },
  {
    "id": "pw_mk_086_vlnvqoym",
    "code": "MK-086",
    "title": "netflix",
    "category": "other",
    "username": "minhhieu2909@gmail.com",
    "password": "Hieu2909",
    "tags": [
      "netflix"
    ],
    "isFavorite": false,
    "securityScore": 50,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30 06:20"
  },
  {
    "id": "pw_mk_087_2cjojx3j",
    "code": "MK-087",
    "title": "CHAT GPT",
    "category": "other",
    "username": "bxymoxsq@mail.theloi.io.vn",
    "password": "HA425464@T25",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_088_eoicmktn",
    "code": "MK-088",
    "title": "CHAT GPT",
    "category": "other",
    "username": "xwowpol916458@mail.theloi.io.vn",
    "password": "HA425464@T25",
    "url": "https://auth.openai.com/create-account/password",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_089_1378ctra",
    "code": "MK-089",
    "title": "MAIL",
    "category": "other",
    "username": "wamelipro1@gmail.com",
    "password": "123@1234Ab",
    "tags": [
      "wameli",
      "mail"
    ],
    "isFavorite": false,
    "securityScore": 65,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30 07:07"
  },
  {
    "id": "pw_mk_090_1xglfwn9",
    "code": "MK-090",
    "title": "MAIL",
    "category": "other",
    "username": "luuanhh1612025v1@gmail.com",
    "password": "Mll1h161@t25",
    "tags": [
      "mail"
    ],
    "isFavorite": false,
    "securityScore": 85,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30 06:23"
  },
  {
    "id": "pw_mk_091_1p60ie3s",
    "code": "MK-091",
    "title": "ZALO",
    "category": "other",
    "username": "355011144",
    "password": "Zl04h161@t26",
    "tags": [
      "zalo"
    ],
    "isFavorite": false,
    "securityScore": 85,
    "lastChangedDate": "30/09/2026",
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30 06:48"
  },
  {
    "id": "pw_mk_092_1287tekn",
    "code": "MK-092",
    "title": "grok",
    "category": "other",
    "username": "tawoceh378@fermiro.com",
    "password": "Ha425464@txx25",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_093_284j1yh2",
    "code": "MK-093",
    "title": "grok",
    "category": "other",
    "username": "mzj04306@laoia.com",
    "password": "Ha425464@t25",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_094_8r6e3ll4",
    "code": "MK-094",
    "title": "grok",
    "category": "other",
    "username": "wowen17321@canvect.com",
    "password": "Ha425464@txx25",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_095_e7m6mp4v",
    "code": "MK-095",
    "title": "discord",
    "category": "other",
    "username": "LAMQ616@GMAIL.COM",
    "password": "Dcl6h16@t5",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_096_i4rkxjd5",
    "code": "MK-096",
    "title": "genspark",
    "category": "other",
    "username": "tku90925@laoia.com",
    "password": "Ha425464@txx25",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_097_140qw79q",
    "code": "MK-097",
    "title": "MAIL",
    "category": "other",
    "username": "hhhcty111@gmail.com",
    "password": "Mlhh16@t26",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_098_y35dlhs9",
    "code": "MK-098",
    "title": "TK MICROSOFT",
    "category": "other",
    "username": "Lamquangha161@outlook.com",
    "password": "Mil1h16@t26",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_099_gytlh42a",
    "code": "MK-099",
    "title": "MY VETTEL",
    "category": "other",
    "username": "359540222",
    "password": "Ha425464",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_100_2daqxuen",
    "code": "MK-100",
    "title": "MAIL",
    "category": "other",
    "username": "luuanhh1612025v1@gmail.com",
    "password": "Mll1h161@t26",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_101_pz4i5697",
    "code": "MK-101",
    "title": "grok",
    "category": "other",
    "username": "kindyall5@virgilian.com",
    "password": "theanh2025",
    "tags": [
      "lấy trên nhóm"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_102_7lk3p1av",
    "code": "MK-102",
    "title": "grok",
    "category": "other",
    "username": "kindyall4@virgilian.com",
    "password": "theanh2025",
    "tags": [
      "lấy trên nhóm"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_103_chg1n9z1",
    "code": "MK-103",
    "title": "grok",
    "category": "other",
    "username": "cartertina2478@hotmail.com",
    "password": "theanh2025",
    "tags": [
      "lấy trên nhóm"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_104_eyyqclul",
    "code": "MK-104",
    "title": "grok",
    "category": "other",
    "username": "wikjuaml8529@hotmail.com",
    "password": "theanh2025",
    "tags": [
      "lấy trên nhóm"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_105_2bc925ck",
    "code": "MK-105",
    "title": "grok",
    "category": "other",
    "username": "kidyall6@virgilian.com",
    "password": "theanh2025",
    "tags": [
      "lấy trên nhóm"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_106_1927x4q6",
    "code": "MK-106",
    "title": "grok",
    "category": "other",
    "username": "kidyall7@virgilian.com",
    "password": "theanh2025",
    "tags": [
      "lấy trên nhóm"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_107_126yu4sk",
    "code": "MK-107",
    "title": "grok",
    "category": "other",
    "username": "deenac@gddp2018.edu.vn",
    "password": "ha425464@t26",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_108_vgdk3yqu",
    "code": "MK-108",
    "title": "Fiver",
    "category": "other",
    "username": "",
    "password": "",
    "tags": [
      "lamq616@gmail.com"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_109_hqj2xazm",
    "code": "MK-109",
    "title": "mega.nz",
    "category": "other",
    "username": "hhhcty6@gmail.com",
    "password": "Ha425464@t26",
    "url": "https://mega.nz/key",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_110_n96tqmux",
    "code": "MK-110",
    "title": "WEB",
    "category": "other",
    "username": "hhhcty6@gmail.com/0355011144",
    "password": "Ha425464@t26",
    "tags": [
      "BIGSELER"
    ],
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_111_224gqu31",
    "code": "MK-111",
    "title": "web a công",
    "category": "other",
    "username": "355011144",
    "password": "Ha425464@t26",
    "url": "https://www.5fedu.com/?fbclid=IwY2xjawRwvZ9leHRuA2FlbQIxMABicmlkETF3OHFBOFRiN1pEM1doR3RQc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHoptlV-YW_U7uv2cbRvfkfjvharWxmyfqpYS4ivNqzttN-v8fQNCj8baw16f_aem_YWdncwDs6IkXDNzDFOBTyBRT5C4s&brid=YWdncwG90v0xIps3bUZc-Tx6Jiyk#/",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_112_zaqrc2td",
    "code": "MK-112",
    "title": "mega",
    "category": "other",
    "username": "lamq616@gmail.com",
    "password": "Ha425464@t26",
    "url": "https://mega.nz/confirmQ29uZmlybUNvZGVWMonKEPwyDQANnL-4X96CTmxhbXE2MTZAZ21haWwuY29tCXF1YW5nIMulGOzoPmfK",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  },
  {
    "id": "pw_mk_113_237gg19t",
    "code": "MK-113",
    "title": "MAIL",
    "category": "other",
    "username": "ftha1698@gmail.com",
    "password": "Mlf8h161@t26",
    "isFavorite": false,
    "securityScore": 70,
    "createdAt": "2026-09-30T04:26:18.056Z",
    "updatedAt": "2026-09-30T04:26:18.056Z"
  }
];
