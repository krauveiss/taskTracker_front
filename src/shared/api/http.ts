type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
const BASE_URL = "http://127.0.0.1:8000";

async function request<T>(
    url: string,
    method: HttpMethod,
    body?: unknown

): Promise<T> {

    const response = await fetch(BASE_URL + url, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : undefined
    });

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }
    const text = await response.text();

    return text ? JSON.parse(text) : undefined as T;

}

export const http = {
    get: <T>(url: string) => request<T>(url, 'GET'),
    post: <T>(url: string, body: unknown) => request<T>(url, 'POST', body),
    patch: <T>(url: string, body?: unknown) => request<T>(url, 'PATCH', body),
    delete: <T>(url: string) => request<T>(url, 'DELETE'),
    put: <T>(url: string, body?: unknown) => request<T>(url, 'PUT', body)
}