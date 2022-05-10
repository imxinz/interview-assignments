import DB_CONFIG from './config.db';
// 短链服务配置
export const SHORTURL_SERVER = {
  PREFIX: "https://xinz.cn/u",
  MIX_KEY: "imxinz",
  MIN_LENGTH: 3,
  MAX_LENGTH: 6,
};

// 短链字符集
export const SHORT_CHARTS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// ORM配置
export const orm = {
  type: "mysql",
  host: "localhost",
  port: 8889,
  username: DB_CONFIG.username || '',
  password: DB_CONFIG.password || '',
  database: DB_CONFIG.database || '',
  synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
  logging: false,
  dateStrings: true,
};

// 系统
export const SYSTEM = {
  CODE: {
    SUCCESS: [0, "成功"],
    ERROR: [-1, "错误"],
    INVAILD_PARAMS: [-2, "缺少参数"],
    INVAILD_REQ_METHOD: [-3, "请检查request.method"]
  },
};
