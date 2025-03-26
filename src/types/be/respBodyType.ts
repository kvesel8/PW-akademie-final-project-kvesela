import { Serializable } from "node:child_process"

export type RespBody = {
    headers: { [key: string]: string },
    headersArray: Array<{ name: string, value: string }>,
    ok: boolean,
    status: number,
    statusText: string,
    url: string,
    json: Promise<Serializable>,
    text: string,
    bodyBuffer: Buffer,
    body: any
 }