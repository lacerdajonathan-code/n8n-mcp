# YouTube Shorts Bot - n8n Workflow

## Overview

This is a comprehensive n8n workflow for an AI-powered Telegram bot that automatically creates and publishes YouTube Shorts videos. The bot generates scripts using Google Gemini AI, manages user feedback, and handles the entire video creation pipeline.

## Features

- **🎬 Automated Script Generation**: AI-powered script creation using Google Gemini
- **📝 Feedback System**: Iterative improvement based on user feedback
- **🎥 Video Generation**: Dynamic video template selection based on content theme
- **📺 YouTube Publishing**: Automatic upload to YouTube with proper metadata
- **🗄️ State Management**: PostgreSQL database for tracking user sessions and drafts
- **🧹 Draft Cleanup**: Smart cleanup system for managing incomplete projects
- **🔒 Input Sanitization**: Enhanced security with content validation and sanitization
- **⚡ Error Handling**: Comprehensive error handling throughout the workflow
- **🌐 Multi-language Support**: Portuguese Brazilian (pt-BR) interface

## Workflow Architecture

### Main Components

1. **Telegram Trigger** - Receives messages from users
2. **Input Validation** - Sanitizes and validates user input
3. **User State Management** - Tracks user sessions and determines next actions
4. **Script Generation** - Creates video scripts using AI
5. **Feedback Loop** - Handles script improvements
6. **Video Processing** - Generates and downloads video content
7. **YouTube Upload** - Publishes videos to YouTube
8. **Draft Management** - Cleans up incomplete projects

### Flow Diagram

```
Telegram Input → Validate → Check State → Route Action
                                         ↓
                    ┌────────────────────┴────────────────────┐
                    ↓                                         ↓
              Generate Script                          Process Feedback
                    ↓                                         ↓
              Save to Database                        Update Script
                    ↓                                         ↓
              Send for Review ←─────────────────────────────┘
                    ↓
         User Approves/Requests Changes
                    ↓
              Generate Video
                    ↓
              Upload to YouTube
                    ↓
              Send Success Message
```

## Database Schema

### YouTube Table

```sql
CREATE TABLE youtube (
  id VARCHAR PRIMARY KEY,
  chat_id BIGINT NOT NULL,
  username VARCHAR,
  theme TEXT NOT NULL,
  script TEXT,
  status VARCHAR NOT NULL,
  video_url TEXT,
  youtube_id VARCHAR,
  video_template VARCHAR,
  feedback_count INTEGER DEFAULT 0,
  word_count INTEGER,
  estimated_duration INTEGER,
  language_code VARCHAR(5) DEFAULT 'pt',
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  approved_at TIMESTAMP,
  published_at TIMESTAMP
);

-- Status values:
-- 'draft', 'pending_feedback', 'approved', 'generating', 
-- 'uploading', 'published', 'awaiting_cleanup', 'failed'
```

## Configuration Requirements

### Credentials Needed

1. **Telegram API** (`telegramApi`)
   - Bot token from @BotFather
   - Webhook configuration

2. **Google Gemini API** (`googlePalmApi`)
   - API key for script generation
   - Models: `gemini-2.0-flash-exp`, `gemini-1.5-flash`

3. **PostgreSQL Database** (`postgres`)
   - Connection details for state management

4. **YouTube OAuth2** (`youTubeOAuth2Api`)
   - OAuth credentials for video upload
   - Scopes: upload permissions

## User Commands

- `/iniciar` - Show welcome menu and instructions
- `[theme text]` - Create a new video script
- `aprovar` - Approve current script and publish
- `refazer` - Request changes to the script
- `confirmar` - Confirm draft cleanup
- `cancelar` - Cancel draft cleanup

## Workflow States

### User State Flow

```
New Theme → Check Drafts → [Has Drafts?]
                              ↓           ↓
                        Request Cleanup  Generate Script
                              ↓
                      [User Confirms?]
                       ↓            ↓
                  Cleanup & Generate  Cancel
```

### Script Lifecycle

1. **Draft** - Initial script created, awaiting review
2. **Pending Feedback** - User requested changes
3. **Approved** - User approved, ready for video generation
4. **Generating** - Video being created
5. **Uploading** - Video being uploaded to YouTube
6. **Published** - Successfully published
7. **Failed** - Error occurred

## Security Features

### Input Sanitization

The workflow includes comprehensive input sanitization:

```javascript
- Removes control characters
- Strips HTML/script tags
- Blocks javascript: protocol
- Validates character patterns
- Enforces length limits (1-1000 characters)
- Blocks inappropriate content
```

