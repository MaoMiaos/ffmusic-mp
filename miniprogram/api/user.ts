import {post} from "./request"

type LoginRequest = {
  username:string,
  password:string
}

export const login=(LoginRequest: LoginRequest)=>{
  return post('/tokens',LoginRequest)
}
