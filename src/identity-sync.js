const AZURE_AD_GRAPH_ROOT = 'https://graph.windows.net';
const AZURE_AD_GRAPH_API_VERSION = '1.6';

async function listLegacyAzureAdUsers(tenantId, accessToken, fetchImpl = fetch) {
  const url = `${AZURE_AD_GRAPH_ROOT}/${tenantId}/users?api-version=${AZURE_AD_GRAPH_API_VERSION}`;
  const response = await fetchImpl(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`Azure AD Graph user sync failed: ${response.status}`);
  }

  return response.json();
}

module.exports = {
  AZURE_AD_GRAPH_ROOT,
  AZURE_AD_GRAPH_API_VERSION,
  listLegacyAzureAdUsers
};
