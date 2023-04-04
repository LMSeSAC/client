import axios from 'axios'
import { RESTAPIBuilder } from './RestApiBuilder'

async function refreshToken(
  header: HeadersInit,
  params: RequestInit,
  url: string,
) {
  const res_ref = await fetch('/api/refresh_token')
  const data_ref = await res_ref.json()
  if (res_ref.ok) {
    // console.log('refresh success', data_ref)
    params.headers = {
      Authorization: data_ref.accessToken,
      ...header,
    }
    const res = await fetch(url, params)
    const data = await res.json()
    if (res.ok) {
      // console.log('run original api success')
      return data
    } else {
      console.error('run original api failed')
    }
  } else {
    console.error('refresh token failed')
  }
  return null
}

export class RESTAPI {
  private url: string // request URL
  private builder: RESTAPIBuilder

  constructor(builder: RESTAPIBuilder) {
    // console.log('builder', builder)
    this.url = builder.url
    this.builder = builder
  }

  async run() {
    const params = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        ...this.builder.header,
      },
      method: this.builder.method,
      data: JSON.stringify(this.builder.body),
    }
    
    if (this.builder.needToken) {
      params.headers = {
        ...params.headers,
        Authorization: sessionStorage.getItem('accessToken'),
      }
    }

    const res = await axios({
        url: this.url,
        ...params
    }).catch((err) => {
        console.log( err );
        throw new Error(err.response.data.message);
    })
    return res.data.data;
  }
}