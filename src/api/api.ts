import axios, { Axios, AxiosInstance } from "axios";
import 'dotenv/config';
import { WorkspaceDto } from "./dtos/workspace.dto";

const client: Axios = axios.create({
  baseURL: "https://api.clockify.me/api/v1",
  headers: {
    "x-api-key": process.env.CLOCKIFY_API_KEY,
  },
});

export async function getWorkspaces() {
  try {
    console.log("headers123123", client.defaults.headers)
    return await client.get<WorkspaceDto[]>("/workspaces");
  } catch (error) {
    console.error(error);
  }
}
