import axios from "axios";

const CACHE_TTL = 60000; // 1분 (밀리초)
const cache = new Map<string, { data: unknown; timestamp: number }>();

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_ADDRESS,
  withCredentials: false,
});

const HttpClient = {
  get: async (path: string, params = {}, headers = {}) => {
    const cacheKey = `${path}?${new URLSearchParams(params as any).toString()}`;

    if (cache.has(cacheKey)) {
      const cachedData = cache.get(cacheKey);
      if (cachedData && Date.now() - cachedData.timestamp < CACHE_TTL) {
        console.log("✅ 캐시된 응답 사용:", cacheKey);
        return cachedData.data;
      } else {
        cache.delete(cacheKey); // TTL이 초과된 경우 삭제
      }
    }

    const response = await axiosInstance.get(path, { params, headers });

    cache.set(cacheKey, { data: response.data, timestamp: Date.now() });
    console.log("🚀 새로운 요청 수행 & 캐시 저장:", cacheKey);

    return response.data;
  },

  post: async (path: string, body: unknown, headers = {}) => {
    const response = await axiosInstance.post(path, body, { headers });
    return response.data;
  },

  put: async (path: string, body: unknown, headers = {}) => {
    const response = await axiosInstance.put(path, body, { headers });
    return response.data;
  },

  patch: async (path: string, body: unknown, headers = {}) => {
    const response = await axiosInstance.patch(path, body, { headers });
    return response.data;
  },

  delete: async (path: string, headers = {}) => {
    const response = await axiosInstance.delete(path, { headers });
    return response.data;
  },

  clearCache: () => {
    cache.clear();
    console.log("🗑️ 모든 캐시 삭제");
  },

  removeCache: (path: string, params = {}) => {
    const cacheKey = `${path}?${new URLSearchParams(params as any).toString()}`;
    cache.delete(cacheKey);
    console.log(`🗑️ 캐시 삭제: ${cacheKey}`);
  },
};

export default HttpClient;
