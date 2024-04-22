import http from "@/lib/http";

export function loqout(){
    return http.post('/api/v1/logout')
}