### Content Filtering

Inappropriate content detection for:
- Violence, drugs, hate speech
- Discrimination, harassment
- Self-harm, terrorism
- Adult content

## Video Templates

Dynamic template selection based on theme keywords:

| Keyword | Category |
|---------|----------|
| café | Coffee/Food |
| culinária | Cooking |
| tecnologia | Technology |
| saúde | Health |
| educação | Education |
| dicas | Tips/Advice |
| negócios | Business |
| fitness | Fitness |
| viagem | Travel |

## Error Handling

All nodes include:
- **Retry mechanisms** (2-3 attempts)
- **Timeout settings** (5s - 120s depending on operation)
- **Error output continuation** (workflow doesn't stop on errors)
- **Detailed logging** for debugging

## Performance Considerations

### Timeouts

- Telegram operations: 5 seconds
- Database queries: 10 seconds
- AI generation: 30 seconds
- Video download: 60 seconds
- YouTube upload: 120 seconds

### Rate Limiting

- User messages: 1 per 5 seconds (mentioned in welcome message)
- Database retries: 1 second between attempts
- API retries: 500ms-3s between attempts

## Known Issues & Limitations

1. **Telegram Trigger Disabled**: The main trigger is disabled by default - needs to be enabled
2. **Hardcoded Credentials IDs**: Credential references are hardcoded and need updating
3. **Video URLs**: Sample video URLs may not work - need real video generation service
4. **SQL Parameters**: Some SQL queries lack proper parameter binding
5. **Original Theme Preservation**: May lose original theme in some edge cases during cleanup flow

## Recommendations for Production

### High Priority

1. **Enable Telegram Trigger**: Currently disabled in the workflow
2. **Update Credentials**: Replace all credential IDs with your own
3. **Add Rate Limiting**: Implement proper rate limiting at the database level
4. **Add User Authentication**: Verify authorized users before processing
5. **Implement Real Video Generation**: Replace mock video URLs with actual video generation service
6. **Add Monitoring**: Set up alerts for failed workflows
7. **Database Indexes**: Add indexes on `chat_id`, `status`, `created_at`

### Security Enhancements

1. **Parameterized Queries**: Use proper parameter binding in all SQL queries
2. **Environment Variables**: Move sensitive config to environment variables
3. **Webhook Security**: Add webhook secret validation
4. **API Key Rotation**: Implement credential rotation
5. **Audit Logging**: Add comprehensive audit trail

### Performance Improvements

1. **Connection Pooling**: Optimize database connection management
2. **Caching**: Cache frequently accessed data (user state, templates)
3. **Async Processing**: Move video processing to background queue
4. **CDN Integration**: Use CDN for video delivery
5. **Database Optimization**: Add proper indexes and query optimization

### Code Quality

1. **Extract Common Logic**: Refactor repeated code into reusable functions
2. **Consistent Error Messages**: Standardize error message format
3. **Add Comments**: Document complex logic in code nodes
4. **Version Control**: Track workflow version in metadata
5. **Testing**: Add workflow tests for critical paths

## Installation Steps

1. Import workflow JSON into n8n
2. Configure all required credentials
3. Create PostgreSQL database and table
4. Update all credential IDs in workflow
5. Enable Telegram trigger
6. Set up Telegram webhook
7. Test with `/iniciar` command

## Monitoring & Debugging

### Log Locations

- Console logs in Code nodes
- n8n execution history
- PostgreSQL query logs
- Telegram API logs

### Key Metrics to Monitor

- Script generation success rate
- Video upload success rate
- Average processing time
- User session duration
- Error rates by node
- Database query performance

## Support & Maintenance

### Regular Tasks

- Monitor error rates
- Clean up old published records
- Rotate API credentials
- Update AI prompts based on quality
- Review and update video templates
- Check database performance

### Troubleshooting

**Issue**: Scripts not generating
- Check Gemini API key validity
- Verify API quota not exceeded
- Review input sanitization rules

**Issue**: Videos not uploading
- Check YouTube OAuth token
- Verify video file format
- Check upload quota

**Issue**: Database errors
- Verify connection settings
- Check table schema matches
- Review query parameters

## License & Attribution

This workflow is provided as-is for educational and commercial use. Ensure you have proper licenses for:
- n8n platform
- Google Gemini API
- YouTube Data API
- PostgreSQL database
- Telegram Bot API

## Version History

- **v1.0**: Initial workflow with full feature set
  - Script generation with Gemini
  - YouTube upload integration
  - Draft cleanup system
  - Enhanced security features