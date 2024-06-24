import { getWorkspaces } from "./api/api";

async function main() {
  const workspaces = await getWorkspaces();
  const workspaceId = workspaces?.data[0].id;
}

main();