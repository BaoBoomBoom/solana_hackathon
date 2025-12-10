// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

//发送好友申请
export async function sendFriendRequest(body: API.PhoneParams, options?: { [key: string]: any }) {
  return request<API.ResponseType>('/api/friendRequest/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

// 获取所有待处理的好友申请
export async function getPendingRequests(receiverId: string, options?: { [key: string]: any }) {
  return request<API.ResponseType<API.FriendRequest[]>>('/api/friendRequest/pending', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      receiverId
    },
    ...(options || {}),
  });
}

// 响应好友申请
export async function respondToFriendRequest(senderId: string,requestId: string, status: string, options?: { [key: string]: any }) {
  return request<API.ResponseType<string>>('/api/friendRequest/respond', {
    method: 'POST',
    params: {
      senderId,
      requestId,
      status,
    },
    ...(options || {}),
  });
}

//创建好友关系
export async function createFriendship(userId: string, friendId: string, options?: { [key: string]: any }) {
  return request<API.ResponseType<string>>('/api/friendship/create', {
    method: 'POST',
    params: {
      userId,
      friendId,
    },
    ...(options || {}),
  });
}

// 获取所有好友
export async function getFriends(userId: string, options?: { [key: string]: any }) {
  return request<API.ResponseType<API.FriendInfo[]>>('/api/friendship/list', {
    method: 'GET',
    params: {
      userId,
    },
    ...(options || {}),
  });
}


/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
  // return request<API.CurrentUser>('/api/user/currentUser', {
  //   method: 'POST',
  //   ...(options || {}),
  //   headers: { ...options?.headers, ...headers }
  // });

  const response = await request('/api/user/currentUser', {
    method: 'POST',
    ...(options || {}),
    headers: { ...options?.headers, ...headers },
    // Use getResponse to get the raw response
    getResponse: true,
  });
  
  // Check if the response data might be duplicated JSON
  if (typeof response.data === 'string') {
    try {
      const firstBraceClose = response.data.indexOf('}');
      if (firstBraceClose > 0) {
        // Only parse the first JSON object
        return JSON.parse(response.data.substring(0, firstBraceClose + 1));
      }
    } catch (err) {
      // If parsing fails, continue with original response
    }
  }
  
  return response.data;
}

/** 获取当前的用户 GET /api/currentUser skipErrorHandler */
export async function currentUserSkipErrorHandler(options?: { [key: string]: any }) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
  const response = await request('/api/user/currentUser', {
    method: 'POST',
    ...(options || {}),
    headers: { ...options?.headers, ...headers },
    // Use getResponse to get the raw response
    getResponse: true,
  });
  
  // Check if the response data might be duplicated JSON
  if (typeof response.data === 'string') {
    try {
      const firstBraceClose = response.data.indexOf('}');
      if (firstBraceClose > 0) {
        // Only parse the first JSON object
        return JSON.parse(response.data.substring(0, firstBraceClose + 1));
      }
    } catch (err) {
      // If parsing fails, continue with original response
    }
  }
  
  return response.data;
  // return request<API.CurrentUser>('/api/user/currentUser', {
  //   method: 'POST',
  //   ...(options || {}),
  //   skipErrorHandler: true,
  //   headers: { ...options?.headers, ...headers }
  // });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/login/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}

export async function updateUser(body: API.updateUserParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/survey/saveSurvey', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function analyseGo(body: API.analyseGo, options?: { [key: string]: any }) {
  return request<API.AnalyseGo>('/api/analyse/go', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function getDetectionRecordList(body: API.analyseGo, options?: { [key: string]: any }) {
  return request<API.DetectionRecordList>('/api/user/getDetectionRecordList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function getTotal(body: API.analyseGo, options?: { [key: string]: any }) {
  return request<API.GetTotal>('/api/analyse/goHis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function addStore(body: API.analyseGo, options?: { [key: string]: any }) {
  return request<boolean>('/api/user/addStore', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function getCustomer(body: API.analyseGo, options?: { [key: string]: any }) {
  return request<API.GetCustomer>('/api/merchant/customerProfileList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function listProducts(body: API.analyseGo, options?: { [key: string]: any }) {
  console.log(body)
  return request<API.ListProductResponse>('/api/merchant/listProduct', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function getProduct(body: { userId: string }, options?: { [key: string]: any }) {
  return request<{ success: boolean, data: any, code: number, msg: string }>('/api/analyse/getProduct', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function getIngredient(body: { userId: string }, options?: { [key: string]: any }) {
  return request<{ success: boolean, data: any, code: number, msg: string }>('/api/analyse/getIngredient', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

//selfieApi
export async function selfieApi(body: API.SelfieParams, options?: { [key: string]: any }) {
  return request<API.ResponseType<string>>('/api/file/selfieNetApi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
