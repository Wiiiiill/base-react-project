import request, { modulePath } from "@/apis/request"
const path = modulePath("/storage")
export const testApi = () => request.get(`${path}/test/`)