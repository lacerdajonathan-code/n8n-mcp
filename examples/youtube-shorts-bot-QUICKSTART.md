# YouTube Shorts Bot - Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Prerequisites

- n8n instance (v1.0.0+)
- PostgreSQL database
- Telegram Bot Token
- Google Gemini API key
- YouTube OAuth2 credentials

---

## Step 1: Import Workflow

```bash
# In n8n UI
1. Go to Workflows → Import from File
2. Select: youtube-shorts-bot-workflow.json
3. Click Import
```

---

## Step 2: Create Database

```sql
-- Connect to your PostgreSQL database
CREATE DATABASE youtube_bot;

\c youtube_bot;

-- Create main table
CREATE TABLE youtube (
  id VARCHAR(255) PRIMARY KEY,
  chat_id BIGINT NOT NULL,
  username VARCHAR(255),
  theme TEXT NOT NULL,
  script TEXT,
  status VARCHAR(50) NOT NULL,
  video_url TEXT,
  youtube_id VARCHAR(255),
  video_template VARCHAR(100),
  feedback_count INTEGER DEFAULT 0,
  word_count INTEGER,
  estimated_duration INTEGER,
  language_code VARCHAR(5) DEFAULT 'pt',
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  approved_at TIMESTAMP,
  published_at TIMESTAMP
);

-- Create indices for performance
CREATE INDEX idx_youtube_chat_id ON youtube(chat_id);
CREATE INDEX idx_youtube_status ON youtube(status);
CREATE INDEX idx_youtube_created_at ON youtube(created_at DESC);
CREATE INDEX idx_youtube_chat_status ON youtube(chat_id, status);

-- Verify
\dt
```

---

## Step 3: Configure Credentials

### 3.1 Telegram Bot

```bash
# Create bot with @BotFather on Telegram
# Get your bot token

# In n8n:
1. Go to Credentials → Add Credential
2. Select "Telegram API"
3. Name: "Telegram account"
4. Access Token: [YOUR_BOT_TOKEN]
5. Save
```

### 3.2 PostgreSQL

```bash
# In n8n:
1. Go to Credentials → Add Credential
2. Select "Postgres"
3. Name: "Postgres account 3"
4. Host: [YOUR_DB_HOST]
5. Database: youtube_bot
6. User: [YOUR_DB_USER]
7. Password: [YOUR_DB_PASSWORD]
8. Port: 5432
9. Save
```

### 3.3 Google Gemini API

```bash
# Get API key from https://makersuite.google.com/app/apikey

# In n8n:
1. Go to Credentials → Add Credential
2. Select "Google PaLM API" or "Google AI"
3. Name: "Google Gemini(PaLM) Api account"
4. API Key: [YOUR_GEMINI_KEY]
5. Save
```

### 3.4 YouTube OAuth2

```bash
# Create OAuth2 credentials at https://console.cloud.google.com

# In n8n:
1. Go to Credentials → Add Credential
2. Select "YouTube OAuth2 API"
3. Name: "YouTube account"
4. Follow OAuth flow
5. Save
```

---

## Step 4: Update Workflow

### 4.1 Enable Telegram Trigger

```javascript
// Find node: "Telegram Trigger1"
// Remove or change:
"disabled": true
// To:
"disabled": false

// OR delete the "disabled" property entirely
```

### 4.2 Update Credential References

After adding credentials, n8n will auto-update most references.
Verify these nodes have correct credentials:

- ✅ Telegram Trigger1
- ✅ All Telegram send nodes (Send Menu1, Send for Review1, etc.)
- ✅ All Postgres nodes (Check User State1, Save Script1, etc.)
- ✅ Generate Script1
- ✅ Regenerate With Feedback1
- ✅ Upload YouTube1

---

## Step 5: Test the Workflow

### 5.1 Activate Workflow

```bash
# In n8n UI:
1. Open the workflow
2. Click "Active" toggle (top right)
3. Verify status shows "Active"
```

### 5.2 Test on Telegram

```bash
# Open Telegram and message your bot:

1. /iniciar
   # Should show welcome menu

2. Como fazer café perfeito
   # Should generate a script

3. aprovar
   # Should start video generation (will fail with mock URLs)
```

---

## ⚠️ Known Issues to Fix

### Issue 1: Mock Video URLs

**Problem**: Videos use sample URLs that may not work

**Quick Fix**:
```javascript
// In "Generate Video1" node, replace with a real video URL:
const videoTemplates = {
  'default': 'https://your-cdn.com/template.mp4'
};
```

**Better Fix**: Integrate real video generation service

---

### Issue 2: No Rate Limiting

**Problem**: Users can spam the bot

**Quick Fix**: Add this check in "Validate Input" node:

```javascript
// Add after message validation
const chatId = message.chat.id;
const now = Date.now();
const key = `ratelimit_${chatId}`;

// Check last request time (use Redis or database)
// For now, we'll skip implementation
// TODO: Implement proper rate limiting
```

---

## 🔧 Common Configuration Changes

### Change Language to English

Update all text in Telegram nodes from Portuguese to English:

