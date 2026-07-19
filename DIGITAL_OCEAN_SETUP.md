# Digital Ocean Functions Setup Guide

## Step 1: Create Digital Ocean Account
1. Go to https://www.digitalocean.com/
2. Sign up or log in to your account
3. Create a new **App Platform** app (or use Functions)

## Step 2: Deploy the Node.js Function

### Option A: Using Digital Ocean CLI
```bash
# Install doctl CLI
brew install doctl

# Authenticate
doctl auth init

# Create a function namespace
doctl serverless namespaces create --label carbon-api

# Deploy the function
doctl serverless deploy digital-ocean-function.js
```

### Option B: Using Digital Ocean Dashboard
1. Go to **Apps** → **Create App** → **GitHub**
2. Connect your repo (giomj.github.io)
3. Select **Node.js** runtime
4. Paste code from `digital-ocean-function.js`
5. Set environment variables:
   - `API_TOKEN`: Your secret token (optional)
6. Deploy

### Option C: Direct App Platform Deployment
1. Go to https://cloud.digitalocean.com/apps
2. Create new app → GitHub
3. Select your repo
4. Add HTTP service with:
   - Source: `digital-ocean-function.js`
   - HTTP port: 8080
5. Deploy

## Step 3: Get Your Function URL
After deployment, you'll get a URL like:
```
https://carbon-api-xxxxx.ondigitalocean.app
```

## Step 4: Use in Carbon Page
On your site at `https://giomj.github.io/#/carbon`:
1. Paste your function URL in **API Endpoint URL** field
2. (Optional) Set an API Key if you enabled `API_TOKEN`
3. Click **🔗 Test Connection**

## Available Endpoints

### `/api/carbon/europe-exposure`
Returns raw CSV data
- Example: `GET https://your-do-function/api/carbon/europe-exposure`

### `/api/carbon/europe-exposure-json`
Returns parsed JSON data
- Example: `GET https://your-do-function/api/carbon/europe-exposure-json`
- Response:
```json
[
  {
    "COUNTRY": "Austria",
    "BUILDINGS": "12345",
    "TOTAL_REPL_EC_TON": "5432100.5"
  }
]
```

### `/api/carbon/stats`
Returns aggregate statistics
- Example: `GET https://your-do-function/api/carbon/stats`
- Response:
```json
{
  "countries": 45,
  "totalBuildings": 500000000,
  "totalReplacementEC": 50000000000,
  "timestamp": "2024-07-19T18:00:00.000Z"
}
```

### `/api/health`
Health check endpoint
- Example: `GET https://your-do-function/api/health`

## Authentication (Optional)

To enable Bearer token authentication:

1. Set environment variable in Digital Ocean App:
   ```
   API_TOKEN=your-secret-token-here
   ```

2. Requests must include:
   ```
   Authorization: Bearer your-secret-token-here
   ```

3. In Carbon page, paste your token in the **API Key** field

## Pricing

- **Digital Ocean App Platform**: $5-12/month per app
- **Serverless Functions**: Pay-as-you-go (first 90GB/month free)

## Troubleshooting

### 401 Unauthorized
- Check if `API_TOKEN` matches in environment and requests

### 500 Error
- Check function logs in Digital Ocean dashboard
- Verify GitHub repository is accessible

### CORS Issues
- Function already has CORS headers enabled
- Should work with any origin

## Next Steps

1. Deploy the function
2. Copy the URL from Digital Ocean dashboard
3. Paste it in your Carbon page
4. Test the connection

## Support

- Digital Ocean Docs: https://docs.digitalocean.com/products/app-platform/
- Functions Docs: https://docs.digitalocean.com/products/functions/
