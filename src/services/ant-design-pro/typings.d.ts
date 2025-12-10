// @ts-ignore
/* eslint-disable */

// import {OfflineDataType, RadarData} from "@/pages/DashboardAnalysis/data";

declare namespace API {
  type CurrentUser = {
    age?: number;
    gender?: number;
    name?: string;
    avatar?: string;
    userId?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: number;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    success?: boolean;
    data?: {token: string, isVerified: string}
    code?: number;
    msg?: null;
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    success?: boolean;
    data?: string;
    msg?: null;
    code?: number;
    status?: string;
  };

  type LoginParams = {
    phone?: string;
    captcha?: string;
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type PhoneParams = {
    userId?: string
    phone?: string
  }

  type updateUserParams = {
    age?: number;
    gender?: number;
    userId?: string;
    name?: string
  }

  type analyseGo = {
    userId?: string;
    recordId?: string
  }

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };

  type HairTextureScoreMap = {
    score: number;
    advice: string;
    grade: string;
    intro: string;
  };

  type KeratinocytesScoreMap = {
    score: number;
    advice: string;
    grade: string;
    intro: string;
  };

  type HairDensityScoreMap = {
    score: number;
    advice: string;
    grade: string;
    intro: string;
  };

  type WhiteRatioScoreMap = {
    score: number;
    advice: string;
    grade: string;
    intro: string;
  };

  type HairMaxRadScoreMap = {
    score: number;
    advice: string;
    grade: string;
    intro: string;
  };

  type FollicleScoreMap = {
    score: number;
    advice: string;
    grade: string;
    intro: string;
  };

  type Scalp_oil_area_score_map = {
    score: number;
    advice: string;
    grade: string;
    intro: string;
  }

  type Redness_area_score_map = {
    score: number;
    advice: string;
    grade: string;
    intro: string;
  }

  type Scurf_area_score_map = {
    score: number;
    advice: string;
    grade: string;
    intro: string;
  }

  type Urls = {
    hair: string[];
    follicle: string[];
    opcs_redness: string[];
    scalp_wrinkles: string[];
    scalp_oil: string[];
    scurf: string[];
    white_hair: string[];
    follicle_keratinocytes: string[];
    scalp_eczema: string[];
  };

  type AnalyseGo = {
    success?: boolean;
    data?: {
      hair_texture_score_map: HairTextureScoreMap;
      scalp_oil_area_score_map: Scalp_oil_area_score_map;
      hair_max_rad_score_map: HairMaxRadScoreMap
      keratinocytes_score_map: KeratinocytesScoreMap;
      redness_area_score_map: Redness_area_score_map;
      scurf_area_score_map: Scurf_area_score_map;
      follicle_score_map: FollicleScoreMap;
      hair_density_score_map: HairDensityScoreMap;
      white_ratio_score_map: WhiteRatioScoreMap;
      gender: number;
      age: number;
      people_image: string;
      url: Urls;
      pos: PosType;
      [key: string]: any; // Add an index signature for the dynamic properties (e.g., "1"),
      recordId: number
    };
    code?: number;
    msg?: null;
  };

  type ResponseItem = {
    hair: number;
    level: string;
    scalp: number;
    follicle: number;
    name: string;
    avatar: string;
    scalpScore: number;
    age: number;
    recordId: number
  }

  type DetectionRecordList = {
    success: boolean;
    data: { list: Record<string, ResponseItem> };
    code: number;
    msg: string | null;
  }

  type GetTotal = {
    success: boolean;
    data: {
      [key: string]: AnalyseGo;
    }
    code: number;
    msg: string | null;
  }

  type GetCustomer = {
    success: boolean;
    data: {
      list: [{name: string, avatar: string, time: null}]
    }
    code: number;
    msg: string | null;
  }



  type ResponseType<T = string> = {
    success: boolean;
    data: T;
    code: number;
    msg: string | null;
  }

  type FriendRequest = {
    id: number;
    senderId: string;
    receiverId: string;
    status: 'PENDING' | 'ACCEPTED' | 'DECLINED';
    createdAt: string; // or Date if you parse it
  }

  type FriendInfo = {
    friendId: string;
    level: string;
    avatar: string;
    name: string;
  }

  type UrlsObject = {
    urls: string[];
    redness_area: number;
    follicle_count: number;
    scalp_oil_area: number;
    white_hair_ratio: number;
    scurf_area: number;
    hair_count: number;
    keratinocytes_area: number;
    level1: string[];
    follicle_mean_rad: number;
    hair_mean_rad: number;
  }

  type PosType = {
    [key: string]: UrlsObject;
  }

  type ProductDO = {
    id: number; // Assuming the Long in Java is represented as number in TypeScript
    title: string;
    image: string;
    price: number; // Assuming BigDecimal can be represented as a number
    recommend_index: number;
    introduction: string;
    descriptions: string;
    type: string;
    status: number;
    merchantId: string;
  }

  type ListProductResponse = {
    // Depending on the actual shape of your API response, you may need to adjust this
    productDO: ProductDO[]; // Assuming the API returns an array of products
  }

  type SelfieParams = {
    gender?: number;
    imageUrl?: string;
    customer?: string;
    sign?: string;
  };


}