```javascript
// Example: "Send Menu1" node
"text": "🎬 *YouTube Shorts Bot - Welcome!*\n\n✅ **To create a video, send your theme!**\n\n..."
```

### Adjust Script Length

```javascript
// In "Generate Script1" node, modify prompt:
"5. **Limit:** Maximum 200 words"  // Change to 150 or 250
```

### Change Video Duration

```javascript
// In "Generate Script1" node, modify prompt:
"1. **Duration:** Exactly 60 seconds when narrated"  // Change to 30 or 90
```

---

## 📊 Monitoring Dashboard

### Key Metrics to Watch

```sql
-- Total videos created
SELECT COUNT(*) FROM youtube;

-- Videos by status
SELECT status, COUNT(*) 
FROM youtube 
GROUP BY status;

-- Success rate
SELECT 
  COUNT(CASE WHEN status = 'published' THEN 1 END) * 100.0 / COUNT(*) as success_rate
FROM youtube;

-- Average time to publish
SELECT AVG(EXTRACT(EPOCH FROM (published_at - created_at))/60) as avg_minutes
FROM youtube 
WHERE published_at IS NOT NULL;

-- Top themes
SELECT theme, COUNT(*) as count
FROM youtube
WHERE status = 'published'
GROUP BY theme
ORDER BY count DESC
LIMIT 10;

-- Active users
SELECT COUNT(DISTINCT chat_id) FROM youtube;

-- Recent errors
SELECT id, chat_id, theme, status, updated_at
FROM youtube
WHERE status = 'failed'
ORDER BY updated_at DESC
LIMIT 10;
```

---

## 🐛 Troubleshooting

### Problem: Bot doesn't respond

**Check**:
1. Workflow is active (toggle in n8n)
2. Telegram trigger is enabled
3. Webhook is configured correctly
4. n8n has public URL for webhooks

**Test**:
```bash
# Check n8n webhook URL
curl https://your-n8n.com/webhook-test/youtube-bot-webhook-main
```

---

### Problem: Script generation fails

**Check**:
1. Gemini API key is valid
2. API quota not exceeded
3. Check n8n execution logs

**Test**:
```bash
# Test API key manually
curl https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent \
  -H 'Content-Type: application/json' \
  -H 'x-goog-api-key: YOUR_API_KEY' \
  -d '{"contents":[{"parts":[{"text":"Say hello"}]}]}'
```

---

### Problem: Database connection fails

**Check**:
1. Database credentials correct
2. Database server is running
3. Firewall allows connection
4. SSL/TLS if required

**Test**:
```bash
# Test connection from n8n server
psql -h YOUR_HOST -U YOUR_USER -d youtube_bot -c "SELECT 1;"
```

---

### Problem: YouTube upload fails

**Check**:
1. OAuth token is valid (may need refresh)
2. Video file format is supported
3. YouTube API quota not exceeded
4. Channel is eligible for uploads

**Test**:
Check YouTube API quota in Google Console

---

## 📝 Quick Fixes Checklist

Before going live, make these changes:

- [ ] Enable Telegram trigger
- [ ] Update all credentials
- [ ] Replace mock video URLs
- [ ] Add rate limiting
- [ ] Set up monitoring
- [ ] Configure error alerts
- [ ] Test all flows
- [ ] Add database backups
- [ ] Document recovery procedures
- [ ] Train support team

---

## 🎯 Production Readiness

### Minimum Requirements

✅ Database with indices created
✅ All credentials configured
✅ Telegram trigger enabled
✅ Workflow tested end-to-end
✅ Error notifications set up
✅ Backup strategy in place

### Recommended Before Launch

✅ Rate limiting implemented
✅ Monitoring dashboard created
✅ Real video generation integrated
✅ Load testing completed
✅ Security audit done
✅ Documentation complete

---

## 🆘 Getting Help

### Resources

- **n8n Documentation**: https://docs.n8n.io
- **Telegram Bot API**: https://core.telegram.org/bots/api
- **Gemini API**: https://ai.google.dev/docs
- **YouTube API**: https://developers.google.com/youtube/v3

### Common Questions

**Q: How many videos can I create per day?**
A: Limited by YouTube API quota (10,000 units/day) and Gemini API limits

**Q: Can I use this for commercial purposes?**
A: Yes, but review API terms of service for all platforms

**Q: How do I add more languages?**
A: Update all text nodes and modify the sanitization regex pattern

**Q: Can I customize video templates?**
A: Yes, modify the `videoTemplates` object in "Generate Video1" node

---

## 📞 Support

For issues or questions:
1. Check troubleshooting section above
2. Review full documentation (README.md)
3. Check n8n execution logs
4. Review API quotas and limits

---

## Next Steps

After getting the basic workflow running:

1. **Review**: Read the full ANALYSIS.md for detailed recommendations
2. **Secure**: Implement security best practices
3. **Optimize**: Add caching and improve performance
4. **Monitor**: Set up comprehensive monitoring
5. **Scale**: Plan for growth and high traffic

Good luck! 🚀