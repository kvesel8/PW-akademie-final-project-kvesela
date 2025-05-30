import { TestType, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, APIRequestContext, expect, APIResponse} from "@playwright/test";
import { Serializable } from "node:child_process";
import { ReadStream } from "node:fs";

let resStatus
export class BeUtils {
    protected _request: APIRequestContext;
    protected _test: TestType<PlaywrightTestArgs & PlaywrightTestOptions,PlaywrightWorkerArgs & PlaywrightWorkerOptions>;
  
    constructor(
      request: APIRequestContext,
      test: TestType<PlaywrightTestArgs & PlaywrightTestOptions, PlaywrightWorkerArgs & PlaywrightWorkerOptions>,
     
    ) {
      this._request = request;
      this._test = test;
    }

    protected async _httpGet(
        url:string,
        options?: {
            data?: string | Buffer | Serializable,
            form?: {
                [key: string]: string | number | boolean;
            } | FormData,
            headers?: {
                [key: string]: string;
            },
            multipart?: FormData | {
                [key: string]: string | number | boolean | ReadStream | {
                    name: string;
                    mimeType: string;
                    buffer: Buffer;
                };
            },
            params?: {
                [key: string]: string | number | boolean;
            } | URLSearchParams | string,
            timeout?: number;
        }
    ) {
        let res: Awaited<APIResponse>
        await this._test.step('HTTP GET', async () => {
            res = await this._request.get(url, {
                        data: options?.data,
                        form: options?.form,
                        headers: options?.headers,
                        multipart: options?.multipart,
                        params: options?.params,
                        timeout: options?.timeout
                })
            resStatus = res.status().toString()
            expect.soft(resStatus).toMatch(/^(?:[1-3]\d{2})$/)

        })
        return res
    }

    protected async _httpPost(
        url:string,
        options?: {
            data?: string | Buffer | Serializable,
            form?: {
                [key: string]: string | number | boolean;
            } | FormData,
            headers?: {
                [key: string]: string;
            },
            multipart?: FormData | {
                [key: string]: string | number | boolean | ReadStream | {
                    name: string;
                    mimeType: string; //typ datoveho souboru
                    buffer: Buffer;
                };
            },
            params?: {
                [key: string]: string | number | boolean;
            } | URLSearchParams | string,
            timeout?: number;
        }
    ) {
        let res: Awaited<APIResponse>
        await this._test.step('HTTP POST', async () => {
           res = await this._request.post(url, {
                data: options?.data,
                form: options?.form,
                headers: options?.headers,
                multipart: options?.multipart,
                params: options?.params,
                timeout: options?.timeout
            })
            resStatus = res.status().toString()
            expect.soft(resStatus).toMatch(/^(?:[1-3]\d{2})$/)
        })
        return res
    }

    protected async _httpPut(
        url:string,
        options?: {
            data?: string | Buffer | Serializable,
            form?: {
                [key: string]: string | number | boolean;
            } | FormData,
            headers?: {
                [key: string]: string;
            },
            multipart?: FormData | {
                [key: string]: string | number | boolean | ReadStream | {
                    name: string;
                    mimeType: string;
                    buffer: Buffer;
                };
            },
            params?: {
                [key: string]: string | number | boolean;
            } | URLSearchParams | string,
            timeout?: number;
        }
    ) {
        let res: Awaited<APIResponse>
        await this._test.step('HTTP PUT', async () => {
           res = await this._request.put(url, {
                data: options?.data,
                form: options?.form,
                headers: options?.headers,
                multipart: options?.multipart,
                params: options?.params,
                timeout: options?.timeout
            })
            resStatus = res.status().toString()
            expect.soft(resStatus).toMatch(/^(?:[1-3]\d{2})$/)
        })
        return res
    }

    protected async _httpPatch(
        url:string,
        options?: {
            data?: string | Buffer | Serializable,
            form?: {
                [key: string]: string | number | boolean;
            } | FormData,
            headers?: {
                [key: string]: string;
            },
            multipart?: FormData | {
                [key: string]: string | number | boolean | ReadStream | {
                    name: string;
                    mimeType: string;
                    buffer: Buffer;
                };
            },
            params?: {
                [key: string]: string | number | boolean;
            } | URLSearchParams | string,
            timeout?: number;
        }
    ) {
        let res: Awaited<APIResponse>
        await this._test.step('HTTP PATCH', async () => {
           res = await this._request.patch(url, {
                data: options?.data,
                form: options?.form,
                headers: options?.headers,
                multipart: options?.multipart,
                params: options?.params,
                timeout: options?.timeout
            })
            resStatus = res.status().toString()
            expect.soft(resStatus).toMatch(/^(?:[1-3]\d{2})$/)
        })
        return res
    }

    protected async _httpDelete(
        url:string,
        options?: {
            data?: string | Buffer | Serializable,
            form?: {
                [key: string]: string | number | boolean;
            } | FormData,
            headers?: {
                [key: string]: string;
            },
            multipart?: FormData | {
                [key: string]: string | number | boolean | ReadStream | {
                    name: string;
                    mimeType: string;
                    buffer: Buffer;
                };
            },
            params?: {
                [key: string]: string | number | boolean;
            } | URLSearchParams | string,
            timeout?: number;
        }
    ) {
        let res: Awaited<APIResponse>
        await this._test.step('HTTP DELETE', async () => {
            res = await this._request.delete(url, {
                data: options?.data,
                form: options?.form,
                headers: options?.headers,
                multipart: options?.multipart,
                params: options?.params,
                timeout: options?.timeout
            })
            resStatus = res.status().toString()
            expect.soft(resStatus).toMatch(/^(?:[1-3]\d{2})$/)
        })
        return res
    }
}