import axios from 'axios'
import {publicRunTimeConfig} from '../../next.config'

export const api = axios.create({
    baseURL: publicRunTimeConfig.backendUrl
})