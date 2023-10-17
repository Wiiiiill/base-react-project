import request, { buildPath } from "@/apis/request"
const path = buildPath("/storage")
export const testApi = () => request.get(`${path}/test/`)