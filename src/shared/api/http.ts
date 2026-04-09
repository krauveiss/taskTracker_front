type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

async function request<T>(
    url: string,
    method: HttpMethod,
    body?: unknown

): Promise<T> {

    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : undefined
    });

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
    }
    return response.json() as Promise<T>

}

export const Http = {
    get: <T>(url: string) => request<T>(url, 'GET'),
    post: <T>(url: string, body: unknown) => request<T>(url, 'POST'),
    patch: <T>(url: string, body?: unknown) => request<T>(url, 'PATCH'),
    delete: <T>(url: string) => request<T>(url, 'DELETE')
}